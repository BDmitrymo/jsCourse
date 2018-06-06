var x;

exit:
	for (var i = 1; i <= 100; i++){
		for (var n = 2; n < i; n++){

			if(i % n == 0) continue exit;
		}

		document.write('Делители этого числа: ' + i + ' и ' + n + '<br />');
	}