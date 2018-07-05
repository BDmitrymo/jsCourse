function formOpen() {

	// общее
	function checkLetters1(n) {
		let nameE = n,
			strRusZ = /[^А-ЯЁ]/i;
		if(strRusZ.test(nameE)){
			alert('Русско язычный сайт! Все пишется на русском языке!');
			nameForm.value = '';
		}		
	}

	function checkLetters2(n) {
		let nameE = n,
			strRusZ = /[^А-ЯЁ]/i;
		if(strRusZ.test(nameE)){
			alert('Русско язычный сайт! Все пишется на русском языке!');
			textForm.value = '';
		}		
	}

	function checkLetters3(n) {
		let nameE = n,
			strRusZ = /[^А-ЯЁ]/i;
		if(strRusZ.test(nameE)){
			alert('Русско язычный сайт! Все пишется на русском языке!');
			name.value = '';
		}		
	}

	function checkLetters4(n) {
		let nameE = n,
			strRusZ = /[^А-ЯЁ]/i;
		if(strRusZ.test(nameE)){
			alert('Русско язычный сайт! Все пишется на русском языке!');
			inputText.value = '';
		}		
	}

	function checkLetters5(n) {
		let nameE = n,
			strRusZ = /[^А-ЯЁ]/i;
		if(strRusZ.test(nameE)){
			alert('Русско язычный сайт! Все пишется на русском языке!');
			nameXXX.value = '';
		}		
	}

	// маска телефона
	function setCursorPosition(pos, elem) {
	    elem.focus();
	    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	    else if (elem.createTextRange) {
	        var range = elem.createTextRange();
	        range.collapse(true);
	        range.moveEnd("character", pos);
	        range.moveStart("character", pos);
	        range.select()
	    }
	}

	function mask(event) {
	    var matrix = "+7 (___) ___ ____",
	        i = 0,
	        def = matrix.replace(/\D/g, ""),
	        val = this.value.replace(/\D/g, "");
	    if (def.length >= val.length) val = def;
	    this.value = matrix.replace(/./g, function(a) {
	        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	    });
	    if (event.type == "blur") {
	        if (this.value.length == 2) this.value = ""
	    } else setCursorPosition(this.value.length, this)
	};

    let input = document.getElementsByClassName("phoneForm")[0];
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    let message = new Object()
    	openForm1 = document.getElementsByClassName('openForm1')[0],
    	openForm2 = document.getElementsByClassName('openForm2')[0],
    	openForm3 = document.getElementsByClassName('openForm3')[0];

		message.loading = "Загрузка";
		message.success = "Спасибо! Скоро мы с Вами свяжемся";
		message.failure = "Что-то пошло не так...";

		statusMessage = document.createElement('div');


	// модальное окно формы
	let nameForm = document.getElementsByClassName('nameForm')[0],
		phoneForm = document.getElementsByClassName('phoneForm')[0],
		emailForm = document.getElementsByClassName('emailForm')[0],
		textForm = document.getElementsByClassName('textForm')[0],
		closeForm = document.getElementsByClassName('popup-design')[0];

	closeForm.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'popup-content') {
			closeForm.style.display = 'block';
		} else if (target.className == 'popup-design') {
			closeForm.style.display = 'none';
		} else {
			return false
		}
	});

	nameForm.addEventListener('change', function() {
		nameStr = nameForm.value;
		checkLetters1(nameStr);
	});

	emailForm.addEventListener('change', function() {
		emailForm = emailForm.value;
	});

	textForm.addEventListener('change', function() {
		inputTextStr = textForm.value;
		checkLetters2(inputTextStr);
	});

	let formM = document.getElementsByClassName('modalFormOpen')[0],
		inputX = formM.getElementsByTagName('input');
/*
	openForm1.onclick = function() {
		setInterval(function(){
			location.reload();
		}, 1000);
	}

	openForm2.onclick = function() {
		setInterval(function(){
			location.reload();
		}, 1000);
	}

	openForm3.onclick = function() {
		setInterval(function(){
			location.reload();
		}, 1000);
	}
*/
	formM.addEventListener('submit', function(event){

		event.preventDefault();
		formM.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(formM);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for (let i = 0; i < inputX.length; i++) {
			inputX[i].value = '';
			textForm.value = '';
		}
	});

	// Главная форма
	let name = document.getElementsByClassName('name')[0],
		phone = document.getElementsByClassName('phone')[0],
		email = document.getElementsByClassName('email')[0],
		inputText = document.getElementsByClassName('input-text')[0],
		mainForm = document.getElementsByClassName('mainFormXX')[0],
		inputXX = mainForm.getElementsByTagName('input')
		closeFormX = document.getElementsByClassName('popup-design')[0];


	name.addEventListener('change', function() {
		nameStr = name.value;
		checkLetters3(nameStr);
	});

	email.addEventListener('change', function() {
		emailStr = email.value;
	});

	inputText.addEventListener('change', function() {
		inputTextStr = inputText.value;
		checkLetters4(inputTextStr);
	});

	let inputx = document.getElementsByClassName("phoneX")[0];
	    inputx.addEventListener("input", mask, false);
	    inputx.addEventListener("focus", mask, false);
	    inputx.addEventListener("blur", mask, false);

	mainForm.addEventListener('submit', function(event){
		event.preventDefault();
		mainForm.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(mainForm);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = messageX.failure;
				}
			}
		}

		for (let i = 0; i < inputXX.length; i++) {
			inputXX[i].value = '';
			textForm.value = '';
			//очищаем поля ввода
		}
	});

	// модальное окно формы
	let nameXXX = document.getElementsByClassName('nameModal')[0],
		modalPushForm = document.getElementsByClassName('modalPushForm')[0],
		closeModals = document.getElementsByClassName('popup-consultation')[0],
		inputXXX = modalPushForm.getElementsByTagName('input');

	nameXXX.addEventListener('change', function() {
		nameStr = nameXXX.value;
		checkLetters5(nameStr);
	});

	let inputxxx = document.getElementsByClassName("phoneModal")[0];
	    inputxxx.addEventListener("input", mask, false);
	    inputxxx.addEventListener("focus", mask, false);
	    inputxxx.addEventListener("blur", mask, false);

	closeModals.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'popup-content') {
			closeModals.style.display = 'block';
		} else if (target.className == 'popup-consultation') {
			closeModals.style.display = 'none';
		} else {
			return false
		}
	});

	modalPushForm.addEventListener('submit', function(event){
		event.preventDefault();
		modalPushForm.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(modalPushForm);
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

		for (let i = 0; i < inputXXX.length; i++) {
			inputXXX[i].value = '';
			//очищаем поля ввода
		}
	});


























}


module.exports = formOpen;