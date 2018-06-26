// create pager list items
var sliderImage = $('.slider__images-image');

sliderImage.each(function (index) {
    $('.js__slider__pagers').append('<li>'+(index+1)+'</li>');
});

// set up vars
var sliderPagers       = 'ol.js__slider__pagers li',
    sliderPagersActive = '.js__slider__pagers li.active',
    sliderImages       = '.js__slider__images',
    sliderImagesItem   = '.slider__images-item',
    sliderControlNext  = '.slider__control--next',
    sliderControlPrev  = '.slider__control--prev',
    sliderSpeed        = 5000,
    lastElem           = $(sliderPagers).length-1,
    sliderTarget;

// add css heigt to slider images list
function checkImageHeight() {
    var sliderHeight = $('.slider__images-image:visible').height(); 
    $(sliderImages).css('height', sliderHeight+'px');
};

sliderImage.on('load', function() {
    checkImageHeight();
    $(sliderImages).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight();
});

// set up first slide
$(sliderPagers).first().addClass('active');
$(sliderImagesItem).hide().first().show();

// transition function
function sliderResponse(sliderTarget) {
    $(sliderImagesItem).fadeOut(300).eq(sliderTarget).fadeIn(300);
    $(sliderPagers).removeClass('active').eq(sliderTarget).addClass('active');
}

// pager controls
$(sliderPagers).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget = $(this).index();
        sliderResponse(sliderTarget);
        resetTiming();
    }
});

// next/prev controls
$(sliderControlNext).on('click', function() {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget+1;
    sliderResponse(sliderTarget);
    resetTiming();
});
$(sliderControlPrev).on('click', function() {
    sliderTarget = $(sliderPagersActive).index();
    lastElem = $(sliderPagers).length-1;
    sliderTarget === 0 ? sliderTarget = lastElem : sliderTarget = sliderTarget-1;
    sliderResponse(sliderTarget);
    resetTiming();
});

// slider timing
function sliderTiming() {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget+1;
    sliderResponse(sliderTarget);
}

// slider autoplay
var timingRun = setInterval(function() {
    sliderTiming();
}, sliderSpeed);

function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() {
      sliderTiming();
    }, sliderSpeed);
}



(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonsList=["7;8;9;/[;C[","4;5;6;*[;<[","1;2;3;+[;=|[","0;00;.;-["];
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(tagName, clasName, childs = []) {
    let elem = document.createElement(tagName);
    elem.className = clasName;
    return elem;
}
exports.create = create;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("./lib/buttons");
const element_1 = require("./lib/element");
class Calc {
    static get variable() {
        let i = parseInt(this._v);
        if (!isNaN(i) && i === 0)
            this._v = '';
        return this._v;
    }
    static set variable(v) {
        if (!v.length)
            v = '0';
        this._v = v;
        this.view.innerHTML = v;
    }
    static init() {
        let keyboard = element_1.create('table', 'keyboard');
        let keyOn = (v) => {
            return () => {
                let vs = this.variable;
                if (/[0-9]/.test(v))
                    this.variable += v;
                if (/[\.\-\/\*\+]/.test(v) && !/[\.\-\/\*\+]/.test(vs[vs.length - 1]))
                    this.variable += v;
                if (v === '=')
                    this.variable = eval(this.variable).toString();
                if (v === 'C') {
                    this.hystory = [];
                    this.variable = '';
                }
                if (v === '<') {
                    try {
                        this.variable = this.hystory.pop();
                    }
                    catch (e) {
                        this.variable = '';
                    }
                }
                else if (vs !== this.variable)
                    this.hystory.push(vs);
            };
        };
        window.addEventListener('keydown', (e) => {
            let v = e.key;
            if (v === 'Enter')
                v = '=';
            if (v === 'Backspace')
                v = '<';
            if (v === 'Escape')
                v = 'C';
            keyOn(v)();
        });
        for (let keyString of buttons_1.ButtonsList) {
            let tr = element_1.create('tr', 'keyboard-row');
            let buttons = keyString.split(';');
            for (let button of buttons) {
                let td = element_1.create('td', 'keyboard-key');
                let v = td.innerText = button.replace(/[\[\|]/g, '');
                td.onclick = keyOn(v);
                if (button.indexOf('|') !== -1)
                    td.setAttribute('rowspan', '2');
                if (button.indexOf('[') !== -1)
                    td.classList.add('soft');
                tr.appendChild(td);
            }
            keyboard.appendChild(tr);
        }
        document.querySelector('.container').appendChild(keyboard);
    }
}
Calc.view = document.querySelector('.view');
Calc._v = '0';
Calc.hystory = [];
Calc.init();
},{"./lib/buttons":1,"./lib/element":2}]},{},[3])






var root = document.getElementById('portrait');

var mouse_monitor = function(e) {
   let x = e.clientX/innerWidth;
   let y = e.clientY/innerHeight;
   
   let move_x = (x>0.5) ? '-30px' : '30px';
   let move_y = (y>0.5) ? '-20px' : '20px';
   
   root.style.setProperty("--translate-x", move_x);
   root.style.setProperty("--translate-y", move_y);
}

root.addEventListener("mousemove", mouse_monitor);


