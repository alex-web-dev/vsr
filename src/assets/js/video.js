const $video = document.querySelector(".video");
if ($video) {
    const $btn = $video.querySelector(".video__play");
    const $ytVideoMain = document.querySelector(".yt-video__main");
    const url = $video.dataset.src;
    const $popupVideo = document.querySelector('.popup[data-popup-name="video"]');
    let $iframe = null;
    let created = false;

    $btn.addEventListener("click", () => {
        if (!created) {
            $iframe = createYTFrame(url);
            $ytVideoMain.append($iframe);
            created = true;
        } else {
            $iframe.src = '';
            $iframe.src = url;
        }
    });

    $popupVideo.addEventListener('popupClose', () => {
        if ($iframe) {
            $iframe.src = '';
        }
    });
}

function createYTFrame(url) {
    const $iframe = document.createElement("iframe");
    $iframe.setAttribute("src", `${url}?autoplay=1?enablejsapi=1`);
    $iframe.setAttribute("autoplay", "");
    $iframe.setAttribute("frameborder", "0");
    $iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    $iframe.setAttribute("allowfullscreen", "");

    return $iframe;
}
