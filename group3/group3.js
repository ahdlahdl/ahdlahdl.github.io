var imgs = [
  ["opening.png"],
  ["img001.png"],
  ["img002.png"],
  ["img003.png"],
  ["img004.png"],
  ["img005.png"],
  ["img006.png"],
  ["img007.png"],
  ["img008.png"],
  ["fewdaysago2.png"],
  ["img009.png"],
  ["img010.png"],
  ["img011.png"],
  ["img012.png"],
  ["img013.png"],
  ["img014.png"],
  ["img015.png"],
  ["img016.png"],
  ["img017.png"],
  ["img018.png"],
  ["img019.png"],
  ["img020.png"],
  ["goodbye.gif"]
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

  var lastDiv = null;
  function next() {
    if (page >= imgs.length) {
      return;
    }
    var imgList = imgs[page];
    var _html = "";
    if (imgList.length == 1) {
      _html = "<div><img src='images/" + imgList[0] + "'></div>";
    } else {
    }

    if (lastDiv != null) {
      lastDiv.fadeOut(FADEOUT);
    }
    var newDiv = $(_html).hide();
    welMain.append(newDiv);
    newDiv.fadeIn(FADEIN);
    page++;
    lastDiv = newDiv;
    timer = setTimeout(next, TIMEOUT);
  }

})();


Kakao.init('8d69e216872707f3d5da75f1f2c0fdbf');
Kakao.Link.createTalkLinkButton({
  container: '#kakao-link-btn',
  label: '카카오 클린데스크 캠페인',
  image: {
    src: 'http://dn.api1.kage.kakao.co.kr/14/dn/btqaWmFftyx/tBbQPH764Maw2R6IBhXd6K/o.jpg',
    width: '300',
    height: '200'
  },
  webButton: {
    text: '사내 정보를 유출하는 스파이를 찾아라!!',
    url: 'http://ahdlahdl.github.io/group3/'
  }
});