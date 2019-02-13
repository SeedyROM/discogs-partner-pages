(function (blocks, editor, components, i18n, element) {
	var el = wp.element.createElement
  var registerBlockType = wp.blocks.registerBlockType
  var RichText = wp.editor.RichText
  var BlockControls = wp.editor.BlockControls
  var AlignmentToolbar = wp.editor.AlignmentToolbar
  var MediaUpload = wp.editor.MediaUpload
  var InspectorControls = wp.editor.InspectorControls
  var TextControl = components.TextControl

  registerBlockType('discogs-partner-pages/partner-feed-block', {
    title: i18n.__('Partner Feed'),
    description: i18n.__('A custom block for showing blog posts from an RSS feed.'),
    icon: 'businessman',
    category: 'embed',

    edit: function(props) {
      function onChange(event) {
        props.setAttributes({ feedSource: event.target.value });
      }

      return el('div', { className: 'partner-feed-editor' }, 
        el('h4', {}, 'Partner Feed Source:'),
        el('input', {
          value: props.attributes.feedSource,
          onChange: onChange,
        })
      );
    },

    save: function(props) {
      return el('div', {className: 'partner-feed', 'data-uri': props.attributes.feedSource});
    },

    attributes: {
      feedSource: {
        type: 'string',
      },
    },
  });
})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.components,
  window.wp.i18n,
  window.wp.element
)
