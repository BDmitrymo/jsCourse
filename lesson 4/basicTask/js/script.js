var arr = mainList.shopGoods;

arr.forEach(function(element, index){
	document.write("У нас вы можете купить: " + index + ' ' + element + '<br />');
})



for (var key in mainList.shopGoods) {
	document.write("Наш магазин включает в себя: " + key + ' ' + mainList.shopGoods[key] + '<br />');
}