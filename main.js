var start = document.getElementById("start-buttom");
var stop = document.getElementById("stop-buttom");
var reset = document.getElementById("reset-buttom");

var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");

var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");
var bellWork = new Audio("bellWork.mp3");

var startTimer;

start.addEventListener("click", function () {
  click_sound.play();
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("El tiempo esta corriendo");
  }
});

reset.addEventListener("click", function () {
  click_sound.play();
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

function timer() {
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }

  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
    bell.play();
    /* alert("Descanso"); */
  }

  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    bellWork.play();
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";
    /* alert("Se acabo el Descanso");  */
    document.getElementById("counter").innerText++;
  }
}

function stopInterval() {
  clearInterval(startTimer);
  click_sound.play();
}
