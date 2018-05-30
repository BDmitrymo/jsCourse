/* 2) В файле скрипта создать 2 переменные, которые будут получать данные от пользователя: */
var	budgetForTheMonth = prompt('Ваш бюджет на месяц?', ''),
	storeName = prompt('Название вашего магазина?', '');

/* 3) Создать объект mainList, который будет содержать такие данные: */
var budgetForTheMonth,
	storeName,
	mainList = {
		budget: budgetForTheMonth, /* со 2-ой строки(вопрос) сохраняется ответ от пользователя */
		nameStore: storeName, /* с 3-ей строки(вопрос) сохраняется ответ от пользователя */
		shopGoods: [question1, question2, question3],
		employers: {},
		open: ''
	};

/* 4) Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods */
var question1 = prompt('Какой тип товаров будем продавать?', ''),
 	question2 = prompt('Какой тип товаров будем продавать?', ''),
	question3 = prompt('Какой тип товаров будем продавать?', ''),
		
console.log(mainList.shopGoods); 

/* 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней) */
console.log( mainList.budget / 30 + ' руб бюджет пользователя на 1 день' );


