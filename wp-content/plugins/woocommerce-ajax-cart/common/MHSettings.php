<?php
include_once( __DIR__ . '/MHSettings.php' );

if ( !class_exists('MHSettings') ) {
    class MHSettings {
        private $pluginAlias;
        private $pluginTitle;

        public function __construct($pluginAlias, $pluginTitle) {
        }
    }
}
