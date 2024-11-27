/*====To display current year====*/
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

/*====Initialize SwiperJS====*/
const swiper = new Swiper('.js-review-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    //Pagination bullets
    pagination:{
        el: '.js-review-pagination',
        clickable: true,
        dynamicBullets: true
    },

    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
});