// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'ZLijdx6kxRw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


// 4. The API will call this function when the video player is ready.
var videoPlaylist = ['ZLijdx6kxRw', 'MbXWrmQW-OE', '6Ejga4kJUts'];
var quantVideos = videoPlaylist.length;
var indexPlaylist = Math.floor(Math.random() * quantVideos);
function onPlayerReady(event) {
    event.target.playVideo();
    player.setLoop(true);

    if (videoPlaylist && videoPlaylist.length) {
        videoPlaylist.forEach(function myFunction(item, index) {
            player.cueVideoById(item, 0, "large");
        });
    }
    
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        // done = true;
    }
}


function stopVideo() {
    player.stopVideo();

//     // player.cueVideoById("uG8V9dRqSsw",
//     //             0,
//     //             "large");

//     // player.loadVideoById("uG8V9dRqSsw",
//     //             5,
//     //             "large");
//     // player.setSize(800,800);
}




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
    stepForwardVideo: function() {
        // console.log(player.nextVideo());
        console.log("Pra Frente");
        indexPlaylist = (indexPlaylist >= videoPlaylist.length-1) ? videoPlaylist.length-1 : indexPlaylist+1;
        console.log(player.loadVideoById(videoPlaylist[indexPlaylist],0,"large"));
        console.log(indexPlaylist);
    },
    stepBackwardVideo: function() {
        // console.log(player.previousVideo());
        console.log("Pra Trás");
        indexPlaylist = (indexPlaylist <= 0) ? 0 : indexPlaylist-1;
        console.log(player.loadVideoById(videoPlaylist[indexPlaylist],0,"large"));
        console.log(indexPlaylist);
    },
    forwardVideo: function() {
        // player.seekTo(seconds:Number, allowSeekAhead:Boolean);
    },
    rewindVideo: function() {
        // player.seekTo(seconds:Number, allowSeekAhead:Boolean);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");

    document.getElementById("pause").addEventListener("click", playerYT.pauseVideo);
    document.getElementById("play").addEventListener("click", playerYT.playVideo);
    document.getElementById("step-forward").addEventListener("click", playerYT.stepForwardVideo);
    document.getElementById("step-backward").addEventListener("click", playerYT.stepBackwardVideo);

    
});