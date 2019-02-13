'use strict';

// Usage
// <div class="partner-feed" data-uri="http://blog.discogs.com/en/tag/vinyl-me-please/feed/">
//   <div class="loading">Loading...</div>
// </div>

(function($) {
  // CORS-anywhere fix
  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });
  
  // Globals
  var posts = null;
  var $partnerFeed =  $('.partner-feed');

  // Display something while it's loading...
  $partnerFeed.html($('<div class="loading">Loading...</div>'))
  
  // The markup for our feed posts.
  function postComponent(state) {
     return '\
     <div class="partner-feed-post"> \
       <a href="'+ state.url +'" target="blank"> \
         <img src="'+ state.image +'"> \
         <div class="title">'+ state.title +'</div> \
       </a> \
     </div> \
    ';
  };
  
  function loadFeed(uri) {
    // Get the RSS feed
    $.ajax({
      method: 'GET',
      url: uri,
      dataType: 'xml',
    })
    .done((doc) => {
      var items = doc.getElementsByTagName('item');

      // Parse out the useful information
      posts = Array.from(items).map(function(item) {
        return {
          title: item.querySelector('title').innerHTML,
          url: item.querySelector('link').innerHTML,
          image: item.querySelector('enclosure').attributes.url.nodeValue
        }
      });

      // Render our posts
      $partnerFeed.empty();
      posts.map(function(post) {
        $partnerFeed.append(postComponent(post));
      });
    });
  }
  
  loadFeed($partnerFeed.attr('data-uri'));
})(jQuery);