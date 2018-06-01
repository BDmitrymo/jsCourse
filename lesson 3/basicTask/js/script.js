var num = 20;

function showFirstMessage(text) {
	alert(text);
	var num = 10;
}

showFirstMessage('hello word');

/* function Declaration */
function calc(a,b) {
	return a + b;
}

/* function Expression */
var calc = function (a,b) {
	return a + b;
}


var calc = (a,b) => a + b;


var str1 = 'text';
console.log(str1.length); /* метод - длина текста */
console.log(str1.toUpperCase); /* метод - делает буквы большими */
console.log(str1.toLowerCase); /* метод - делает буквы маленькими */


var str2 = '12.2';
console.log(Math.round(str2)); /* метод - до ближайшего целого числа */

var str3 = '12.2px';
console.log(parseInt(str3)); /* метод - превращает в число */
console.log(parseFloat(str3)); /* метод - делает дробное число */