<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly
}


if ( ! class_exists( 'Wc_Email_Cancel_Request_Reject_Order' ) ) :

    class Wc_Email_Cancel_Request_Reject_Order extends WC_Email {
        /**
         * Constructor
         */
        function __construct() {
            $this->id = 'cancel_request_reject_order';
            $this->customer_email = true;
            $this->title = __( 'Order cancellation request denied', 'wc-cancel-order' );
            $this->description= __( 'This is an order notification sent to the customer when the order cancellation request denied.', 'wc-cancel-order' );
            $this->heading = __( 'Order cancellation request denied', 'wc-cancel-order' );
            $this->subject      = __( 'Order NO: {order_number} cancellation request denied', 'wc-cancel-order' );
            $this->template_base = WC_CANCEL_DIR.'/templates/';
            $this->template_html = 'emails/cancel-request-rejecte-order.php';
            $this->template_plain = 'emails/plain/cancel-request-rejecte-order.php';
	        $this->placeholders   = array(
		        '{site_title}'   => $this->get_blogname(),
		        '{order_date}'   => '',
		        '{order_number}' => '',
	        );
            parent::__construct();
        }

        /**
         * trigger function.
         *
         * @access public
         * @return void
         */
        function trigger($order_id){
	        $this->setup_locale();
	        $order = wc_get_order($order_id);
	        if ( is_a( $order, 'WC_Order' ) ) {
		        $this->object                         = $order;
		        $this->recipient                      = $this->object->get_billing_email();
		        $this->placeholders['{order_date}']   = wc_format_datetime( $this->object->get_date_created() );
		        $this->placeholders['{order_number}'] = $this->object->get_order_number();
	        }
	        if ( $this->is_enabled() && $this->get_recipient() ) {
		        $this->send( $this->get_recipient(), $this->get_subject(), $this->get_content(), $this->get_headers(), $this->get_attachments() );
	        }
	        $this->restore_locale();
        }

        /**
         * get_content_html function.
         *
         * @access public
         * @return string
         */
        function get_content_html() {

            return wc_get_template_html(
                $this->template_html,
                array(
                'order' => $this->object,
                'email_heading' => $this->get_heading(),
                'sent_to_admin' => false,
                'plain_text'=>false,
                'email' => $this),
                '',
                $this->template_base);

        }

        /**
         * get_content_plain function.
         *
         * @access public
         * @return string
         */
        function get_content_plain() {

            return wc_get_template_html(
                $this->template_plain,
                array(
                'order' => $this->object,
                'email_heading' => $this->get_heading(),
                'sent_to_admin' => false,
                'plain_text'=>true,
                'email' => $this),
                '',
                $this->template_base);

        }

    }

endif;