// START WATCH 

var mints = document.getElementById("mints");
var sec = document.getElementById("sec");
var ms = document.getElementById("ms");
var playbutton = document.getElementById("playbtn");
var stopbutton = document.getElementById("stopbtn");
var resetbutton = document.getElementById("resetbtn");

var miliSec = 0;
var Seconds = 0;
var minutes = 0;
var interval;

function start() {
    interval = setInterval(startTime, 100);
}

function startTime() {
    miliSec++;
    ms.innerHTML = miliSec;
    playbutton.disabled=true;
    if (miliSec == 100) {
        Seconds++;
        sec.innerHTML = Seconds;
        miliSec = 0;
        
    }
    else if (Seconds == 59) {
        minutes++;
        mints.innerHTML = minutes;
        Seconds = 0;
    }
}
function stop() {
    clearInterval(interval);
    playbutton.disabled=false;
}
function resetTime() {
    stop();
    miliSec = 0;
    Seconds = 0;
    minutes = 0;
    mints.innerHTML = minutes;
    sec.innerHTML = Seconds;
    ms.innerHTML = miliSec;
}

