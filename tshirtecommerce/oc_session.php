<?php 

$session_id = isset($_GET['session_id']) ? $_GET['session_id'] : (isset($_COOKIE['designer_session_id']) ? $_COOKIE['designer_session_id'] : '');

$config_file = dirname(dirname(__FILE__)).'/config.php';
$path = dirname(dirname(__FILE__));
if (!file_exists($config_file)) {
	$config_file = dirname($path).'/config.php';
	$path = dirname($path);
}

if (file_exists($config_file)) {
	include($config_file);

	include($path.'/system/library/db/'.DB_DRIVER.'.php');

	$db_file = $path.'/system/library/db.php';
	if (file_exists($db_file)) {
		include($db_file);

		$db = new Db(DB_DRIVER, DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);

		$query = $db->query("SHOW TABLES LIKE '".DB_PREFIX."tshirtecommerce_session'");
		if ($query->rows) { /* opencart 1 + 2 */
			$query = $db->query("
				SELECT `data` 
				FROM `" . DB_PREFIX . "tshirtecommerce_session` 
				WHERE session_id = '" . $db->escape($session_id) . "' AND expire > " . (int)time()
			);
		} else { /* opencart 3 */
			$query = $db->query("
				SELECT `data` 
				FROM `" . DB_PREFIX . "session` 
				WHERE session_id = '" . $db->escape($session_id) . "' AND expire > " . (int)time()
			);
		}

		$current_session = array();
		if ($query->rows) {
			$current_session = json_decode($query->row['data'], true);
		}

		if (is_session_started() === false) session_start();

		if (count($current_session) && isset($current_session['is_admin']) && isset($current_session['is_admin']['login']) && $current_session['is_admin']['login'] == 1) {
			$_SESSION['is_admin'] = $current_session['is_admin'];
		}
	}
}

function is_session_started()
{
    if ( php_sapi_name() !== 'cli' ) {
        if ( version_compare(phpversion(), '5.4.0', '>=') ) {
            return session_status() === PHP_SESSION_ACTIVE ? true : false;
        } else {
            return session_id() === '' ? false : true;
        }
    }
    return false;
}