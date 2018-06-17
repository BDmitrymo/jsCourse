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

}); 


