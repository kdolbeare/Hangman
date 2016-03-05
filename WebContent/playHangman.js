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

//takes in letter keyed to check it
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
if(misses.length>0) {
  wrongLetters.innerHTML="Incorrect guesses: " +misses;
  body.appendChild(wrongLetters);
  hangingGuy();
}
checkWin();
}

//checks for the end of the game with a win
function checkWin() {
  var body = document.querySelector("body");
  var youWin = document.getElementById("youWin");
  if (counter + space === word.length) {
    stopInterval();
    removeEventListener("keydown", listenToKeys);
    addScoreButton();
    youWin.innerHTML = "You Win!!"
    body.appendChild(youWin);
  }
}

//adds to the hangman until game is over
function hangingGuy() {
  var image = document.getElementById("img");
  var body = document.querySelector("body");
  switch (misses.length) {
    case 1:
    img.src="Hangman-1.png";
    break;
    case 2:
    img.src="Hangman-2.png";
    break;
    case 3:
    img.src="Hangman-3.png";
    break;
    case 4:
    img.src="Hangman-4.png";
    break;
    case 5:
    img.src="Hangman-5.png";
    break;
    case 6:
    img.src="Hangman-6.png";
    stopInterval();
    var youLose = document.getElementById("youLose");
    youLose.innerHTML = "Sorry ... game over :(";
    body.appendChild(youLose);
    playAgain();
    break;
    default:
    img.src = "Hangman-0.png";
    break;
  }
}

//button to refresh and play again
function playAgain() {
  var header = document.querySelector("header");
  var againButton = document.createElement("button");
  againButton.setAttribute("id", "again");
  var againButtonName = document.createTextNode("To Play Again!");
  againButton.appendChild(againButtonName);
  againButton.addEventListener("click", function() {
  // var logo = getElementById("home");
  a.href="index.html";
});
  header.appendChild(againButton);
}
