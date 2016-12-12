var viewer = new (function() {
	var that = this;
	var aChannel = [];
	var welChannelList;
	
	var MARGIN_LEFT = 10;
	
	this.init = function(_welChannelList) {
		welChannelList = _welChannelList;
		for (var i = 0; i < welChannelList.length; i++) {
			aChannel.push(new Channel({
				container : welChannelList.eq(i),
				onResize : resizeWidth
			}));
		}
		
		//drawMenu();
	}
	
	this.changeCategory = function(aSite) {
		for (var i = 0; i < aChannel.length; i++) {
			aChannel[i].close();
		}
		for (var i = 0; i < aSite.length; i++) {
			if (!aSite[i].url) {
				continue;
			}
			aChannel[i].show(aSite[i]);
		}
		resizeWidth();
	}
	
	var resizeWidth = function() {
		var totalWidth = 0;
		for (var i = 0; i < aChannel.length; i++) {
			totalWidth += aChannel[i].getInfo().width + MARGIN_LEFT;
		}
		$(".viewer").width(totalWidth);
	}
	
	/*
	var drawMenu = function() {
		var welCategoryMenu = $(".category_menu");
		welCategoryMenu.html("");
		for (var i = 0; i < aSiteMapList.length; i++) {
			var htData = aSiteMapList[i];
			var welButton = $("<a class='btn btn-info menu' href='#'>" + htData.name + "</a>");
			var makeFunction = function(htSiteMap) {
				return function(we) {
					we.preventDefault();
					that.changeCategory(htSiteMap.list);
				}
			}
			welButton.bind("click", makeFunction(htData));
			welCategoryMenu.append(welButton);
		}
	}
	*/
	
	this.getInfo = function() {
		var htResult = {
				list : []
		};
		for (var i = 0; i < aChannel.length; i++) {
			var htInfo = aChannel[i].getInfo();
			if (!aChannel[i].isActive()) {
				continue;
			}
			htResult.list.push(htInfo);
		}
		return htResult;
	}
	
	this.setInfo = function(htInfo) {
		that.changeCategory(htInfo.list);
	}
	
	this.addChannel = function() {
		for (var i = 0; i < aChannel.length; i++) {
			if (aChannel[i].isActive()) {
				continue;
			}
			aChannel[i].show();
			aChannel[i].focus();
			return;
		}
		alert("검색창은 최대 " + aChannel.length + "개까지만 열 수 있습니다.");
	}
})();
