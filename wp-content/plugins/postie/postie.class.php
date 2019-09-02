<?php
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fUnexpectedException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fExpectedException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fConnectivityException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fValidationException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fProgrammerException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fEnvironmentException.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fCore.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fMailbox.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/fEmail.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pConnection.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pCurlConnection.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pSocketConnection.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pMailServer.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pImapMailServer.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lib/pPop3MailServer.php");

require_once(ABSPATH . 'wp-admin/includes/file.php');
require_once(ABSPATH . 'wp-admin/includes/image.php');
require_once(ABSPATH . 'wp-admin/includes/media.php');
require_once(ABSPATH . 'wp-admin/includes/file.php'); //wp_tempnam()

require_once( ABSPATH . WPINC . '/class-oembed.php' );

if (!function_exists('file_get_html')) {
    require_once (plugin_dir_path(__FILE__) . 'lib/simple_html_dom.php');
}

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "postie-filters.php");
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "postie-tags.php");

class Postie {

    function get_mail() {
        $config = postie_config_read();
        if (true == $config['postie_log_error'] || (defined('POSTIE_DEBUG') && true == POSTIE_DEBUG)) {
            add_action('postie_log_error', array($this, 'log_error'));
        }
        if (true == $config['postie_log_debug'] && !defined('POSTIE_DEBUG')) {
            define('POSTIE_DEBUG', true);
        }
        if (true == $config['postie_log_debug'] || (defined('POSTIE_DEBUG') && true == POSTIE_DEBUG)) {
            add_action('postie_log_debug', array($this, 'log_debug'));
        }
        add_filter('intermediate_image_sizes_advanced', array($this, 'intermediate_image_sizes_advanced'));

        DebugEcho('Starting mail fetch');
        DebugEcho('WordPress datetime: ' . current_time('mysql'));

        DebugEcho("doing postie_session_start");
        do_action('postie_session_start');

        $wp_content_path = dirname(dirname(dirname(__FILE__)));
        DebugEcho("wp_content_path: $wp_content_path");
        if (file_exists($wp_content_path . DIRECTORY_SEPARATOR . 'filterPostie.php')) {
            DebugEcho("found filterPostie.php in $wp_content_path");
            include_once ($wp_content_path . DIRECTORY_SEPARATOR . 'filterPostie.php');
        }

        $this->postie_environment();
        $this->postie_environment_encoding();

        if (function_exists('memory_get_usage')) {
            DebugEcho(__("memory at start of email processing: ", 'postie') . memory_get_usage());
        }

        if (has_filter('postie_post')) {
            echo "Postie: filter 'postie_post' is depricated in favor of 'postie_post_before'";
        }

        if (!array_key_exists('maxemails', $config)) {
            $config['maxemails'] = 0;
        }

        $conninfo = $this->connection_info($config);

        $emails = $this->fetch_mail($conninfo['mail_server'], $conninfo['mail_port'], $conninfo['mail_user'], $conninfo['mail_password'], $conninfo['mail_protocol'], $conninfo['email_delete_after_processing'], $conninfo['email_max'], $config['input_connection']);

        $message = 'Done.';

        DebugEcho(sprintf(__("There are %d messages to process", 'postie'), count($emails)));

        //don't output the password
        $tmp_config = $config;
        unset($tmp_config['mail_password']);
        DebugDump($tmp_config);

        //loop through messages
        $message_number = 0;
        foreach ($emails as $email) {
            $message_number++;
            DebugEcho("$message_number: ------------------------------------");
            //DebugDump($email);
            //sanity check to see if there is any info in the message
            if ($email == NULL) {
                $message = __('Dang, message is empty!', 'postie');
                EchoError("$message_number: $message");
                continue;
            } else if ($email == 'already read') {
                $message = __("Message is already marked 'read'.", 'postie');
                DebugEcho("$message_number: $message");
                continue;
            }

            $tmp_config = $config;
            if ($config['prefer_text_convert']) {
                if ($config['prefer_text_type'] == 'plain' && trim($email['text']) == '' && trim($email['html']) != '') {
                    DebugEcho('get_mail: switching to html');
                    $tmp_config['prefer_text_type'] = 'html';
                }
                if ($config['prefer_text_type'] == 'html' && trim($email['html']) == '' && trim($email['text']) != '') {
                    DebugEcho('get_mail: switching to plain');
                    $tmp_config['prefer_text_type'] = 'plain';
                }
            }

            //Check poster to see if a valid person
            $poster = $this->validate_poster($email, $tmp_config);
            if (!empty($poster)) {
                $this->post_email($poster, $email, $tmp_config);
                DebugEcho("$message_number: processed");
            } else {
                EchoError('Ignoring email - not authorized.');
            }
            flush();
        }
        DebugEcho("Mail fetch complete, $message_number emails");
        DebugEcho("doing postie_session_end");
        do_action('postie_session_end');

        if (function_exists('memory_get_usage')) {
            DebugEcho('memory at end of email processing: ' . memory_get_usage());
        }
    }

    function intermediate_image_sizes_advanced($sizes) {
        $config = postie_config_read();
        if ($config[PostieConfigOptions::ImageResize]) {
            DebugEcho('intermediate_image_sizes_advanced');
            DebugDump($sizes);
            return $sizes;
        }

        DebugEcho('intermediate_image_sizes_advanced: None');
        return false;
    }

    function save_attachments(&$email, $post_id, $config, $poster) {
        DebugEcho('save_attachments: ---- start');

        if (!isset($email['attachment'])) {
            $email['attachment'] = array();
        }
        if (!isset($email['inline'])) {
            $email['inline'] = array();
        }
        if (!isset($email['related'])) {
            $email['related'] = array();
        }

        DebugEcho("save_attachments: [attachment]");
        $this->save_attachments_worker($email['attachment'], $post_id, $config, $poster);
        DebugEcho("save_attachments: [inline]");
        $this->save_attachments_worker($email['inline'], $post_id, $config, $poster);
        DebugEcho("save_attachments: [related]");
        $this->save_attachments_worker($email['related'], $post_id, $config, $poster);


        DebugEcho("save_attachments: ==== end");
    }

    /**
     * This function determines if the mime attachment is on the BANNED_FILE_LIST
     * @param string
     * @return boolean
     */
    function is_banned_filename($filename, $bannedFiles) {
        if (preg_match('/ATT\d\d\d\d\d.txt/i', $filename)) {
            return true;
        }

        if (empty($filename) || empty($bannedFiles)) {
            return false;
        }
        foreach ($bannedFiles as $bannedFile) {
            if (fnmatch($bannedFile, $filename)) {
                EchoError("Ignoring attachment: $filename - it is on the banned files list.");
                $this->notify_error("Ignoring attachment: $filename - it is on the banned files list.", "Ignoring attachment: $filename - it is on the banned files list.");
                return true;
            }
        }
        return false;
    }

    function save_attachments_worker(&$attachments, $post_id, $config, $poster) {
        DebugEcho("save_attachments_worker: start");
        foreach ($attachments as &$attachment) {
            foreach ($attachment as $key => $value) {
                if ($key != 'data') {
                    DebugEcho("save_attachments_worker: [$key]: $value");
                }
            }
            if (array_key_exists('filename', $attachment) && !empty($attachment['filename'])) {
                DebugEcho('save_attachments_worker: ' . $attachment['filename']);

                if ($this->is_banned_filename($attachment['filename'], $config['banned_files_list'])) {
                    DebugEcho("save_attachments_worker: skipping banned filename " . $attachment['filename']);
                    continue;
                }

                if (false === apply_filters('postie_include_attachment', true, $attachment)) {
                    DebugEcho("save_attachments_worker: skipping filename by filter " . $attachment['filename']);
                    continue;
                }
            } else {
                DebugEcho('save_attachments_worker: un-named attachment');
            }

            $this->save_attachment($attachment, $post_id, $config, $poster);

            $filename = $attachment['wp_filename'];
            $fileext = $attachment['ext'];
            $mparts = explode('/', $attachment['mimetype']);
            $mimetype_primary = $mparts[0];
            $mimetype_secondary = $mparts[1];
            DebugEcho("save_attachments_worker: mime primary: $mimetype_primary");

            $attachment['primary'] = $mimetype_primary;
            $attachment['exclude'] = false;

            $file_id = $attachment['wp_id'];
            $file = wp_get_attachment_url($file_id);

            switch ($mimetype_primary) {
                case 'text':
                    DebugEcho("save_attachments_worker: text attachment");
                    $icon = $this->choose_attachment_icon($file, $mimetype_primary, $mimetype_secondary, $config['icon_set'], $config['icon_size']);
                    $attachment['template'] = "<a href='$file'>" . $icon . $filename . '</a>' . "\n";
                    break;

                case 'image':
                    DebugEcho("save_attachments_worker: image attachment");
                    $attachment['template'] = $this->parse_template($file_id, $mimetype_primary, $config['imagetemplate'], $filename) . "\n";
                    break;

                case 'audio':
                    DebugEcho("save_attachments_worker: audio attachment");
                    if (in_array($fileext, $config['audiotypes'])) {
                        DebugEcho("save_attachments_worker: using audio template: $mimetype_secondary");
                        $audioTemplate = $config['audiotemplate'];
                    } else {
                        DebugEcho("save_attachments_worker: using default audio template: $mimetype_secondary");
                        $icon = $this->choose_attachment_icon($file, $mimetype_primary, $mimetype_secondary, $config['icon_set'], $config['icon_size']);
                        $audioTemplate = '<a href="{FILELINK}">' . $icon . '{FILENAME}</a>';
                    }
                    $attachment['template'] = $this->parse_template($file_id, $mimetype_primary, $audioTemplate, $filename);
                    break;

                case 'video':
                    DebugEcho("save_attachments_worker: video attachment");
                    if (in_array($fileext, $config['video1types'])) {
                        DebugEcho("save_attachments_worker: using video1 template: $fileext");
                        $videoTemplate = $config['video1template'];
                    } elseif (in_array($fileext, $config['video2types'])) {
                        DebugEcho("save_attachments_worker: using video2 template: $fileext");
                        $videoTemplate = $config['video2template'];
                    } else {
                        DebugEcho("save_attachments_worker: using default template: $fileext");
                        $icon = $this->choose_attachment_icon($file, $mimetype_primary, $mimetype_secondary, $config['icon_set'], $config['icon_size']);
                        $videoTemplate = '<a href="{FILELINK}">' . $icon . '{FILENAME}</a>';
                    }
                    $attachment['template'] = $this->parse_template($file_id, $mimetype_primary, $videoTemplate, $filename);
                    break;

                default :
                    DebugEcho("save_attachments_worker: generic attachment ($mimetype_primary)");
                    $icon = $this->choose_attachment_icon($file, $mimetype_primary, $mimetype_secondary, $config['icon_set'], $config['icon_size']);
                    $attachment['template'] = $this->parse_template($file_id, $mimetype_primary, $config['generaltemplate'], $filename, $icon) . "\n";
                    break;
            }
            DebugEcho("save_attachments_worker: done with $filename");
        }
        DebugEcho("save_attachments_worker: end");
    }

    function parse_template($fileid, $type, $template, $orig_filename, $icon = "") {
        $template = trim($template);
        DebugEcho("parseTemplate: before '$template'");

        $attachment = get_post($fileid);
        if (!empty($attachment)) {
            $uploadDir = wp_upload_dir();
            $fileName = basename($attachment->guid);
            $fileType = pathinfo($fileName, PATHINFO_EXTENSION);
            $absFileName = $uploadDir['path'] . '/' . $fileName;
            $relFileName = str_replace(ABSPATH, '', $absFileName);
            $fileLink = wp_get_attachment_url($fileid);
            $pageLink = get_attachment_link($fileid);

            $template = str_replace('{TITLE}', $attachment->post_title, $template);
            $template = str_replace('{ID}', $fileid, $template);

            if ($type == 'image') {
                $widths = array();
                $heights = array();
                $img_urls = array();

                /*
                 * Possible enhancement: support all sizes returned by get_intermediate_image_sizes()
                 */
                $sizes = array('thumbnail', 'medium', 'large');
                for ($i = 0; $i < count($sizes); $i++) {
                    $iinfo = image_downsize($fileid, $sizes[$i]);
                    if (false !== $iinfo) {
                        $img_urls[$i] = $iinfo[0];
                        $widths[$i] = $iinfo[1];
                        $heights[$i] = $iinfo[2];
                    }
                }
                DebugEcho('parseTemplate: Sources');
                DebugDump($img_urls);
                DebugEcho('parseTemplate: Heights');
                DebugDump($heights);
                DebugEcho('parseTemplate: Widths');
                DebugDump($widths);

                $template = str_replace('{THUMBNAIL}', $img_urls[0], $template);
                $template = str_replace('{THUMB}', $img_urls[0], $template);
                $template = str_replace('{MEDIUM}', $img_urls[1], $template);
                $template = str_replace('{LARGE}', $img_urls[2], $template);
                $template = str_replace('{THUMBWIDTH}', $widths[0] . 'px', $template);
                $template = str_replace('{THUMBHEIGHT}', $heights[0] . 'px', $template);
                $template = str_replace('{MEDIUMWIDTH}', $widths[1] . 'px', $template);
                $template = str_replace('{MEDIUMHEIGHT}', $heights[1] . 'px', $template);
                $template = str_replace('{LARGEWIDTH}', $widths[2] . 'px', $template);
                $template = str_replace('{LARGEHEIGHT}', $heights[2] . 'px', $template);
            }

            $template = str_replace('{FULL}', $fileLink, $template);
            $template = str_replace('{FILELINK}', $fileLink, $template);
            $template = str_replace('{FILETYPE}', $fileType, $template);
            $template = str_replace('{PAGELINK}', $pageLink, $template);
            $template = str_replace('{FILENAME}', $orig_filename, $template);
            $template = str_replace('{IMAGE}', $fileLink, $template);
            $template = str_replace('{URL}', $fileLink, $template);
            $template = str_replace('{RELFILENAME}', $relFileName, $template);
            $template = str_replace('{ICON}', $icon, $template);
            $template = str_replace('{FILEID}', $fileid, $template);

            $template = $template . (empty($template) ? '' : '<br />');
            DebugEcho("parseTemplate: after: '$template'");
            return $template;
        } else {
            EchoError("parseTemplate: couldn't get attachment $fileid");
            return '';
        }
    }

    function show_filters_for($hook = '') {
        global $wp_filter;
        if (empty($hook) || !isset($wp_filter[$hook])) {
            DebugEcho("No registered filters for $hook");
            return;
        }
        DebugEcho("Registered filters for $hook");
        //DebugDump($wp_filter[$hook]->callbacks);
    }

    function save_attachment(&$attachment, $post_id, $config, $poster) {

        if (isset($attachment['filename']) && !empty($attachment['filename'])) {
            $filename = $attachment['filename'];
        } else {
            DebugEcho("save_attachment: generating file name");
            $filename = uniqid();
            $mparts = explode('/', $attachment['mimetype']);
            $attachment['filename'] = $filename . '.' . $mparts[1];
        }

        DebugEcho("save_attachment: pre sanitize file name '$filename'");
        //DebugDump($part);
        $filename = sanitize_file_name($filename);
        $attachment['wp_filename'] = $filename;

        DebugEcho("save_attachment: file name '$filename'");

        $mparts = explode('/', $attachment['mimetype']);
        $mimetype_primary = $mparts[0];
        $mimetype_secondary = $mparts[1];

        $fileext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $attachment['ext'] = $fileext;
        if (empty($fileext) && $mimetype_primary == 'image') {
            $attachment['ext'] = $mimetype_secondary;
            $filename = $filename . '.' . $mimetype_secondary;
            $attachment['wp_filename'] = $filename;
            $fileext = $mimetype_secondary;
            DebugEcho("save_attachment: blank image extension, changed to $mimetype_secondary ($filename)");
        }
        DebugEcho("save_attachment: extension '$fileext'");

        $typeinfo = wp_check_filetype($filename);
        //DebugDump($typeinfo);
        if (!empty($typeinfo['type'])) {
            DebugEcho("save_attachment: secondary lookup found " . $typeinfo['type']);
            $mimeparts = explode('/', strtolower($typeinfo['type']));
            $mimetype_primary = $mimeparts[0];
            $mimetype_secondary = $mimeparts[1];
        } else {
            DebugEcho("save_attachment: secondary lookup failed, checking configured extensions");
            if (in_array($fileext, $config['audiotypes'])) {
                DebugEcho("save_attachment: found audio extension");
                $mimetype_primary = 'audio';
                $mimetype_secondary = $fileext;
            } elseif (in_array($fileext, array_merge($config['video1types'], $config['video2types']))) {
                DebugEcho("save_attachment: found video extension");
                $mimetype_primary = 'video';
                $mimetype_secondary = $fileext;
            } else {
                DebugEcho("save_attachment: found no extension");
            }
        }
        $attachment['mimetype'] = "$mimetype_primary/$mimetype_secondary";
        DebugEcho("save_attachment: mimetype $mimetype_primary/$mimetype_secondary");

        $attachment['wp_id'] = 0;

        switch ($mimetype_primary) {
            case 'text':
                DebugEcho("save_attachment: ctype_primary: text");
                //DebugDump($part);

                DebugEcho("save_attachment: text Attachement: $filename");
                $file_id = $this->media_handle_upload($attachment, $post_id, $poster);
                if (!is_wp_error($file_id)) {
                    $attachment['wp_id'] = $file_id;
                    DebugEcho("save_attachment: text attachment: adding '$filename'");
                } else {
                    EchoError($file_id->get_error_message());
                    $this->notify_error("Failed to add text media file: $filename", $file_id->get_error_message());
                }

                break;

            case 'image':
                DebugEcho("save_attachment: image Attachement: $filename");
                $file_id = $this->media_handle_upload($attachment, $post_id, $poster);
                if (!is_wp_error($file_id)) {
                    $attachment['wp_id'] = $file_id;
                    //set the first image we come across as the featured image
                    if ($config['featured_image'] && !has_post_thumbnail($post_id)) {
                        DebugEcho("save_attachment: featured image: $file_id");
                        set_post_thumbnail($post_id, $file_id);
                    }
                } else {
                    EchoError("save_attachment image error: " . $file_id->get_error_message());
                    $this->notify_error("Failed to add image media file: $filename", $file_id->get_error_message());
                }
                break;

            case 'audio':
                DebugEcho("save_attachment: audio Attachement: $filename");
                $file_id = $this->media_handle_upload($attachment, $post_id, $poster);
                if (!is_wp_error($file_id)) {
                    $attachment['wp_id'] = $file_id;
                } else {
                    EchoError("save_attachment audio error: " . $file_id->get_error_message());
                    $this->notify_error("Failed to add audio media file: $filename", $file_id->get_error_message());
                }
                break;

            case 'video':
                DebugEcho("save_attachment: video Attachement: $filename");
                $file_id = $this->media_handle_upload($attachment, $post_id, $poster);
                if (!is_wp_error($file_id)) {
                    $attachment['wp_id'] = $file_id;
                } else {
                    EchoError("save_attachment video error: " . $file_id->get_error_message());
                    $this->notify_error("Failed to add video file: $filename", $file_id->get_error_message());
                }
                break;

            default:
                DebugEcho("save_attachment: found file type: " . $mimetype_primary);
                if (in_array($mimetype_primary, $config['supported_file_types'])) {
                    //pgp signature - then forget it
                    if ($mimetype_secondary == 'pgp-signature') {
                        DebugEcho("save_attachment: found pgp-signature - done");
                        break;
                    }
                    $file_id = $this->media_handle_upload($attachment, $post_id, $poster);
                    if (!is_wp_error($file_id)) {
                        $attachment['wp_id'] = $file_id;
                        $file = wp_get_attachment_url($file_id);
                        DebugEcho("save_attachment: uploaded $file_id ($file)");
                    } else {
                        EchoError("save_attachment file error: " . $file_id->get_error_message());
                        $this->notify_error("Failed to add media file: $filename", $file_id->get_error_message());
                    }
                } else {
                    EchoError("$filename has an unsupported MIME type $mimetype_primary and was not added.");
                    DebugEcho("save_attachment: Not in supported filetype list: '$mimetype_primary'");
                    DebugDump($config['supported_file_types']);
                    $this->notify_error("Unsupported MIME type: $mimetype_primary", "$filename has an unsupported MIME type $mimetype_primary and was not added.\nSupported types:\n" . print_r($config['supported_file_types'], true));
                }
                break;
        }
    }

    function notify_error($subject, $message) {
        $recipients = array();
        $config = postie_config_read();
        if ($config['postie_log_error_notify'] == '(Nobody)') {
            return;
        }
        if ($config['postie_log_error_notify'] == '(All Admins)') {
            foreach (get_users(array('role' => 'administrator', 'blog_id' => get_current_blog_id())) as $user) {
                $recipients[] = $user->user_email;
            }
            if (count($recipients) == 0) {
                return;
            }
        } else {
            $user = get_user_by('login', $config['postie_log_error_notify']);
            if ($user === false) {
                return;
            }
            $recipients[] = $user->user_login;
        }

        $message = "This message has been sent from " . get_site_url() . ". You can disable or control who receives them by changing the Postie 'Notify on Error' setting.\n\n" . $message;
        wp_mail($recipients, $subject, $message);
    }

    function media_handle_upload($attachment, $post_id, $poster) {

        $tmpFile = tempnam(get_temp_dir(), 'postie');
        if ($tmpFile !== false) {
            $fp = fopen($tmpFile, 'w');
            if ($fp) {
                fwrite($fp, $attachment['data']);
                fclose($fp);
                DebugEcho("media_handle_upload: wrote data to '$tmpFile'");
            } else {
                EchoError("media_handle_upload: Could not write to temp file: '$tmpFile' ");
                $this->notify_error("media_handle_upload: Could not write to temp file: '$tmpFile' ", "media_handle_upload: Could not write to temp file: '$tmpFile' ");
            }
        } else {
            EchoError("media_handle_upload: Could not create temp file in " . get_temp_dir());
            $this->notify_error("media_handle_upload: Could not create temp file in " . get_temp_dir(), "media_handle_upload: Could not create temp file in " . get_temp_dir());
        }

        $file_array = array(
            'name' => $attachment['wp_filename'],
            'type' => $attachment['mimetype'],
            'tmp_name' => $tmpFile,
            'error' => 0,
            'size' => filesize($tmpFile)
        );
        DebugDump($file_array);

        DebugEcho("doing postie_file_added_pre");
        do_action('postie_file_added_pre', $post_id, $file_array);

        DebugEcho("media_handle_sideload: adding " . $file_array['name']);

        $id = media_handle_sideload($file_array, $post_id);

        if (!is_wp_error($id)) {
            DebugEcho("media_handle_upload: changing post_author to $poster");

            $mediapath = get_attached_file($id);

            $title = $file_array['name'];
            $excerpt = '';
            //TODO once WordPress is fixed this can be removed. https://core.trac.wordpress.org/ticket/39521
            if (0 === strpos($attachment['mimetype'], 'image/') && $image_meta = wp_read_image_metadata($mediapath)) {
                if (trim($image_meta['title']) && !is_numeric(sanitize_title($image_meta['title']))) {
                    $title = $image_meta['title'];
                    DebugEcho("media_handle_upload: changing post_title to $title");
                }

                if (trim($image_meta['caption'])) {
                    $excerpt = $image_meta['caption'];
                    DebugEcho("media_handle_upload: changing post_excerpt to $excerpt");
                }
            }

            wp_update_post(array(
                'ID' => $id,
                'post_author' => $poster,
                'post_title' => $title,
                'post_excerpt' => $excerpt,
            ));

            $file_array['tmp_name'] = $mediapath;
            DebugEcho("media_handle_upload: doing postie_file_added");
            do_action('postie_file_added', $post_id, $id, $file_array);
        } else {
            EchoError("There was an error adding the attachment: " . $id->get_error_message());
            DebugDump($id->get_error_messages());
            DebugDump($id->get_error_data());
            $this->notify_error("There was an error adding the attachment: " . $attachment['wp_filename'], $id->get_error_message());
        }

        return $id;
    }

    function get_content(&$email, $config) {
        DebugEcho('get_content: ---- start');
        $meta_return = '';
        if ($config['prefer_text_type'] == 'html') {
            if (isset($email['html'])) {
                $meta_return = $email['html'];
            }
        } else {
            if (isset($email['text'])) {
                $meta_return = $email['text'];
            }
        }
        return $meta_return;
    }

    /**
     * This function handles finding and setting the correct subject
     * @return array - (subject,content)
     */
    function get_subject(&$mimeDecodedEmail, &$content, $config) {
        //assign the default title/subject
        if (empty($mimeDecodedEmail['headers']['subject'])) {
            DebugEcho("get_subject: No subject in email");
            if ($config['allow_subject_in_mail']) {
                list($subject, $content) = tag_Subject($content, $config['default_title']);
            } else {
                DebugEcho("get_subject: Using default subject");
                $subject = $config['default_title'];
            }
            $mimeDecodedEmail['headers']['subject'] = $subject;
        } else {
            $subject = $mimeDecodedEmail['headers']['subject'];
            DebugEcho(("get_subject: Predecoded subject: $subject"));

            if ($config['allow_subject_in_mail']) {
                list($subject, $content) = tag_Subject($content, $subject);
            }
        }
        if (!$config['allow_html_in_subject']) {
            DebugEcho("get_subject: subject before htmlentities: $subject");
            $subject = htmlentities($subject, ENT_COMPAT);
            DebugEcho("get_subject: subject after htmlentities: $subject");
        }

        //This is for ISO-2022-JP - Can anyone confirm that this is still neeeded?
        // escape sequence is 'ESC $ B' == 1b 24 42 hex.
        if (strpos($subject, "\x1b\x24\x42") !== false) {
            // found iso-2022-jp escape sequence in subject... convert!
            DebugEcho("get_subject: extra parsing for ISO-2022-JP");
            $subject = iconv("ISO-2022-JP", "UTF-8//TRANSLIT", $subject);
        }
        DebugEcho("get_subject: '$subject'");
        return $subject;
    }

    function create_post($poster, $mimeDecodedEmail, $post_id, &$is_reply, $config) {
        DebugEcho("create_post: prefer_text_type: " . $config['prefer_text_type']);

        $fulldebug = $this->is_debugmode();
        $fulldebugdump = false;

        if (array_key_exists('message-id', $mimeDecodedEmail['headers'])) {
            DebugEcho("Message Id is :" . htmlentities($mimeDecodedEmail['headers']['message-id']));
            if ($fulldebugdump) {
                DebugDump($mimeDecodedEmail);
            }
        }

        if ($fulldebugdump) {
            DebugDump($mimeDecodedEmail);
        }

        $this->save_attachments($mimeDecodedEmail, $post_id, $config, $poster);

        $content = $this->get_content($mimeDecodedEmail, $config);

        $subject = $this->get_subject($mimeDecodedEmail, $content, $config);

        $content = filter_RemoveSignature($content, $config);
        if ($fulldebug) {
            DebugEcho("post filter_RemoveSignature: $content");
        }

        $content = filter_Newlines($content, $config);
        if ($fulldebug) {
            DebugEcho("post filter_Newlines: $content");
        }

        $post_excerpt = tag_Excerpt($content, $config);
        if ($fulldebug) {
            DebugEcho("post tag_Excerpt: $content");
        }

        $postAuthorDetails = $this->post_author_details($mimeDecodedEmail);
        if ($fulldebug) {
            DebugEcho("post getPostAuthorDetails: $content");
        }

        $message_date = NULL;
        $delay = 0;
        if (array_key_exists("date", $mimeDecodedEmail['headers']) && !empty($mimeDecodedEmail['headers']['date'])) {
            DebugEcho("date header: {$mimeDecodedEmail['headers']['date']}");
            if ($config['ignore_email_date']) {
                $message_date = current_time('mysql');
                DebugEcho("system date: $message_date");
            } else {
                $message_date = $mimeDecodedEmail['headers']['date'];
                DebugEcho("decoded date: $message_date");
                list($message_date, $delay) = tag_Delay($content, $message_date, $config);
                if ($fulldebug) {
                    DebugEcho("post tag_Delay: $content");
                }
            }
        } else {
            DebugEcho("date header missing");
            $message_date = current_time('mysql');
        }

        $post_date = tag_Date($content, $message_date);
        if ($fulldebug) {
            DebugEcho("post tag_Date: $content");
        }


        //do post type before category to keep the subject line correct
        $post_type_format = tag_PostType($subject, $config);
        if ($fulldebug) {
            DebugEcho("post tag_PostType: $content");
        }

        $default_categoryid = $config['default_post_category'];

        DebugEcho("pre postie_category_default: '$default_categoryid'");
        $default_categoryid = apply_filters('postie_category_default', $default_categoryid);
        DebugEcho("post postie_category_default: '$default_categoryid'");

        $post_categories = tag_Categories($subject, $default_categoryid, $config, $post_id);
        if ($fulldebug) {
            DebugEcho("post tag_Categories: $content");
        }

        $post_tags = tag_Tags($content, $config);
        if ($fulldebug) {
            DebugEcho("post tag_Tags: $content");
        }

        $comment_status = tag_AllowCommentsOnPost($content);
        if ($fulldebug) {
            DebugEcho("post tag_AllowCommentsOnPost: $content");
        }

        $post_status = tag_Status($content, $config);
        if ($fulldebug) {
            DebugEcho("post tag_Status: $content");
        }

        //handle CID before linkify
        $content = filter_ReplaceImageCIDs($content, $mimeDecodedEmail);
        if ($fulldebug) {
            DebugEcho("post filter_ReplaceImageCIDs: $content");
        }

        if ($config['converturls']) {
            $content = filter_Linkify($content);
            if ($fulldebug) {
                DebugEcho("post filter_Linkify: $content");
            }
        }

        if ($config['reply_as_comment'] == true) {
            $id = $this->parent_post($subject, $mimeDecodedEmail, $config);
            if (empty($id)) {
                DebugEcho("Not a reply");
                $id = $post_id;
                $is_reply = false;
            } else {
                DebugEcho("Reply detected");
                $is_reply = true;
                if (true == $config['strip_reply']) {
                    // strip out quoted content
                    $lines = explode("\n", $content);
                    $newContents = '';
                    foreach ($lines as $line) {
                        if (preg_match("/^>.*/i", $line) == 0 &&
                                preg_match("/^(from|subject|to|date):.*?/iu", $line) == 0 &&
                                preg_match("/^-+.*?(from|subject|to|date).*?/iu", $line) == 0 &&
                                preg_match("/^on.*?wrote:$/iu", $line) == 0 &&
                                preg_match("/^-+\s*forwarded\s*message\s*-+/iu", $line) == 0) {
                            $newContents .= "$line\n";
                        }
                    }
                    if ((strlen($newContents) <> strlen($content)) && ('html' == $config['prefer_text_type'])) {
                        DebugEcho("Attempting to fix reply html (before): $newContents");
                        $newContents = $this->load_html($newContents)->__toString();
                        DebugEcho("Attempting to fix reply html (after): $newContents");
                    }
                    $content = $newContents;
                }
                wp_delete_post($post_id);
            }
        } else {
            $id = $post_id;
            DebugEcho("Replies will not be processed as comments");
        }

        if ($delay > 0 && $post_status == 'publish') {
            DebugEcho("publish in future");
            $post_status = 'future';
        }

        $content = filter_Start($content, $config);
        if ($fulldebug) {
            DebugEcho("post filter_Start: $content");
        }

        $content = filter_End($content, $config);
        if ($fulldebug) {
            DebugEcho("post filter_End: $content");
        }

        $content = filter_ReplaceImagePlaceHolders($content, $mimeDecodedEmail, $config, $id, $config['image_placeholder']);
        if ($fulldebug) {
            DebugEcho("post filter_ReplaceImagePlaceHolders: $content");
        }

        if ($post_excerpt) {
            $post_excerpt = filter_ReplaceImagePlaceHolders($post_excerpt, $mimeDecodedEmail, $config, $id, '#eimg%#');
            DebugEcho("excerpt: $post_excerpt");
            if ($fulldebug) {
                DebugEcho("post excerpt ReplaceImagePlaceHolders: $content");
            }
        }

        //handle inline images after linkify
        if ('plain' == $config['prefer_text_type']) {
            $content = filter_ReplaceInlineImage($content, $mimeDecodedEmail, $config);
            if ($fulldebug) {
                DebugEcho("post filter_ReplaceInlineImage: $content");
            }
        }

        $content = filter_AttachmentTemplates($content, $mimeDecodedEmail, $post_id, $config);

        if (trim($subject) == '') {
            $subject = $config['default_title'];
            DebugEcho("post parsing subject is blank using: " . $config['default_title']);
        }

        $details = array(
            'post_author' => $poster,
            'comment_author' => $postAuthorDetails['author'],
            'comment_author_url' => $postAuthorDetails['comment_author_url'],
            'user_ID' => $postAuthorDetails['user_ID'],
            'email_author' => $postAuthorDetails['email'],
            'post_date' => $post_date,
            'post_date_gmt' => get_gmt_from_date($post_date),
            'post_content' => $content,
            'post_title' => $subject,
            'post_type' => $post_type_format['post_type'],
            'ping_status' => get_option('default_ping_status'),
            'post_category' => $post_categories,
            'tags_input' => $post_tags,
            'comment_status' => $comment_status,
            'post_name' => $subject,
            'post_excerpt' => $post_excerpt,
            'ID' => $id,
            'post_status' => $post_status
        );

        //don't need to specify the post format to get a "standard" post
        if ($post_type_format['post_format'] !== 'standard') {
            //need to set post format differently since it is a type of taxonomy
            DebugEcho("Setting post format to {$post_type_format['post_format']}");
            wp_set_post_terms($post_id, $post_type_format['post_format'], 'post_format');
        }

        return $details;
    }

    function save_post($details, $isReply) {
        $post_ID = 0;
        $details['post_content'] = str_replace('\\', '\\\\', $details['post_content']); //replace all backslashs with double backslashes since WP will remove single backslash
        if (!$isReply) {
            DebugEcho("postie_save_post: about to insert post");
            $post_ID = wp_insert_post($details, true);
            if (is_wp_error($post_ID)) {
                EchoError("PostToDB Error: " . $post_ID->get_error_message());
                DebugDump($post_ID->get_error_messages());
                DebugDump($post_ID->get_error_data());
                wp_delete_post($details['ID']);

                $this->notify_error("Failed to create {$details['post_type']}: {$details['post_title']}", "Error: " . $post_ID->get_error_message() . "\n\n" . $details['post_content']);

                $post_ID = null;
            } else {
                DebugEcho("postie_save_post: post inserted");
            }
        } else {
            DebugEcho("postie_save_post: inserting comment");
            $comment = array(
                'comment_author' => $details['comment_author'],
                'comment_post_ID' => $details['ID'],
                'comment_author_email' => $details['email_author'],
                'comment_date' => $details['post_date'],
                'comment_date_gmt' => $details['post_date_gmt'],
                'comment_content' => $details['post_content'],
                'comment_author_url' => $details['comment_author_url'],
                'comment_author_IP' => '',
                'comment_approved' => 1,
                'comment_agent' => '',
                'comment_type' => '',
                'comment_parent' => 0,
                'user_id' => $details['user_ID']
            );
            $comment = apply_filters('postie_comment_before', $comment);
            DebugEcho("postie_save_post: post postie_comment_before");
            DebugDump($comment);

            $post_ID = wp_new_comment($comment);

            DebugEcho("doing postie_comment_after");
            do_action('postie_comment_after', $comment);
        }

        if ($post_ID) {
            DebugEcho("doing postie_post_after");
            do_action('postie_post_after', $details);
        }

        return $post_ID;
    }

    function load_html($text) {
        return str_get_html($text, true, true, DEFAULT_TARGET_CHARSET, false);
    }

    /* we check whether or not the email is a reply to a previously
     * published post. First we check whether it starts with Re:, and then
     * we see if the remainder matches an already existing post. If so,
     * then we add that post id to the details array, which will cause the
     * existing post to be overwritten, instead of a new one being
     * generated
     */

    function parent_post(&$subject, $email, $config) {
        global $wpdb;

        $id = NULL;
        DebugEcho("GetParentPostForReply: Looking for parent '$subject'");
        // see if subject starts with Re:
        $matches = array();
        if (preg_match("/(^Re:)(.*)/iu", $subject, $matches)) {
            DebugEcho("GetParentPostForReply: Re: detected");
            $subject = trim($matches[2]);
            // strip out category info into temporary variable
            $tmpSubject = $subject;
            if (preg_match('/(.+): (.*)/u', $tmpSubject, $matches)) {
                $tmpSubject = trim($matches[2]);
                $matches[1] = array($matches[1]);
            } else if (preg_match_all('/\[(.[^\[]*)\]/', $tmpSubject, $matches)) {
                $tmpSubject_matches = array();
                preg_match("/](.[^\[]*)$/", $tmpSubject, $tmpSubject_matches);
                $tmpSubject = trim($tmpSubject_matches[1]);
            } else if (preg_match_all('/-(.[^-]*)-/', $tmpSubject, $matches)) {
                preg_match("/-(.[^-]*)$/", $tmpSubject, $tmpSubject_matches);
                $tmpSubject = trim($tmpSubject_matches[1]);
            }
            DebugEcho("GetParentPostForReply: tmpSubject: $tmpSubject");
            $checkExistingPostQuery = "SELECT ID FROM $wpdb->posts WHERE post_title LIKE %s AND post_status = 'publish' AND comment_status = 'open' AND post_type=%s ORDER BY post_date DESC";
            if ($id = $wpdb->get_var($wpdb->prepare($checkExistingPostQuery, $tmpSubject, $config[PostieConfigOptions::PostType]))) {
                if (!empty($id)) {
                    DebugEcho("GetParentPostForReply: id: $id");
                } else {
                    DebugEcho("GetParentPostForReply: No parent id found");
                }
            }
        } else {
            DebugEcho("GetParentPostForReply: No parent found");
        }

        $id = apply_filters('postie_parent_post', $id, $email);
        DebugEcho("GetParentPostForReply: After postie_parent_post: $id");

        return $id;
    }

    function post_author_details($mimeDecodedEmail) {

        $theEmail = $mimeDecodedEmail['headers']['from']['mailbox'] . '@' . $mimeDecodedEmail['headers']['from']['host'];

        $regAuthor = get_user_by('email', $theEmail);
        if ($regAuthor) {
            $theAuthor = $regAuthor->user_login;
            $theUrl = $regAuthor->user_url;
            $theID = $regAuthor->ID;
        } else {
            $theAuthor = $this->get_name_from_email($theEmail);
            $theUrl = '';
            $theID = '';
        }

        $theDetails = array(
            'author' => $theAuthor,
            'comment_author_url' => $theUrl,
            'user_ID' => $theID,
            'email' => $theEmail
        );

        return $theDetails;
    }

    /**
     * Choose an appropriate file icon based on the extension and mime type of
     * the attachment
     */
    function choose_attachment_icon($file, $primary, $secondary, $iconSet = 'silver', $size = '32') {
        if ($iconSet == 'none') {
            return('');
        }
        $fileName = basename($file);
        $parts = explode('.', $fileName);
        $ext = $parts[count($parts) - 1];
        $docExts = array('doc', 'docx');
        $docMimes = array('msword', 'vnd.ms-word', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
        $pptExts = array('ppt', 'pptx');
        $pptMimes = array('mspowerpoint', 'vnd.ms-powerpoint', 'vnd.openxmlformats-officedocument.');
        $xlsExts = array('xls', 'xlsx');
        $xlsMimes = array('msexcel', 'vnd.ms-excel', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $iWorkMimes = array('zip', 'octet-stream');
        $mpgExts = array('mpg', 'mpeg', 'mp2');
        $mpgMimes = array('mpg', 'mpeg', 'mp2');
        $mp3Exts = array('mp3');
        $mp3Mimes = array('mp3', 'mpeg3', 'mpeg');
        $mp4Exts = array('mp4', 'm4v');
        $mp4Mimes = array('mp4', 'mpeg4', 'octet-stream');
        $aacExts = array('m4a', 'aac');
        $aacMimes = array('m4a', 'aac', 'mp4');
        $aviExts = array('avi');
        $aviMimes = array('avi', 'x-msvideo');
        $movExts = array('mov');
        $movMimes = array('mov', 'quicktime');
        if ($ext == 'pdf' && $secondary == 'pdf') {
            $fileType = 'pdf';
        } else if ($ext == 'pages' && in_array($secondary, $iWorkMimes)) {
            $fileType = 'pages';
        } else if ($ext == 'numbers' && in_array($secondary, $iWorkMimes)) {
            $fileType = 'numbers';
        } else if ($ext == 'key' && in_array($secondary, $iWorkMimes)) {
            $fileType = 'key';
        } else if (in_array($ext, $docExts) && in_array($secondary, $docMimes)) {
            $fileType = 'doc';
        } else if (in_array($ext, $pptExts) && in_array($secondary, $pptMimes)) {
            $fileType = 'ppt';
        } else if (in_array($ext, $xlsExts) && in_array($secondary, $xlsMimes)) {
            $fileType = 'xls';
        } else if (in_array($ext, $mp4Exts) && in_array($secondary, $mp4Mimes)) {
            $fileType = 'mp4';
        } else if (in_array($ext, $movExts) && in_array($secondary, $movMimes)) {
            $fileType = 'mov';
        } else if (in_array($ext, $aviExts) && in_array($secondary, $aviMimes)) {
            $fileType = 'avi';
        } else if (in_array($ext, $mp3Exts) && in_array($secondary, $mp3Mimes)) {
            $fileType = 'mp3';
        } else if (in_array($ext, $mpgExts) && in_array($secondary, $mpgMimes)) {
            $fileType = 'mpg';
        } else if (in_array($ext, $aacExts) && in_array($secondary, $aacMimes)) {
            $fileType = 'aac';
        } else {
            $fileType = 'default';
        }
        $fileName = "/icons/$iconSet/$fileType-$size.png";
        if (!file_exists(POSTIE_ROOT . $fileName)) {
            $fileName = "/icons/$iconSet/default-$size.png";
        }
        $iconHtml = "<img src='" . POSTIE_URL . $fileName . "' alt='$fileType icon' />";
        DebugEcho("icon: $iconHtml");
        return $iconHtml;
    }

    function save_email_debug($raw, $email) {
        if ($this->is_debugmode()) {
            //DebugDump($email);
            //DebugDump($mimeDecodedEmail);

            $dname = POSTIE_ROOT . DIRECTORY_SEPARATOR . 'test_emails' . DIRECTORY_SEPARATOR;
            if (is_dir($dname)) {
                $mid = $email['headers']['message-id'];
                if (empty($mid)) {
                    $mid = uniqid();
                }
                $fname = $dname . sanitize_file_name($mid);

                file_put_contents($fname . '-raw.txt', $raw);
                file_put_contents($fname . '.txt', $email['text']);
                file_put_contents($fname . '.html', $email['html']);
            }
        }
    }

    function get_emails($type, $server, $port, $email, $password, $protocol, $deleteMessages, $maxemails, $connectiontype) {

        DebugEcho("getemails: Connecting to $server:$port ($protocol)");

        $emails = array();

        try {
            DebugEcho("getemails: procol: $protocol");
            if ($connectiontype == 'curl') {
                $conn = new pCurlConnection($type, trim($server), $email, $password, $port, ($protocol == 'imap-ssl' || $protocol == 'pop3-ssl'));
            } else {
                $conn = new pSocketConnection($type, trim($server), $email, $password, $port, ($protocol == 'imap-ssl' || $protocol == 'pop3-ssl'));
            }

            if ($type == 'imap') {
                $srv = new pImapMailServer($conn);
            } else {
                $srv = new pPop3MailServer($conn);
            }

            DebugEcho("getemails: listing messages");
            $mailbox = new fMailbox($type, $conn, $srv);
            $messages = $mailbox->listMessages($maxemails);

            DebugDump($messages);

            foreach ($messages as $message) {
                DebugEcho("getemails: fetch {$message['uid']}");

                $email = $mailbox->fetchMessage($message['uid']);

                if (!empty($email['html'])) {
                    DebugEcho("getemails: html");
                    $email['html'] = filter_CleanHtml($email['html']);
                } else {
                    DebugEcho("getemails: no html");
                }

                $emails[] = $email;
                if ($deleteMessages) {
                    DebugEcho("getemails: deleting {$message['uid']}");
                    $mailbox->deleteMessages($message['uid']);
                }
            }

            DebugEcho("getemails: closing connection");
            $mailbox->close();
        } catch (Exception $e) {
            EchoError("getemails: " . $e->getMessage());
        }

        return $emails;
    }

    /**
     * This function handles determining the protocol and fetching the mail
     * @return array
     */
    function fetch_mail($server, $port, $email, $password, $protocol, $deleteMessages, $maxemails, $connectiontype) {
        $emails = array();
        if (!$server || !$port || !$email) {
            EchoError("Missing Configuration For Mail Server");
            return $emails;
        }
        if ($server == "pop.gmail.com") {
            DebugEcho("MAKE SURE POP IS TURNED ON IN SETTING AT Gmail");
        }
        switch (strtolower($protocol)) {
            case 'imap':
            case 'imap-ssl':
                $emails = $this->get_emails('imap', $server, $port, $email, $password, $protocol, $deleteMessages, $maxemails, $connectiontype);
                break;
            case 'pop3':
            case 'pop3-ssl':
            default:
                $emails = $this->get_emails('pop3', $server, $port, $email, $password, $protocol, $deleteMessages, $maxemails, $connectiontype);
        }

        return $emails;
    }

    function disable_revisions($restore = false) {
        global $_wp_post_type_features, $_postie_revisions;

        if (!$restore) {
            $_postie_revisions = false;
            if (isset($_wp_post_type_features['post']) && isset($_wp_post_type_features['post']['revisions'])) {
                $_postie_revisions = $_wp_post_type_features['post']['revisions'];
                unset($_wp_post_type_features['post']['revisions']);
            }
        } else {
            if ($_postie_revisions) {
                $_wp_post_type_features['post']['revisions'] = $_postie_revisions;
            }
        }
    }

    function email_notify($email, $recipients, $postid) {
        DebugEcho("email_notify: start");

        if (empty($postid)) {
            DebugEcho("email_notify: no post id");
            return;
        }

        $myemailadd = get_option("admin_email");
        $blogname = get_option("blogname");
        $eblogname = "=?utf-8?b?" . base64_encode($blogname) . "?= ";
        $posturl = get_permalink($postid);
        $subject = $email['headers']['subject'];

        $sendheaders = array("From: $eblogname <$myemailadd>");

        $post_status = get_post_status($postid);

        $mailtext = "Your email '$subject' has been successfully imported into $blogname $posturl with the current status of '$post_status'.\n";

        $recipients = apply_filters('postie_email_notify_recipients', $recipients, $email, $postid);
        if (count($recipients) == 0) {
            DebugEcho("email_notify: no recipients after postie_email_notify_recipients filter");
            return;
        } else {
            DebugEcho("email_notify: post postie_email_notify_recipients");
            DebugDump($recipients);
        }
        $subject = "Email imported to $blogname ($post_status)";
        $subject = apply_filters('postie_email_notify_subject', $subject, $email, $postid);
        DebugEcho("email_notify: post postie_email_notify_subject: $subject");

        $mailtext = apply_filters('postie_email_notify_body', $mailtext, $email, $postid);
        DebugEcho("email_notify: post postie_email_notify_body: $mailtext");

        wp_mail($recipients, $subject, $mailtext, $sendheaders);
    }

    /**
     * This is the main handler for all of the processing
     */
    function post_email($poster, $mimeDecodedEmail, $config) {
        $this->disable_revisions();
        //extract($config);

        /* in order to do attachments correctly, we need to associate the
          attachments with a post. So we add the post here, then update it */
        $tmpPost = array('post_title' => 'tmptitle', 'post_content' => 'tmpPost', 'post_status' => 'draft');
        $post_id = wp_insert_post($tmpPost, true);
        if (!is_wp_error($post_id)) {
            DebugEcho("post_email: tmp post id is $post_id");

            $is_reply = false;

            DebugEcho("post_email: pre postie_post_pre");
            $mimeDecodedEmail = apply_filters('postie_post_pre', $mimeDecodedEmail);

            $details = $this->create_post($poster, $mimeDecodedEmail, $post_id, $is_reply, $config);

            DebugEcho("post_email: Before postie_post_before filter");

            $details = apply_filters('postie_post', $details);
            $details = apply_filters('postie_post_before', $details, $mimeDecodedEmail['headers']);

            DebugEcho("post_email: After postie_post_before filter");
            DebugDump($details);

            if (empty($details)) {
                // It is possible that the filter has removed the post, in which case, it should not be posted.
                // And if we created a placeholder post (because this was not a reply to an existing post),
                // then it should be removed
                if (!$is_reply) {
                    wp_delete_post($post_id);
                    DebugEcho("post_email: postie_post filter cleared the post, not saving. deleted $post_id");
                } else {
                    DebugEcho("post_email: postie_post ended up with no post array.");
                }
            } else {
                $postid = $this->save_post($details, $is_reply);

                $recipients = array();
                $dest = $config['confirmation_email'];
                if ($dest == 'sender' || $dest == 'both') {
                    $recipients[] = $details['email_author'];
                }
                if ($dest == 'admin' || $dest == 'both') {
                    foreach (get_users(array('role' => 'administrator', 'blog_id' => get_current_blog_id())) as $user) {
                        $recipients[] = $user->user_email;
                    }
                }
                if (!($dest == 'admin' || $dest == 'sender' || $dest == 'both' || $dest == '')) {
                    $user = get_user_by('login', $dest);
                    $recipients[] = $user->user_email;
                }

                DebugEcho("post_email: sending notifications");
                $this->email_notify($mimeDecodedEmail, $recipients, $postid);

                if ($this->is_debugmode()) {
                    $post = get_post($post_id);
                    DebugEcho("post_email: resulting post");
                    DebugDump($post);
                }
            }
        } else {
            EchoError("post_email: wp_insert_post failed: " . $post_id->get_error_message());
            DebugDump($post_id->get_error_messages());
            DebugDump($post_id->get_error_data());
            $this->notify_error("post_email: wp_insert_post failed creating placeholder", $post_id->get_error_message());
        }
        $this->disable_revisions(true);
        DebugEcho("post_email: Done");
    }

    /**
     * This function gleans the name from an email address if available. If not
     * it just returns the username (everything before @)
     */
    function get_name_from_email($address) {
        $name = "";
        $matches = array();
        if (preg_match('/^([^<>]+)<([^<> ()]+)>$/', $address, $matches)) {
            $name = $matches[1];
        } else if (preg_match('/<([^<>@ ()]+)>/', $address, $matches)) {
            $name = $matches[1];
        } else if (preg_match('/(.+?)@(.+)/', $address, $matches)) {
            $name = $matches[1];
        }

        return trim($name);
    }

    /**
     * This method works around a problem with email address with extra <> in the email address
     * @param string
     * @return string
     */
    function remove_extra_characters_in_email_address($address) {
        $matches = array();
        if (preg_match('/^[^<>]+<([^<> ()]+)>$/', $address, $matches)) {
            $address = $matches[1];
            DebugEcho("RemoveExtraCharactersInEmailAddress: $address (1)");
            DebugDump($matches);
        } else if (preg_match('/<([^<> ()]+)>/', $address, $matches)) {
            $address = $matches[1];
            DebugEcho("RemoveExtraCharactersInEmailAddress: $address (2)");
        }

        return $address;
    }

    /**
     * This compares the current address to the list of authorized addresses
     * @param string - email address
     * @return boolean
     */
    function is_email_authorized($address, $authorized) {
        $r = false;
        if (is_array($authorized)) {
            $a = strtolower(trim($address));
            if (!empty($a)) {
                $r = in_array($a, array_map('strtolower', $authorized));
            }
        }
        return $r;
    }

    function header_encode($value) {
        return "=?utf-8?b?" . base64_encode($value) . "?= ";
    }

    function email_reject($email, $recipients, $returnToSender) {
        DebugEcho("email_reject: start");

        $blogname = get_option('blogname');
        $from = $email['headers']['from']['mailbox'] . '@' . $email['headers']['from']['host'];

        $subject = $email['headers']['subject'];
        if ($returnToSender) {
            DebugEcho("email_reject: return to sender $from");
            array_push($recipients, $from);
        }

        $eblogname = $this->header_encode($blogname);
        $adminemail = get_option('admin_email');

        $headers = array();
        $headers[] = "From: $eblogname <$adminemail>";

        DebugEcho("email_reject: To:");
        DebugDump($recipients);
        DebugEcho("email_reject: header:");
        DebugDump($headers);

        $message = "An unauthorized message has been sent to $blogname.\n";
        $message .= "Sender: $from\n";
        $message .= "Subject: $subject\n";
        $message .= "\n\nIf you wish to allow posts from this address, please add " . $from . " to the registered users list and manually add the content of the email found below.";
        $message .= "\n\nOtherwise, the email has already been deleted from the server and you can ignore this message.";
        $message .= "\n\nIf you would like to prevent postie from forwarding mail in the future, please change the FORWARD_REJECTED_MAIL setting in the Postie settings panel";
        $message .= "\n\nThe original content of the email has been attached.\n\n";

        $recipients = apply_filters('postie_email_reject_recipients', $recipients, $email);
        if (count($recipients) == 0) {
            DebugEcho("email_reject: no recipients after postie_email_reject_recipients filter");
            return;
        } else {
            DebugEcho("email_reject: post postie_email_reject_recipients");
            DebugDump($recipients);
        }

        $subject = $blogname . ": Unauthorized Post Attempt from $from";
        $subject = apply_filters('postie_email_reject_subject', $subject, $email);
        DebugEcho("email_reject: post postie_email_reject_subject: $subject");

        $message = apply_filters('postie_email_reject_body', $message, $email);
        DebugEcho("email_reject: post postie_email_reject_body: $message");

        $attachTxt = wp_tempnam() . '.txt';
        file_put_contents($attachTxt, $email['text']);

        $attachHtml = wp_tempnam() . '.htm';
        file_put_contents($attachHtml, $email['html']);

        wp_mail($recipients, $subject, $message, $headers, array($attachTxt, $attachHtml));

        unlink($attachTxt);
        unlink($attachHtml);
    }

    /**
     * Determines if the sender is a valid user.
     * @return integer|NULL
     */
    function validate_poster(&$mimeDecodedEmail, $config) {
        extract($config);
        $poster = NULL;
        $from = "";
        if (array_key_exists('headers', $mimeDecodedEmail) && array_key_exists('from', $mimeDecodedEmail['headers'])) {
            $from = $mimeDecodedEmail['headers']['from']['mailbox'] . '@' . $mimeDecodedEmail['headers']['from']['host'];
            $from = apply_filters('postie_filter_email', $from);
            DebugEcho("validate_poster: post postie_filter_email $from");

            $toEmail = '';
            if (isset($mimeDecodedEmail['headers']['to'])) {
                $toEmail = $mimeDecodedEmail['headers']['to'][0]['mailbox'] . '@' . $mimeDecodedEmail['headers']['to'][0]['host'];
            }

            $replytoEmail = '';
            if (isset($mimeDecodedEmail['headers']['reply-to'])) {
                $replytoEmail = $mimeDecodedEmail['headers']['reply-to']['mailbox'] . '@' . $mimeDecodedEmail['headers']['reply-to']['host'];
            }

            $from = apply_filters("postie_filter_email2", $from, $toEmail, $replytoEmail);
            DebugEcho("validate_poster: post postie_filter_email2 $from");
        } else {
            DebugEcho("validate_poster: No 'from' header found");
            DebugDump($mimeDecodedEmail['headers']);
        }

        if (array_key_exists("headers", $mimeDecodedEmail)) {
            $from = apply_filters("postie_filter_email3", $from, $mimeDecodedEmail['headers']);
            DebugEcho("validate_poster: post postie_filter_email3 $from");
        }

        $resentFrom = "";
        if (array_key_exists('headers', $mimeDecodedEmail) && array_key_exists('resent-from', $mimeDecodedEmail['headers'])) {
            $resentFrom = $this->remove_extra_characters_in_email_address(trim($mimeDecodedEmail['headers']['resent-from']));
        }

        //See if the email address is one of the special authorized ones
        $user_ID = '';
        if (!empty($from)) {
            DebugEcho("validate_poster: Confirming Access For $from ");
            $user = get_user_by('email', $from);
            if ($user !== false) {
                if (is_user_member_of_blog($user->ID)) {
                    $user_ID = $user->ID;
                } else {
                    DebugEcho("validate_poster: $from is not user of blog " . get_current_blog_id());
                }
            }
        }

        if (!empty($user_ID)) {
            $user = new WP_User($user_ID);
            if ($user->has_cap("post_via_postie")) {
                DebugEcho("validate_poster: $user_ID has 'post_via_postie' permissions");
                $poster = $user_ID;

                DebugEcho("validate_poster: pre postie_author $poster");
                $poster = apply_filters("postie_author", $poster);
                DebugEcho("validate_poster: post postie_author $poster");
            } else {
                DebugEcho("validate_poster $user_ID does not have 'post_via_postie' permissions");
                $user_ID = "";
            }
        }

        if (empty($user_ID) && ($config['turn_authorization_off'] || $this->is_email_authorized($from, $config['authorized_addresses']) || $this->is_email_authorized($resentFrom, $config['authorized_addresses']))) {
            DebugEcho("validate_poster: looking up default user " . $config['admin_username']);
            $user = get_user_by('login', $config['admin_username']);
            if ($user === false) {
                EchoError("Your 'Default Poster' setting '" . $config['admin_username'] . "' is not a valid WordPress user (2)");
                $poster = 1;
            } else {
                $poster = $user->ID;
                DebugEcho("validate_poster: pre postie_author (default) $poster");
                $poster = apply_filters("postie_author", $poster);
                DebugEcho("validate_poster: post postie_author (default) $poster");
            }
            DebugEcho("validate_poster: found user '$poster'");
        }

        if (!$poster) {
            EchoError('Invalid sender: ' . htmlentities($from) . "! Not adding email!");
            if ($config['forward_rejected_mail']) {
                $this->email_reject($mimeDecodedEmail, array(get_option('admin_email')), $config['return_to_sender']);
                EchoError("A copy of the message has been forwarded to the administrator.");
            }
            return '';
        }

        //actually log in as the user
        if ($config['force_user_login'] == true) {
            $user = get_user_by('id', $poster);
            if ($user) {
                DebugEcho("validate_poster: logging in as {$user->user_login}");
                wp_set_current_user($poster);
                //wp_set_auth_cookie($poster);
                do_action('wp_login', $user->user_login, $user);
            } else {
                DebugEcho("validate_poster: couldn't find $poster to force login");
            }
        }
        return $poster;
    }

    function postie_environment_encoding($force_display = false) {
        $default_charset = ini_get('default_charset');
        if (version_compare(phpversion(), '5.6.0', '<')) {
            if (empty($default_charset)) {
                DebugEcho("default_charset: WARNING no default_charset set see http://php.net/manual/en/ini.core.php#ini.default-charset", true);
            } else {
                DebugEcho("default_charset: $default_charset", $force_display);
            }
        } else {
            if (empty($default_charset)) {
                DebugEcho("default_charset: UTF-8 (default)", $force_display);
            } else {
                DebugEcho("default_charset: $default_charset", $force_display);
            }
        }

        if (defined('DB_CHARSET')) {
            DebugEcho("DB_CHARSET: " . DB_CHARSET, $force_display);
        } else {
            DebugEcho("DB_CHARSET: undefined (utf8)", $force_display);
        }

        if (defined('DB_COLLATE')) {
            $db_collate = DB_COLLATE;
            if (empty($db_collate)) {
                DebugEcho("DB_COLLATE: database default", $force_display);
            } else {
                DebugEcho("DB_COLLATE: " . DB_COLLATE, $force_display);
            }
        }

        DebugEcho("WordPress encoding: " . esc_attr(get_option('blog_charset')), $force_display);
    }

    function postie_environment($force_display = false) {
        global $g_postie_init;
        global $wpdb;

        DebugEcho("OS: " . php_uname(), $force_display);
        DebugEcho("PHP version: " . phpversion(), $force_display);
        DebugEcho("PHP error_log: " . ini_get('error_log'), $force_display);
        DebugEcho("PHP log_errors: " . (ini_get('log_errors') ? 'On' : 'Off'), $force_display);
        DebugEcho("PHP get_temp_dir: " . get_temp_dir(), $force_display);
        DebugEcho("PHP disable_functions: " . ini_get('disable_functions'), $force_display);
        if (function_exists('curl_version')) {
            $cv = curl_version();
            DebugEcho("PHP cURL version: " . $cv['version'], $force_display);
        }

        DebugEcho("MySQL Version: " . $wpdb->db_version(), $force_display);

        DebugEcho("WordPress Version: " . get_bloginfo('version'), $force_display);
        if (defined('MULTISITE') && MULTISITE) {
            DebugEcho("WordPress Multisite", $force_display);
            DebugEcho("network_home_url(): " . network_home_url(), $force_display);
        } else {
            DebugEcho("WordPress Singlesite", $force_display);
        }
        DebugEcho("WP_TEMP_DIR: " . (defined('WP_TEMP_DIR') ? WP_TEMP_DIR : '(none)'), $force_display);
        DebugEcho("WP_HOME: " . (defined('WP_HOME') ? WP_HOME : '(none)'), $force_display);
        DebugEcho("home_url(): " . home_url(), $force_display);
        DebugEcho("WP_SITEURL: " . (defined('WP_SITEURL') ? WP_SITEURL : '(none)'), $force_display);
        DebugEcho("site_url(): " . site_url(), $force_display);

        if (defined('WP_DEBUG')) {
            DebugEcho("WP_DEBUG: " . (WP_DEBUG === true ? 'On' : 'Off'), $force_display);
        } else {
            DebugEcho("WP_DEBUG: Off", $force_display);
        }

        if (defined('WP_DEBUG_DISPLAY')) {
            if (null == WP_DEBUG_DISPLAY) {
                DebugEcho("WP_DEBUG_DISPLAY: null", $force_display);
            } else {
                DebugEcho("WP_DEBUG_DISPLAY: " . (WP_DEBUG_DISPLAY === true ? 'On' : 'Off'), $force_display);
            }
        } else {
            DebugEcho("WP_DEBUG_DISPLAY: Off", $force_display);
        }

        if (defined('WP_DEBUG_LOG')) {
            DebugEcho("WP_DEBUG_LOG: " . (WP_DEBUG_LOG === true ? 'On' : 'Off'), $force_display);
        } else {
            DebugEcho("WP_DEBUG_LOG: Off", $force_display);
        }

        if (defined('ALTERNATE_WP_CRON') && ALTERNATE_WP_CRON) {
            DebugEcho("Alternate cron is enabled", $force_display);
        }

        if (defined('DISABLE_WP_CRON') && DISABLE_WP_CRON) {
            DebugEcho("WordPress cron is disabled. Postie will not run unless you have an external cron set up.", $force_display);
        }

        if (defined('WP_MAX_MEMORY_LIMIT ')) {
            DebugEcho("WP_MAX_MEMORY_LIMIT: " . WP_MAX_MEMORY_LIMIT, $force_display);
        } else {
            DebugEcho("WP_MAX_MEMORY_LIMIT: 256M (default)", $force_display);
        }

        if (defined('WP_MEMORY_LIMIT')) {
            DebugEcho("WP_MEMORY_LIMIT: " . WP_MEMORY_LIMIT, $force_display);
        } else {
            DebugEcho("WP_MEMORY_LIMIT: 32M (default)", $force_display);
        }

        DebugEcho("imagick version: " . phpversion('imagick'), $force_display);
        DebugEcho("gd version: " . phpversion('gd'), $force_display);

        require_once ABSPATH . WPINC . '/class-wp-image-editor.php';
        require_once ABSPATH . WPINC . '/class-wp-image-editor-gd.php';
        require_once ABSPATH . WPINC . '/class-wp-image-editor-imagick.php';
        $implementations = apply_filters('wp_image_editors', array('WP_Image_Editor_Imagick', 'WP_Image_Editor_GD'));
        foreach ($implementations as $implementation) {
            if (!call_user_func(array($implementation, 'test'))) {
                DebugEcho("image editor not supported: $implementation", $force_display);
                continue;
            } else {
                DebugEcho("image editor supported: $implementation", $force_display);

                foreach (array('image/jpeg', 'image/png', 'image/gif') as $mtype) {
                    if (!call_user_func(array($implementation, 'supports_mime_type'), $mtype)) {
                        DebugEcho("$implementation does not support: $mtype", $force_display);
                    } else {
                        DebugEcho("$implementation supports: $mtype", $force_display);
                    }
                }
            }
        }

        DebugEcho("Registered image sizes", $force_display);
        DebugDump(get_intermediate_image_sizes());
        $this->show_filters_for('image_downsize');
        $this->show_filters_for('wp_handle_upload');
        $this->show_filters_for('wp_get_attachment_thumb_file');
        $this->show_filters_for('wp_handle_upload_prefilter');
        $this->show_filters_for('wp_handle_sideload_prefilter');
        $this->show_filters_for('pre_move_uploaded_file');

        DebugEcho("image memory limit: " . apply_filters('image_memory_limit', WP_MAX_MEMORY_LIMIT), $force_display);

        DebugEcho("DISABLE_WP_CRON: " . (defined('DISABLE_WP_CRON') && DISABLE_WP_CRON === true ? 'On' : 'Off'), $force_display);
        DebugEcho("ALTERNATE_WP_CRON: " . (defined('ALTERNATE_WP_CRON') && ALTERNATE_WP_CRON === true ? 'On' : 'Off'), $force_display);

        if (defined('WP_CRON_LOCK_TIMEOUT')) {
            DebugEcho("WP_CRON_LOCK_TIMEOUT: " . WP_CRON_LOCK_TIMEOUT, $force_display);
        }

        if ($g_postie_init->postie_IsIconvInstalled()) {
            DebugEcho("iconv: present", $force_display);
        } else {
            DebugEcho("iconv: missing", $force_display);
        }

        DebugEcho('Active plugins', $force_display);
        DebugDump(get_option('active_plugins'));

        DebugEcho("Postie is in " . plugin_dir_path(__FILE__), $force_display);
        DebugEcho("Postie Version: " . POSTIE_VERSION, $force_display);
        DebugEcho("POSTIE_DEBUG: " . ($this->is_debugmode() ? 'On' : 'Off'), $force_display);

        $this->show_filters_for('postie_filter_email');
        $this->show_filters_for('postie_filter_email2');
        $this->show_filters_for('postie_filter_email3');
        $this->show_filters_for('postie_author');
        $this->show_filters_for('postie_post_before');
        $this->show_filters_for('postie_post_after');
        $this->show_filters_for('postie_file_added');
        $this->show_filters_for('postie_gallery');
        $this->show_filters_for('postie_comment_before');
        $this->show_filters_for('postie_comment_after');
        $this->show_filters_for('postie_category_default');
        $this->show_filters_for('postie_log_debug');
        $this->show_filters_for('postie_log_error');
        $this->show_filters_for('postie_session_start');
        $this->show_filters_for('postie_session_end');
        $this->show_filters_for('postie_preconnect');
        $this->show_filters_for('postie_post_pre');
        $this->show_filters_for('postie_email_reject_recipients');
        $this->show_filters_for('postie_email_notify_recipients');
        $this->show_filters_for('postie_email_reject_subject');
        $this->show_filters_for('postie_email_notify_subject');
        $this->show_filters_for('postie_email_reject_body');
        $this->show_filters_for('postie_place_media');
        $this->show_filters_for('postie_place_media_before');
        $this->show_filters_for('postie_place_media_after');
        $this->show_filters_for('postie_raw');
        $this->show_filters_for('postie_bare_link');
        $this->show_filters_for('postie_category');
        $this->show_filters_for('postie_file_added_pre');
        $this->show_filters_for('postie_include_attachment');
    }

    function is_debugmode() {
        return (defined('POSTIE_DEBUG') && POSTIE_DEBUG == true);
    }

    function log_onscreen($data) {
        if (php_sapi_name() == "cli") {
            print( "$data\n");
        } else {
            //flush the buffers
            while (ob_get_level() > 0) {
                ob_end_flush();
            }
            print( "<pre>" . htmlspecialchars($data) . "</pre>\n");
        }
    }

    function log_error($v) {
        $this->log_onscreen($v);
        error_log("Postie [error]: $v");
    }

    function log_debug($data) {
        error_log("Postie [debug]: $data");
    }

    function connection_info($config) {
        $conninfo = array();
        $conninfo['mail_server'] = $config['mail_server'];
        $conninfo['mail_port'] = $config['mail_server_port'];
        $conninfo['mail_user'] = $config['mail_userid'];
        $conninfo['mail_password'] = $config['mail_password'];
        $conninfo['mail_protocol'] = $config['input_protocol'];
        $conninfo['mail_tls'] = $config['email_tls'];
        $conninfo['email_delete_after_processing'] = $config['delete_mail_after_processing'];
        $conninfo['email_max'] = $config['maxemails'];
        $conninfo['email_ignore_state'] = $config['ignore_mail_state'];

        return apply_filters('postie_preconnect', $conninfo);
    }

    function test_config() {

        wp_get_current_user();

        if (!current_user_can('manage_options')) {
            DebugEcho("non-admin tried to set options");
            echo "<h2> Sorry only admin can run this file</h2>";
            exit();
        }

        $config = postie_config_read();
        if (true == $config['postie_log_error'] || (defined('POSTIE_DEBUG') && true == POSTIE_DEBUG)) {
            add_action('postie_log_error', array($this, 'log_error'));
        }
        if (true == $config['postie_log_debug'] && !defined('POSTIE_DEBUG')) {
            define('POSTIE_DEBUG', true);
        }
        if (true == $config['postie_log_debug'] || (defined('POSTIE_DEBUG') && true == POSTIE_DEBUG)) {
            add_action('postie_log_debug', array($this, 'log_debug'));
        }
        ?>
        <div class="wrap"> 
            <h1>Postie Configuration Test</h1>
            <?php
            $this->postie_environment(true);
            ?>

            <h2>Clock</h2>
            <p>This shows what time it would be if you posted right now</p>
            <?php
            $wptz = get_option('gmt_offset');
            $wptzs = get_option('timezone_string');
            DebugEcho("Wordpress timezone: $wptzs ($wptz)", true);
            DebugEcho("Current time: " . current_time('mysql'), true);
            DebugEcho("Current time (gmt): " . current_time('mysql', 1), true);
            DebugEcho("Postie time correction: {$config['time_offset']}", true);
            $offsetdate = strtotime(current_time('mysql')) + ($config['use_time_offset'] ? $config['time_offset'] * 3600 : 0);

            DebugEcho("Post time: " . date('Y-m-d H:i:s', $offsetdate), true);
            ?>
            <h2>Encoding</h2>
            <?php
            $this->postie_environment_encoding(true);
            ?>

            <h2>Connect to Mail Host</h2>
            <?php
            DebugEcho("Postie connection: " . $config['input_connection'], true);
            DebugEcho("Postie protocol: " . $config['input_protocol'], true);
            DebugEcho("Postie server: " . $config['mail_server'], true);
            DebugEcho("Postie port: " . $config['mail_server_port'], true);

            if (!$config['mail_server'] || !$config['mail_server_port'] || !$config['mail_userid']) {
                EchoError("FAIL - server settings not complete");
            }

            $conninfo = $this->connection_info($config);
            if ($this->is_debugmode()) {
                fCore::enableDebugging(true);
                fCore::registerDebugCallback('DebugEcho');
            }

            switch (strtolower($config['input_protocol'])) {
                case 'imap':
                case 'imap-ssl':
                    try {
                        if ($config['input_connection'] == 'curl') {
                            $conn = new pCurlConnection('imap', $conninfo['mail_server'], $conninfo['mail_user'], $conninfo['mail_password'], $conninfo['mail_port'], ($conninfo['mail_protocol'] == 'imap-ssl' || $conninfo['mail_protocol'] == 'pop3-ssl'));
                        } else {
                            $conn = new pSocketConnection('imap', $conninfo['mail_server'], $conninfo['mail_user'], $conninfo['mail_password'], $conninfo['mail_port'], ($conninfo['mail_protocol'] == 'imap-ssl' || $conninfo['mail_protocol'] == 'pop3-ssl'));
                        }
                        $srv = new pImapMailServer($conn);
                        $mailbox = new fMailbox('imap', $conn, $srv);
                        $m = $mailbox->countMessages();
                        DebugEcho("Successful " . strtoupper($config['input_protocol']) . " connection on port {$config['mail_server_port']}", true);
                        DebugEcho("# of waiting messages: $m", true);
                        $mailbox->close();
                    } catch (Exception $e) {
                        EchoError("Unable to connect. The server said: " . $e->getMessage());
                    }
                    break;

                case 'pop3':
                case 'pop3-ssl':
                    try {
                        if ($config['input_connection'] == 'curl') {
                            $conn = new pCurlConnection('pop3', $conninfo['mail_server'], $conninfo['mail_user'], $conninfo['mail_password'], $conninfo['mail_port'], ($conninfo['mail_protocol'] == 'imap-ssl' || $conninfo['mail_protocol'] == 'pop3-ssl'), 30);
                        } else {
                            $conn = new pSocketConnection('pop3', $conninfo['mail_server'], $conninfo['mail_user'], $conninfo['mail_password'], $conninfo['mail_port'], ($conninfo['mail_protocol'] == 'imap-ssl' || $conninfo['mail_protocol'] == 'pop3-ssl'));
                        }
                        $srv = new pPop3MailServer($conn);
                        $mailbox = new fMailbox('pop3', $conn, $srv);
                        $m = $mailbox->countMessages();
                        DebugEcho("Successful " . strtoupper($config['input_protocol']) . " connection on port {$config['mail_server_port']}", true);
                        DebugEcho("# of waiting messages: $m", true);
                        $mailbox->close();
                    } catch (Exception $e) {
                        EchoError("Unable to connect. The server said:");
                        EchoError($e->getMessage());
                    }
                    break;
                default:
                    EchoError("Unable to connect. Invalid setup");
                    break;
            }
            ?>
        </div>
        <?php
        DebugEcho("Test complete");
    }

}

global $g_postie; //need to declare as global for wp cli
$g_postie = new Postie();
