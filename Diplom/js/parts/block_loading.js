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

	// Аккардион
	let tab = document.getElementsByClassName('spanTab'),
		test= document.getElementsByClassName('ee')[0],
		test2= document.getElementsByClassName('qwe')[0],
		tabContent = document.getElementsByClassName('accordion-block'),
		blockTab = document.getElementsByClassName('izz')[0];

	function hide(a){

		for(let i = a; i < tab.length; i++){
			tab[i].classList.remove('red');
		}

		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.add('hideX');
			tabContent[i].classList.remove('zzz');

			tabContent[i].classList.remove('showX');
			tabContent[i].classList.add('zz');
		}
	}

	hide(0);

	function show(b){
		if (tabContent[b].classList.contains('hideX')){
			hide(0);

			tabContent[b].classList.remove('hideX');
			tabContent[b].classList.add('showX');
			tab[b].classList.add('red');

			setInterval(function() {
				tabContent[b].classList.remove('showX');
				tabContent[b].classList.add('zzz');
			}, 50);
		} 
	}


	function clickTabAcc() {
		tab[0].onclick = function er() {
			hide(0);
			tabContent[0].style.display = tabContent[0].style.display == "block" ? "none" : "block";
  		}

  		tab[1].onclick = function er() {
			hide(0);
			tabContent[1].style.display = tabContent[1].style.display == "block" ? "none" : "block";
  		}

  		tab[2].onclick = function er() {
			hide(0);
			tabContent[2].style.display = tabContent[2].style.display == "block" ? "none" : "block";
  		}

  		tab[3].onclick = function er() {
			hide(0);
			tabContent[3].style.display = tabContent[3].style.display == "block" ? "none" : "block";
  		}
	}

	clickTabAcc();

	blockTab.addEventListener('click', function (event) {
		let target = event.target;

		if(target.className == 'spanTab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					show(i);										
					break;
				}
			}
		}
	});

	// Фильтрация блоков
	let tabF = document.getElementsByClassName('tab-item'),
		tabContentF = document.getElementsByClassName('portfolio-block'),
		filterLovers = document.getElementsByClassName('lovers'),
		filterChef = document.getElementsByClassName('chef'),
		filterGuy = document.getElementsByClassName('guy'),
		filterGirl = document.getElementsByClassName('girl'),
		filterAll = document.getElementsByClassName('all'),
		blockTabF = document.getElementsByClassName('portfolio-menu')[0],
		allX = document.getElementsByClassName('allX')[0],
		loversX = document.getElementsByClassName('loversX')[0],
		chefX = document.getElementsByClassName('chefX')[0],
		guyX = document.getElementsByClassName('guyX')[0],
		girlX = document.getElementsByClassName('girlX')[0],
		grandmotherX = document.getElementsByClassName('grandmotherX')[0],
		granddadX = document.getElementsByClassName('granddadX')[0],
		noPort = document.getElementsByClassName('portfolio-no')[0];


	function rr() {
		for(let i = 0; i < tabContentF.length; i++){
			tabContentF[i].classList.add('hideX');
			tabContentF[i].classList.remove('active');
		}
	}

	allX.classList.add('active');

	function showZ(b){			

		if (b == 'allX') {
			rr(0);

			allX.classList.add('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterAll.length; i++) {
				filterAll[i].classList.remove('hideX');
				filterAll[i].classList.add('showX');
			}	
		}

		if (b == 'loversX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.add('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');
			grandmotherX.classList.remove('active');

			for (let i=0; i < filterLovers.length; i++) {
				filterLovers[i].classList.remove('hideX');
				filterLovers[i].classList.add('showX');
			}	
		}

		if (b == 'chefX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.add('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterChef.length; i++) {
				filterChef[i].classList.remove('hideX');
				filterChef[i].classList.add('showX');
			}	
		}	

		if (b == 'guyX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.add('active');
			grandmotherX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterGuy.length; i++) {
				filterGuy[i].classList.remove('hideX');
				filterGuy[i].classList.add('showX');
			}	
		}

		if (b == 'girlX') {
			rr(0);

			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			grandmotherX.classList.remove('active');
			girlX.classList.add('active');
			granddadX.classList.remove('active');

			for (let i=0; i < filterGirl.length; i++) {
				filterGirl[i].classList.remove('hideX');
				filterGirl[i].classList.add('showX');
			}	
		}

		if (b == 'grandmotherX') {
			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			granddadX.classList.remove('active');
			grandmotherX.classList.add('active');

			for(let i = 0; i < tabContentF.length; i++){
				tabContentF[i].classList.add('hideX');
			}
			noPort.style.display = 'block';
		}

		if (b ==  'granddadX') {
			allX.classList.remove('active');
			loversX.classList.remove('active');
			chefX.classList.remove('active')
			guyX.classList.remove('active');
			girlX.classList.remove('active');
			grandmotherX.classList.remove('active');
			granddadX.classList.add('active');

			for(let i = 0; i < tabContentF.length; i++){
				tabContentF[i].classList.add('hideX');
			}
			noPort.style.display = 'block';
		}
	
	}

	blockTabF.addEventListener('click', function (event) {
		let target = event.target;
		if(target.className == 'allX' || 'loversX' || 'chefX' || 'girlX' || 'guyX' || 'grandmotherX' || 'granddadX' ) {
			showZ(target.className);	
		}
		
	});

}

module.exports = block_loading;