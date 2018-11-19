	//пауза таймеров
	var paused = document.getElementById('paused');
	// paused.addEventListener('click', pausedTimer)

	// var pausedSet = false;

	function pausedTimer() {
		if(pausedSet == false && clearTimer == false){
			pausedSet = true
			if(start_1){
				window.clearInterval(window.timerId_2)
			} else{
				window.clearInterval(window.timerId)
			}	
			paused.style.backgroundColor = '#FF5044'
		} else{
			pausedSet = false
			if(start_1){
				start()
			} else{
				finish()
			}
			paused.style.backgroundColor = '#782634'
		}
	}

	// var clearTimer = false;


	function clear2(){
		if(pausedSet == true && min_2.innerHTML == 0 && k == 0 ){
			// console.log('сброс работает')
			paused.innerHTML = 'СБРОС';
			paused.style.backgroundColor = '#FF5044';
			clearTimer = true;
			finished = false;
			overCounter2()
		}
	}

	function clear(){
		if(pausedSet == true && min_1.innerHTML == 0 && i == 0 ){
			// console.log('сброс работает')
			paused.innerHTML = 'СБРОС';
			paused.style.backgroundColor = '#FF5044';
			clearTimer = true;
			finished = true;
			overCounter()
		}
	}

	function clearTimerStart(){
		timeringStart = false;
		pausedSet = false;
		clearTimer = false;
		min_1.innerHTML = 4;
		min_2.innerHTML = 4;
		sec_1.innerHTML = '59';
		sec_2.innerHTML = '59';
		k = 1;
		i = 1;
		canceloverCounter2()
		timer_span_1.style.color = "#fff";
		paused.style.backgroundColor = '#782634';
		paused.innerHTML = 'ПАУЗА';

	}
	// var finished;
	function clearTimerFinish(){
		timeringStart = false;
		pausedSet = false;
		clearTimer = false;
		min_1.innerHTML = 4;
		min_2.innerHTML = 4;
		sec_1.innerHTML = '59';
		sec_2.innerHTML = '59';
		k = 1;
		i = 1;
		canceloverCounter()
		timer_span_2.style.color = "#fff";
		paused.style.backgroundColor = '#782634';
		paused.innerHTML = 'ПАУЗА';
	}
