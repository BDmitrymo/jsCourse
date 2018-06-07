/* Задача 1 */
var mainList = {
	shopGoods: [,'Кросовки', 'Штаны', 'Футболки', 'Шорты'],
	typeGoods: [],
};

function sqrGoods(){
	for (var i = 0; i < 5; i++){
		var sqr =  prompt('Добавить тип товара', '');

		while(!(isNaN(sqr)) || sqr === '' || sqr === null) {
			sqr =  prompt('В базу данных не был добавлен тип, т.к. обнуражины цифры, повторите');
		} 
		
		mainList.typeGoods[i] = sqr;
		mainList.typeGoods = sqr.split(',');
		alert('Тип товара успешно добавлен.');
		break;
	}
}
//sqrGoods();
console.log(mainList);


/* Задача 2 */
var arr = mainList.shopGoods;

	mainList.shopItems.forEach(function(item, i, arr){
		alert("У нас вы можете купить: " + (i+1) + ' - ' + item);
	});


/* Задача 3 */
for (var key in mainList.shopGoods) {
	document.write("Наш магазин включает в себя: " + key + ' ' + mainList.shopGoods[key] + '<br />');
}