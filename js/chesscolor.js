(function(){
	// выбор цвета фигур
	var chess_1 = document.getElementById('play_color_1');
	var chess_2 = document.getElementById('play_color_2');
	chess_1.addEventListener('click', chessColor)
	chess_2.addEventListener('click', chessColor)

	function chessColor(){
		if(chess_1.innerHTML == 'ЧЕРНЫЕ'){
			chess_1.innerHTML = 'БЕЛЫЕ';
			chess_1.classList.remove('black')
			chess_2.innerHTML = 'ЧЕРНЫЕ';
			chess_2.classList.add('black')
			// var flagOne = true;
 			// 	var flagTwo = false;
		} else{
			chess_1.innerHTML ='ЧЕРНЫЕ';
			chess_1.classList.add('black')
			chess_2.innerHTML = 'БЕЛЫЕ';
			chess_2.classList.remove('black')
			// var flagOne = false; переворот шахматного цвета но лучше сделать это просто заменой цвета
 			// 	var flagTwo = true;
		}
	}
})();