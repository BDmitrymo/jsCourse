function modal() {

	let btn1 = document.getElementsByClassName('more-about')[0],
		btn2 = document.getElementsByClassName('more-about')[1],
		modal = document.getElementsByClassName('popup-consultation')[0],
		modalClose = document.getElementsByClassName('popup-close')[0];

	btn1.addEventListener('click', function() {
		modal.style.display = 'block';
	})

	btn2.addEventListener('click', function() {
		modal.style.display = 'block';
	})

	modalClose.addEventListener('click', function() {
		modal.style.display = 'none';
	})
}

module.exports = modal;