
(function () {
	'use strict';

	var pagesIndex, lunrIndex;

	function init() {
		// First retrieve the index file
		$.getJSON("/index.json")
			.done(function (index) {
				pagesIndex = index;
				//console.log("index:", pagesIndex);
				lunrIndex = lunr(function () {
					this.field("title", {boost: 10});
					this.field("tags", {boost: 5});
					this.field("content");
					this.ref("uri");
				});
				pagesIndex.forEach(function (page) {
					lunrIndex.add(page);
				});
			})
			.fail(function (jqxhr, textStatus, error) {
				var err = textStatus + ", " + error;
				console.error("Error getting Hugo index file:", err);
			});
	}

	function search(query) {
		return lunrIndex.search(query).map(function (result) {
			return pagesIndex.filter(function (page) {
				return page.uri === result.ref;
			})[0];
		});
	}

	// Let's get started
	init();

	$(document).ready(function () {

		// search modal
		$(document).unbind('keyup');
		$(document).keyup(function (e) {
			if (e.keyCode == 27) {
				$("#searchBar").click();
			}
		});

		$("#searchBar, .search-overlay-bg, .search-trigger").click(function () {
			if ($('#searchOverlay').hasClass('active')) {
				$('#searchOverlay').removeClass("active");
			} else {
				$('#searchOverlay').addClass("active");
				$('#searchOverlay input[type="text"]').focus();
			}
		});

		$(".st-default-search-input").keyup(function () {
			var $results = $(".st-search-container");
			$results.empty();
			var query = $(this).val();
			if (query.length < 2) return;
			var results = search(query);
			results.forEach(function (result) {
				var $result = $("<div class='item'>");
				$result.append($("<a>", {class: 'title', href: result.uri, text: result.title}));
				$result.append($("<div class='content'>" + result.content.substring(0, 100) + "</div>"));
				$results.append($result);
			});
		});

	});

})();
