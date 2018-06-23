var app = (function () {
  
let tab = require('./tab.js'),
	slide = require('./slide.js'),
	modal = require('./modal.js'),
	calc = require('./calc.js'),
	ajax = require('./ajax.js'),
	timer = require('./timer.js');
  
  return {
    tab : tab,
    slide : slide,
    modal : modal,
    calc : calc,
    ajax : ajax,
    timer : timer,
  }
  
})();

module.exports = app;