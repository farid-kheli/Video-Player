let btn = document.getElementById('play-pause')
let video = document.querySelector('.video')
let bar = document.querySelector('.bar-juice')
function PlayPause(){
    if(video.paused){
        btn.src='https://icons.veryicon.com/png/o/media/multimedia-flat-multicolor/pause-43.png'
        video.play()
    }else{
        btn.src='https://icons.veryicon.com/png/o/media/multimedia-flat-multicolor/play-74.png'
        video.pause()
    }
}
video.addEventListener('timeupdate',function(){
    var barporsenteg = video.currentTime/video.duration;
    bar.style.width = barporsenteg * 100 + '%'
})