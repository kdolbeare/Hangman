function getPhrase() {
  getData("rest/phrase", showPhrase);
}


function showPhrase (phrase) {
  var body = document.querySelector("body");
  var wordDiv = document.getElementById("wordArea");
  var correct = document.createElement("ul");
  correct.setAttribute("id", "correctWord")
  var word = phrase.gamePhrase;

  for (var i=0; i<word.length; i++) {
    var guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if(word[i] === " ") {
      guess.innerHTML = " ";
    } else {
      guess.innerHTML = "_";
    }
    wordDiv.appendChild(correct);
    correct.appendChild(guess);
  }
}
