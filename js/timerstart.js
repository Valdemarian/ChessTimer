	// запуск таймера 1
	function finish(){
		timeringStart = true;
		start_1 = false;
	 	window.timerId = window.setInterval(timerOne, 1000);
		window.clearInterval(window.timerId_2);
		timer_span_1.style.color = "#fff";
		timer_span_2.style.color = "#14182B";
	 }

	// запуск таймера 2
	// var start_1;
 	function start() {
 		timeringStart = true;
 		start_1 = true
		window.timerId_2 = window.setInterval(timerTwo, 1000);
		console.log(timerId_2)
		window.clearInterval(window.timerId);
		timer_span_1.style.color = "#14182B";
		timer_span_2.style.color = "#fff";
	}
