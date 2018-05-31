/* 2) В файле скрипта создать 2 переменные, которые будут получать данные от пользователя: */
var	budgetForTheMonth = prompt('Ваш бюджет на месяц?', ''),
	storeName = prompt('Название вашего магазина?', ''),
	time = 19;

/* 3) Создать объект mainList, который будет содержать такие данные: */
var budgetForTheMonth,
	storeName,
	mainList = {
		budget: budgetForTheMonth, /* со 2-ой строки(вопрос) сохраняется ответ от пользователя */
		nameStore: storeName, /* с 3-ей строки(вопрос) сохраняется ответ от пользователя */
		shopGoods: [],
		employers: {},
		open: false
	};

/* 4) Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods */
/* lesson 1
	mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?', '');
	mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?', '');
	mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?', '');

	console.log(mainList.shopGoods);
*/	

/* lesson 2 - циклы(практикуемся) */
for (let i = 0; i < 3; i++){
	let a =  prompt('Какой тип товаров будем продавать?', '');

	if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a; 
		} else {
				console.log('Ошибка!');	
			}
}


if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		}

 
/* 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней) */
alert(mainList.budget / 30 + ' руб бюджет пользователя на 1 день');

console.log(mainList);
