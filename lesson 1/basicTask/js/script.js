var	money, 
	name,
	time,
	price;

var mainList = {
		budget: money, 
		nameStore: name, 
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
	};


function start() {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет на месяц?', '');
	}

	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 19;
}
//start();

function switchDiscount (disc) {
	if (disc == true) {
		var res = price * 80 / 100;
		alert('Скидка составит ' + res + ' руб')
	} else {
		alert('Скидка 80% не АКТИВИРОВАНА!');
	}
}
//switchDiscount(mainList.discount);

function chooseGoods() {
	for (var i = 0; i < 3; i++){
		var a =  prompt('Какой тип товаров будем продавать?', '');

		if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a; 
		} else {
			i = i - 1;	
		}
	}
}
//chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
			console.log('В сутках только 24 часа!');
			}
}
//workTime(14);

function calculationBudget () {
	alert(mainList.budget / 30 + ' руб бюджет пользователя на 1 день');
} 
//calculationBudget();


function employmentEmployers () {
	for (var i = 0; i < 4; i++){
		var res = prompt('Введите имя нового сотрудника', '');

		if ((typeof(res)) === 'string' && res != '' && res.length < 20){
			mainList.employers[i] = res;
		} else {
			i = i - 1;
		}
		
	}
}
//employmentEmployers();

console.log(mainList);

