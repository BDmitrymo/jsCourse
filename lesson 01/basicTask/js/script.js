var	money,
	nameX,
	time,
	price;

function start() {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет состоит из цифр, а не букв, повторите ввод!', '');	
	}

	nameX = prompt('Название вашего магазина?', '').toUpperCase();
	time = 19;
}
//start();

var	mainList = {
	budget: money, 
	nameStore: nameX, 
	shopGoods: ['Кросовки', 'Штаны', 'Футболки', 'Шорты'],
	typeGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (var i = 0; i < 5; i++){
			var a =  prompt('Какой тип товаров будем продавать?', '');

			if ((typeof(a)) === 'string' && a !== '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a; 
			} else {
				i = i - 1;	
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
				console.log('В сутках только 24 часа!');
				}
	},
	calculationBudget: function calculationBudget () {
		alert(mainList.budget / 30 + ' руб бюджет пользователя на 1 день');
	},
	switchDiscount: function switchDiscount (disc) {
		if (disc === true) {
			var res = price * 80 / 100;
			alert('Скидка составит ' + res + ' руб');
		} else {
			alert('Скидка 80% не АКТИВИРОВАНА!');
		}
	},
	employmentEmployers: function employmentEmployers () {
		for (var i = 0; i < 4; i++){
			var res = prompt('Введите имя нового сотрудника', '');

			if ((typeof(res)) === 'string' && res !== '' && res.length < 20){
				mainList.employers[i] = res;
			} else {
				i = i - 1;
			}	
		}
	},
	chooseShopItems: function chooseс(){
		var items = prompt('Перечислите товары через запятую', '');

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите ,все товары занесли?', ''));
		mainList.shopItems.sort();
	},
	sqrGoods: function sqrGoods(){
		for (var i = 0; i < 5; i++){
			var sqr =  prompt('Добавить тип товара', '');

			while(!(isNaN(sqr)) || sqr === '' || sqr === null) {
				sqr =  prompt('В базу данных не был добавлен тип, т.к. обнуражины цифры, повторите');
			} 
			
			mainList.typeGoods[i] = sqr;
			alert('Тип товара успешно добавлен.');
			break;
		}
	}
};













