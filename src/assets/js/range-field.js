import noUiSlider from "nouislider";

const $rangeSliders = document.querySelectorAll('.range-slider');
$rangeSliders.forEach($slider => {
    const data = {
        min: +$slider.dataset.min || 0,
        max: +$slider.dataset.max || 100,
        startMin: +$slider.dataset.startMin || 0,
        startMax: +$slider.dataset.startMax,
        step: +$slider.dataset.step || 1,
    };

    const sliderStart = [];
    if (data.startMin || data.startMin === 0) sliderStart.push(data.startMin);
    if (data.startMax || data.startMax === 0) sliderStart.push(data.startMax);

    noUiSlider.create($slider, {
        start: sliderStart,
        connect: sliderStart.length === 1 ? "lower" : true,
        step: data.step,
        range: {
            min: data.min,
            max: data.max,
        },
        format: {
            from: (value) => parseFloat(value),
            to: (value) => parseFloat(value),
        },
    });
});