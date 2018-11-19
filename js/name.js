( function() {
	// имя игрока 

	var names = document.querySelectorAll('.name');
	for (var p = 0; p < names.length; p++) {
		names[p].onblur = upperName;
	}

	function upperName(){
		this.value = '   ' + this.value.toUpperCase()
	}

})();