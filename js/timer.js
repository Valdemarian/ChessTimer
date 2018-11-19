	// таймер 1
	var counter_1 = document.getElementById('counter_1');
	var timer_span_1 = document.getElementById('timer_span-1');
	var min_1 = document.getElementById('timer1_min');
	var sec_1 = document.getElementById('timer1_sec');

	var i = 1;

	function timerOne(){
		 
		 sec_1.innerHTML = arrSecond[i]

		if( i == 0){
   		min_1.innerHTML--;
   	}
   			
		if (i == arrSecond.length -1) {
   		i = 0; 
 		} else {
   	     i++
   		} 

   	if(min_1.innerHTML == 0 && i == 0 ){
   		window.clearInterval(window.timerId);
   		min_1.innerHTML = '0';
   		sec_1.innerHTML = '00';
   		counter_2.innerHTML = parseInt(counter_2.innerHTML) + 1;
   		pausedSet = true;
   		clear()
   	}
	}


	// таймер 2
	var counter_2 = document.getElementById('counter_2');
	var timer_span_2 = document.getElementById('timer_span-2');
	var min_2 = document.getElementById('timer2_min');
	var sec_2 = document.getElementById('timer2_sec');

	var k = 1; 

	function timerTwo(){	
		
		sec_2.innerHTML = arrSecond[k]

		if(k == 0){
   		min_2.innerHTML--;
   	}
   			
		if (k == arrSecond.length -1) {
   		k = 0; 
 		} else {
   	     k++
   		} 

   	if(min_2.innerHTML == 0 && k == 0 ){
   		window.clearInterval(window.timerId_2);
   		min_2.innerHTML = '0';
   		sec_2.innerHTML = '00';
   		counter_1.innerHTML = parseInt(counter_1.innerHTML) + 1;
   		pausedSet = true;
   		clear2()
   	}
	}


	var arrSecond = ['00','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43',
	'42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21',
	'20','19','18','17','16','15','14','13','12','11','10','09','08','07','06','05','04','03','02','01'];
