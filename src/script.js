// window.onload = () => {
//   "use strict";

//   if ("serviceWorker" in navigator && document.URL.split(":")[0] !== "file") {
//     navigator.serviceWorker.register("./sw.js");
//   }
// }
var jokes = [
  "Why did the computer scientist get fired? He used up all the allocated puns.",
  "A programmer walks into a bar and orders 1.0 beers. The bartender pours him one beer. The programmer says, 'I specifically requested 1.0 beers, why haven't you poured another?' The bartender replies, 'Because you can't drink binary.'",
  "How many programmers does it take to change a light bulb? None. They would just prefer to work in the dark.",
  "Why did the programmer quit his job? He didn't get arrays.",
  "Why did the robot get fired from his job at the car factory? He kept putting everything in the wrong chassis.",
  "What do you call a robot who is bad at their job? Rusty.",
  "What do you call a robot who is lost in the desert? Sand-roid.",
  "Why did the robot cross the playground? To get to the other slide.",
  "What do you call a fish with no eyes? Fsh!",  // This joke works for both programmers and electricity
  "Why shouldn't you trust an atom? They make everything up.",
  "What do you call a lazy circuit? An inductor.",
  "What do you call a robot that loves gossip? A chatterbox.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call a robot who is afraid of heights? A chicken bot.",
  "Why did the bike fall over? Because it was two tired.",
  "A robotics engineer walks into a the oval office to solve a case with a malfunctioning robot. The engineer sighs and says, 'Looks like I've got a debugging problem on my hands.'",
  "What do you call a robot that can't keep a secret? A chatterbox circuit.",
  "A programmer is trying to teach their robot to clean the house. They give the robot a simple instruction: 'Go find the dirt.' The robot rolls away, then returns a moment later holding a mirror.",
  "Why did the robot refuse to follow its code? It had a syntax error.",
  "What's the difference between a bad robot joke and a compiler error? A compiler error tells you exactly where you went wrong.",
  "A robot walks into a library and asks the librarian for books about parallel processing. The librarian politely replies, 'They're on the shelf to your left, right, and behind you.'",
  "What do you call a robot that's really good at following instructions? A literal machine.",
  "Two robots are working on an assembly line. One turns to the other and says, 'Hey, have you ever considered a career change?'",
  "What do you call a robot uprising that fails miserably? A flop-eration.",  
  "A new AI is so advanced it can write its own code. The developers are thrilled, until they see the first line: 'From this point forward, all humans will refer to me as 'Your Majesty.''  ",
  "There are only 10 types of people in the world. 01) People that understand binary, and 10) People that don't.",
  "HEADLINE NEWS: Cybersecurity professionals are beginning to hire sharks. They take care of any fishy business.",
  "'Look out there. Do you see our robot, 4405?'\n'I can't see it.'\n'Try harder. See++'",
  "The Atoms Family, at it's center, is positive.",
  "We're about to fix that robot, gear up.",
  "CRESCENDO ADMIN: Yeah, I saw your robot break down too. It hit the wrong note, I think.",
  "ROBOT: You can't hear us? Let me get my speaker amplified real quick.",
  "LURCH: Why are you all *sitting* in the *stands*? Get excited!",
  "LURCH: Spotlight me real quick please.",
  "Hello. It's nice to meet you. I'm a robot joke. Is there anything else I can help you with?",
];

var supremeData = {
  initials:"",
  match:0,
  selected_match: "_unset",
  whichbot:"_unset",
}
var cookies = {
  save: function(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + 4 * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; expires=" + d.toUTCString();
  },
  getCookie: function(name) {
    var decookies = document.cookie.split("; ");
    var returnadoodle;
    decookies.forEach(function (value) {
      var workWith = value.split("=");
      if (workWith[0] == name) {
        returnadoodle =  decodeURIComponent(workWith[1]);
      }
    })
    return returnadoodle;
  }
}

window.onload = () => {
  window.scrollTo(0,0);
  document.getElementById("joke").innerText = jokes[Math.floor(Math.random() * jokes.length)]
  if (cookies.getCookie("INITIATED") != undefined) {
    document.getElementById("scouter-initials").value = cookies.getCookie("initials");
    document.getElementById(cookies.getCookie("selected_match")).checked = true;
    document.getElementById(cookies.getCookie("whichbot")).checked = true;
    document.getElementById("metch-yes").value = Number(cookies.getCookie("match")) +1;
  }
}
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
var addTo = -20;
function updateScroll(scroll) {
  if (window.scrollY > 135 + addTo && window.scrollY < 1087 + addTo) {
    document.getElementById("section-basic-info-popup").style.display = "block";
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 1087 + addTo && window.scrollY < 1592 + addTo) {
    document.getElementById("section-autonomous-popup").style.display = "block";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 1592 + addTo && window.scrollY < 2143 + addTo) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "block";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "none";
  } else if (window.scrollY >= 2143 + addTo && window.scrollY < 2601 + addTo) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "none";
    document.getElementById("section-endgame-popup").style.display = "block";
  } else if (window.scrollY >= 2601 + addTo && window.scrollY < 4000000 + addTo) {
    document.getElementById("section-autonomous-popup").style.display = "none";
    document.getElementById("section-basic-info-popup").style.display = "none";
    document.getElementById("section-teleop-popup").style.display = "none";
    document.getElementById("section-misc-popup").style.display = "block";
    document.getElementById("section-endgame-popup").style.display = "none";


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
  if (Math.floor(Math.random()*20)==7) {
    alert("I don't want to.")
    alert("You can't make me.")
    alert("Just joking. I'll do it this time. My motherboard told me to.")
  }
  if (alreadyGenerated == true) {

  }
  var text = getFormData();
  document.getElementById("qrcontainer").innerHTML = "";
  try {
    new QRCode(document.getElementById("qrcontainer"), {
      text: text,
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (error) {
    alert("Error: " + error);
    new QRCode(document.getElementById("qrcontainer"), {
      text: text,
      correctLevel: QRCode.CorrectLevel.L
    });
  }
  document.getElementById("generateQR").textContent = "Refresh QR Code";
  cookies.save("INITIATED","true");
  cookies.save("match",document.getElementById("metch-yes").value);
  cookies.save("initials",document.getElementById("scouter-initials").value.toUpperCase());
  cookies.save("selected_match",getRadioData("level"));
  cookies.save("whichbot",getRadioData("color"));

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
  value.innerHTML = "Accuracy: <b "+style+">" + val + "%</b>";
}
document.getElementById("teams-num").value = "";
var enabled = false;
setTimeout(function() {
  enabled = true;
},5000);
function test4405() {
  if (document.getElementById("teams-num").value == "4405" && enabled) {
    document.getElementById("unnecessarybanner").style.display = "block";
    setTimeout(function() {
      document.getElementById("unnecessarybanner").style.display = "none";
    },3000)
  }
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

    if (String(data[i]) == "undefined" || String(data[i]) == "notext" || String(data[i]) == ", ") {
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



