<?php
if(function_exists('write_to_file'))
{
	function tshirt_session_file($data)
	{
		if(!defined('ROOT'))
		{
			define('ROOT', dirname(__FILE__));
		}
		if(!defined('DS'))
		{
			define('DS', DIRECTORY_SEPARATOR);
		}

		$file 	= ROOT .DS. 'session.php';

		$path 	= ROOT .DS. 'temp';
		$content 	= '<?php session_save_path("'.$path.DS.'"); ?>';

		$reload	= false;
		if( !file_exists($file) )
		{
			$check 	= true;
			if (!file_exists( $path ) )
			{
				$check = mkdir( $path, 0755 );
			}

			if( $check === true )
			{
				$reload = write_to_file($content, $file);
			}
		}
		else
		{
			$reload = write_to_file($content, $file);
		}

		return $reload;
	}
}
?>