function getPhrase() {
  getData("rest/phrase", showPhrase);
}

var word;
var guess;
var guesses = [];
var wrongGuesses = [];
function showPhrase (phrase) {
  // var body = document.querySelector("body");
  var wordDiv = document.getElementById("wordDiv");
  var correct = document.createElement("ul");
  correct.setAttribute("id", "correctWord")
  word = phrase.gamePhrase;

  for (var i=0; i<word.length; i++) {
    guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if(word[i] === " ") {
      guess.innerHTML = " ";
    } else {
      guess.innerHTML = "_";
    }
    wordDiv.appendChild(correct);
    correct.appendChild(guess);
    guesses.push(guess);
  }
  console.log(guesses.length);
}

function checkGuess(letter) {
for(var i=0; i<word.length; i++) {
  if(word[i] === letter) {
    guesses[i].innerHTML = letter;
      console.log(guesses[i]);
  }
  else if (!word.includes(letter)){
    console.log("in checkGuess else");
    wrongGuesses.push(letter);
    break;
  }
}
// guesses.push(letter);
console.log(guesses);
console.log(wrongGuesses);

  // if (word.includes(letter)){
  //   console.log("found the letter");
  // }
  // else {
  //   console.log("in checkGuess else");
  // }
}
