let myvideo = document.getElementById("video1");
function playPause() {
  if (myvideo.paused) {
    myvideo.play();
    document.getElementsByClassName("playpause_img").style.backgroundImage =
      "url('play.png')";
  } else {
    myvideo.pause();
    document.getElementsByClassName("playpause_img").style.backgroundImage =
      "' ";
  }
}
