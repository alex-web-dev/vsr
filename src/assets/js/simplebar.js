import SimpleBar from "simplebar";
import ResizeObserver from "resize-observer-polyfill";

window.ResizeObserver = ResizeObserver;

const $simplebars = document.querySelectorAll(".js-simplebar");
$simplebars.forEach(($simplebar) => {
    new SimpleBar($simplebar, {
        autoHide: false,
    });
});
