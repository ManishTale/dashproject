<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-11-26
 *
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

$settings 	= $GLOBALS['settings'];	
$addons 	= $GLOBALS['addons'];

$is_store = false;
if (isset($settings->store) && isset($settings->store->enable) && $settings->store->enable == 1)
{
	$is_store = true;
}
if($is_store == true) {
?>
<li <?php echo cssShow($settings, 'show_ideas'); ?> class="design_ideas_element" onclick="menu_options.show('ideas');">
	<a href="javascript:void(0);" onclick="design.store.ideas.load(this)" class="dg-tooltip" data-placement="right" data-original-title="<?php echo $addons->__('addon_store_idea'); ?>">
		<i class="glyph-icon flaticon-idea"></i> <span><?php echo $addons->__('addon_store_idea'); ?></span>
	</a>
</li>
<?php } ?>