(function(){
	// выбор времени игры
	
	var min_5 = document.getElementById('min_5');
	min_5.addEventListener('click', minutes_5)
 	var min_10 = document.getElementById('min_10');
 	min_10.addEventListener('click', minutes_10)

 	function minutes_5(){
 		min_1.innerHTML = 4;
 		min_2.innerHTML = 4;
	}

 	function minutes_10(){
 		min_1.innerHTML = 9;
 		min_2.innerHTML = 9;
	}
})();