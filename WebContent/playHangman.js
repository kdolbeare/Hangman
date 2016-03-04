function getPhrase() {
  getData("rest/phrase", showPhrase);
}
var counter = 0; //counting correct letters placed
var space = 0; //counting spaces in the word/phrase
var word; //randomly chosen phrase
var guesses = []; //array of guess LI's
var allGuesses = []; //all letters guessed
var misses = []; //all wrong letters guessed
function showPhrase (phrase) {
  // var body = document.querySelector("body");
  var wordDiv = document.getElementById("wordDiv");
  var correct = document.createElement("ul");
  correct.setAttribute("id", "correctWord")
  word = phrase.gamePhrase;

  for (var i=0; i<word.length; i++) {
    var guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if(word[i] === " ") {
      guess.innerHTML = " ";
      space += 1;
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
var body = document.querySelector("body");
var wrongLetters = document.getElementById("wrongLetters");
for(var i=0; i<word.length; i++) {
    console.log(allGuesses.indexOf(word[i]));
  if(word[i] === letter && allGuesses.indexOf(letter) === -1) {
    guesses[i].innerHTML = letter;
    counter += 1;
  }
  else if (!word.includes(letter) && allGuesses.indexOf(letter) === -1){
    misses.push(letter);
    break;
  }
}
if(allGuesses.indexOf(letter) === -1) {
  allGuesses.push(letter);
}
wrongLetters.innerHTML="Incorrect guesses: " +misses;
body.appendChild(wrongLetters);
checkWin();
}

function checkWin() {
  var body = document.querySelector("body");
  var youWin = document.getElementById("youWin");
  if (counter + space === word.length) {
    stopInterval();
        //not working:
    removeEventListener("keydown", function(){});
    youWin.innerHTML = "You Win!!"
    body.appendChild(youWin);


  }

}
