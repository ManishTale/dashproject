<div class="userplus-form-builder-wrapper">
	
<?php
	$fields = get_post_meta( $object->ID, 'fields', true );
	$userplus_field_order = get_post_meta( $object->ID, 'userplus_field_order',true );
	if( $userplus_field_order ){
	$fields_count = count( $userplus_field_order );
	 for( $i=0;$i<$fields_count;$i++ ){
	 $key = $userplus_field_order[$i];
	 $array = $fields[$key];
?>	
		<div class="userplus-admin-drag-drop-field userplus-field-type-<?php echo $array['type']?>">
					<div class="userplus-admin-field-name"><?php _e( $array['title'], USERPLUS_PLUGIN_SLUG );?> <span class="fieldtype"><?php _e($array['type'],USERPLUS_PLUGIN_SLUG)?><span></div>
					<div class="userplus-admin-field-operations">
					 <span class="userplus-admin-delete-field"><a href="#"><?php _e( 'Delete', USERPLUS_PLUGIN_SLUG ); ?></a></span>
					 <span class="userplus-admin-edit-field">
						<a href="#" data-arg1="<?php echo $key;?>" data-arg2="<?php echo $object->ID;?>" data-arg3="<?php echo $array['type']?>" data-action="userplus_admin_popup_edit_field" ><?php _e( 'Edit', USERPLUS_PLUGIN_SLUG ); ?></a>
						<input type="hidden" name="userplus_field_order[]" value="<?php echo $key;?>">
					</span>
					</div>
		</div>			
<?php
	 }
}
?>	
<a href="#" class = "userplus-admin-add-field btn btn-primary" data-popup = "userplus_fields" data-content = "userplus_admin_show_fields" data-arg1 ="" data-arg2="<?php echo $object->ID;?>" data-arg3="" >				
	<?php _e('Add Field', USERPLUS_PLUGIN_SLUG);?>
	</a>
</div>
