
var Url = function(name, url) {
	this.name = name;
	this.url = url;
}

var Counter = function(_id, _welParent) {
	var that = this;
	var id = _id;
	var welParent = _welParent;
	
	$.ajax({
		url : "http://kongjis.woobi.co.kr/counter.php",
		data : {id:id},
		method : "POST",
		success : function(res) {
			var data = res.split("|");
			paint(data[0], data[1]);
		}
	});
	
	var paint = function(totalCnt, todayCnt) {
		welParent.find(".total").text(totalCnt.format());
		welParent.find(".today").text(todayCnt.format());
	}
}

function loadScript(jsSrc, reload) {
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = jsSrc + (reload ? "?" + (new Date()).getTime() : "");
	document.head.appendChild(js);
}

Number.prototype.format = function(){
    if(this==0) return 0;
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
};

String.prototype.format = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";
 
    return num.format();
};
