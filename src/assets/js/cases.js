import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

const $cases = document.querySelector(".cases");
if ($cases) {
    const $slider = document.querySelector(".cases__slider");
    const $countThis = $cases.querySelector(".cases__count-this");
    const $countTotal = $cases.querySelector(".cases__count-total");
    const $btnNext = $cases.querySelector(".cases__controls-next");
    const $btnPrev = $cases.querySelector(".cases__controls-prev");

    new Swiper($slider, {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 500022,
            disableOnInteraction: false,
        },
        on: {
            init: (swiper) => updateSliderCount(swiper, $countThis, $countTotal),
            slideChange: (swiper) => updateSliderCount(swiper, $countThis, $countTotal),
        },
        navigation: {
            nextEl: $btnNext,
            prevEl: $btnPrev,
        },
    });
}

function updateSliderCount(swiper, $countThis, $countTotal) {
    const activeNum = swiper.realIndex + 1;
    const slidesCount = swiper.slides.filter((n) => !n.matches(".swiper-slide-duplicate")).length;
    $countThis.innerText = activeNum;
    $countTotal.innerText = slidesCount;
}
