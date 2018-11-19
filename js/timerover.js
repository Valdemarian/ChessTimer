	// мигание законченного таймера

		var arrOver1 = ['#FF5044', '#fff'];
		var iOver1 = 0;

		function over1() {
			timer_span_1.style.color = arrOver1[iOver1];
			iOver1++;
			if (iOver1 >= arrOver1.length) {
				iOver1 = 0;
 			}	
		} 

		var arrOver2 = ['#FF5044', '#fff'];
		var iOver2 = 0;
		// var overCounter;

		function over2() {
				timer_span_2.style.color = arrOver2[iOver2];
				iOver2++;
				if (iOver2 >= arrOver2.length) {
				iOver2 = 0;
				}						
			} 
		

		function overCounter2(){
			window.ovrId_2 = window.setInterval(over2, 500);
		}

		function canceloverCounter2(){
			timer_span_2.style.color = '#fff'
			window.clearInterval(window.ovrId);
		}


		function overCounter(){
			window.ovrId = window.setInterval(over1, 500);
		}

		function canceloverCounter(){
			timer_span_1.style.color = '#fff'
			window.clearInterval(window.ovrId_2);
		}
