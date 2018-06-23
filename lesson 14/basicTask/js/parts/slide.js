function slides() {
	let slideIndex = 1, // слайд, который изначально будет отображаться
		slides = document.getElementsByClassName('slider-item'), // слад
		prev = document.querySelector('.prev'), // кнопка назад
		next = document.querySelector('.next'), // кнопка вперед
		dotsWrap = document.querySelector('.slider-dots'), // блок, который содержит точки
		dots = document.getElementsByClassName('dot'); // точки

	//показать слайдер текущий
	function showSlides(n){ 
		if(n > slides.length){
			slideIndex = 1;
		}
	
		// проверяем на отрицательное число, чтобы матать назад
		if (n < 1){
			slideIndex = slides.length;
		};

		//скрываем слайды
		for (let i = 0; i < slides.length;i++) {
			slides[i].style.display = 'none';
		};

		// удаляем класс актив
		for (let i = 0; i < dots.length;i++) {
			dots[i].classList.remove('dot-active');
		};

		//восстанавливаем и отображаем
		slides[slideIndex-1].style.display = 'block'; //массив начинается с нуля, а нам нужен 0
		dots[slideIndex-1].classList.add('dot-active'); //массив начинается с нуля, а нам нужен 0
	};

	showSlides(slideIndex); 

	function plusSlides(n){
		showSlides(slideIndex += n);
	};

	function currentSlide(n){
		showSlides(slideIndex = n);
	};

	prev.addEventListener('click', function(){
		plusSlides(-1);
	});

	next.addEventListener('click', function(){
		 plusSlides(1);
 	});

	dotsWrap.addEventListener('click', function(event){
		for (let i = 0; i < dots.length + 1; i++){
	 		if(event.target.classList.contains('dot') && event.target == dots[i-1]){
	  			currentSlide(i);
			}
		}
	});
}

module.exports = slides;