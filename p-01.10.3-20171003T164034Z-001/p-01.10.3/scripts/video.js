// JavaScript source code
var video = document.getElementById("bgvideo"),
    pauseButton = document.querySelector("#polina button");
pauseButton.addEventListener("click", function () {
    video.classList.toggle("stopfade");
    if (video.paused) {
        video.play();
        pauseButton.innerHTML = "Pause";
    }
    else {
        video.pause();
        pauseButton.innerHTML = "Paused";
    }
}, false);
video.addEventListener('touchstart', function (e) { e.preventDefault(); video.play(); })