$(document).ready(function(){

	$('.main_btn').on('click', function() {
		$('.overlay').fadeTo(2000, 1.5);
		$('.modal').css('display','block');
		$('.modal').animate({marginTop: '80px',height: '50%'}, 3000);
	});

	$('.main_nav nav>ul li:eq(1)').on('click', function() {
		$('.overlay').fadeTo(2000, 1.5);
		$('.modal').css('display','block');
		$('.modal').animate({
			margin: "-15rem 15% 0 18%",
			width: '70%',
			height: '50%',
			marginTop: '80px'
		}, 1500);
	});


	$('.close').on('click', function() {
		$('.overlay').fadeTo(2000, 0).fadeOut(200);
		$('.modal').animate({marginTop: '0px',height: '0'}, 1500).fadeOut(100);	
	});


})