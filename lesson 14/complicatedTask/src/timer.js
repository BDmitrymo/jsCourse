let timer = function() {
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
}();

module.exports = timer;