var timer = new (function() {
	var that = this;
	
	var welBtnRefresh, welCountdown;

	var tCounter = null;
	var remainSec = 0;
	var onRefresh = function() {};
	var isProgress = false;

	this.init = function() {
		welBtnRefresh = $(".timer .refresh");
		welCountdown = $(".timer .countdown");
		
		welBtnRefresh.click(refresh);
	}
	
	this.start = function(intervalSec, _onRefresh) {
		remainSec = intervalSec;
		onRefresh = _onRefresh;
		
		clearTimeout(tCounter);
		
		isProgress = true;
		
		tCounter = setInterval(countdown, 1000);
		countdown();
	}
	
	var countdown = function() {
		if (!isProgress) {
			return;
		}
		remainSec--;
		welCountdown.text(remainSec);
		if (remainSec <= 0) {
			onRefresh();
		}
	}
	
	var refresh = function(we) {
		we.preventDefault();
		isProgress ^= true;
		welBtnRefresh.removeClass("btn-warning btn-primary").addClass(isProgress ? "btn-warning" : "btn-primary");
		
		clearTimeout(tCounter);
		if (isProgress) {
			tCounter = setInterval(countdown, 1000);
		}
	}
})();
