let audio = document.getElementById("audio");
function play() {
    audio.play();
}
function pause() {
    audio.pause();
}
function slow() {
    audio.playbackRate -= 0.1;
}
function speed() {
    audio.playbackRate += 0.1;
}