//1
function sum(a, b) {
	return a + b > 10;
}
sum(2,12);

//2
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let result = arr.reduce(function(sum, elem) {
	return num = arr[1][1];
})

//3
let each = function(startArr, f){return f(startArr)};

let arr1 = [64, 49, 36, 25, 16];
let myFunc = function(a){
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
//console.log(each(arr1, myFunc));



let assert = require('chai').assert;

describe('sum', function() {

	it('Функция sum должна возвращать тип данных true', function() {
		assert.typeOf(sum(), 'boolean');
	});
});

describe('arr', function() {

	it('Переменная num должна быть равна 5', function() {
		assert.equal(result, 5);
	});
});

describe('each', function() {

	it('Переменна each имеет тип данных: '+ typeof(each), function() {
		assert.typeOf(each, 'function');
		console.log('нам вернет функция each в данных условиях: ' + each(arr1, myFunc));
		console.log('длина переменной:' + each.length);
	});
});
