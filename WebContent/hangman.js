onload = function() {
	console.log("LOADED");
	init();
}

function init() {
	var scores = document.getElementById("scores");
	scores.addEventListener("click", listScoresClicked);
    // addScoreButton();
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
  var removeTable = document.getElementById("table");
  if(removeTable) {
    removeTable.parentNode.removeChild(removeTable);
  }
  var body = document.querySelector("body");
  var table = document.createElement("table");
  table.setAttribute("id", "table");
  var thr = document.createElement("tr");
  for(var key in scores[0]) {
    var th = document.createElement("th");
    th.innerHTML= key;
    thr.appendChild(th);
  }
  table.appendChild(thr);

  for (var i=0; i<scores.length; i++) {
    var tr = document.createElement("tr");
    for(var key in scores[i]) {
      var td = document.createElement("td");
      td.innerHTML = scores[i][key];
      tr.appendChild(td);
    }
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
    var removeAdd = document.getElementById("addButton");
    if(remove) {
      remove.parentNode.removeChild(remove);
    }
    if(removeAdd) {
      removeAdd.parentNode.removeChild(removeAdd);
    }
  });
}
