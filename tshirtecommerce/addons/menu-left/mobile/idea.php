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
if (isset($settings->store) && isset($settings->store->enable) && isset($settings->store->api) && $settings->store->api != '' && isset($settings->store->verified) && $settings->store->verified == 1)
{
	$is_store = true;
}
if($is_store == true) {
?>
<li <?php echo cssShow($settings, 'show_ideas'); ?> class="design_ideas_element">
	<a href="#dg-design-ideas" onclick="design.store.ideas.load(this)">
		<i class="glyph-icon flaticon-idea"></i> <span><?php echo $addons->__('addon_store_idea'); ?></span>
	</a>
</li>
<?php } ?>