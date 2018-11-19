(function(){
	// клавиши нажатия таймера
	var flagOne;
 	var flagTwo;
	 window.onkeydown = function(event){
 		console.log(event)

 		if(event.keyCode == 17 && pausedSet == false) {
 			if(!flagOne){
 				start(); 
 				flagOne = true;
 				flagTwo = false;
 			// console.log(flagOne);
 			}
 		} else if(event.keyCode == 13 && pausedSet == false){
 			if(!flagTwo){
 			finish();
 			 	flagOne = false;
 				flagTwo = true;
 				// console.log(flagTwo);
 			}
 		} else if(event.keyCode == 32 && clearTimer == false && timeringStart == true){
 			pausedTimer()
 		} else if(event.keyCode == 32 && clearTimer == true){
 			if(finished){
 				clearTimerStart()
 			} else{
 				clearTimerFinish()
 			}	
		} 
 	}
})();