var openBtn = document.getElementById('open-btn'),
	nameX = document.getElementsByClassName('name')[0],
	nameValue = document.getElementsByClassName('name-value')[0], 
	budgetX = document.getElementsByClassName('budget')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsX = document.getElementsByClassName('goods')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsX = document.getElementsByClassName('items')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employers = document.getElementsByClassName('employers'),
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountX = document.getElementsByClassName('discount')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenX = document.getElementsByClassName('isopen')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	goodsItem = document.getElementsByClassName('goods-item'),
	goodsItemBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	hireEmployersBtn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('choose-item'),
	goods1 = document.querySelector('#goods_1'),
	goods2 = document.querySelector('#goods_2'),
	goods3 = document.querySelector('#goods_3'),
	goods4 = document.querySelector('#goods_4'),
	time = document.querySelector('#time'),
	budgetXX = document.querySelector('#budget'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

var	money,
	price;

openBtn.addEventListener('click', () => {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет состоит из цифр, а не букв, повторите ввод!', '');	
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
});

goodsItemBtn.addEventListener('click', () => {
	for (var i = 0; i < goodsItem.length; i++){
		var a = goodsItem[i].value;

		if ((typeof(a)) === 'string' && a !== '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a; 
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i = i - 1;	
		}
	}
});



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















	
	

















