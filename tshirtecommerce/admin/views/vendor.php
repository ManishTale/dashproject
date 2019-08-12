<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dash2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$is_logged = $_SESSION['is_admin'];
$id = $is_logged['id'];
// $roles = $is_logged['roles'];
$login = $is_logged['login'];
?>
<link rel="stylesheet" href="<?php echo site_url('assets/plugins/dynatree/src/skin-vista/ui.dynatree.css'); ?>">
<link href="<?php echo site_url('assets/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css'); ?>" rel="stylesheet" type="text/css"/>
<link href="<?php echo site_url('assets/plugins/bootstrap-modal/css/bootstrap-modal.css'); ?>" rel="stylesheet" type="text/css"/>
<script src="<?php echo site_url('assets/js/dg-function.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/dynatree/src/jquery.dynatree.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/bootstrap-modal/js/bootstrap-modal.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/bootstrap-modal/js/bootstrap-modalmanager.js'); ?>"></script>
<script src="<?php echo site_url('assets/js/ui-modals.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/validate/validate.js'); ?>"></script>
<script>
    var base_url = '<?php echo site_url(); ?>'; 
    var url_assets = '<?php echo site_url('assets/js/'); ?>';   
    jQuery(document).ready(function() {             
        dgUI.category.tree('#tree6', 'vendor');
        dgUI.category.lang.msg = '<?php lang('category_msg'); ?>';
        dgUI.category.lang.msga = '<?php lang('category_msga'); ?>';
        dgUI.category.lang.title = '<?php lang('title'); ?>';
        dgUI.category.lang.add_title = '<?php lang('add_title'); ?>';       
        dgUI.category.lang.confirm_delete = '<?php lang('confirm_delete'); ?>';
        dgUI.category.ini();
        dgUI.art.ini();     
    });
</script>
<div class="row">
    <input type="hidden" id="session_data" value="<?php echo $id; ?>">
    <!-- start: LIST CATEGORIES TREE -->
    <!-- <div class="col-md-3">     
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="clip-list"></i>
                Categories
            </div>
            
            <div class="panel-body">
                <div class="row">
                <?php if($id == 1){?>
                    <center>
                        <a class="btn btn-primary btn-xs dgUI-category" rel="add" title="<?php lang('add'); ?>" href="javascript:;">
                            <i class="glyphicon glyphicon-plus"></i>
                        </a>                        
                        <a class="btn btn-bricky btn-xs dgUI-category" rel="remove" title="<?php lang('delete'); ?>" href="javascript:;">
                            <i class="glyphicon glyphicon-trash"></i>
                        </a>
                        <a class="btn btn-green btn-xs dgUI-category" rel="edit" title="<?php lang('edit'); ?>" href="javascript:;">
                            <i class="glyphicon glyphicon-pencil"></i>
                        </a>                    
                    </center>
                    <?php }?>
                </div>
                
                <div class="row">
                    <div id="tree6">                        
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- end: LIST CATEGORIES TREE -->
    
    
    <!-- start: LIST CLIPART -->
    <div class="col-md-12"> 
        <form id="artform" action="<?php echo site_url('index.php/vendor'); ?>" method="post" name="artform">
            <?php if(isset($error)) echo '<div class="alert alert-danger">'.$error.'</div>'; ?>
            
            <?php if(isset($data['is_moved']) && $data['is_moved'] == true) echo '<div class="alert alert-warning">You moved some cliparts to design store. you can edit clipart in <a href="'.site_url('index.php/store/arts').'">this page</a>.</div>'; ?>
            
            <div class="panel panel-default">
                <div class="panel-heading" style="display: none;">
                    <i class="clip-list"></i>               
                    <?php echo $data['sub_title']; ?>
                </div>
                <div class="panel-body">                
                    <div class="row">                                                       
                        <!-- begin tools -->
                        <div class="col-md-4 text-right pull-right">
                            <?php if($data['is_store'] == true) { ?>
                            <a href="<?php echo site_url('index.php/vendor/merge'); ?>" class="btn btn-green tooltips" title="Merge all your categories and clipart to store design">
                                <i class="fa fa-exchange"></i> Merge Clipart                    
                            </a>
                            <?php } 
                                if(!$id){
                            ?>

                            <a href="<?php echo site_url('index.php/vendor/edit'); ?>" class="btn btn-primary" title="<?php lang('add'); ?>">
                                <i class="glyphicon glyphicon-plus"></i>                    
                            </a>                        
                            <button type="button" onclick="submit_delete()" class="btn btn-bricky dgUI-art" title="<?php lang('delete'); ?>">
                                <i class="glyphicon glyphicon-trash"></i>
                            </button>
                            <?php
                                }
                            ?>
                                                    
                        </div>
                        
                        <!-- end tools -->
                    </div>
                    <br />
                    <div class="clear-line"></div>
                    <div id="clipart-rows">
                        <h3>Vendor List</h3>
                   <div id="accordion">
                        <?php
                        error_reporting(E_ALL);
                        ini_set("display_errors", "ON");
                        $sql1 = "SELECT `user_id` FROM `dash_usermeta` WHERE meta_key='dash_capabilities' AND meta_value LIKE '%editor%'";
                        $result1 = $conn->query($sql1);
                        while($row1 = $result1->fetch_assoc()) {
                            $userid = $row1['user_id'];
                        $sql = "SELECT * FROM dash_users WHERE ID='$userid'";
                        $result = $conn->query($sql);
                        while($row = $result->fetch_assoc()) {
                            echo "<h3>".$row['display_name']."</h3>";
                        // }
                        ?> <div> <?php
                        if(isset($data['arts']))
                        {
                            foreach($data['arts'] as $art)
                            {   
                                                    
                                $images = imageArt($art);
                                 
                                $user_id = $art->session_id;
                                $art_price = $art->price;
                                $status = $art->status;
                                if($user_id != 1){
                                    if($user_id == $row['ID'] && $art->sess_name == $row['display_name']){
                                    
                                // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
                        ?>
					
                            <div class="box-art text-center img-thumbnail">
                                <a data-toggle="modal" href="javascript:void(0)" title="<?php echo $art->title; ?>">
                                    <img src="<?php echo $images->thumb; ?>" alt="" class="img-responsive">
                                </a>
                                <?php
                                if ($user_id == $id && $status == 'Accepted'){
                                    ?>  
                                    <a class="box-publish" href="javascript:void(0)">
                                        <input class="checkb" type="checkbox" value="<?php echo $art->clipart_id; ?>" name="ids[]">                     
                                    </a>
                                    <?php
                                }
                                ?>
                                <?php
                                if ($status == 'Pending'){
                                    ?>                      
                                <a class="box-edit" href="<?php echo site_url('index.php/vendor/edit/'.$art->clipart_id); ?>">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <?php
                                }
                                ?>          
                                <div class="box-detail-price"><?php if(isset($data['currency_postion']) && $data['currency_postion'] != 'right') echo $data['currency_symbol'].$art->price; else echo $art->price . $data['currency_symbol']; ?><span style="padding-left: 100px;">
										<?php if($user_id != 1) { 
											if($art->status == "Accepted"){
												echo "<i class='fa fa-check' style='color:green;font-size:20px;'></i>";
											}
											else if($art->status == "Rejected"){
												echo "<i class='fa fa-times' aria-hidden='true' style='font-size:20px;color:red;'></i>";
											}
											else if($art->status == "Pending"){
												echo "<i class='fa fa-clock-o' style='font-size:20px; color: yellow;'></i>";
											}
										}?>
                                    </span>
                                </div>
                            </div> 
                            
                                <?php
                            } 
                        }
                        }
                        ?> </div> <?php
                        }
                    }
                }
                        ?>
                    </div>
                        <script>
$(document).ready( function() {
    $('#accordion').accordion({
        collapsible:true,
        beforeActivate: function(event, ui) {
             // The accordion believes a panel is being opened
            if (ui.newHeader[0]) {
                var currHeader  = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
             // The accordion believes a panel is being closed
            } else {
                var currHeader  = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
             // Since we've changed the default behavior, this detects the actual status
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';
            
             // Toggle the panel's header
            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
            
            // Toggle the panel's icon
            currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
            
             // Toggle the panel's content
            currContent.toggleClass('accordion-content-active',!isPanelSelected)    
            if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

            return false; // Cancels the default action
        }
    });
});
</script>
                        <!-- begin pagination -->
                        <div class="clear-line clear-line-head col-md-12"></div>
                        <div id="arts-pagination" class="pull-right col-md-12 text-right">
                            
                            <?php if ($data['page'] > 1) { ?>
                                <ul class="pagination">
                                    <?php 
                                        if ($data['page'] > 6 && $data['index'] > 4) { echo '<li><a href="'.site_url('index.php/vendor/index/1/'.$data['cateid']).'">«</a></li>'; }
                                        if ($data['page'] > 5 && $data['index'] > 3) { echo '<li><a href="'.site_url('index.php/vendor/index/'.($data['index']-1).'/'.$data['cateid']).'">«</a></li>'; }
                                        
                                        for($i=1; $i<=$data['page']; $i++) 
                                        {
                                            if($data['page'] > 5 && ($i < ($data['index'] - 2) || $i > ($data['index'] + 2)))
                                                continue;
                                                
                                            if ($i == $data['index'])
                                            {
                                    ?>
                                                <li class="active"><a href="#"><?php echo $i; ?> <span class="sr-only"></span></a></li>
                                        <?php 
                                            }else
                                            {
                                        ?>
                                                <li><a href="<?php echo site_url('index.php/vendor/index/'.$i.'/'.$data['cateid']); ?>"><?php echo $i; ?></a></li>
                                        <?php 
                                            }
                                        }
                                        if ($data['page'] > 6 && ($data['page']-$data['index']) > 2) { echo '<li><a href="'.site_url('index.php/vendor/index/'.($data['index']+1).'/'.$data['cateid']).'">»</a></li>'; }
                                        if ($data['page'] > 7 && ($data['page']-$data['index']) > 3) { echo '<li><a href="'.site_url('index.php/vendor/index/'.$data['page'].'/'.$data['cateid']).'">»</a></li>'; }
                                    ?>
                                </ul>
                            <?php } ?>
                            
                        </div>
                        <!-- end pagination -->
                    </div>
                </div>
            </div>
        </form>
    </div>
    <!-- end: LIST CLIPART -->
    
</div>
<div id="ajax-modal" class="modal fade" tabindex="-1" style="display: none;"></div>
<script type="text/javascript">
    function submit_delete()
    {
        var cf = confirm('<?php lang('confirm_delete'); ?>');
        if(cf)
        {
            jQuery('#artform').attr('action', '<?php echo site_url('index.php/vendor/delete'); ?>');
            jQuery('#artform').submit();
        }
    }
    function fixLayout()
    {
        var width = jQuery('#clipart-rows').width();
        var count = parseInt(width/162);
        jQuery('#clipart-rows').find('.box-art').css('width', parseInt(width/count - 16) +'px');
        jQuery('#clipart-rows').css('opacity', '1');
    }
    fixLayout();
</script>