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