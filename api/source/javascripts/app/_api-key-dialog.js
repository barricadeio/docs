//= require ../lib/_jquery
//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
  'use strict';

  $(function () {

    // key place holder
    var key = "\<apiKey\>";

    // attaches dialog opener
    $("a").click(function (e) {
      var target = $(this).attr('href');
      if (target == '#aip-key-dialog') {
        $("#api-key-dialog").addClass('open');
      }
    });

    // handles focus on the api key field
    $("#api-key-text").one("focus", function () {
      $(this).text('')
    });

    // handles set button
    $("#btn-complete-api").click(function () {
      var apiKey = $("#api-key-text").text().replace(/(\r\n|\n|\r|\s)/g, '');
      $("code").each(function () {
        $(this).text($(this).text().replace(new RegExp(key, 'g'), apiKey))
      });
      key = apiKey;
      $("#api-key-dialog").removeClass('open');
    });

    // handles cancel button
    $("#btn-cancel-api").click(function () {
      $("#api-key-dialog").removeClass('open');
    });


  });

})(window);

