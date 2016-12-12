/**
 * htOption.container
 * htOption.onResize
 */
var Channel = function(_htOption) {
	var that = this;
	var welContainer, urlBox, welIframe;
	var welBtnNarrow, welBtnWide, welBtnClose;

	var htOption = {
			container : null,
			onResize : function() {}
	};

	var MIN_WIDTH = 350;
	
	var init = function() {
		htOption = _htOption;
		welContainer = $(htOption.container);
		urlBox = new UrlBox({
			container : welContainer,
			search : function(sUrl) {
				if (/^http[s]?:\/\//.test(sUrl) != true) {
					urlBox.change("http://" + sUrl);
					return;
				}
				welIframe.attr("src", sUrl);
			}
		});
		welIframe = welContainer.find("iframe");
		welBtnNarrow = welContainer.find(".narrow");
		welBtnWide = welContainer.find(".wide");
		welBtnClose = welContainer.find(".close");
		
		welBtnNarrow.bind("click", function(we) {
			we.preventDefault();
			var width = Math.max(welContainer.width() - 50, MIN_WIDTH);
			welContainer.width(width);
			htOption.onResize();
		});
		
		welBtnWide.bind("click", function(we) {
			we.preventDefault();
			var width = welContainer.width() + 50;
			welContainer.width(width);
			htOption.onResize();
		});
		
		welBtnClose.bind("click", function(we) {
			we.preventDefault();
			that.close();
		})
	}
	
	this.search = function(sUrl) {
		urlBox.change(sUrl);
	}
	
	this.show = function(htChannelInfo) {
		welContainer.show();
		if (htChannelInfo && htChannelInfo.url) {
			that.search(htChannelInfo.url);
		}
		if (htChannelInfo && htChannelInfo.width) {
			welContainer.width(htChannelInfo.width);
		}
		htOption.onResize();
	}
	
	this.hide = function() {
		welContainer.hide();
		htOption.onResize();
	}
	
	this.close = function() {
		welContainer.hide();
		welIframe.attr("src", "blank.html");
	}
	
	this.isActive = function() {
		return welContainer.is(":visible");
	}
	
	this.focus = function() {
		urlBox.focus();
	}
	
	this.getInfo = function() {
		return {
				url : urlBox.getInfo(),
				width : that.isActive() ? welContainer.width() : 0
		};
		return htResult;
	}
	
	init();
}

