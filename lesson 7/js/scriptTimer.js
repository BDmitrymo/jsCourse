function clock() {
	var blockDate = document.getElementById('timer');

	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	var dateAdd = ((hours < 10) ? '0':'') + hours;
		dateAdd += " : ";
		dateAdd += ((minutes < 10 ) ? '0':'') + minutes;
		dateAdd += " : ";
		dateAdd += ((seconds < 10 ) ? '0':'') + seconds;

	blockDate.textContent = dateAdd;

}

clock();
setInterval(clock, 1000);









