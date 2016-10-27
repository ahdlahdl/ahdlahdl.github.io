var imgs = [
	"opening.png",
	"img001.png",
	"img002.png",
	"img003.png",
	"img004.png",
	"img005.png",
	"img006.png",
	"img007.png",
	"img008.png",
	"fewdaysago2.png",
	"img009.png",
	"img010.png",
	"img011.png",
	"img012.png",
	"img013.png",
	"img014.png",
	"img015.png",
	"img016.png",
	"img017.png",
	"img018.png",
	"img019.png",
	"img020.png",
	"goodbye.gif"
];

var player = new (function() {
	var that = this;
	var welMain, welBtnPrev, welBtnNext;
	var page;

	var timer;
	var TIMEOUT = 60000;
	var FADEOUT = 500;
	var FADEIN = 1000

	this.init = function() {
		welMain = $("#main");
		welBtnPrev = $("#btnPrev");
		welBtnNext = $("#btnNext");

		welBtnPrev.click(function(we) {
			we.preventDefault();
			clearTimeout(timer);
			page = Math.max(page - 2, 0);
			next();
		});

		welBtnNext.click(function(we) {
			we.preventDefault();
			clearTimeout(timer);
			next();
		});

		page = 0;
		next();
	}

	function getNextPageNo() {
		if (page >= imgs.length) {
			return -1;
		}
		return page + 1;
	}
	
	function findOrMakeDivPage(page) {
		var id = "__" + page;
		var wel = $("div#" + id);
		if (wel.length == 0) {
			wel = $("<div><img src='images/" + imgs[page] + "'></div>").attr("id", id).hide();
			welMain.append(wel);
		}
		return wel;
	}

	var lastDiv = null;
	function next() {
		if (page >= imgs.length) {
			return;
		}
		var currDiv = findOrMakeDivPage(page);
		var nextPageNo = getNextPageNo();
		if (nextPageNo >= 0) {
			var nextDiv = findOrMakeDivPage(nextPageNo);
		}

		if (lastDiv != null) {
			lastDiv.fadeOut(FADEOUT);
		}
		
		currDiv.fadeIn(FADEIN);
		page++;
		lastDiv = currDiv;
		timer = setTimeout(next, TIMEOUT);
	}

})();

function initKakaoLink() {
	Kakao.init('8d69e216872707f3d5da75f1f2c0fdbf');
	Kakao.Link.createTalkLinkButton({
		container : '#kakao-link-btn',
		label : '카카오 클린데스크 캠페인',
		image : {
			src : 'http://dn.api1.kage.kakao.co.kr/14/dn/btqaWmFftyx/tBbQPH764Maw2R6IBhXd6K/o.jpg',
			width : '300',
			height : '200'
		},
		webButton : {
			text : '사내 정보를 유출하는 스파이를 찾아라!!',
			url : 'http://ahdlahdl.github.io/group3/'
		}
	});
}