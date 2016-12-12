var timer = new (function() {
	var that = this;
	
	var welBtnRefresh, welCountdown;

	var tInterval = null;
	var tCounter = null;
	var remainSec = 0;
	var onRefresh = function() {};

	this.init = function() {
		welBtnRefresh = $(".timer .refresh");
		welCountdown = $(".timer .countdown");
		
		welBtnRefresh.click(refresh);
	}
	
	this.start = function(intervalSec, _onRefresh) {
		remainSec = intervalSec;
		onRefresh = _onRefresh;
		
		clearTimeout(tInterval);
		clearTimeout(tCounter);
		
		tInterval = setInterval(onRefresh, intervalSec * 1000);
		tCounter = setInterval(countdown, 1000);
		countdown();

	}
	
	var countdown = function() {
		remainSec--;
		welCountdown.text(remainSec);
	}
	
	var refresh = function(we) {
		we.preventDefault();
		onRefresh();
	}
})();
