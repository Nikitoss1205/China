window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelector('.header__links'),
    link = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        links.classList.toggle('header__links_active');
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            links.classList.toggle('header__links_active');
        })
	});

	const showPizza = document.getElementsByClassName('header__link');
	const pizza = document.getElementsByClassName('header__links_active');
	const pie = document.getElementsByClassName('hamburger_active');  

	showPizza.addEventListener('click', function(e) {
    	e.preventDefault();
		pizza.className.remove('header__links_active');
		pie.className.remove('hamburger_active');
	});

	console.log('get to the choppa!!!');
});

$(document).ready(function() {
    $(window).scroll(function() {
		if ($(this).scrollTop() > 1150) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#header']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();

	$('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 992,
			settings: {
			dots: true,
			arrows: false
            },
			breakpoint: 768,
			settings: {
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		}
		],
        responsive: [
		{
			breakpoint: 992,
			settings: {
			dots: true,
			arrows: false
        }
        }]
	});

	$('.consultation__form').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введен почтовый адрес"
			}
		}
	});

	$('.form_ask').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введен почтовый адрес"
			}
		}
	});

	$('input[name=phone]').mask("+9 (999) 999-99-99");

	/* $('.header__link').on('click', function() {
		$('.header__links_active').classList.remove('header__links_active');
		$('.hamburger_active').classList.remove('hamburger_active');
	}) */
});