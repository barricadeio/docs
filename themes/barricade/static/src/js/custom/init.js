$(document).ready(function() {

  $(document).foundation();

  // search modal
  $(document).unbind('keyup');
  $(document).keyup(function(e){
    if (e.keyCode==27) {
      $("#searchBar").click();
    }
  });

  $("#searchBar, .search-overlay-bg, .search-trigger").click( function() {
    if ($('#searchOverlay').hasClass('active')) {
      $('#searchOverlay').removeClass("active");
    } else {
      $('#searchOverlay').addClass("active");
      $('#searchOverlay input[type="text"]').focus();
    }
  });


  // algolia
  $(function() {
    var client = algoliasearch('QM91V2H4QL', 'edeebf1c9a5e14c6dfb24911a629e27c');
    var index = client.initIndex('barricade_docs');
    var $input = $('#agolia-input');
    $input.keyup(function() {
      index.search($input.val(), {
        hitsPerPage: 10,
        facets: '*'
      }, searchCallback);
    }).focus();

    function searchCallback(err, content) {
      if (err) {
        console.error(err);
        return;
      }

      var $articles = $('#articles');
      $articles.empty();

      for (var i = 0; i < content.hits.length; i++) {
        $articles.append('<li>' + content.hits[i].name + '</li>');
      }
    };
  });



  // algolia search
  // var client = algoliasearch('QM91V2H4QL', 'edeebf1c9a5e14c6dfb24911a629e27c');
  // var index = client.initIndex('barricade_docs');

  // autocomplete('#agolia-input', { hint: false }, [
  //   {
  //     source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
  //     displayKey: 'my_attribute',
  //     templates: {
  //       suggestion: function(suggestion) {
  //         return suggestion._highlightResult.my_attribute.value;
  //       }
  //     }
  //   }
  // ]).on('autocomplete:selected', function(event, suggestion, dataset) {
  //    console.log(suggestion, dataset);
  // });

  // var $articles = $('#articles');
  // $articles.empty();

  // for (var i = 0; i < content.hits.length; i++) {
  //   $articles.append('<li>' + content.hits[i].name + '</li>');
  // }


  // demo search functionality
  //
    // remove this
    //when algolia is integrated

  // $('#searchOverlay form input[type=text]').on('input', function() {
  //     $("#searchResults").addClass('active');
  // });


  // footer
  $(".footer-reveal").click( function() {
    $(".styleguide-footer").toggleClass("footer-expanded");
    $(".container-full").toggleClass("footer-expanded");
  });

  // change contact us links to intercom chat triggers
    // (workaround as no ids/classes allowed inside markdown)
  $("article a").each(function() {
    if( $(this).attr("href") == "https://barricade.io/about#contact-info") {
      $(this).attr("href", "");
      $(this).attr("class", "intercom-trigger");
    };
  })

}); // document ready


// headroom
(function() {
  var searchBar = document.querySelector(".top-bar");
  new Headroom(searchBar, {
    offset: 50,
    classes: {
      "initial": "headroom",
      "pinned": "headroom--pinned",
      "unpinned": "headroom--unpinned",
      "top" : "headroom--top",
      "notTop" : "headroom--not-top"
    }
  }).init();
}());


// scrollspy, as per https://jsfiddle.net/mekwall/up4nu/
// Cache selectors
var lastId,
    topMenu = $(".sidebar ul ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
menuItems.click(function(f){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
});

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        // return false;
      }
    }
  });
});

  // Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});
