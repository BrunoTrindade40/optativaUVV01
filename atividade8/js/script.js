var playerYT = {
    stopVideo: function () {
        player.stopVideo();
    },
    pauseVideo: function () {
        player.pauseVideo();
        console.log(player.getCurrentTime());
    },
    playVideo: function () {
        player.playVideo();
        console.log(player.getCurrentTime());
    },
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");

    document.getElementById("pause").addEventListener("click", playerYT.pauseVideo);

});