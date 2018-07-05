(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let block_loading = require('../parts/block_loading.js');
	let calc = require('../parts/calc.js');
	let formOpen = require('../parts/form.js');
	

	slider();
	modal();
	block_loading();
	calc();
	formOpen();

}); 
},{"../parts/block_loading.js":2,"../parts/calc.js":3,"../parts/form.js":4,"../parts/modal.js":5,"../parts/slider.js":6}],2:[function(require,module,exports){
function block_loading() {

	let btnStyleOpen = document.getElementsByClassName('btn-style')[0],
		hiddenItemOpen = document.getElementsByClassName('hidden-lg')[0],

		hiddenItemSlider = document.getElementsByClassName('hidden-Item'),
		hiddenIndex = 1;

	btnStyleOpen.addEventListener('click', function() {

		btnStyleOpen.style.display = 'none';

		function hiddenSlider(n) {

			if (n > hiddenItemSlider.length) {
				hiddenIndex = 1;
			}

			if (n < 1) {
				hiddenIndex = hiddenItemSlider.length;
			}

			for (let i = 0; i < hiddenItemSlider.length; i++) {
				hiddenItemSlider[i].style.display = 'none';
			}

			hiddenItemSlider[hiddenIndex-1].style.display = 'block';
		};

		hiddenSlider();

		setInterval(function() {

			let num = 1;

			hiddenSlider(hiddenIndex += num);

		}, 4000);

	});

	// гамбургер
	let btnGamb = document.getElementsByClassName('burger')[0],
		gambOpen = document.getElementsByClassName('burger-menu')[0];
	

	if(document.body.offsetWidth < 768){
		
		btnGamb.onclick = function gamburger() {
			gambOpen.style.display = gambOpen.style.display == "block" ? "none" : "block";
  		}
	}

	if(document.body.offsetWidth > 768){
		btnGamb.style.display = 'none';
	}	

	// Аккардион
	let tab = document.getElementsByClassName('spanTab'),
		test= document.getElementsByClassName('ee')[0],
		test2= document.getElementsByClassName('qwe')[0],
		tabContent = document.getElementsByClassName('accordion-block'),
		blockTab = document.getElementsByClassName('izz')[0];

	function hide(a){

		for(let i = a; i < tab.length; i++){
			tab[i].classList.remove('red');
		}

		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.add('hideX');
			tabContent[i].classList.remove('zzz');

			tabContent[i].classList.remove('showX');
			tabContent[i].classList.add('zz');
		}
	}

	hide(0);

	function show(b){
		if (tabContent[b].classList.contains('hideX')){
			hide(0);

			tabContent[b].classList.remove('hideX');
			tabContent[b].classList.add('showX');
			tab[b].classList.add('red');

			setInterval(function() {
				tabContent[b].classList.remove('showX');
				tabContent[b].classList.add('zzz');
			}, 50);
		} 
	}


	function clickTabAcc() {
		tab[0].onclick = function er() {
			hide(0);
			tabContent[0].style.display = tabContent[0].style.display == "block" ? "none" : "block";
  		}

  		tab[1].onclick = function er() {
			hide(0);
			tabContent[1].style.display = tabContent[1].style.display == "block" ? "none" : "block";
  		}

  		tab[2].onclick = function er() {
			hide(0);
			tabContent[2].style.display = tabContent[2].style.display == "block" ? "none" : "block";
  		}

  		tab[3].onclick = function er() {
			hide(0);
			tabContent[3].style.display = tabContent[3].style.display == "block" ? "none" : "block";
  		}
	}

	clickTabAcc();

	blockTab.addEventListener('click', function (event) {
		let target = event.target;

		if(target.className == 'spanTab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					show(i);										
					break;
				}
			}
		}
	});

	// Фильтрация блоков
	let tabF = document.getElementsByClassName('tab-item'),
		tabContentF = document.getElementsByClassName('portfolio-block'),
		filterLovers = document.getElementsByClassName('lovers'),
		filterChef = document.getElementsByClassName('chef'),
		filterGuy = document.getElementsByClassName('guy'),
		filterGirl = document.getElementsByClassName('girl'),
		filterAll = document.getElementsByClassName('all'),
		blockTabF = document.getElementsByClassName('portfolio-menu')[0],
		allX = document.getElementsByClassName('allX')[0],
		loversX = document.getElementsByClassName('loversX')[0],
		chefX = document.getElementsByClassName('chefX')[0],
		guyX = document.getElementsByClassName('guyX')[0],
		girlX = document.getElementsByClassName('girlX')[0],
		grandmotherX = document.getElementsByClassName('grandmotherX')[0],
		granddadX = document.getElementsByClassName('granddadX')[0],
		noPort = document.getElementsByClassName('portfolio-no')[0];


	function rr() {
		for(let i = 0; i < tabContentF.length; i++){
			tabContentF[i].classList.add('hideX');
			tabContentF[i].classList.remove('active');
		}
	}

	allX.classList.add('active');

	function showZ(b){			

		if (b == 'allX') {
			rr(0);

			allX.classList.add('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterAll.length; i++) {
				filterAll[i].classList.remove('hideX');
				filterAll[i].classList.add('showX');
			}	
		}

		if (b == 'loversX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.add('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');
			grandmotherX.classList.remove('active');

			for (let i=0; i < filterLovers.length; i++) {
				filterLovers[i].classList.remove('hideX');
				filterLovers[i].classList.add('showX');
			}	
		}

		if (b == 'chefX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.add('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterChef.length; i++) {
				filterChef[i].classList.remove('hideX');
				filterChef[i].classList.add('showX');
			}	
		}	

		if (b == 'guyX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.add('active');
			grandmotherX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterGuy.length; i++) {
				filterGuy[i].classList.remove('hideX');
				filterGuy[i].classList.add('showX');
			}	
		}

		if (b == 'girlX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			grandmotherX.classList.remove('active');
			girlX.classList.add('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterGirl.length; i++) {
				filterGirl[i].classList.remove('hideX');
				filterGirl[i].classList.add('showX');
			}	
		}

		if (b == 'grandmotherX') {
			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');
			grandmotherX.classList.add('active');

			for(let i = 0; i < tabContentF.length; i++){
				tabContentF[i].classList.add('hideX');
			}
			noPort.style.display = 'block';
		}

		if (b ==  'granddadX') {
			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.add('active');

			for(let i = 0; i < tabContentF.length; i++){
				tabContentF[i].classList.add('hideX');
			}
			noPort.style.display = 'block';
		}
	
	}

	blockTabF.addEventListener('click', function (event) {
		let target = event.target;
		if(target.className == 'allX' || 'loversX' || 'chefX' || 'girlX' || 'guyX' || 'grandmotherX' || 'granddadX' ) {
			showZ(target.className);	
		}
		
	});

}

module.exports = block_loading;
},{}],3:[function(require,module,exports){
function calc() {

	let btnOrder = document.getElementsByClassName('rr')[0],
		size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		form = document.getElementsByClassName('form')[0],
		text = document.getElementsByClassName('calc-price')[0],
		promoCode = document.getElementsByClassName('promocode')[0],
		sizeMoney = 0,
		materialMoney = 0,
		optionsMoney = 0,
		result = 0,
		promo,
		sum;

	function calculatingMoney() {
		result = sizeMoney + materialMoney + optionsMoney;

		if (sizeMoney != 0 && materialMoney != 0){
			if (promo === 'IWANTPOPART') {
				sum = result * 0.30;
				result = (sizeMoney + materialMoney + optionsMoney) - sum;
			} else {
				result = sizeMoney + materialMoney + optionsMoney;
			}

			text.innerHTML = result + ' руб';

		} else if (sizeMoney != '' || materialMoney != '' && optionsMoney != 0) {
			text.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		} else {
			text.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
		

	}

	size.addEventListener('change', function () {
		sizeMoney =  parseInt(this.options[this.selectedIndex].value, 10);
		calculatingMoney();
	});

	material.addEventListener('change', function () {
		materialMoney = parseInt(this.options[this.selectedIndex].value, 10);
		calculatingMoney();
	});

	options.addEventListener('change', function () {
		optionsMoney = parseInt(this.options[this.selectedIndex].value, 10);;
		calculatingMoney();
	});

	promoCode.addEventListener('change', function () {
		promo =  promoCode.value;
		promo = promo.replace(/\s/g, '');
		calculatingMoney();
	});

}

module.exports = calc;
},{}],4:[function(require,module,exports){
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
		statusMessage.classList.add('popup-content');
		statusMessage.classList.add('push');

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

					setInterval(function() {
						statusMessage.style.display = 'none';
						closeForm.style.display = 'none';
					}, 2000)
					
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

					setInterval(function() {
						statusMessage.style.display = 'none';
					}, 2000);

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

					setInterval(function() {
						statusMessage.style.display = 'none';
						closeModals.style.display = 'none';
					}, 2000);
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
},{}],5:[function(require,module,exports){
function modal() {

	let btn1 = document.getElementsByClassName('more-about')[0],
		btn2 = document.getElementsByClassName('more-about')[1],
		btn3 = document.getElementsByClassName('more-about')[2],
		btnOrder1 = document.getElementsByClassName('btn-order')[0],
		btnOrder2 = document.getElementsByClassName('btn-order')[1],
		btnOrder3 = document.getElementsByClassName('btn-order')[2],
		btnOrder4 = document.getElementsByClassName('btn-order')[3],
		btnOrder5 = document.getElementsByClassName('btn-order')[4],
		btnOrder6 = document.getElementsByClassName('btn-order')[5],
		btnOrder7 = document.getElementsByClassName('btn-order')[6],
		modal = document.getElementsByClassName('popup-consultation')[0],
		modalOrder = document.getElementsByClassName('popup-design')[0],
		modalMoreClose = document.getElementsByClassName('close-more')[0],
		modalOrderClose = document.getElementsByClassName('close-order')[0];
		
	// пользователь на странице больше 60 секунд
	let timeout = 60000,
		modalTimeout = document.getElementById('mTimeout'),
		timeoutId;

	timeoutId = setTimeout("document.getElementsByClassName('popup-consultation')[0].style.display='block'", timeout);

	function clearClose() {
		clearInterval(modalX);
		clearTimeout(timeoutId);
	}

	btn1.addEventListener('click', function() {
		modal.style.display = 'block';
		clearClose();
	});

	btn2.addEventListener('click', function() {
		modal.style.display = 'block';
		clearClose();
	});

	btn3.addEventListener('click', function() {
		modal.style.display = 'block';
		clearClose();
	});

	
	btnOrder1.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder2.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder3.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder4.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder5.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder6.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	btnOrder7.addEventListener('click', function() {
		modalOrder.style.display = 'block';
		clearClose();
	});

	modalMoreClose.addEventListener('click', function() {
		modal.style.display = 'none';
		clearClose();
	});

	modalOrderClose.addEventListener('click', function() {
		modalOrder.style.display = 'none';
		clearClose();
	});

	// в конце сайта появляется подарок
	let closeGift = document.getElementById('closeGift'),
		modalGift = document.getElementsByClassName('popup-gift')[0],
		cont = document.getElementsByClassName('popup-content')[0],
		gift = document.getElementsByClassName('closeGift')[0];

	
	let modalX = setInterval(function(){
		let y = window.pageYOffset;
		if(y > 11400) {
			gift.style.display = 'none';
			modalGift.style.display = 'block';
		}
	}, 1000);
		 
  	closeGift.addEventListener('click', function() {
		modalGift.style.display = 'none';
		clearClose()
	});

	modalGift.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'popup-content') {
			modalGift.style.display = 'block';
			clearClose()
		} else if (target.className == 'popup-gift') {
			modalGift.style.display = 'none';
			clearClose()
		} else {
			return false
		}
	});

	// фиксированный подарок
	let btnGiftX = document.getElementsByClassName('btnGift')[0];

	btnGiftX.addEventListener('click', function() {
		modalGift.style.display = 'block';
		gift.style.display = 'none';
	});
}

module.exports = modal;
},{}],6:[function(require,module,exports){
function slider() {

	// верхний слайдер
	let itemSlider = document.getElementsByClassName('main-slider-item'),
		main1 =  document.getElementById('main1'),
		main2 =  document.getElementById('main2'),
		sliderIndex = 1;

	function showSlider(n){ 

		if (n > itemSlider.length){
			sliderIndex = 1;
		}
	
		if (n < 1){
			sliderIndex = itemSlider.length;
		};

		for (let i = 0; i < itemSlider.length;i++) {
			itemSlider[i].style.display = 'none';
		};

		itemSlider[sliderIndex-1].style.display = 'block';
	};

	showSlider(); 

	setInterval(function(){

        let num = 1;

        showSlider(sliderIndex += num);
			
        animate(function(timePassed) {

	        main1.style.top = timePassed / 40 + 'px';
	        main2.style.top = timePassed / 40 + 'px';

	     }, 1000);

		function animate(draw, duration) {
			let start = performance.now();

			requestAnimationFrame(function animate(time) {

				let timePassed = time - start;

				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}

			});
		};

    }, 5000);



    // нижний слайдер
    let fbItemSlider = document.getElementsByClassName('feedback-slider-item'),
    	prevFb = document.querySelector('.main-prev-btn'),
    	nextFb = document.querySelector('.main-next-btn'),
    	fbIndexSlider = 1;

    function fbSliderShow(n) {

    	if (n > fbItemSlider.length) {
    		fbIndexSlider = 1;
    	}

    	if (n < 1) {
    		fbIndexSlider = fbItemSlider.length;
    	}

    	for (let i = 0; i < fbItemSlider.length; i++) {
    		fbItemSlider[i].style.display = 'none';
    	}

    	fbItemSlider[fbIndexSlider-1].style.display = 'block';
    	//fbItemSlider[fbIndexSlider-1].style.left = "50px";
    }

    fbSliderShow();

    function plusSlidesFb(n){
        fbSliderShow(fbIndexSlider += n);
    };

    prevFb.addEventListener('click', function(){
        plusSlidesFb(-1);
    });

    nextFb.addEventListener('click', function(){
         plusSlidesFb(1);
    });

    setInterval(function(){

        let num = 1;

        fbSliderShow(fbIndexSlider += num);
            
        animate(function(timePassed) {

            for (let i=0;i < fbItemSlider.length; i++){
                fbItemSlider[i].style.left = timePassed / 10 + 'px';
            }

         }, 400);

        function animate(draw, duration) {
            let start = performance.now();

            requestAnimationFrame(function animate(time) {

                let timePassed = time - start;

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }

            });
        };

    }, 5000);


    //Картинки при наведении
    let sizesBlock = document.getElementsByClassName('sizes-block'),
        size1 = document.getElementsByClassName('size-1')[0],
        size2 = document.getElementsByClassName('size-2')[0],
        size3 = document.getElementsByClassName('size-3')[0],
        size4 = document.getElementsByClassName('size-4')[0],
        hidInfo = document.getElementsByClassName('hidInfo'),
        hidInfo2 = document.getElementsByClassName('hidInfo2'),
        hidInfo3 = document.getElementsByClassName('hidInfo3'),
        hidInfo4 = document.getElementsByClassName('hidInfo4');

    function hidInfoItemNone1() {
        for(let i=0; i < hidInfo.length; i++){
             hidInfo[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock1() {
        for(let i=0; i < hidInfo.length; i++){
             hidInfo[i].style.display = 'block';
        }
    }

    function hidInfoItemNone2() {
        for(let i=0; i < hidInfo2.length; i++){
             hidInfo2[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock2() {
        for(let i=0; i < hidInfo2.length; i++){
             hidInfo2[i].style.display = 'block';
        }
    }

    function hidInfoItemNone3() {
        for(let i=0; i < hidInfo3.length; i++){
             hidInfo3[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock3() {
        for(let i=0; i < hidInfo3.length; i++){
             hidInfo3[i].style.display = 'block';
        }
    }

    function hidInfoItemNone4() {
        for(let i=0; i < hidInfo4.length; i++){
             hidInfo4[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock4() {
        for(let i=0; i < hidInfo4.length; i++){
             hidInfo4[i].style.display = 'block';
        }
    }

    sizesBlock[0].onmouseover = sizesBlock[0].onmouseout = handler1;
    sizesBlock[1].onmouseover = sizesBlock[1].onmouseout = handler2;
    sizesBlock[2].onmouseover = sizesBlock[2].onmouseout = handler3;
    sizesBlock[3].onmouseover = sizesBlock[3].onmouseout = handler4;

    function handler1(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size1.src = 'img/sizes-1-1.png';
            hidInfoItemNone1()
        }
        if (event.type == 'mouseout') {
            size1.src = 'img/sizes-1.png';
            hidInfoItemBlock1();
        }
    }

    function handler2(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size2.src = 'img/sizes-2-1.png';
            hidInfoItemNone2();
        }
        if (event.type == 'mouseout') {
            size2.src = 'img/sizes-2.png';
            hidInfoItemBlock2();
        }
    }

    function handler3(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size3.src = 'img/sizes-3-1.png';
            hidInfoItemNone3()
        }
        if (event.type == 'mouseout') {
            size3.src = 'img/sizes-3.png';
            hidInfoItemBlock3();
        }
    }

    function handler4(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size4.src = 'img/sizes-4-1.png';
            hidInfoItemNone4()
        }
        if (event.type == 'mouseout') {
            size4.src = 'img/sizes-4.png';
            hidInfoItemBlock4();
        }
    }

    if(document.body.offsetWidth < 768){
        sizesBlock[0].onmouseover = sizesBlock[0].onmouseout = handler1;
        sizesBlock[1].onmouseover = sizesBlock[1].onmouseout = handler2;
        sizesBlock[2].onmouseover = sizesBlock[2].onmouseout = handler3;
        sizesBlock[3].onmouseover = sizesBlock[3].onmouseout = handler4;
    }

}

module.exports = slider;
},{}]},{},[1]);
