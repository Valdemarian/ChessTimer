	// var pausedSet = false;
	// var clearTimer = false;
	// var finished;
	// var timeringStart;



	// имя игрока 

	// 	var names = document.querySelectorAll('.name');
	// 	for (var p = 0; p < names.length; p++) {
	// 		names[p].onblur = upperName;
	// 	}
		
	// function upperName(){

	// 	this.value = '   ' + this.value.toUpperCase()
	// }

	

	// // выбор времени игры
	// var min_5 = document.getElementById('min_5');
	// min_5.addEventListener('click', minutes_5)
 // 	var min_10 = document.getElementById('min_10');
 // 	min_10.addEventListener('click', minutes_10)

 // 	function minutes_5(){
 // 		min_1.innerHTML = 4;
 // 		min_2.innerHTML = 4;
	// }

 // 	function minutes_10(){
 // 		min_1.innerHTML = 9;
 // 		min_2.innerHTML = 9;
	// }



	// выбор цвета фигур
	// var chess_1 = document.getElementById('play_color_1');
	// var chess_2 = document.getElementById('play_color_2');
	// chess_1.addEventListener('click', chessColor)
	// chess_2.addEventListener('click', chessColor)

	// function chessColor(){
	// 	if(chess_1.innerHTML == 'ЧЕРНЫЕ'){
	// 		chess_1.innerHTML = 'БЕЛЫЕ';
	// 		chess_1.classList.remove('black')
	// 		chess_2.innerHTML = 'ЧЕРНЫЕ';
	// 		chess_2.classList.add('black')
	// 		// var flagOne = true;
 // 			// 	var flagTwo = false;
	// 	} else{
	// 		chess_1.innerHTML ='ЧЕРНЫЕ';
	// 		chess_1.classList.add('black')
	// 		chess_2.innerHTML = 'БЕЛЫЕ';
	// 		chess_2.classList.remove('black')
	// 		// var flagOne = false; переворот шахматного цвета но лучше сделать это просто заменой цвета
 // 			// 	var flagTwo = true;
	// 	}
	// }


	// клавиши нажатия таймера
	// var flagOne;
 // 	var flagTwo;
	//  window.onkeydown = function(event){
 // 		console.log(event)

 // 		if(event.keyCode == 17 && pausedSet == false) {
 // 			// if(!flagOne){
 // 				start(); 
 // 			// 	flagOne = true;
 // 			// 	flagTwo = false;
 // 			// // console.log(flagOne);
 // 			// }
 // 		} else if(event.keyCode == 13 && pausedSet == false){
 // 			// if(!flagTwo){
 // 			finish();
 // 			//  	flagOne = false;
 // 			// 	flagTwo = true;
 // 			// 	// console.log(flagTwo);
 // 			// }
 // 		} else if(event.keyCode == 32 && clearTimer == false && timeringStart == true){
 // 			pausedTimer()
 // 		} else if(event.keyCode == 32 && clearTimer == true){
 // 			if(finished){
 // 				clearTimerStart()
 // 			} else{
 // 				clearTimerFinish()
 // 			}	
	// 	} 
 // 	}


	// //пауза таймеров
	// var paused = document.getElementById('paused');
	// // paused.addEventListener('click', pausedTimer)

	

	// function pausedTimer() {
	// 	if(pausedSet == false && clearTimer == false){
	// 		pausedSet = true
	// 		if(start_1){
	// 			window.clearInterval(window.timerId_2)
	// 		} else{
	// 			window.clearInterval(window.timerId)
	// 		}	
	// 		paused.style.backgroundColor = '#FF5044'
	// 	} else{
	// 		pausedSet = false
	// 		if(start_1){
	// 			start()
	// 		} else{
	// 			finish()
	// 		}
	// 		paused.style.backgroundColor = '#782634'
	// 	}
	// }



	// function clear2(){
	// 	if(pausedSet == true && min_2.innerHTML == 0 && k == 0 ){
	// 		// console.log('сброс работает')
	// 		paused.innerHTML = 'СБРОС';
	// 		paused.style.backgroundColor = '#FF5044';
	// 		clearTimer = true;
	// 		finished = false;
	// 		overCounter2()
	// 	}
	// }

	// function clear(){
	// 	if(pausedSet == true && min_1.innerHTML == 0 && i == 0 ){
	// 		// console.log('сброс работает')
	// 		paused.innerHTML = 'СБРОС';
	// 		paused.style.backgroundColor = '#FF5044';
	// 		clearTimer = true;
	// 		finished = true;
	// 		overCounter()
	// 	}
	// }

	// function clearTimerStart(){
	// 	timeringStart = false;
	// 	pausedSet = false;
	// 	clearTimer = false;
	// 	min_1.innerHTML = 4;
	// 	min_2.innerHTML = 4;
	// 	sec_1.innerHTML = '59';
	// 	sec_2.innerHTML = '59';
	// 	k = 1;
	// 	i = 1;
	// 	canceloverCounter2()
	// 	timer_span_1.style.color = "#fff";
	// 	paused.style.backgroundColor = '#782634';
	// 	paused.innerHTML = 'ПАУЗА';

	// }
	// function clearTimerFinish(){
	// 	timeringStart = false;
	// 	pausedSet = false;
	// 	clearTimer = false;
	// 	min_1.innerHTML = 4;
	// 	min_2.innerHTML = 4;
	// 	sec_1.innerHTML = '59';
	// 	sec_2.innerHTML = '59';
	// 	k = 1;
	// 	i = 1;
	// 	canceloverCounter()
	// 	timer_span_2.style.color = "#fff";
	// 	paused.style.backgroundColor = '#782634';
	// 	paused.innerHTML = 'ПАУЗА';
	// }

	// запуск таймера 1
	// function finish(){
	// 	timeringStart = true;
	// 	start_1 = false;
	//  	window.timerId = window.setInterval(timerOne, 10);
	// 	window.clearInterval(window.timerId_2);
	// 	timer_span_1.style.color = "#fff";
	// 	timer_span_2.style.color = "#14182B";
	//  }

	// // запуск таймера 2
	// var start_1;
 // 	function start() {
 // 		timeringStart = true;
 // 		start_1 = true
	// 	window.timerId_2 = window.setInterval(timerTwo, 10);
	// 	console.log(timerId_2)
	// 	window.clearInterval(window.timerId);
	// 	timer_span_1.style.color = "#14182B";
	// 	timer_span_2.style.color = "#fff";
	// }

	// // мигание законченного таймера

	// 	var arrOver1 = ['#FF5044', '#fff'];
	// 	var iOver1 = 0;

	// 	function over1() {
	// 		timer_span_1.style.color = arrOver1[iOver1];
	// 		iOver1++;
	// 		if (iOver1 >= arrOver1.length) {
	// 			iOver1 = 0;
 // 			}	
	// 	} 

	// 	var arrOver2 = ['#FF5044', '#fff'];
	// 	var iOver2 = 0;
	// 	var overCounter;

	// 	function over2() {
	// 			timer_span_2.style.color = arrOver2[iOver2];
	// 			iOver2++;
	// 			if (iOver2 >= arrOver2.length) {
	// 			iOver2 = 0;
	// 			}						
	// 		} 
		

	// 		function overCounter2(){
	// 			window.ovrId_2 = window.setInterval(over2, 500);
	// 		}

	// 		function canceloverCounter2(){
	// 			timer_span_2.style.color = '#fff'
	// 			window.clearInterval(window.ovrId);
	// 		}


	// 		function overCounter(){
	// 			window.ovrId = window.setInterval(over1, 500);
	// 		}

	// 		function canceloverCounter(){
	// 			timer_span_1.style.color = '#fff'
	// 			window.clearInterval(window.ovrId_2);
	// 		}

	

	// // таймер 1
	// var counter_1 = document.getElementById('counter_1');
	// var timer_span_1 = document.getElementById('timer_span-1');
	// var min_1 = document.getElementById('timer1_min');
	// var sec_1 = document.getElementById('timer1_sec');

	// var i = 1;

	// function timerOne(){
		 

	// 	 sec_1.innerHTML = arrSecond[i]

	// 	    if( i == 0){
 //   				min_1.innerHTML--;
 //   			}
   			
	// 	 	if (i == arrSecond.length -1) {
 //   				 i = 0; 
 // 			} else {
 //   				i++
 //   			} 

 //   			if(min_1.innerHTML == 0 && i == 0 ){
 //   				window.clearInterval(window.timerId);
 //   				min_1.innerHTML = '0';
 //   				sec_1.innerHTML = '00';
 //   				counter_2.innerHTML = parseInt(counter_2.innerHTML) + 1;
 //   				pausedSet = true;
 //   				clear()
 //   			}
	// }


	// // таймер 2
	// var counter_2 = document.getElementById('counter_2');
	// var timer_span_2 = document.getElementById('timer_span-2');
	// var min_2 = document.getElementById('timer2_min');
	// var sec_2 = document.getElementById('timer2_sec');

	// var k = 1; 

	// function timerTwo(){	
		
	// 	sec_2.innerHTML = arrSecond[k]


	// 	    if(k == 0){
 //   				min_2.innerHTML--;
 //   			}
   			
	// 	 	if (k == arrSecond.length -1) {
 //   				k = 0; 
 // 			} else {
 //   				k++
 //   			} 

 //   			if(min_2.innerHTML == 0 && k == 0 ){
 //   				window.clearInterval(window.timerId_2);
 //   				min_2.innerHTML = '0';
 //   				sec_2.innerHTML = '00';
 //   				counter_1.innerHTML = parseInt(counter_1.innerHTML) + 1;
 //   				pausedSet = true;
 //   				clear2()
 //   			}
	// }


	// var arrSecond = ['00','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','09','08','07','06','05','04','03','02','01']

