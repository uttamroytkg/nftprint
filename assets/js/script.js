$(document).ready(function(){


	// input value empty js
	$("#valueCrossIcon").click(function(){
		$("#valueCross").val("")
	})


	



	// Start Popular Items Carousel jQuery (owlCarousel PlugIn)
	$('.popular-items').owlCarousel({
		margin:30,
		loop:true,
		nav:true, 
		center:true,
		autoplay:true,
		navText:['<i class="fa-solid fa-chevron-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			575:{
				items:2
			},
			767:{
				items:3
			},
			990:{
				items:4
			}
		}
	});
	// End Popular Items Carousel jQuery



	// Start Cryptos Carousel jQuery (owlCarousel PlugIn)
	$('.cryptos-items').owlCarousel({
		items:7,
		loop:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:3
			},
			575:{
				items:4
			},
			767:{
				items:5
			},
			990:{
				items:7
			}
		}
	});
	// End Cryptos Carousel jQuery

});




// Start Fixed Scroll Button jQuery
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 300){
		$('#scrollBtn').fadeIn();
	}else{
		$('#scrollBtn').fadeOut();
	}

})

$('#scrollBtn').click(function(){
	$('html , body').animate({
		scrollTop : 0
	},2000);
})
// End Fixed Scroll Button jQuery




// print increment and print increment value change 2 js
	
	const increment = document.querySelector('.plus');
	const decrement = document.querySelector('.minus');
	const numberPlus = document.querySelector('#number');
	const updatePrice = document.querySelector('#updatePrice');

	var i = 1;
	increment.addEventListener('click',function(){
		numberPlus.innerText = ++i;
		updatePrice.innerText = (12.03 * i).toFixed(2);
	});
	decrement.addEventListener('click',function(){
		if(i <= 1){
			numberPlus.innerText = i;
		}else{
			numberPlus.innerText = --i;
			updatePrice.innerText = (12.03 * i).toFixed(2);
		}
	});



// print increment and print increment value change 2 js

	const increment2 = document.querySelector('.plus-2');
	const decrement2 = document.querySelector('.minus-2');
	const numberPlus2 = document.querySelector('#number2');
	const updatePrice2 = document.querySelector('#updatePrice2');

	var y = 1;
	increment2.addEventListener('click',function(){
		numberPlus2.innerText = ++y;
		updatePrice2.innerText = (12.03 * y).toFixed(2);
	});
	decrement2.addEventListener('click',function(){
		if(y <= 1){
			numberPlus2.innerText = y;
		}else{
			numberPlus2.innerText = --y;
			updatePrice2.innerText = (12.03 * y).toFixed(2);
		}
	});




// Start WithOut Document Ready






