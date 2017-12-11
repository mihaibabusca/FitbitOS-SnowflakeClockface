import clock from "clock";
import document from "document";

import * as util from "../common/utils";

import locale from "user-settings";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
let timeLabel = document.getElementById("timeLabel");
let timeLabelShadow = document.getElementById("timeLabelShadow");
let dateLabel = document.getElementById("dateLabel");
let dateLabelShadow = document.getElementById("dateLabelShadow");

// Update the <text> element with the current time
var lastMinutes = "";
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());
  
  if (mins === lastMinutes) {
    // console.log("Already Updated")
    return 
  }

  lastMinutes = mins;

  timeLabel.text = `${hours}:${mins}`;
  timeLabelShadow.text = `${hours}:${mins}`;

  let formattedDate = today.getMonth() + 1 + "/" + today.getDate();

  dateLabel.text = `${formattedDate}`;
  dateLabelShadow.text = `${formattedDate}`;
  randomizeBg();
  // console.log("Tick");
}

// Update the clock every tick event
clock.ontick = () => updateClock();

timeLabel.onclick = function(e) {
  randomizeBg();
}

for (var i=0; i<=10; i++) {
  var flake = document.getElementById("flake" + i);
  flake.y = -50;
  flake.x =  Math.floor((Math.random() * 280) + 10);
  flake.getElementById("image").href = "flake" + Math.floor((Math.random() * 3) + 1) + ".png";
  
  let size = Math.floor((Math.random() * 30) + 20);
  flake.width = size;
  flake.height = size;

  startAnimation(i);
}

function randomStartTime() {
  let value = Math.floor((Math.random() * 10000) + 10);
  // console.log("Random time: " + value);
  return value;
}

function startAnimation(flakeId) {
  setTimeout(function() {
    var flake = document.getElementById("flake" + flakeId);
    flake.animate("enable");
  }, randomStartTime());
}

function randomizeBg() {
  // console.log("RandomizeBg");
  var bgImageNo = Math.floor((Math.random() * 5) + 1);
  var bgImage = document.getElementById("bgImage");
  bgImage.href = bgImageNo + ".jpg";
}
