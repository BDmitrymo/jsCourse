let num = 50;

if(num < 49){
	console.log('Неверно')
} else if(num > 100) {
	console.log('Неверно')
	} else {
		console.log('Верно!')
	}

(num == 50) ? console.log('Верно!') : console.log('Неверно');


switch (num) {
	case 49:
		console.log('Мало'); 
		break;
	case 100:
		console.log('Много!');
		break;	
	case 80:
		console.log('Все еще мало!');
		break;
	case 50:
		console.log('В точку!');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

/*
while (num < 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
} 
while (num < 55);
*/

for (let i = 0; i < 8; i++){
	console.log(i);
}

for (let i = 0; i < 3; i++){
	let a =  prompt('Какой тип товаров будем продавать?', '');

	if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a; 
		} else {
				console.log('Ошибка!');	
			}
}

/* 1) Переписать наш цикл for еще двумя способами и закомментировать их */
/*
	for (let i = 0; i < 3; i++){
		var a = prompt('Какой тип товаров будем продавать?', '');
		((typeof(a)) === 'string' && a != '' && a.length < 50) ? mainList.shopGoods[i] = a : console.log('Ошибка!');	
	}

	var a, res = 0;
	do {
		a =  prompt('Какой тип товаров будем продавать?', '');
		if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
			mainList.shopGoods[res] = a; 
			break;
		}
	} while (true)
*/
