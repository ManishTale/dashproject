<?php
$is_logged = $_SESSION['is_admin'];
$id = $is_logged['id'];
?>
<!-- start: printing -->
<?php
if($id == 1){ ?>
<li <?php if($data[0] == 'printing') echo 'class="active"' ?>>
	<a href="<?php echo site_url('index.php/printing'); ?>">
		<i class="fa fa-print"></i>
		<span class="title"> Printing & Price </span>
	</a>
</li>
<?php } ?>
<!-- end: printing -->