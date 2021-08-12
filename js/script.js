function testWebP(callback) {
    var webP = new Image();
    
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }   else{
        document.querySelector('body').classList.add('no-webp');
    }
}); 
const main_swiper = new Swiper('.main-slider',{
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 1.5
        },
        1000: {
            slidesPerView: 1.8
        },
        1500: {
            slidesPerView: 2.3
        }
    }
});

const main_swiper2 = new Swiper('.main-slider2',{
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1.2
        },
        600: {
            slidesPerView: 1.8
        },
        800: {
            slidesPerView: 2.8
        },
        1000: {
            slidesPerView: 3.5
        }
    },
    direction: 'vertical',
    initialSlide: 1
});

const mini_swipper = new Swiper('.mini-swipper',{
    pagination: {
        el: '.swiper-pagination',
      },
    loop: true,
    
})

 

$(document).ready(function() {
    $('.spoiler__title').click(function(event) {
        if($('.spoiler-list').hasClass('only-one')) {
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
}) 

    
function ibg(){

let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();

var chooseCard = $('.choose__clothes-card');

chooseCard.on('click', function() {
	chooseCard.removeClass('active');
    $(this).addClass('active');
});


$(document).ready(function() {
    $('.burger__btn').click(function(event) {
    
        $(".wrapper").toggleClass('active');
        $(".header").toggleClass('active');
        $(".mobile__menu").toggleClass('active');

    })

})
 



