// window.onload = () => {
//   "use strict";

//   if ("serviceWorker" in navigator && document.URL.split(":")[0] !== "file") {
//     navigator.serviceWorker.register("./sw.js");
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  var imageContainerStart = document.getElementById('image-cont-start');
  var imageContainerEnd = document.getElementById('image-cont-end');
  var selectedPositionStart = document.getElementById('selected-position-start');
  var selectedPositionEnd = document.getElementById('selected-position-end');

  imageContainerStart.addEventListener('click', function (event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;

    selectedPositionStart.style.left = (x - 5) + 'px'; // Adjust for the size of the dot
    selectedPositionStart.style.top = (y - 5) + 'px'; // Adjust for the size of the dot
  });
  imageContainerEnd.addEventListener('click', function (event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;

    selectedPositionEnd.style.left = (x - 5) + 'px'; // Adjust for the size of the dot
    selectedPositionEnd.style.top = (y - 5) + 'px'; // Adjust for the size of the dot
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
  try {
    new QRCode(document.getElementById("qrcontainer"), {
      text: text,
      width: 375,
      height: 375,
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (error) {
    alert("Error: " + error);
    new QRCode(document.getElementById("qrcontainer"), {
      text: text,
      width: 375,
      height: 375,
      correctLevel: QRCode.CorrectLevel.L
    });
  }
  document.getElementById("generateQR").textContent = "Refresh QR Code";
}
function resetForm() {
  self.location = self.location;
}

function calcPercent(value, a, b) {
  console.log(a, b)
  let val = String(Math.round((a / (a + b)) * 100))
  let style = "style=\"color: rgb(187, 0, 184)\""
  if (val == "NaN") {
    val = "0"
    style = ""
  }
  value.innerHTML = "Amp Acc: <b "+style+">" + val + "%</b>";
}


// Owen's version
function decrement(targetname, child = null, out = null) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  if (value > 0) {
    value--;
  }
  currentElem.textContent = value;
  if (child) {
    calcPercent(document.getElementById(out), value, Number(document.getElementById(child).textContent));
  }
}
function increment(targetname, child = null, out = null) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  value++;
  currentElem.textContent = value;
  if (child) {
    calcPercent(document.getElementById(out), value, Number(document.getElementById(child).textContent));
  }
}

function decrementmiss(targetname, parent, out) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  if (value > 0) {
    value--;
  }
  currentElem.textContent = value;
  calcPercent(document.getElementById(out), Number(document.getElementById(parent).textContent), value);
}
function incrementmiss(targetname, parent, out) {
  var currentElem = document.getElementById(targetname);
  var value = Number(currentElem.textContent);
  value++;
  currentElem.textContent = value;
  calcPercent(document.getElementById(out), Number(document.getElementById(parent).textContent), value);
}

function getFormData() {

  var initial = document.getElementById("scouter-initials").value.toUpperCase();
  var level = getRadioData("level");
  var match = document.getElementById("metch-yes").value;
  var location = getRadioData("color");
  var team = document.getElementById("teams-num").value;
  var start = document.getElementById("selected-position-start").style.left.replace(/[^0-9\.]+/g, '') + ", " + document.getElementById("selected-position-start").style.top.replace(/[^0-9\.]+/g, '');
  var end = document.getElementById("selected-position-end").style.left.replace(/[^0-9\.]+/g, '') + ", " + document.getElementById("selected-position-end").style.top.replace(/[^0-9\.]+/g, '');
  var leave = String(document.querySelector(".leave-checkbox").checked).toUpperCase();
  var ampAuto = document.getElementById("count-amp").innerText;
  var speakerAuto = document.getElementById("count-speaker").innerText;
  var ampTeleop = document.getElementById("count-amp-tele").innerText;
  var speakerTeleop = document.getElementById("count-speaker-tele").innerText;
  var amped = document.getElementById("count-amplification-tele").innerText;
  var pickup = getRadioData("pickup");
  var skill = getRadioData("skill");
  var defense = getRadioData("defense");
  var speed = getRadioData("speed");
  var intake = getRadioData("int");
  var shooter = getRadioData("shoot");
  var died = String(document.querySelector(".died").checked).toUpperCase();
  var tip = String(document.querySelector(".tip").checked).toUpperCase();
  var dropped = String(document.querySelector(".drop").checked).toUpperCase();
  var comments = document.getElementById("comments").value.replace('\'', '');
  var commentsAuto = document.getElementById("comments-auton").value.replace('\'', '');
  var time = document.getElementById("timer").innerText;
  var statusFinal = getRadioData("finalPos");
  var trap = String(document.querySelector(".trap").checked).toUpperCase();


  var ampAutoMiss = document.getElementById("count-amp-miss").innerText;
  var speakerAutoMiss = document.getElementById("count-speaker-missed").innerText;

  var ampAutoAcc = document.getElementById("amp-acc-auto").innerText.replace(/[^0-9\.]+/g, "") + "%";
  var speakerAutoAcc = document.getElementById("speaker-acc-auto").innerText.replace(/[^0-9\.]+/g, "") + "%";

  var ampTeleopMiss = document.getElementById("count-amp").innerText;
  var speakerTeleopMiss = document.getElementById("count-amp").innerText;

  var ampAcc = document.getElementById("amp-acc").innerText.replace(/[^0-9\.]+/g, "") + "%";
  var speakerAcc = document.getElementById("speaker-acc").innerText.replace(/[^0-9\.]+/g, "") + "%";

  let data = [team, initial, level, match, location, start, end, leave, ampAuto, ampAutoMiss, ampAutoAcc, speakerAuto, speakerAutoMiss, speakerAutoAcc, commentsAuto, "", ampTeleop, ampTeleopMiss, ampAcc, speakerTeleop, speakerTeleopMiss, speakerAcc, amped, pickup, time, statusFinal, trap, skill, defense, speed, intake, shooter, died, tip, dropped, comments]
  let strings = "";
  for (var i = 0; i < data.length; i++) {

    if (String(data[i]) == "undefined" || String(data[i]) == "notext") {
      strings += "" + "\t";
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