<div class="wrap">
	
<?php 
    $meta_query_args = array(
    		'meta_query'=>array(
    		array(
    			'key'=>'userplus_account_status',
    			'value'=>'pending_admin',
    			'compare'=>'='
    		),
    	)	
    );
  //  $meta_query = new WP_Meta_Query( $meta_query_args );
	$pending_users = get_users($meta_query_args);

	if(!empty($pending_users))
	{
	foreach( $pending_users as $pending_user){
		$user_id = $pending_user->ID;
 		$profile_pic = get_user_meta( $user_id, 'profile_pic', true );
		if( empty( $profile_pic ) ){
			$profile_pic = USERPLUS_URL."assets/images/profiledefault.png";
		}
		?>
		<div class="userplus_pending_pic">
			
			<img src="<?php echo $profile_pic;?>">
			<div class="userplus_pending_name">
				<?php echo $pending_user->user_login;?>
			</div>
			<div class="userplus_pending_email">
				<?php echo $pending_user->user_email;?>
			</div>
			<div class="userplus_accept_user">
				<input type=button value="Accept" data-id="<?php echo $user_id;?>" />
			</div>
		</div>
		
<?php		
	}}
	else
	{
		_e("No Request found..!!","userplus");

	}
?>

<br class="clear">
</div>
