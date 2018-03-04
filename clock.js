jQuery (function($){
	var launch = new Date(2019,00,01,00,00,00);
	var days = $('#days');
	var hours = $('#hours');
	var minutes = $('#minutes');
	var seconds = $('#seconds');



	setDate();
	function setDate(){
		var now = new Date();
		var s = (launch.getTime() - now.getTime())/1000;
		var d = Math.floor(s/86400);
		days.html(''+d+' <br>'+(d>1?'':''));
		s -= d*86400;

		var h = Math.floor(s/3600);
		hours.html(''+h+':<br>'+(h>1?'':''));
		s -= h*3600;

		var m = Math.floor(s/60);
		minutes.html(''+m+':<br>'+(m>1?'':''));
		s -= m*60;

		s = Math.floor(s);
		seconds.html(''+s+'<br>'+(s>1?'':''));

		setTimeout(setDate,1000);

	}
});
