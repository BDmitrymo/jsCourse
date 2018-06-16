
/*jshint esversion: 6 */
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
	chooseItem = document.querySelector('.choose-item'),
	goods1 = document.querySelector('#goods_1'),
	goods2 = document.querySelector('#goods_2'),
	goods3 = document.querySelector('#goods_3'),
	goods4 = document.querySelector('#goods_4'),
	hei = document.querySelectorAll('.hire-employers-item');
	employers1 = document.querySelector('#employers_1'),
	employers2 = document.querySelector('#employers_2'),
	employers3 = document.querySelector('#employers_3'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

var	money,
	openDiscon,
	price;

openBtn.addEventListener('click', () => {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет состоит из цифр, а не букв, повторите ввод!', '');	
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();

	mainList.discount = confirm('Активировть скидку?', '');

	if (mainList.discount === true) {mainList.discount
		discountValue.style.backgroundColor = 'green';
		var res = money * 80 / 100;
		alert('Ваша скидка составит от бюджета ' + res + ' руб');
	} else {
		alert('Вы отказались от 80% скидки на бюджет');
	}

});

goodsItemBtn.addEventListener('click', () => {
	for (var i = 0; i < goodsItem.length; i++){
		var a = goodsItem[i].value;

		if ((typeof(a)) === 'string' && a !== '' && a.length < 50) {
			goodsItemBtn.removeAttribute('disabled');
			mainList.shopGoods[i] = a; 
			goodsValue.textContent = mainList.shopGoods;
		}
	}
});

chooseItem.addEventListener('change', () => {
	var items = chooseItem.value;

	if(isNaN(items) && items !== '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	var time = timeValue.value;

	if (time < 0) {
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			} 	else {
					console.log('В сутках только 24 часа!');
				}

	if(mainList.open === true) {
		isopenValue.style.backgroundColor = 'green';
		openBtn.removeAttribute('disabled'),
		countBudgetBtn.removeAttribute('disabled');
		openBtn.style.border = '3px solid green';
		openBtn.style.color = 'green';
		mainList.check();
	} else if(mainList.open === false) {
		isopenValue.style.backgroundColor = 'red';
		openBtn.setAttribute('disabled', ''),
		countBudgetBtn.setAttribute('disabled', ''),
		hireEmployersBtn.setAttribute('disabled', '');
		openBtn.style.border = '3px solid red';
		openBtn.style.color = 'red';
	}

	
});
	
countBudgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

hireEmployersBtn.addEventListener('click', () => {
	for (var i = 0; i < hireEmployersItem.length; i++){
		var nameE = hireEmployersItem[i].value;

		mainList.employers[i] = nameE;
		employersValue.textContent += mainList.employers[i] + ', ';

		if(employersValue.textContent.length >= 3) {
			hireEmployersBtn.setAttribute('disabled', '');
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
	openShop: function openShop (){
		if(mainList.open === false) {
			openBtn.setAttribute('disabled', ''),
			goodsItemBtn.setAttribute('disabled', ''),
			countBudgetBtn.setAttribute('disabled', ''),
			hireEmployersBtn.setAttribute('disabled', '');
			openBtn.style.border = '3px solid red';
			openBtn.style.color = 'red';
		} 
	},
	
	check: function check(){
		for(var i = 0; i < goodsItem.length; i++) {
			goodsItem[i].setAttribute('onkeyup', 'mainList.check()');
		}

		for(var i = 0; i < hei.length; i++) {
			hei[i].setAttribute('onkeyup', 'mainList.check()');
		}


		goodsItemBtn.disabled = goods1.value && goods2.value && goods3.value && goods4.value ? false : "disabled";
		hireEmployersBtn.disabled = employers1.value && employers2.value && employers3.value ? false : "disabled";
	}
};

countBudgetValue.setAttribute('disabled', '');
mainList.openShop();

















	
	

















