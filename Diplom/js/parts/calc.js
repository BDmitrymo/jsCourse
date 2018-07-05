function calc() {

	let btnOrder = document.getElementsByClassName('rr')[0],
		size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		form = document.getElementsByClassName('form')[0],
		text = document.getElementsByClassName('calc-price')[0],
		promoCode = document.getElementsByClassName('promocode')[0],
		sizeMoney = 0,
		materialMoney = 0,
		optionsMoney = 0,
		result = 0,
		promo,
		sum;

	function calculatingMoney() {
		result = sizeMoney + materialMoney + optionsMoney;

		if (sizeMoney != 0 && materialMoney != 0){
			if (promo === 'IWANTPOPART') {
				sum = result * 0.30;
				result = (sizeMoney + materialMoney + optionsMoney) - sum;
			} else {
				result = sizeMoney + materialMoney + optionsMoney;
			}

			text.innerHTML = result + ' руб';

		} else if (sizeMoney != '' || materialMoney != '' && optionsMoney != 0) {
			text.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		} else {
			text.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
		

	}

	size.addEventListener('change', function () {
		sizeMoney =  parseInt(this.options[this.selectedIndex].value, 10);
		calculatingMoney();
	});

	material.addEventListener('change', function () {
		materialMoney = parseInt(this.options[this.selectedIndex].value, 10);
		calculatingMoney();
	});

	options.addEventListener('change', function () {
		optionsMoney = parseInt(this.options[this.selectedIndex].value, 10);;
		calculatingMoney();
	});

	promoCode.addEventListener('change', function () {
		promo =  promoCode.value;
		promo = promo.replace(/\s/g, '');
		calculatingMoney();
	});

}

module.exports = calc;