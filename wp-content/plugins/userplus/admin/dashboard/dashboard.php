<div class="pro">
<h3>
Get Flat 30% off on PRO 
<a href="http://www.wpseeds.com/product/profile-pro/" target="_blank">Buy Now</a>
Use Coupon code 'UPDATEPRO'
</h3>
</div>
<div class="row affix-row">
    <div class=" col-md-3 affix-sidebar">
		<div class="sidebar-nav">
  <div class="navbar navbar-default" role="navigation">
    
    <div class="navbar-collapse collapse sidebar-navbar-collapse">
    <div class="userplsutitle">
  <h2> <i class="fa fa-user-plus" aria-hidden="true"></i> <?php _e("UserPlus","userplus");?></div></h2><hr>
      <ul class="nav navbar-nav" id="myTab">
       
        
        
      <li class="active">
                    <a href="#userplus_setting" data-toggle="tab">
               <h5>  <i class="fa fa-cogs" aria-hidden="true"></i>                      
                 <?php _e('Settings','userplus'); ?> </h5> 
                    </a>
                </li>
       <li >
                    <a href="#userplus_mail" data-toggle="tab">
 <h5><i class="fa fa-envelope" aria-hidden="true"></i>                        <?php _e('Email Template ','userplus');?>
                   </h5>  </a>
                </li>
      <li>
                    <a href="#userplus_pending_approval" data-toggle="tab">
 <h5><i class="fa fa-user" aria-hidden="true"></i>                        <?php _e('User Request ','userplus');?>
                    </h5> </a>
                </li>
      </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
	</div>
	<div class="col-sm-9 col-md-9 affix-content tab-content">
		<div class="container tab-pane active" id="userplus_setting">
			
				<div class="page-header">
	<h3>  <i class="fa fa-cogs" aria-hidden="true"></i>        <?php _e("Settings","userplus");?></h3>
</div>
<div class="content  " >
     <?php  include('settings.php'); ?>     
		</div>  
		</div>
		<div class="container tab-pane" id="userplus_mail">
			
				<div class="page-header">
	<h3><i class="fa fa-envelope" aria-hidden="true"></i> <?php _e("Email Notification","userplus");?></h3>
</div>
<div class="content  " >
     <?php include('email_template.php'); ?>     		</div> 
		</div>
		<div class="container tab-pane" id="userplus_pending_approval">
			
				<div class="page-header">
	<h3><i class="fa fa-user" aria-hidden="true"></i>  <?php _e("User Request","userplus");?></h3>
</div>
<div class="content " >
     <?php include('pending_approve.php'); ?>     		</div>  
		</div>
		<div style="clear:both;"></div>
	</div>
</div>
