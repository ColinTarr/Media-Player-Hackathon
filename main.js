document.addEventListener(
  "DOMContentLoaded",
  function () {
    startplayer();
  },
  false
);
var player;

function startplayer() {
  player = document.getElementById("videoAsset");
  player.controls = false;
}
function play_vid() {
  player.play();
}
function pause_vid() {
  player.pause();
}
function stop_vid() {
  player.pause();
  player.currentTime = 0;
}
function change_vol() {
  player.volume = document.getElementById("change_vol").value;
}

window.addEventListener("focus", function (event) {
  player.play();
  console.log("has focus");
});

window.addEventListener("blur", function (event) {
  player.pause();
  console.log("lost focus");
});
