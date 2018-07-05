function slider() {

	// верхний слайдер
	let itemSlider = document.getElementsByClassName('main-slider-item'),
		main1 =  document.getElementById('main1'),
		main2 =  document.getElementById('main2'),
		sliderIndex = 1;

	function showSlider(n){ 

		if (n > itemSlider.length){
			sliderIndex = 1;
		}
	
		if (n < 1){
			sliderIndex = itemSlider.length;
		};

		for (let i = 0; i < itemSlider.length;i++) {
			itemSlider[i].style.display = 'none';
		};

		itemSlider[sliderIndex-1].style.display = 'block';
	};

	showSlider(); 

	setInterval(function(){

        let num = 1;

        showSlider(sliderIndex += num);
			
        animate(function(timePassed) {

	        main1.style.top = timePassed / 40 + 'px';
	        main2.style.top = timePassed / 40 + 'px';

	     }, 1000);

		function animate(draw, duration) {
			let start = performance.now();

			requestAnimationFrame(function animate(time) {

				let timePassed = time - start;

				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}

			});
		};

    }, 5000);



    // нижний слайдер
    let fbItemSlider = document.getElementsByClassName('feedback-slider-item'),
    	prevFb = document.querySelector('.main-prev-btn'),
    	nextFb = document.querySelector('.main-next-btn'),
    	fbIndexSlider = 1;

    function fbSliderShow(n) {

    	if (n > fbItemSlider.length) {
    		fbIndexSlider = 1;
    	}

    	if (n < 1) {
    		fbIndexSlider = fbItemSlider.length;
    	}

    	for (let i = 0; i < fbItemSlider.length; i++) {
    		fbItemSlider[i].style.display = 'none';
    	}

    	fbItemSlider[fbIndexSlider-1].style.display = 'block';
    	//fbItemSlider[fbIndexSlider-1].style.left = "50px";
    }

    fbSliderShow();

    function plusSlidesFb(n){
        fbSliderShow(fbIndexSlider += n);
    };

    prevFb.addEventListener('click', function(){
        plusSlidesFb(-1);
    });

    nextFb.addEventListener('click', function(){
         plusSlidesFb(1);
    });

    setInterval(function(){

        let num = 1;

        fbSliderShow(fbIndexSlider += num);
            
        animate(function(timePassed) {

            for (let i=0;i < fbItemSlider.length; i++){
                fbItemSlider[i].style.left = timePassed / 10 + 'px';
            }

         }, 400);

        function animate(draw, duration) {
            let start = performance.now();

            requestAnimationFrame(function animate(time) {

                let timePassed = time - start;

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }

            });
        };

    }, 5000);


    //Картинки при наведении
    let sizesBlock = document.getElementsByClassName('sizes-block'),
        size1 = document.getElementsByClassName('size-1')[0],
        size2 = document.getElementsByClassName('size-2')[0],
        size3 = document.getElementsByClassName('size-3')[0],
        size4 = document.getElementsByClassName('size-4')[0],
        hidInfo = document.getElementsByClassName('hidInfo'),
        hidInfo2 = document.getElementsByClassName('hidInfo2'),
        hidInfo3 = document.getElementsByClassName('hidInfo3'),
        hidInfo4 = document.getElementsByClassName('hidInfo4');

    function hidInfoItemNone1() {
        for(let i=0; i < hidInfo.length; i++){
             hidInfo[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock1() {
        for(let i=0; i < hidInfo.length; i++){
             hidInfo[i].style.display = 'block';
        }
    }

    function hidInfoItemNone2() {
        for(let i=0; i < hidInfo2.length; i++){
             hidInfo2[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock2() {
        for(let i=0; i < hidInfo2.length; i++){
             hidInfo2[i].style.display = 'block';
        }
    }

    function hidInfoItemNone3() {
        for(let i=0; i < hidInfo3.length; i++){
             hidInfo3[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock3() {
        for(let i=0; i < hidInfo3.length; i++){
             hidInfo3[i].style.display = 'block';
        }
    }

    function hidInfoItemNone4() {
        for(let i=0; i < hidInfo4.length; i++){
             hidInfo4[i].style.display = 'none';
        }
    }

    function hidInfoItemBlock4() {
        for(let i=0; i < hidInfo4.length; i++){
             hidInfo4[i].style.display = 'block';
        }
    }

    sizesBlock[0].onmouseover = sizesBlock[0].onmouseout = handler1;
    sizesBlock[1].onmouseover = sizesBlock[1].onmouseout = handler2;
    sizesBlock[2].onmouseover = sizesBlock[2].onmouseout = handler3;
    sizesBlock[3].onmouseover = sizesBlock[3].onmouseout = handler4;

    function handler1(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size1.src = 'img/sizes-1-1.png';
            hidInfoItemNone1()
        }
        if (event.type == 'mouseout') {
            size1.src = 'img/sizes-1.png';
            hidInfoItemBlock1();
        }
    }

    function handler2(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size2.src = 'img/sizes-2-1.png';
            hidInfoItemNone2();
        }
        if (event.type == 'mouseout') {
            size2.src = 'img/sizes-2.png';
            hidInfoItemBlock2();
        }
    }

    function handler3(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size3.src = 'img/sizes-3-1.png';
            hidInfoItemNone3()
        }
        if (event.type == 'mouseout') {
            size3.src = 'img/sizes-3.png';
            hidInfoItemBlock3();
        }
    }

    function handler4(event) {

        function str(el) {
            if (!el) return "null"
            return el.className || el.tagName;
        }
        if (event.type == 'mouseover') {
            size4.src = 'img/sizes-4-1.png';
            hidInfoItemNone4()
        }
        if (event.type == 'mouseout') {
            size4.src = 'img/sizes-4.png';
            hidInfoItemBlock4();
        }
    }

    if(document.body.offsetWidth < 768){
        sizesBlock[0].onmouseover = sizesBlock[0].onmouseout = handler1;
        sizesBlock[1].onmouseover = sizesBlock[1].onmouseout = handler2;
        sizesBlock[2].onmouseover = sizesBlock[2].onmouseout = handler3;
        sizesBlock[3].onmouseover = sizesBlock[3].onmouseout = handler4;
    }

}

module.exports = slider;