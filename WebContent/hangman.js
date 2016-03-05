onload = function() {
	console.log("LOADED");
	init();
}

function init() {
	var scores = document.getElementById("scores");
	scores.addEventListener("click", listScoresClicked);
    addStartButton();
    keyStrokes();
}

function getData(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status < 400) {
			callback(JSON.parse(xhr.responseText));
			console.log(JSON.parse(xhr.responseText));
		}
	};
	xhr.send(null);
}

function updateData(method, url, object, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		// console.log(xhr.status);
		// console.log(xhr.readyState);
		// console.log(xhr.responseText);
		// console.log(xhr.getAllResponseHeaders());
	};
	if (object) {
		xhr.send(JSON.stringify(object));
	} else {
		xhr.send(null);
	}
}

function listScoresClicked() {
  console.log("clicked");
  getData("rest/scores", listScores);
}

function listScores(scores) {
  // var removeTable = document.getElementById("table");
  // if(removeTable) {
  //   removeTable.parentNode.removeChild(removeTable);
  // }
  // var removeTimer = document.getElementById("timer")
  // removeTimer.innerHTML= "";
  clearData();
  var body = document.querySelector("body");
  var table = document.createElement("table");
  table.setAttribute("id", "table");
  var thr = document.createElement("tr");
  // for(var key in scores[0]) {}
    var th0 = document.createElement("th");
    th0.innerHTML= "Rank";
    thr.appendChild(th0);
    var th1 = document.createElement("th");
    th1.innerHTML= "Time";
    thr.appendChild(th1);
    var th2 = document.createElement("th");
    th2.innerHTML= "Number of Misses";
    thr.appendChild(th2);
    var th3 = document.createElement("th");
    th3.innerHTML = "Total Guesses";
    thr.appendChild(th3);
    var th4 = document.createElement("th");
    th4.innerHTML = "Initials of Winner";
    thr.appendChild(th4);
    table.appendChild(thr);

    var s = scores.length;
    if (s>10) {
      s=10;
    }
  for (var i=0; i<s; i++) {
    var tr = document.createElement("tr");
    // for(var key in scores[i]) {}
      var td0 = document.createElement("td");
      td0.innerHTML = i+1;
      tr.appendChild(td0);
      var td1 = document.createElement("td");
      td1.innerHTML = scores[i].time;
      tr.appendChild(td1);
      var td2 = document.createElement("td");
      td2.innerHTML = scores[i].numMisses;
      tr.appendChild(td2);
      var td3 = document.createElement("td");
      td3.innerHTML = scores[i].numGuesses;
      tr.appendChild(td3);
      var td4 = document.createElement("td");
      td4.innerHTML = scores[i].initials;
      tr.appendChild(td4);
    table.appendChild(tr);
  }
  body.appendChild(table);
}

function addScoreButton() {
  var body = document.querySelector("body");
  var addButton = document.createElement("button");
  addButton.setAttribute("id", "addButton");
  var addButtonName = document.createTextNode("Add Your Initials");
  addButton.appendChild(addButtonName);
  addButton.addEventListener("click", addScore);
  body.appendChild(addButton);
}

function addScore(e) {
  e.preventDefault();
  var removeAdd = document.getElementById("addButton");
  if(removeAdd) {
    removeAdd.parentNode.removeChild(removeAdd);
  }
  var body = document.querySelector("body");
  var scoreForm = document.createElement("form");
  scoreForm.setAttribute("id", "scoreForm");

  var initials = document.createElement("input");
  initials.type = "text";
  initials.name = "initials";
  initials.placeholder = "Enter your initials";
  scoreForm.appendChild(initials);

  var submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Add";
  scoreForm.appendChild(submit);
  body.appendChild(scoreForm);
  submit.addEventListener("click", function(e) {
    e.preventDefault();
    var obj = {time:myTime, numGuesses:allGuesses.length, numMisses:misses.length, initials:initials.value};
    updateData("PUT", "rest/score", obj);
    var remove = document.getElementById("scoreForm");
    if(remove) {
      remove.parentNode.removeChild(remove);
    }
    var removeAdd = document.getElementById("addButton");
    if(removeAdd) {
      removeAdd.parentNode.removeChild(removeAdd);
    }
    // addStartButton();
    // keyStrokes();
    clearData();
  });
}
function clearData() {
  var removeTable = document.getElementById("table");
  if(removeTable) {
    removeTable.parentNode.removeChild(removeTable);
  }
  var removeTimer = document.getElementById("timer")
  removeTimer.innerHTML= "";
  var removeMisses = document.getElementById("wrongLetters");
  if(removeMisses) {
    removeMisses.parentNode.removeChild(removeMisses);
  }
  var removeWord = document.getElementById("wordDiv");
  if(removeWord) {
    removeWord.parentNode.removeChild(removeWord);
  }
  var removeYouWin = document.getElementById("youWin");
  removeYouWin.innerHTML = "";
  var removeYouLose = document.getElementById("youLose");
  removeYouLose.innerHTML = "";
}
