function ajax() {
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
}

module.exports = ajax;