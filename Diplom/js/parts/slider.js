function slider() {
	
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
}

module.exports = slider;