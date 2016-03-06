function addStartButton () {

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
  addInstructions();
  getPhrase();
}

function addInstructions () {
  var body = document.querySelector("body");
  var instructions = document.getElementById("instructions");
  instructions.innerHTML = "To begin, please choose a letter on your keyboard";
  body.appendChild(instructions);
}
//adding timer
var intervalId;
function startInterval(i) {
  intervalId = setInterval(function() {
    var div = document.getElementById("timer");
    div.innerHTML = "Timer: " +i;
    i++;}, 1000);
  }

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
