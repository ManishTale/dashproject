<?php 
if(empty($addons->prices_variations))
	$addons->prices_variations = '';

include_once(ROOT.DS.'includes'.DS.'functions.php');
$dg = new dg();

if ($dg->platform == 'wordpress') {
?>
<input type='hidden' class='prices_variations' value='<?php echo $addons->prices_variations; ?>' name='product[prices_variations]' />

<?php } ?>