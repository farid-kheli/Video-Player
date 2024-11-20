let btn = document.getElementById('play-pause')
let sound = document.getElementById('sound')
let video = document.querySelector('.video')
let bar = document.querySelector('.bar-juice')
let soundBar = document.getElementById('sound-bar')
function PlayPause(){
    if(video.paused){
        btn.src='https://icons.veryicon.com/png/o/media/multi-media-2/pause-multimedia.png'
        video.play()
    }else{
        btn.src='https://icons.veryicon.com/png/o/media/multi-media-2/play-multimedia.png'
        video.pause()
    }
}
video.addEventListener('timeupdate',function(){
    var barporsenteg = video.currentTime/video.duration;
    bar.style.width = barporsenteg * 100 + '%'
})
soundBar.addEventListener('input',function(){
    //console.log(soundBar.value)
    video.volume = soundBar.value/100;
    if(video.volume==0){
        sound.src='https://icons.veryicon.com/png/o/media/multi-media-2/mute-speaker-multimedia.png'
    }
    else{
        sound.src='https://icons.veryicon.com/png/o/media/multi-media-2/sound-speaker-multimedia.png'
    }
})
function MuteYN(){
    if(video.muted){
        sound.src='https://icons.veryicon.com/png/o/media/multi-media-2/sound-speaker-multimedia.png'
        video.muted = false;
    }else{
        sound.src='https://icons.veryicon.com/png/o/media/multi-media-2/mute-speaker-multimedia.png'
        video.muted = true;
    }
}