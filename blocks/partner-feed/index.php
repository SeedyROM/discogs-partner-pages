<?php
function discogs_partner_feed_editor_enqueue() {
    wp_register_script(
        'discogs-partner-feed-editor-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js'),
		true
    );

    wp_register_style(
		'discogs-partner-feed-editor-style',
		plugins_url('editor.css', __FILE__),
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );
}
add_action('enqueue_block_editor_assets', 'discogs_partner_feed_editor_enqueue');

// function discogs_partner_feed_enqueue() {
//     // if(!is_admin()) {
//         // wp_register_style(
//         //     'discogs-partner-feed-style',
//         //     plugins_url('style.css', __FILE__),
//         //     array('wp-edit-blocks'),
//         //     filemtime(plugin_dir_path(__FILE__) . 'style.css')
//         // );

        

//     // }
    
// }
// add_action('enqueue_block_assets', 'discogs_partner_feed_enqueue');

function discogs_partner_feed_block() {
    if(!is_admin()) {
        wp_register_script(
            'discogs-partner-feed-script',
            plugins_url('feed.js', __FILE__),
            array('wp-blocks', 'wp-element', 'jquery'),
            filemtime(plugin_dir_path(__FILE__) . 'feed.js'),
            true
        );
    }

    register_block_type('discogs-partner-feed/block', array(
        'editor_script' => 'discogs-partner-feed-editor-script',
        'editor_style' => 'discogs-partner-feed-editor-style',
        'script' => 'discogs-partner-feed-script'
    ));
}
add_action('init', 'discogs_partner_feed_block');
?>