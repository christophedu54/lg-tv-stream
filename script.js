document.addEventListener("DOMContentLoaded", function () {
    var videoElement = document.getElementById("videoPlayer");
    var mediaUrl = "https://tv.ornethd.net/iptv6_ornethd.m3u"; // Replace with your stream URL

    if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = mediaUrl;
        videoElement.play();
    } else {
        console.error("The video format is not supported.");
    }
});
