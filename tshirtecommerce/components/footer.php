<?php
if ( ! defined('ROOT') ) exit('No direct script access allowed');
?>

<div class="o-colors" style="display:none;">		
	<div class="other-colors"></div>
</div>

<div id="cacheText"></div>

<div id="id_login"></div>
<div id="save-confirm" title="<?php echo lang('designer_user_login_now_or_sign_up'); ?>" style="display:none;">
	<p><?php echo lang('designer_saved_design'); ?></p>
</div>
	
<?php if (isset($product->design)) {?>
<script type="text/javascript">
	var items = {};
	items['design'] = {};
	<?php 
	$js = '';
	$elment = count($product->design->color_hex);
	for($i=0; $i<$elment; $i++)
	{			
		$js .= "items['design'][$i] = {};";
		$js .= "items['design'][$i]['color'] = \"".$product->design->color_hex[$i]."\";";
		$js .= "items['design'][$i]['title'] = \"".$product->design->color_title[$i]."\";";
		$postions	= array('front', 'back', 'left', 'right');
		foreach ($postions as $v)
		{
			if(isset($product->design->$v))
			{
				$view = $product->design->$v;
				if (count($view) > 0) 
				{
					if (isset($view[$i]) == true)
					{
						$item = (string) $view[$i];						
						$js .= "items['design'][".$i."]['".$v."']=\"".$item."\";";						
					}
					else
					{
						$js .= "items['design'][$i]['$v'] = '';";
					}
				}
				else
				{
					$js .= "items['design'][$i]['$v'] = '';";
				}	
			}
			else
			{
				$js .= "items['design'][$i]['$v'] = '';";
			}
		}
	}
	echo $js;
	?>
	items['area']	= {};
	items['area']['front']		= "<?php echo $product->design->area->front; ?>";
	items['area']['back']		= "<?php echo $product->design->area->back; ?>";
	items['area']['left']		= "<?php echo $product->design->area->left; ?>";
	items['area']['right']		= "<?php echo $product->design->area->right; ?>";		
	items['params']				= [];		
	items['params']['front']	= "<?php echo $product->design->params->front; ?>";		
	items['params']['back']		= "<?php echo $product->design->params->back; ?>";		
	items['params']['left']		= "<?php echo $product->design->params->left; ?>";		
	items['params']['right']	= "<?php echo $product->design->params->right; ?>";		
</script>
<?php } ?>

<?php 
// load design
$color = '-1';
$design_id = '';
$designer_id = '';
if (isset($_GET['color']))
{
	$color = $_GET['color'];
}

if (isset($_GET['user']))
{
	$designer_id = $_GET['user'];
}

if (isset($_GET['id']))
{
	$design_id = $_GET['id'];
}
?>
<script type="text/javascript">
jQuery(document).ready(function(){
	jQuery('[data-toggle="tooltip"]').tooltip();
	<?php if( $color  != '-1' ){ ?>
	design.imports.productColor('<?php echo $color; ?>');
	<?php } ?>
	
	<?php if( $design_id  != '' && empty( $_GET['cart_id'] ) ){ ?>
	design.imports.loadDesign('<?php echo $design_id; ?>', '<?php echo $designer_id; ?>');
	<?php } ?>
	
	// load design cart
	<?php if (isset($_GET['cart_id'])) { ?>
	design.imports.cart('<?php echo $_GET['cart_id']; ?>');
	<?php } ?>
	<?php if(empty($addons->is_mobile)) { ?>
	if(typeof window.parent.setHeigh != 'undefined')
	{
		window.parent.setHeigh(jQuery('#dg-wapper').height());
	}
	<?php } ?>
});
var currency_postion = '<?php if(isset($settings->currency_postion)) echo $settings->currency_postion;?>';
</script>
<?php if (isset($dg->platform)) { ?>
	<?php if ($dg->platform == 'prestashop') { ?>
	<!-- prestashop override -->
	<script type="text/javascript" src="prestashop/js/front-prestashop.js"></script>
	<?php } elseif ($dg->platform == 'opencart') { ?>
	<!-- opencart override -->
	<script type="text/javascript" src="opencart/js/front-opencart.js"></script>
	<?php } ?>
<?php } ?>

<script type="text/javascript">
function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return min; 
    else if(parseInt(value) > max) 
        return max; 
    else return value;
}
</script>