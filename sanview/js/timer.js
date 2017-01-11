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
		
		welBtnRefresh.click(clickRefresh);
	}
	
	this.start = function(intervalSec, _onRefresh) {
		remainSec = intervalSec;
		onRefresh = _onRefresh;
		
		clearTimeout(tCounter);
		
		isProgress = false;
		paint();
		
//		tCounter = setInterval(countdown, 1000);
//		countdown();
	}
	
	var countdown = function() {
		if (!isProgress) {
			return;
		}
		remainSec--;
		paint();
		if (remainSec <= 0) {
			onRefresh();
		}
	}
	
	var clickRefresh = function(we) {
		we.preventDefault();
		isProgress ^= true;
		
		clearTimeout(tCounter);
		if (isProgress) {
			tCounter = setInterval(countdown, 1000);
			countdown();
		} else {
			paint();
		}
	}
	
	var paint = function() {
		welBtnRefresh.removeClass("btn-warning btn-primary").addClass(isProgress ? "btn-warning" : "btn-primary");
		var msg = "";
		if (isProgress) {
			msg = remainSec + "초";
			if (remainSec % 30 > 24) {
				msg = "refresh ON " + remainSec + "초";
			}
		} else {
			msg = "refresh OFF";
		}
		welCountdown.text(msg);
	}
})();
