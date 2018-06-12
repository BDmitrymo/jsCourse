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
	var deadline = '2018-11-11';
	
	function getTimeRemaining (endtime){
		//var dateEnd = new Date();
		let t = Date.parse(endtime) - Date.parse(new Date),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/1000*60*60) % 24 );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};

	function setClock(id, endtime) {
		var timer = document.getElementById(id),
			infoEdit = document.getElementById('editTimetext');
			hours = timer.querySelector('.hours');
			minutes = timer.querySelector('.minutes');
			seconds = timer.querySelector('.seconds');

		function updateClock(){
			let t = getTimeRemaining(endtime);
			hours.innerHTML = ((t.hours < 10) ? '0':'') + t.hours;
			minutes.innerHTML = ((t.minutes < 10) ? '0':'') + t.minutes;
			seconds.innerHTML = ((t.seconds < 10) ? '0':'') + t.seconds;

			if (t.minutes == '00' && t.seconds == '00' ){
				clearInterval(timeInterval);
				infoEdit.style.display = 'block';
			}
		};

		updateClock();
		var timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);


}); 

/*
var menu = document.getElementsByClassName('menu_nav')[0];

menu.addEventListener('click', function (event) {
  var targetLink = event.target.href;
  alert(targetLink);

  
});*/

