let modal = function() {
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
}();

module.exports = modal;