function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		blockTab = document.getElementsByClassName('info-header')[0];

	function hide(a){
		for(let i = a; i < tabContent.length; i++){
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

	blockTab.addEventListener('click', function (event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					show(i);
					break;
				}
			}
		}
		
	});
}

module.exports = tab;