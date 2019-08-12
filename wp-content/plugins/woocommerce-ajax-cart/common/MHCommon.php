<?php
include_once( __DIR__ . '/MHSettings.php' );

if ( !class_exists('MHCommon') ) {
    class MHCommon {
        private $pluginAlias;
        private $pluginTitle;

        /**
         * @var MHSettings
         */
        private $settings;

        /**
         * @var MHUpgrader
         */
        private $upgrader;

        /**
         * @var MHSupport
         */
        private $support;

        private function __construct($pluginAlias, $pluginTitle) {
            $this->pluginAlias = $pluginAlias;
            $this->pluginTitle = $pluginTitle;
            $this->settings = new MHSettings($pluginAlias, $pluginTitle);

            if ( file_exists(__DIR__ . '/MHUpgrader.php') && file_exists(__DIR__ . '/MHSupport.php') ) {
                include_once( __DIR__ . '/MHUpgrader.php' );
                include_once( __DIR__ . '/MHSupport.php' );

                $this->support = new MHSupport($pluginAlias, $pluginTitle);

                $this->upgrader = new MHUpgrader($pluginAlias, $pluginBaseFile, $pluginTitle);
                $this->upgrader->setCommonInstance($this);
            }
        }

        public function initialize() {
            $this->upgrader->initialize();
            $this->support->initialize();

            add_action('admin_notices', array($this, 'checkNotices'));

            if ( !empty($_GET['MHCommonDismiss']) && !empty($_GET['alias']) && ( $_GET['MHCommonDismiss'] == $this->pluginAlias ) ) {
                $this->dismissNotice($_GET['alias']);
                wp_safe_redirect( esc_url_raw( admin_url('plugins.php') ) );
            }
        }

        public function checkNotices(){
            global $pagenow;

            if ( $pagenow != 'plugins.php' ) {
                return;
            }

            $notices = $this->readNotices();

            foreach ( $notices as $alias => $notice ) {
                // ignore dismissed notices
                if ( get_transient($this->transactionAlias($alias)) ) {
                    continue;
                }

                $dismissUrl = admin_url('plugins.php?MHCommonDismiss=' . $this->pluginAlias . '&alias=' . $alias);
                $dismissLink = sprintf('<a href="%s">Dismiss for %d days</a>', $dismissUrl, $notice['dismissDays']);
                
                echo '<div class="notice notice-'.$notice['type'].'">
                        <strong>'.$this->pluginTitle.'</strong>
                        <p>
                            '.$notice['message'].'
                        </p>
                        <p style="text-align: right; margin-top: -10px;">
                            '.$dismissLink.'
                        </p>
                      </div>';
            }
        }

        public function addNotice($alias, $type, $message, $dismissDays) {

            $notices = $this->readNotices();
            $notices[$alias] = array(
                'message' => $message,
                'type' => $type,
                'dismissDays' => $dismissDays,
            );

            $this->storeNotices($notices);
        }

        public function removeNotice($alias) {
            $notices = $this->readNotices();
            
            if ( !empty($notices[$alias]) ) {
                unset($notices[$alias]);
                $this->storeNotices($notices);
            }

            delete_transient($this->transactionAlias($alias));
        }

        private function dismissNotice($alias) {
            $notices = $this->readNotices();

            if ( !empty($notices[$alias])) {
                $dismissDays = $notices[$alias]['dismissDays'];
                $expiration = ( $dismissDays * DAY_IN_SECONDS );

                set_transient($this->transactionAlias($alias), 'x', $expiration);
            }
        }

        private function transactionAlias($alias) {
            return $this->pluginAlias . '_notice_' . $alias;
        }

        private function storeNotices($notices) {
            return update_option($this->pluginAlias . '_notices', $notices);
        }

        private function readNotices() {
            return get_option($this->pluginAlias . '_notices', array());
        }

        public function getAppendLinks() {
            $appendLinks = array();
            $appendLinks[] = $this->upgrader->getUpgradeLink();
            $appendLinks[] = $this->support->getSupportLink();

            return $appendLinks;
        }

        public static function buildInstance($pluginAlias, $pluginBaseFile, $pluginTitle) {
            return new self(
                $pluginAlias,
                $pluginTitle
            );
        }
    }
}
