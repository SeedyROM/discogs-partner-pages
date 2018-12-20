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

    edit: function() {
      return el('p', {}, 'Hello Editor!');
    },
    save: function() {
      return el('p', {}, 'Hello Saved!!!');
    },

    attributes: {
      title: {
        type: 'array',
        source: 'children',
        selector: 'h3'
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
