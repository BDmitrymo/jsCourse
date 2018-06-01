/* Задача 1 - Сделать так, чтобы строка начиналась с большой буквы */
var str = 'урок-3-был слишком легким',
	str1 = str.charAt(0).toUpperCase(),
	str2 = str.substr(1);

document.write(str1 + str2);

/* Задача 2 - Теперь замените все “-” на пробелы */
var str3 = str.substr(0, 4),
	str4 = str.substr(5,6).replace('-', ' '),
	str5 = str.substr(11),
	res = str3 + ' ' + str4 + str5;

console.log(res);

/* Задача 3 - Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о” */
var res2 = res.replace('легким', ''),
	res3 = res2.substr(0, 15);

console.log(res3 + 'oo');

/* Задача 5 */
function fun(x) {
	if((typeof(x)) != 'string') {
		alert('Передана не строка');
	} else {
		x.trim();
		var  maxlength = 0;

		if(x.length > 50){
			var res = x.slice(0, 53 - 3) + '...';
			console.log(res);
		} 
		
	}
}
//fun();