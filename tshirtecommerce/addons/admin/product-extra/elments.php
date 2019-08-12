<?php
	if (isset($addons) && isset($addons->design) && isset($addons->design->elements)) {
		echo '<input type="hidden" value="'.$addons->design->elements.'" id="products-design-elements" name="product[design][elements]">';
	}
?>