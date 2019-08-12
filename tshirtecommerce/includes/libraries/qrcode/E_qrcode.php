<?php

	/*
	* $config = array($text, $type, $quality, $size, $margin, $back_color, $fore_color, $saveandprint);
	* $text = 'Content Qrcode';
	* $type = png, text, eps, raw, svg;
	* $quality = L, M, Q, H;
	* $size = 10;
	* $margin = 0;
	* $saveandprint = true;
	* $back_color = 0xffffff;
	* $fore_color = 0x000000;
	*/
	
	include "qrlib.php";
	
	class E_qrcode
	{
		private $text = '';
		private $quality = 'H';
		private $size = 10;
		private $margin = 1;
		private $saveandprint = false;
		private $back_color = 0xffffff;
		private $fore_color = 0x000000;
	
		function SetQrCode($filename, $config = array())
		{
			if(isset($config['type']) && ($config['type'] == 'png' || $config['type'] == 'text' || $config['type'] == 'eps' || $config['type'] == 'raw' ))
				$type = $config['type'];
			else
				$type = 'svg';
				
			if(isset($config['text']) && $config['text'] != '')
				$this->text = $config['text'];
				
			if(isset($config['quality']) && ($config['quality'] == 'L' || $config['quality'] == 'M' || $config['quality'] == 'Q'))
				$this->quality = $config['quality'];
				
			if(isset($config['size']) && (int)$config['size'] > 0)
				$this->size = $config['size'];	
				
			if(isset($config['margin']) && (int)$config['margin'] > 0)
				$this->margin = $config['margin'];
			
			if(isset($config['saveandprint']) && $config['saveandprint'] == true)
				$this->saveandprint = $config['saveandprint'];
				
			if(isset($config['back_color']) && $config['back_color'] != '')
				$this->back_color = $config['back_color'];
				
			if(isset($config['fore_color']) && $config['fore_color'] != '')
				$this->fore_color = $config['fore_color'];
				
			EQRcode::$type($this->text, $filename, $this->quality, $this->size, $this->margin, $this->saveandprint, $this->back_color, $this->fore_color); 
		}
	}


?>