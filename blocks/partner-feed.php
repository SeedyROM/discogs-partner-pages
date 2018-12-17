<?php
function partner_feed_block() {
    wp_register_script(
        'discogs-partner-feed',
        plugins_url('../scripts/partner-feed.js', __FILE__),
        array( 'wp-blocks', 'wp-element' )
    );

    register_block_type('discogs-partner-pages/discogs-partner-feed', array(
        'editor_script' => 'discogs-partner-feed'
    ));
}
add_action('init', 'partner_feed_block');
?>