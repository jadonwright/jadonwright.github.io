// window.onload = () => {
//   "use strict";

//   if ("serviceWorker" in navigator && document.URL.split(":")[0] !== "file") {
//     navigator.serviceWorker.register("./sw.js");
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  var imageContainer = document.getElementById('image-container');
  var selectedPosition = document.getElementById('selected-position');

  imageContainer.addEventListener('click', function (event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;

    selectedPosition.style.left = (x - 5) + 'px'; // Adjust for the size of the dot
    selectedPosition.style.top = (y - 5) + 'px'; // Adjust for the size of the dot
  });
});


//Owen's scroll management

document.getElementById("section-basic-info-popup").style.transition = "background-color 0.5s, color 0.5s";
document.onscroll = updateScroll;
function updateScroll(scroll) {
  if (window.scrollY > 110 && window.scrollY < 860) {
    document.getElementById("section-basic-info-popup").style.display = "block";
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 860 && window.scrollY < 1100) {
    document.getElementById("section-autonomous-popup").style.display = "block";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 1100 && window.scrollY < 1425) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "block";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 1425 && window.scrollY < 2000) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "block";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 1900 && window.scrollY < 2500) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "block";


  } else {
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  }
  //var elements = document.getElementsByClassName()
}

//new QRCode(document.getElementById("qrcontainer"), "https://o-script.com");
var alreadyGenerated = false;

function generateQRCodeYay() {
  if (alreadyGenerated == true) {

  }
  var text = getFormData();
  document.getElementById("qrcontainer").innerHTML = "";
  new QRCode(document.getElementById("qrcontainer"), text);
  document.getElementById("generateQR").textContent = "Refresh QR Code";
}
function resetForm() {
  self.location = self.location;
}


// Owen's version
function decrement(targetname) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  if (value > 0) {
    value--;
  }
  currentElem.textContent = value;
}
function increment(targetname) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  value++;
  currentElem.textContent = value;
}

function getFormData() {
  
  var initial = document.getElementById("scouter-initials").value;
  var level = getRadioData("level");
  var match = document.getElementById("metch-yes").value;
  var location = getRadioData("color");
  var team = document.getElementById("teams-num").value;
  var start = document.getElementById("selected-position").style.left + "-" + document.getElementById("selected-position").style.top;
  var leave = String(document.querySelector(".leave-checkbox").checked);
  var ampAuto = document.getElementById("count-amp").innerText;
  var speakerAuto = document.getElementById("count-speaker").innerText;
  var ampTeleop = document.getElementById("count-amp-tele").innerText;
  var speakerTeleop = document.getElementById("count-speaker-tele").innerText;
  var amped = document.getElementById("count-amplification-tele").innerText;
  var pickup = getRadioData("pickup");
  var skill = getRadioData("skill");
  var defense = getRadioData("defense");
  var speed = getRadioData("speed");
  var died = String(document.querySelector(".died").checked);
  var tip = String(document.querySelector(".tip").checked);
  var dropped = String(document.querySelector(".drop").checked);
  var comments = document.getElementById("comments").value.replace('\'', '');
  var time = document.getElementById("timer").innerText;
  var statusFinal = getRadioData("finalPos");
  var trap = String(document.querySelector(".trap").checked);
  let data = [initial, level, match, location, team, start, leave, ampAuto, speakerAuto, ampTeleop, speakerTeleop, amped, pickup, skill, defense, speed, died, tip, dropped, comments, "", "", "", time, statusFinal, trap];
  let strings = "";
  for (var i = 0; i < data.length; i++) {
    if (String(data[i]) == "undefined" || String(data[i]) == "0" || String(data[i]) == "00:000") {
      strings += "N/A" + "\t";
    } else {
      strings += String(data[i]) + "\t";
    }
    
  }
  alert(strings);
  return strings;
}

let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function startStopTimer() {
  if (!running) {
    running = true;
    document.getElementById('startStop').textContent = 'Stop';
    timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds
  } else {
    running = false;
    document.getElementById('startStop').textContent = 'Start';
    clearInterval(timerInterval);
  }
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById('timer').textContent = formatTime(seconds) + ':' + formatMilliseconds(milliseconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function formatMilliseconds(milliseconds) {
  if (milliseconds < 10) {
    return '00' + milliseconds;
  } else if (milliseconds < 100) {
    return '0' + milliseconds;
  } else {
    return milliseconds;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  running = false;
  document.getElementById('startStop').textContent = 'Start';
  document.getElementById('timer').textContent = '00:000';
}

function getRadioData(elementName) {
  var radios = document.getElementsByName(elementName);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].id;
    }
  }
}