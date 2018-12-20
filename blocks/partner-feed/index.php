<?php
function discogs_partner_feed_block() {
    wp_register_script(
        'discogs-partner-feed-script',
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
    
    wp_register_style(
		'discogs-partner-feed-style',
		plugins_url('style.css', __FILE__),
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path(__FILE__) . 'style.css')
	);

    register_block_type('discogs-partner-feed/block', array(
        'editor_script' => 'discogs-partner-feed-script',
        'editor_style' => 'discogs-partner-feed-editor-style',
        'style' => 'discogs-partner-feed-style'
    ));
}

add_action('init', 'discogs_partner_feed_block');
?>