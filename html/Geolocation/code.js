var hasVideo = !!(document.createElement('video').canPlayType("mp4"));

var vid = document.getElementById("myVideo");


document.getElementById("play").addEventListener("click", function () {
    console.log(vid.duration);
    //could be used to operate play/pause in one button
    console.log(vid.paused);
    

    vid.play();
});

document.getElementById("pause").addEventListener("click", function () {
    vid.pause();
});