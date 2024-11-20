let btn = document.getElementById('play-pause')
let sound = document.getElementById('sound')
let video = document.querySelector('.video')
let bar = document.querySelector('#sound-bar')
let soundBar = document.getElementById('sound-bar')
let curentimeHTML = document.getElementById('curentime')
const duration = video.duration;
const minutes = Math.floor(duration / 60);
const seconds = Math.floor(duration % 60);
bar.value = 0
document.getElementById('duration').innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;

function PlayPause() {
    if (video.paused) {
        btn.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/pause-multimedia.png'
        video.play()
    } else {
        btn.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/play-multimedia.png'
        video.pause()
    }
}
const currentTime = 0;
video.addEventListener('timeupdate', function () {
    var barporsenteg = video.currentTime / video.duration;
    bar.value = barporsenteg * 100
    const currentTime = video.currentTime
    const minutes = Math.floor(currentTime / 60)
    const seconds = Math.floor(currentTime % 60)
    curentimeHTML.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`
    
    if (video.ended) {
        btn.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/play-multimedia.png'
    }
})
soundBar.addEventListener('input', function () {
    //console.log(soundBar.value)
    video.volume = soundBar.value / 100;
    if (video.volume == 0) {
        sound.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/mute-speaker-multimedia.png'
    }
    else {
        sound.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/sound-speaker-multimedia.png'
    }
})
bar.addEventListener('input', function () {
    video.currentTime = (bar.value * video.duration) / 100;

})
function MuteYN() {
    if (video.muted) {
        sound.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/sound-speaker-multimedia.png'
        video.muted = false;
    } else {
        sound.src = 'https://icons.veryicon.com/png/o/media/multi-media-2/mute-speaker-multimedia.png'
        video.muted = true;
    }
}