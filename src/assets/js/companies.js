import Swiper from "swiper";

const $slider = document.querySelector(".companies__slider");
new Swiper($slider, {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
