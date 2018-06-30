function slider() {
	let itemSlider = document.getElementsByClassName('main-slider-item'),
		q =  document.getElementById('z'),
		qq =  document.getElementById('zz'),
		sliderIndex = 1;

	function showSlider(n){ 

		if(n > itemSlider.length){
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

	        q.style.top = timePassed / 40 + 'px';
	        qq.style.top = timePassed / 40 + 'px';

	        //console.log(q);
	  

	     }, 1000);

		function animate(draw, duration) {
			var start = performance.now();

			requestAnimationFrame(function animate(time) {
				// определить, сколько прошло времени с начала анимации
				var timePassed = time - start;

				console.log(time, start)
				// возможно небольшое превышение времени, в этом случае зафиксировать конец
				//if (timePassed > duration) timePassed = duration;

				// нарисовать состояние анимации в момент timePassed
				draw(timePassed);

				// если время анимации не закончилось - запланировать ещё кадр
				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}

			});
		};

    }, 5000);
}

module.exports = slider;