(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let block_loading = require('../parts/block_loading.js');
	

	slider();
	modal();
	block_loading();

}); 
},{"../parts/block_loading.js":2,"../parts/modal.js":3,"../parts/slider.js":4}],2:[function(require,module,exports){
function block_loading() {

	let btnStyleOpen = document.getElementsByClassName('btn-style')[0],
		hiddenItemOpen = document.getElementsByClassName('hidden-lg')[0],

		hiddenItemSlider = document.getElementsByClassName('hidden-Item'),
		hiddenIndex = 1;

	btnStyleOpen.addEventListener('click', function() {
		btnStyleOpen.style.display = 'none';
		function hiddenSlider(n) {

			if (n > hiddenItemSlider.length) {
				hiddenIndex = 1;
			}

			if (n < 1) {
				hiddenIndex = hiddenItemSlider.length;
			}

			for (let i = 0; i < hiddenItemSlider.length; i++) {
				hiddenItemSlider[i].style.display = 'none';
			}

			hiddenItemSlider[hiddenIndex-1].style.display = 'block';
		};

		hiddenSlider();

		setInterval(function() {

			let num = 1;

			hiddenSlider(hiddenIndex += num);

		}, 4000);

	});

	// гамбургер
	let btnGamb = document.getElementsByClassName('burger')[0],
		gambOpen = document.getElementsByClassName('burger-menu')[0];
	

	if(document.body.offsetWidth < 768){
		
		btnGamb.onclick = function gamburger() {
			gambOpen.style.display = gambOpen.style.display == "block" ? "none" : "block";
  		}
	}

	if(document.body.offsetWidth > 768){
		btnGamb.style.display = 'none';
	}
}

module.exports = block_loading;
},{}],3:[function(require,module,exports){
function modal() {

	let btn1 = document.getElementsByClassName('more-about')[0],
		btn2 = document.getElementsByClassName('more-about')[1],
		btn3 = document.getElementsByClassName('more-about')[2],
		btnOrder1 = document.getElementsByClassName('btn-order')[0],
		btnOrder2 = document.getElementsByClassName('btn-order')[1],
		btnOrder3 = document.getElementsByClassName('btn-order')[2],
		btnOrder4 = document.getElementsByClassName('btn-order')[3],
		btnOrder5 = document.getElementsByClassName('btn-order')[4],
		btnOrder6 = document.getElementsByClassName('btn-order')[5],
		btnOrder7 = document.getElementsByClassName('btn-order')[6],
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

	btn3.addEventListener('click', function() {
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

	btnOrder5.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	btnOrder6.addEventListener('click', function() {
		modalOrder.style.display = 'block';
	});

	btnOrder7.addEventListener('click', function() {
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
},{}],4:[function(require,module,exports){
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
},{}]},{},[1]);
