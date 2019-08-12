<?php 

// @deprecated old
// re-new since 4.4.0
// updated Dec-26-2018

$platform   = isset($params['platform']) ? $params['platform'] : 'wordpress';
$setting    = $params['setting'];
$data       = $params['data'];
$quantity   = isset($params['quantity']) ? $params['quantity'] : 1;
$total      = $params['total'];

//print_r($data);

if ($platform == 'prestashop') {
    //$compute_precision = isset($data['compute_precision']) ? $data['compute_precision'] : 2;  //todo
    //$round_mode = isset($data['ps_round_mode']) ? $data['ps_round_mode'] : 2;                 //todo
    $tax = isset($data['ps_taxes']) ? $data['ps_taxes'] : 0;
    if ($tax > 0) {
        $tax = $tax / 100;
    }

    $price = isset($data['ps_price_sale']) ? $data['ps_price_sale'] : (isset($data['ps_price_old']) ? $data['ps_price_old'] : 0);

    $price_elements = 0;
    if (isset($total->printing)) {
        $total->printing += $total->printing * $tax;
    }
    if (isset($total->clipart)) {
        $total->clipart += $total->clipart * $tax;
    }
    if (isset($total->attribute)) {
        $total->attribute += $total->attribute * $tax;
    }
    $price_elements = $total->printing + $total->clipart + $total->attribute;

    $total->sale = $price + $price_elements;
    $total->old = $total->sale;
    if (isset($data['ps_price_sale']) && isset($data['ps_price_old']) && $data['ps_price_sale'] != $data['ps_price_old']) {
        $total->old = $data['ps_price_old'] + $price_elements;
    }

    $total->old = $total->old * $quantity;      // fixed #51992
    $total->sale = $total->sale * $quantity;    // fixed #51992
}

$GLOBALS['setting'] = $setting; // TODO // for sync currency with presta
$GLOBALS['total'] = $total;
