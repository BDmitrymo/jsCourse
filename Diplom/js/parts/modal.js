function modal() {

	let btn1 = document.getElementsByClassName('more-about')[0],
		btn2 = document.getElementsByClassName('more-about')[1],
		btnOrder1 = document.getElementsByClassName('btn-order')[0],
		btnOrder2 = document.getElementsByClassName('btn-order')[1],
		btnOrder3 = document.getElementsByClassName('btn-order')[2],
		btnOrder4 = document.getElementsByClassName('btn-order')[3],
		modal = document.getElementsByClassName('popup-consultation')[0],
		modalOrder = document.getElementsByClassName('popup-design')[0],
		modalMoreClose = document.getElementsByClassName('close-more')[0],
		modalOrderClose = document.getElementsByClassName('close-order')[0];
		
	btn1.addEventListener('click', function() {
		modal.style.display = 'block';
	});

	btn2.addEventListener('click', function() {
		modal.style.display = 'block';
	});

	
	btnOrder1.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	btnOrder2.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	btnOrder3.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	btnOrder4.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	modalMoreClose.addEventListener('click', function() {
		modal.style.display = 'none';
	});

	modalOrderClose.addEventListener('click', function() {
		modalOrder.style.display = 'none';
	});
}

module.exports = modal;