<form method="post" action="">
<div id="accordion" class="panel-group">

    <div class="panel panel-default">

        <div class="panel-heading">

            <h4 class="panel-title">

                <a data-toggle="collapse" data-parent="#accordion" href="#generalsetting"><?php _e('General Settings','userplus'); ?></a>

            </h4>

        </div>

        <div id="generalsetting" class="panel-collapse ">

            <div class="panel-body">
<table class="form-table">

		
<tr valign="top">
		<th scope="row"><label for="new_user_approve"><?php _e('New User Approve','userplus'); ?></label></th>
		<td>
			<select name="new_user_approve" id="new_user_approve" class="chosen-select" style="width:300px">
				<option value="0" <?php selected(0, userplus_get_option('new_user_approve')); ?>><?php _e('Auto Approve','userplus'); ?></option>
				<option value="1" <?php selected(1, userplus_get_option('new_user_approve')); ?>><?php _e('Admin Approve','userplus'); ?></option>
				<option value="2" <?php selected(2, userplus_get_option('new_user_approve')); ?>><?php _e('Email Approve','userplus'); ?></option>
			</select>
		</td>
	</tr>

	<!--<tr valign="top">
		<th scope="row"><label><?php _e('Reset All Forms to Default','userpro'); ?></label></th>
		<td>
			<a href="admin.php?page=userplus&userplus_action=reset_all_form" class="button"><?php _e('Clear Members Cache','userpro'); ?></a>
						
		</td>
	</tr>-->
</table>
     
            </div>

        </div>

    </div>

   

   

</div>
<p class="submit">
	<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php _e('Save Changes','userplus'); ?>"  />

</p>

</form>
          

