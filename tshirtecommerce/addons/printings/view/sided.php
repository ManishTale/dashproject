<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-03-10
 * add printing method
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

/* name of addon */
$add_p_name = 'sided';

$size_fronts = array();
if ( array_key_exists( 'front', $values ) && $price_type == $add_p_name) $size_fronts = $values['front'];
else $size_fronts = array('quatity' => array(5), 'prices' => array( array(0, 0, 0, 0) ));

$size_lefts = array();
if ( array_key_exists( 'left', $values ) && $price_type == $add_p_name) $size_lefts = $values['left'];
else $size_lefts = array('quatity' => array(5), 'prices' => array( array(0, 0, 0, 0) ));

$size_rights = array();
if ( array_key_exists( 'right', $values ) && $price_type == $add_p_name) $size_rights = $values['right'];
else $size_rights = array('quatity' => array(5), 'prices' => array( array(0, 0, 0, 0)));

$size_backs = array();
if ( array_key_exists( 'back', $values ) && $price_type == $add_p_name) $size_backs = $values['back'];
else $size_backs = array('quatity' => array(5), 'prices' => array( array(0, 0, 0, 0)));
 
?>
<div id='price-type-<?php echo $add_p_name; ?>-tab' data-hide="printings_view" class='price-type-tab <?php if ($price_type != $add_p_name) echo 'hidden' ?>'>
	<p>Setup price of printing with simple sided, double sided...If you only use two sided please add same value of 2 sided to value of 3 sided and 4 sided</p>
	<ul class='nav nav-tabs <?php if ( $view == 0 ) echo 'hidden'; ?> ' role='tablist'>
		<li id='li-<?php echo $add_p_name; ?>-view-front' role='presentation' class='active'>
			<a href='#<?php echo $add_p_name; ?>-view-front' aria-controls="<?php echo $add_p_name; ?>-view-front" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_front'] ?>
			</a>
		</li>
		<li id='li-<?php echo $add_p_name; ?>-view-back' role='presentation'>
			<a href='#<?php echo $add_p_name; ?>-view-back' aria-controls="<?php echo $add_p_name; ?>-view-back" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_back'] ?>
			</a>
		</li>
		<li id='li-<?php echo $add_p_name; ?>-view-left' role='presentation'>
			<a href='#<?php echo $add_p_name; ?>-view-left' aria-controls="<?php echo $add_p_name; ?>-view-left" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_left'] ?>
			</a>
		</li>
		<li id='li-<?php echo $add_p_name; ?>-view-right' role='presentation'>
			<a href='#<?php echo $add_p_name; ?>-view-right' aria-controls="<?php echo $add_p_name; ?>-view-right" role="tab" data-toggle="tab">
				<?php echo $addons->lang['addon_printing_table_nav_right'] ?>
			</a>
		</li>
	</ul>
	<div class="tab-content" style='border:none !important;padding: 16px 0px!important'>
		<div role="tabpanel" class="tab-pane active" id="<?php echo $add_p_name; ?>-view-front">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'>QTY</th>
						<?php for($i=1; $i < 5; $i++) : ?>
						<th class='th-<?php echo $i ?> center'><?php echo $i ?> Sided</th>
						<?php endfor; ?>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $size_fronts['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='<?php echo $add_p_name; ?>_quantity_front[]' 
									value='<?php echo $size_fronts['quatity'][$i-1] ?>' />
							</td>
							<?php $col_td = 0;
							foreach ( $size_fronts['prices'][ $i - 1 ] as $price ) : ?>
								<td class='td-<?php echo ($col_td + 1); ?> center'>
									<input onkeypress='return printings_validate_num(event, this)' 
									name='<?php echo $add_p_name; ?>_prices_front[<?php echo $col_td; ?>][]' onblur='printings_check_blank(this)' 
									class='form-control' type='text' value='<?php echo $price; ?>' />
								</td>
							<?php $col_td++;
							endforeach; ?>
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
		<div role="tabpanel" class="tab-pane" id="<?php echo $add_p_name; ?>-view-back">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'>QTY</th>
						<?php for($i=1; $i < 5; $i++) : ?>
						<th class='th-<?php echo $i ?> center'><?php echo $i ?> Sided</th>
						<?php endfor; ?>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $size_backs['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='<?php echo $add_p_name; ?>_quantity_back[]' 
									value='<?php echo $size_backs['quatity'][$i-1] ?>' />
							</td>
							<?php $col_td = 0;
							foreach ( $size_backs['prices'][ $i - 1 ] as $price ) : ?>
								<td class='td-<?php echo ($col_td + 1); ?> center'>
									<input onkeypress='return printings_validate_num(event, this)' 
									name='<?php echo $add_p_name; ?>_prices_back[<?php echo $col_td; ?>][]' onblur='printings_check_blank(this)' 
									class='form-control' type='text' value='<?php echo $price; ?>' />
								</td>
							<?php $col_td++;
							endforeach; ?>
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
		<div role="tabpanel" class="tab-pane" id="<?php echo $add_p_name; ?>-view-left">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'>QTY</th>
						<?php for($i=1; $i < 5; $i++) : ?>
						<th class='th-<?php echo $i ?> center'><?php echo $i ?> Sided</th>
						<?php endfor; ?>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $size_lefts['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='<?php echo $add_p_name; ?>_quantity_left[]' 
									value='<?php echo $size_lefts['quatity'][$i-1] ?>' />
							</td>
							<?php $col_td = 0;
							foreach ( $size_lefts['prices'][ $i - 1 ] as $price ) : ?>
								<td class='td-<?php echo ($col_td + 1); ?> center'>
									<input onkeypress='return printings_validate_num(event, this)' 
									name='<?php echo $add_p_name; ?>_prices_left[<?php echo $col_td; ?>][]' onblur='printings_check_blank(this)' 
									class='form-control' type='text' value='<?php echo $price; ?>' />
								</td>
							<?php $col_td++;
							endforeach; ?>
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
		<div role="tabpanel" class="tab-pane" id="<?php echo $add_p_name; ?>-view-right">
			<p class='pull-right'>
				<a class='btn btn-default' href='javascript:void(0)' onclick='printings_change_table_row(this)'>
					<?php echo $addons->lang['addon_printing_type_button_add_product_quantity'] ?>
				</a>
			</p>
			<div class="table-responsive">
				<table class='table table-bordered'>
					<thead>
						<th class='th-first center'>QTY</th>
						<?php for($i=1; $i < 5; $i++) : ?>
						<th class='th-<?php echo $i ?> center'><?php echo $i ?> Sided</th>
						<?php endfor; ?>
						<th class='th-last center'><?php echo $addons->lang['addon_printing_button_remove'] ?></th>
					</thead>
					<tbody>
						<?php for ( $i = 1, $c = count( $size_rights['prices'] ); $i <= $c; $i++ ) : ?>
						<tr>
							<td class='td-first center'>
								<input class='form-control' type='text' onblur='printings_check_blank(this)' 
									onkeypress='return printings_validate_num(event, this)'
									name='<?php echo $add_p_name; ?>_quantity_right[]' 
									value='<?php echo $size_rights['quatity'][$i-1] ?>' />
							</td>
							<?php $col_td = 0;
							foreach ( $size_rights['prices'][ $i - 1 ] as $price ) : ?>
								<td class='td-<?php echo ($col_td + 1); ?> center'>
									<input onkeypress='return printings_validate_num(event, this)' 
									name='<?php echo $add_p_name; ?>_prices_right[<?php echo $col_td; ?>][]' onblur='printings_check_blank(this)' 
									class='form-control' type='text' value='<?php echo $price; ?>' />
								</td>
							<?php $col_td++;
							endforeach; ?>
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