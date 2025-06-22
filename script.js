var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}
function makeBubble() {
  var clutter = "";
  for (i = 0; i <= 140; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${num}</div>`;
  }
  document.querySelector("#panel_bottom").innerHTML = clutter;
}
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
        document.querySelector("#panel_bottom").innerHTML=`<h1>GAME OVER</h1>`
      clearInterval(timerint);
    }
  }, 1000);
}
function getNewHit() {
   hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
document
  .querySelector("#panel_bottom")
  .addEventListener("click", function (dets) {
    var clickedrn = Number(dets.target.textContent);
    if (clickedrn === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });
// increaseScore();
runTimer();
makeBubble();
getNewHit();
