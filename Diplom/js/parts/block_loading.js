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