import "./scss/main.scss";
require.context("../static", true);
import lozad from "lozad"

const play = "play video";
const stop = "stop video";

if (!('IntersectionObserver' in window)) {
    var script = document.createElement("script");
    script.src = "https://raw.githubusercontent.com/w3c/IntersectionObserver/master/polyfill/intersection-observer.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
    const observer = lozad();
    observer.observe();

    document.querySelectorAll(".lozad").forEach( (lz,i) => {
        observer.triggerLoad(lz);
    })

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

    document.querySelectorAll(".animate").forEach( el => {
        el.classList.add("in")
    })
}
