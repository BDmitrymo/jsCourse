window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		blockTab = document.getElementsByClassName('info-header')[0];

	function hide(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hide(1);

	function show(b){
		if(tabContent[b].classList.contains('hide')){
			hide(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	blockTab.addEventListener('click', function (event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					show(i);
					break;
				}
			}
		}
		
	});

	//Timer
	let deadline = '2018-07-13';

	function getTimeRemaining (endtime){
		let dateX = new Date();
		let t = Date.parse(deadline) - Date.parse(dateX),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( t/(1000*60*60) % 24 );

		if(t < 0) {
			return {
				'total': 0,
				'hours': '0',
				'minutes': '0',
				'seconds': '0'
			};
		} else {
			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			infoEdit = document.getElementById('editTimetext'),
			timeInterval = setInterval(updateClock, 1000);

		hoursZ = timer.querySelector('.hours');
		minutesZ = timer.querySelector('.minutes');
		secondsZ = timer.querySelector('.seconds');
		
		function updateClock(){
			let t = getTimeRemaining(endtime);

			hoursZ.innerHTML = ((t.hours < 10) ? '0':'') + t.hours;
			minutesZ.innerHTML = ((t.minutes < 10) ? '0':'') + t.minutes;
			secondsZ.innerHTML = ((t.seconds < 10) ? '0':'') + t.seconds;

			if(t.total === 0){
				clearInterval(timeInterval);
				infoEdit.style.display = 'block';
			} else {
				infoEdit.style.display = 'none';
			}
		}
		updateClock();
	}
	setClock('timer', deadline);

	//Modal
	let more = document.querySelector('.more'),
		dBtn = document.getElementsByClassName('description-btn')[0],
		infoX = document.getElementsByClassName('info')[0],
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	infoX.addEventListener('click', function (event) {
		let target = event.target;
		if (target.classList == 'description-btn'){
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		} else {
			return 0;
		}
	});

	more.addEventListener('click', function (){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	
	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		dBtn.classList.remove('more-splash');
		document.body.style.overflow = 'auto';
	});

	//Form
	let message = new Object();
		message.loading = "Загрузка";
		message.success = "Спасибо! Скоро мы с Вами связемся";
		message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				//jочищаем поля ввода
			}
		});


		//Контактная форм
		let messageContact = new Object();
			messageContact.loading = "Отправляется запрос, ожидайте";
			messageContact.yes = "Запрос принят, с Вами свяжутся";
			messageContact.error = "Произошла ошибка!";

		let formZ = document.getElementById('form'),
			inputMessageContact = formZ.getElementsByTagName('input'),
			statusMessageZ = document.createElement('div');

		formZ.addEventListener('submit', function(event){
			event.preventDefault(); // после отправки формы, не обновлялась страница
			formZ.appendChild(statusMessageZ); //добвляем в форму дом блок, где будет сообщение

			let requestZ = new XMLHttpRequest();
			requestZ.open("POST", 'server.php'); // как отправляем, с пом POST в файл server.php

			requestZ.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // кодировка данных

			let formDataZ = new FormData(formZ); // подготовка данных для отправки(берет все данные с формы)
			requestZ.send(formDataZ); // отправляем на сервер


			// отслеживаем наш запрос(как он проходит)
			requestZ.onreadystatechange = function() {
				if (requestZ.readyState < 4) {
					statusMessageZ.innerHTML = messageContact.loading;
				} else if (requestZ.readyState === 4) {
					if (requestZ.status == 200 && requestZ.status < 300) { // если  статус равен 200 и до 300, то можно сообщить, все ОК
						statusMessageZ.innerHTML = messageContact.yes; // отправляем на страницу сообщение об успешной отправке
					} else {
						statusMessageZ.innerHTML = messageContact.error;
					}
				}
			}

			for (let i = 0; i < inputMessageContact.length; i++) {
				inputMessageContact[i].value = '';
			}

		});
			

}); 


