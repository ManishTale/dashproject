<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-03-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
//echo '<pre>'; print_r($values); exit;
$acreage_fronts = array();
if ( array_key_exists( 'front', $values ) && $price_type == 'acreage') $acreage_fronts = $values['front'];
else $acreage_fronts = array('quatity' => array(5), 'prices' => array( array(0) ));

$acreage_lefts = array();
if ( array_key_exists( 'left', $values ) && $price_type == 'acreage') $acreage_lefts = $values['left'];
else $acreage_lefts = array('quatity' => array(5), 'prices' => array( array(0) ));

$acreage_rights = array();
if ( array_key_exists( 'right', $values ) && $price_type == 'acreage') $acreage_rights = $values['right'];
else $acreage_rights = array('quatity' => array(5), 'prices' => array( array(0) ));

$acreage_backs = array();
if ( array_key_exists( 'back', $values ) && $price_type == 'acreage') $acreage_backs = $values['back'];
else $acreage_backs = array('quatity' => array(5), 'prices' => array( array(0) ));
 
?>

<div id='price-type-acreage-tab' class='price-type-tab <?php if ($price_type != 'acreage') echo 'hidden' ?>'>
	<ul class='nav nav-tabs <?php if ( $view == 0 ) echo 'hidden'; ?> ' role='tablist'>
		<li id='li-acreage-view-front' role='presentation' class='active'>
			<a href='#acreage-view-front' aria-controls="acreage-view-front" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_front'] ?>
			</a>
		</li>
		<li id='li-acreage-view-back' role='presentation'>
			<a href='#acreage-view-back' aria-controls="acreage-view-back" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_back'] ?>
			</a>
		</li>
		<li id='li-acreage-view-left' role='presentation'>
			<a href='#acreage-view-left' aria-controls="acreage-view-left" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_left'] ?>
			</a>
		</li>
		<li id='li-acreage-view-right' role='presentation'>
			<a href='#acreage-view-right' aria-controls="acreage-view-right" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_right'] ?>
			</a>
		</li>
	</ul>
	<div class="tab-content" style='border:none !important;padding: 16px 0px!important'>
		<div role="tabpanel" class="tab-pane active" id="acreage-view-front">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'><?php echo $addons->lang['addon_printing_table_head_first_acreage'] ?></th>
						<th class='th-1 center'><?php echo $addons->lang['addon_printing_table_head_first_acreage_cm'] ?></th>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $acreage_fronts['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='acreage_quantity_front[]' 
									value='<?php echo $acreage_fronts['quatity'][$i-1] ?>' />
							</td>
							<td class='td-1 center'>
								<input onkeypress='return printings_validate_num(event, this)' 
								name='acreage_prices_front[0][]' onblur='printings_check_blank(this)' 
								class='form-control' type='text' value='<?php echo $acreage_fronts['prices'][ $i - 1 ][0]; ?>' />
							</td>
							<td class='td-last center'>
								<a href='javascript:void(0)' onclick='printings_remove_table_row(this)' 
									class='btn btn-danger btn-xs' title='Remove'><i class='fa fa-times'></i>
								</a>
							</td>
						</tr>
						<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
		<div role="tabpanel" class="tab-pane" id="acreage-view-back">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'><?php echo $addons->lang['addon_printing_table_head_first_acreage'] ?></th>
						<th class='th-1 center'><?php echo $addons->lang['addon_printing_table_head_first_acreage_cm'] ?></th>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $acreage_backs['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='acreage_quantity_back[]' 
									value='<?php echo $acreage_backs['quatity'][$i-1] ?>' />
							</td>
							
							<td class='td-1 center'>
								<input onkeypress='return printings_validate_num(event, this)' 
								name='acreage_prices_back[0][]' onblur='printings_check_blank(this)' 
								class='form-control' type='text' value='<?php echo $acreage_backs['prices'][ $i - 1 ][0]; ?>' />
							</td>
							<td class='td-last center'>
								<a href='javascript:void(0)' onclick='printings_remove_table_row(this)' 
									class='btn btn-danger btn-xs' title='Remove'><i class='fa fa-times'></i>
								</a>
							</td>
						</tr>
						<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
		<div role="tabpanel" class="tab-pane" id="acreage-view-left">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'><?php echo $addons->lang['addon_printing_table_head_first_acreage'] ?></th>
						<th class='th-1 center'><?php echo $addons->lang['addon_printing_table_head_first_acreage_cm'] ?></th>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $acreage_lefts['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='acreage_quantity_left[]' 
									value='<?php echo $acreage_lefts['quatity'][$i-1] ?>' />
							</td>
							<td class='td-1 center'>
								<input onkeypress='return printings_validate_num(event, this)' 
								name='acreage_prices_left[0][]' onblur='printings_check_blank(this)' 
								class='form-control' type='text' value='<?php echo $acreage_lefts['prices'][ $i - 1 ][0]; ?>' />
							</td>
							<td class='td-last center'>
								<a href='javascript:void(0)' onclick='printings_remove_table_row(this)' 
									class='btn btn-danger btn-xs' title='Remove'><i class='fa fa-times'></i>
								</a>
							</td>
						</tr>
						<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
		<div role="tabpanel" class="tab-pane" id="acreage-view-right">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'><?php echo $addons->lang['addon_printing_table_head_first_acreage'] ?></th>
						<th class='th-1 center'><?php echo $addons->lang['addon_printing_table_head_first_acreage_cm'] ?></th>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $acreage_rights['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='acreage_quantity_right[]' 
									value='<?php echo $acreage_rights['quatity'][$i-1] ?>' />
							</td>
							<td class='td-1 center'>
								<input onkeypress='return printings_validate_num(event, this)' 
								name='acreage_prices_right[0][]' onblur='printings_check_blank(this)' 
								class='form-control' type='text' value='<?php echo $acreage_rights['prices'][ $i - 1 ][0]; ?>' />
							</td>
							<td class='td-last center'>
								<a href='javascript:void(0)' onclick='printings_remove_table_row(this)' 
									class='btn btn-danger btn-xs' title='Remove'><i class='fa fa-times'></i>
								</a>
							</td>
						</tr>
						<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>