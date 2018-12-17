'use strict';

window.onload = function() {
    console.log(wp.editor);

    var el = wp.element.createElement,
        registerBlockType = wp.blocks.registerBlockType,
        blockStyle = {
            backgroundColor: '#900',
            color: '#fff',
            padding: '20px'
        },
        RichText = wp.editor.RichText;

    registerBlockType('discogs-partner-pages/discogs-partner-feed', {
        title: 'Partner News Feeds',
        icon: 'editor-kitchensink',
        category: 'embed',

        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
            }
        },

        edit: function (props) {
            var content = props.attributes.content;

            function onChangeContent(newContent) {
                props.setAttributes({
                    content: newContent
                });
            }

            return el(
                RichText, {
                    tagName: 'p',
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                }
            );
        },

        save: function (props) {
            var content = props.attributes.content;

            return el(RichText.Content, {
                tagName: 'p',
                className: props.className,
                value: content
            });
        },
    });
}