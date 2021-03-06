window.addEventListener('DOMContentLoaded', function() {

	var tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		blockTab = document.getElementsByClassName('info-header')[0];

	function hide(a){
		for(var i = a; i < tabContent.length; i++){
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

	blockTab.addEventListener('click', function(event){
		var target = event.target;
		if(target.className == 'info-header-tab') {
			for(var i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					show(i);
					break;
				}
			}
		}
		
	});

	//Timer
	var deadline = '2018-06-13 GMT+03:00';

	function getTimeRemaining (endtime){
		var dateX = new Date();
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
		var timer = document.getElementById(id),
			infoEdit = document.getElementById('editTimetext');
		hours = timer.querySelector('.hours');
		minutes = timer.querySelector('.minutes');
		seconds = timer.querySelector('.seconds');
		var timeInterval = setInterval(updateClock, 1000);

		function updateClock(){
			let t = getTimeRemaining(endtime);
			hours.innerHTML = ((t.hours < 10) ? '0':'') + t.hours;
			minutes.innerHTML = ((t.minutes < 10) ? '0':'') + t.minutes;
			seconds.innerHTML = ((t.seconds < 10) ? '0':'') + t.seconds;

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


}); 


