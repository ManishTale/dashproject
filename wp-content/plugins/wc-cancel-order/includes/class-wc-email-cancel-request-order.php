<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly
}


if(!class_exists('WC_Email_Cancel_Request_Order')):

    class WC_Email_Cancel_Request_Order extends WC_Email {
        /**
         * Constructor
         */
        function __construct() {

            $this->id = 'cancel_request_order';
            $this->title = __( 'Cancellation request', 'wc-cancel-order' );
            $this->description= __( 'This is an order notification sent to the admin when customer send the order cancellation request.', 'wc-cancel-order' );
            $this->heading = __( 'Order cancellation request received', 'wc-cancel-order' );
            $this->subject      = __( 'Order No: {order_number} cancellation request received', 'wc-cancel-order' );
            $this->template_base = WC_CANCEL_DIR.'/templates/';
            $this->template_html = 'emails/cancel-request-order.php';
            $this->template_plain = 'emails/plain/cancel-request-order.php';
            $this->recipient = $this->get_option( 'recipient', get_option( 'admin_email' ) );
	        $this->placeholders   = array(
		        '{site_title}'   => $this->get_blogname(),
		        '{order_date}'   => '',
		        '{order_number}' => '',
	        );

            parent::__construct();
        }

        /**
         * trigger function.
         *
         * @access public
         * @return void
         */
        function trigger( $order_id ) {
	        $this->setup_locale();
	        $order = wc_get_order( $order_id );
	        if ( is_a( $order, 'WC_Order' ) ) {
		        $this->object                         = $order;
		        $this->placeholders['{order_date}']   = wc_format_datetime( $this->object->get_date_created() );
		        $this->placeholders['{order_number}'] = $this->object->get_order_number();
	        }

	        if ( $this->is_enabled() && $this->get_recipient() ) {
		        $this->send( $this->get_recipient(), $this->get_subject(), $this->get_content(), $this->get_headers(), $this->get_attachments() );
	        }
	        $this->restore_locale();
        }

        /**
         * get_content_html function.
         *
         * @access public
         * @return string
         */
        function get_content_html() {

            return wc_get_template_html(
                $this->template_html,
                array(
                'order' => $this->object,
                'email_heading' => $this->get_heading(),
                'sent_to_admin' => true,
                'plain_text'=>false,
                'email' => $this),
                '',
	            $this->template_base);

        }

        /**
         * get_content_plain function.
         *
         * @access public
         * @return string
         */
        function get_content_plain() {

            return wc_get_template_html(
                $this->template_plain,
                array(
                'order' => $this->object,
                'email_heading' => $this->get_heading(),
                'sent_to_admin' => true,
                'plain_text'=>true,
                'email' => $this),
                '',
	            $this->template_base);

        }

        function init_form_fields() {
            $this->form_fields = array(
                'enabled' => array(
                    'title'         => __( 'Enable/Disable', 'wc-cancel-order' ),
                    'type'          => 'checkbox',
                    'label'         => __( 'Enable this email notification', 'wc-cancel-order' ),
                    'default'       => 'yes'
                ),
                'recipient' => array(
                    'title'         => __( 'Recipient(s)', 'wc-cancel-order' ),
                    'type'          => 'text',
                    'description'   => sprintf( __( 'Enter recipients (comma separated) for this email. Defaults to <code>%s</code>.', 'wc-cancel-order' ), esc_attr( get_option('admin_email') ) ),
                    'placeholder'   => '',
                    'default'       => esc_attr( get_option('admin_email') ),
                    'desc_tip'      => true
                ),
                'subject' => array(
                    'title'         => __( 'Subject', 'wc-cancel-order' ),
                    'type'          => 'text',
                    'description'   => sprintf( __( 'This controls the email subject line. Leave blank to use the default subject: <code>%s</code>.', 'wc-cancel-order' ), $this->subject ),
                    'placeholder'   => '',
                    'default'       => '',
                    'desc_tip'      => true
                ),
                'heading' => array(
                    'title'         => __( 'Email Heading', 'wc-cancel-order' ),
                    'type'          => 'text',
                    'description'   => sprintf( __( 'This controls the main heading contained within the email notification. Leave blank to use the default heading: <code>%s</code>.', 'wc-cancel-order' ), $this->heading ),
                    'placeholder'   => '',
                    'default'       => '',
                    'desc_tip'      => true
                ),
                'email_type' => array(
                    'title'         => __( 'Email type', 'wc-cancel-order' ),
                    'type'          => 'select',
                    'description'   => __( 'Choose which format of email to send.', 'wc-cancel-order' ),
                    'default'       => 'html',
                    'class'         => 'email_type wc-enhanced-select',
                    'options'       => $this->get_email_type_options(),
                    'desc_tip'      => true
                )
            );
        }

    }

endif;