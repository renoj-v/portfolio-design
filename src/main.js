import "./scss/main.scss";
require.context("../static", true);

const play = "play video";
const stop = "stop video";
document.querySelectorAll(".video-ctrl").forEach( ctrl => {
    let target = ctrl.getAttribute("target");
    let video = document.getElementById(target);
    let ctrl_function = function() {
        if (video.paused) {
            video.play();
            ctrl.innerHTML = stop;
        }
        else {
            video.pause();
            ctrl.innerHTML = play;
        }
    }
    ctrl.onclick = ctrl_function

    if (!video.autoplay) {
        ctrl.innerHTML = play;
    }
    else {
        ctrl.innerHTML = stop;
    }
})