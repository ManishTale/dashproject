<?php
if ( ! defined('ROOT')) exit('No direct script access allowed');
class qrcode
{
	private $data;
	private $filename;
	private $qr;
	public function __construct(){
		include "qrcode/E_qrcode.php";
		$this->filename = 'qrcode.png';
		
		$this->qr = new E_qrcode();
	}
		
	public function setText($text){
		$this->data = $text;
	}
	
	public function getImage($size = 150, $EC_level = 'L', $margin = '0'){
		$config = array(
			'text'=>$this->data,
			'type'=>'png',
			'quality'=>$EC_level,
			'size'=>$size,
			'margin'=>$margin,
		);
		$this->qr->setQrCode($this->filename, $config);
		if(file_exists(ROOT.DS.'qrcode.png'))
			return file_get_contents(ROOT.DS.'qrcode.png');
		else
			return '';
	}
	
	public function getLink($size = 150, $EC_level = 'L', $margin = '0'){
		$config = array(
			'text'=>$this->data,
			'type'=>'png',
			'quality'=>$EC_level,
			'size'=>$size,
			'margin'=>$margin,
		);
		$this->qr->setQrCode($this->filename, $config);
		if(file_exists(ROOT.DS.'qrcode.png'))
			return file_get_contents(ROOT.DS.'qrcode.png');
		else
			return '';
	}
}
?>