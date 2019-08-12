<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: November 26 2015
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$data			= $GLOBALS['data'];
$lang			= $GLOBALS['lang'];
$dg				= $GLOBALS['dg'];

if (isset($data['print_type']))
{
	$printing = $dg->getPrintingType($data['print_type']);
	if (isset($printing->title))
		$title	= $printing->title;
	else
		$title	= lang($data['print_type'], true);
	
	$result = $params['result'];
	$result->options[] = array(
		'name' => $lang['designer_printing_type'],
		'type' => 'printing',
		'value' => $title,
	);
	$GLOBALS['result'] = $result;
}
?>