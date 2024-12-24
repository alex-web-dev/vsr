import Swiper from "swiper";

const $slider = document.querySelector(".companies__slider");
new Swiper($slider, {
    slidesPerView: 4,
    spaceBetween: 30,
});
