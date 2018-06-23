let calc = function() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daySum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	persons.onkeypress = function(event) {   
		// делаем запреженный список символов
		let characters = "+.,?e";

		// записали в перпеменную событие, нажав на символ
		let key = String.fromCharCode(event.which);
    
		if(characters.indexOf(key) >= 0){
			alert('Ввели запрещенный символ');    
			return false;
		} else {
			return true;
		} 
	};

	restDays.onkeypress = function(event) {   
		let characters = "+.,?e",
		    key = String.fromCharCode(event.which);
   
		if(characters.indexOf(key) >= 0){
			alert('Ввели запрещенный символ');    
			return false;
		} else {
			return true;
		} 
	};


	function testInput() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
 		} else {
 			total = (daySum + personsSum)*4000;
 			totalValue.innerHTML = total;
 			persons.value = personsSum;
			restDays.value = daySum;
 		}
	}

	persons.addEventListener('change', function(){
		personsSum = parseInt(this.value, 10);
		testInput();
	});

	restDays.addEventListener('change', function(){
		daySum = parseInt(this.value, 10);
		testInput();
	});

	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}();

module.exports = calc;