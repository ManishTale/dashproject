<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-07-10
 *
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
?>
<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-phone"></i> Auto Save Design
		<div class="panel-tools">
			<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
		</div>
	</div>
	<div class="panel-body">
		<p class="help-block">If choose "YES", system will show warning when customer leave page design tool and system automatic save design of customers. This design will automatic load when customers come back.</small></p>

		<div class="form-group row">
			<label class="col-sm-3 control-label">Use options</label>
			<div class="col-sm-6">
				<?php
					echo displayRadio('enableAutoImport', $data['settings'], 'enableAutoImport', 0);
				?>
			</div>
		</div>
	</div>
</div>