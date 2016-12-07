/**
 * htOption.container
 * htOption.search
 */
var UrlBox = function(htOption) {
	var that = this;
	var welContainer, welUrlBox, welBtnSearch;
	
	var init = function() {
		welContainer = $(htOption.container);
		welUrlBox = welContainer.find("input.url");
		welBtnSearch = welContainer.find(".btn.search");
		
		welBtnSearch.bind("click", function(we) {
			we.preventDefault();
			search();
		});
		
		welUrlBox.keypress(function(e) {
			if (e.keyCode == 13) {
				search();
			}
		});
	}
	
	this.change = function(sUrl) {
		welUrlBox.val(sUrl);
		search();
	}
	
	var search = function() {
		htOption.search(welUrlBox.val());
	}
	
	this.getInfo = function() {
		return welUrlBox.val();
	}
	
	this.focus = function() {
		welUrlBox.focus();
	}
	
	init();
}