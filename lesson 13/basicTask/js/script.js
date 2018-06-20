$(document).ready(function(){

	$('.main_btn').on('click', function() {
		$('.overlay').fadeTo(2000, 1.5);
		$('.modal').css('display','block');
		$('.modal').animate({marginTop: '80px'}, 3000);
	});


	$('.close').on('click', function() {
		$('.overlay').fadeTo(3000, 0).fadeOut(200);
		$('.modal').animate({marginTop: '0px'}, 3000).fadeOut(200);	
	});

})