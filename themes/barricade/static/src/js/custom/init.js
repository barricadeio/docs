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

  // swifttype search
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
    (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
    e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
    })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
    _st('install','o82vEyRB4LfTEQXajsyq','2.0.0');


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
