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
  } else if (window.scrollY >= 860 && window.scrollY < 1100) {
    document.getElementById("section-autonomous-popup").style.display = "block";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
  } else if (window.scrollY >= 1100 && window.scrollY < 1425) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "block";
    document.getElementById("section-misc-popup").style.display = "none";
  } else if (window.scrollY >= 1425 && window.scrollY < 2000) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "block";
  } else {
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
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
  let data = [initial, level, match, location, team, start, leave, ampAuto, speakerAuto, ampTeleop, speakerTeleop, amped, pickup, skill, defense, speed, died, tip, dropped, comments];
  let strings = "";
  for (var i = 0; i < data.length; i++) {
    strings += String(data[i]) + "\t";
  } 
  alert(strings);
    return strings;
}

function getRadioData(elementName) {
  var radios = document.getElementsByName(elementName);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].id;
    }
  }
}