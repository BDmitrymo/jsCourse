(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	

	slider();
	modal();

}); 
},{"../parts/modal.js":2,"../parts/slider.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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

				//console.log(time, start)
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
},{}]},{},[1]);
