    document.addEventListener("DOMContentLoaded", function () {
    var videoElement = document.getElementById("videoPlayer");
    var streamUrl = "https://tv.ornethd.net/iptv6_ornethd.m3u"; // Replace with actual stream URL

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoElement.play();
        });
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = streamUrl;
        videoElement.play();
    } else {
        console.error("HLS is not supported on this device.");
    }
});
