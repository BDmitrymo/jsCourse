let date = new Date(),
	hours = date.getHours(),
	minutes = date.getMinutes(),
	seconds = date.getSeconds(),
	year = date.getFullYear(),
	month = date.getMonth(),
	numberDate = date.getDate(),
	resBtn = document.getElementById('resBtn');

function editDate() {
	let clock = document.getElementById('clock');
	
	this.fullClock = ((hours < 10) ? '0':'') + hours;
		 fullClock += ':';
	     fullClock += ((minutes < 10) ? '0':'') + minutes;
	     fullClock += ':';
	     fullClock += ((seconds < 10) ? "0":'') + seconds;

	this.fullDate = ((numberDate < 10) ? '0':'') + numberDate;
	     fullDate += '.';
	     fullDate += ((month < 10) ? '0':'') + month;
	     fullDate += '.';
	     fullDate += ((year < 10) ? '0':'') + year;
}

function dayAdd(dates) {
	let day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		dayArr = (day[dates]),
		dayBlock = document.getElementById('day');
	dayBlock.textContent = 'Сегодня: ' + dayArr;
}

resBtn.addEventListener('click', function() {

	let	dateOne = document.getElementById('dateOne'),
		dateTwo = document.getElementById('dateTwo'),
		s = document.getElementById('s');

	let str1 = dateOne.value.split('-'),
		arr1 = str1[2],
		ss1;
		
	let	str2 = dateTwo.value.split('-'),
		arr2 = str2[2],
		ss2;

	ss1 = (arr1 < 10) ? ss1 = arr1.slice(-1) : ss1 = arr1;
	ss2 = (arr2 < 10) ? ss2 = arr2.slice(-1) : ss2 = arr2;

	let res = (ss1 - ss2)-1;
			
	s.value = 'Разница между двумя датами ' + res + ' дней';
});

let dateX = new Date(),
	x = dateX.getDay();

dayAdd(x);
editDate();	
	
clock.innerHTML = fullClock + ' ' + fullDate;



