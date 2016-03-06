function addStartButton () {
  // var body = document.querySelector("body");
  var header = document.querySelector("header");
  var startButton = document.createElement("button");
  startButton.setAttribute("id", "start");
  var startButtonName = document.createTextNode("Start Game!");
  startButton.appendChild(startButtonName);
  startButton.addEventListener("click", clearStartButton);
  header.appendChild(startButton);
}

//after clicking start button
function clearStartButton () {
  //clear high scores:
  var removeTable = document.getElementById("table");
  if(removeTable) {
    removeTable.parentNode.removeChild(removeTable);
  }
  var button = document.getElementById("start");
  button.parentNode.removeChild(button);
  startInterval(1);
  // addStopButton();
  getPhrase();
}

//adding timer
var intervalId;
function startInterval(i) {
  intervalId = setInterval(function() {
    var div = document.getElementById("timer");
    div.innerHTML = "Timer: " +i;
    i++;}, 1000);
  }

// function addStopButton () {
//   // var body = document.querySelector("body");
//   var header = document.querySelector("header");
//   var stopButton = document.createElement("button");
//   stopButton.setAttribute("id", "stop");
//   var stopButtonName = document.createTextNode("Stop Timer!");
//   stopButton.appendChild(stopButtonName);
//   stopButton.addEventListener("click", clearStopButton);
//   header.appendChild(stopButton);
// }
//
// function clearStopButton() {
//   var button = document.getElementById("stop");
//   button.parentNode.removeChild(button);
//   stopInterval();
//   addStartButton();
// }

//stop timer & capture time
var myTime;
function stopInterval() {
  //stopping extra add Initials buttons
  var removeAdd = document.getElementById("addButton");
  if(removeAdd) {
    removeAdd.parentNode.removeChild(removeAdd);
  }
  clearInterval(intervalId);
  var t = document.getElementById("timer").innerHTML;
  myTime = t.substring(6, t.length);
  console.log(myTime);
}
