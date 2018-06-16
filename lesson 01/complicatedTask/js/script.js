/* 1) Создать переменную num со значением 33721 */
var num = 33721;
var str = String(num);
var arr = str.split('');

var result = arr.reduce(function(sum, current) {
  return sum * current
});

/* 2) Полученный результат возвести в степень 3, используя только 1 оператор */
var res = Math.pow(result, 3);
var strRes = String(res);

/* Вывести его на экран первые 2 цифры полученного числа */
console.log( strRes.slice(0, 2) );