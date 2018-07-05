window.addEventListener('DOMContentLoaded', function() {

	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let block_loading = require('../parts/block_loading.js');
	let calc = require('../parts/calc.js');
	let formOpen = require('../parts/form.js');
	

	slider();
	modal();
	block_loading();
	calc();
	formOpen();

}); 