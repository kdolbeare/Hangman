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
  getCategory(phrase);
  getClueButton(phrase);
}

function getCategory(phrase) {
  var body = document.querySelector("body");
  var category = document.getElementById("category");
  category.innerHTML = "Category: " + phrase.category;
  body.appendChild(category);
}

function getClueButton(phrase) {
  var body = document.querySelector("body");
  var clueButton = document.createElement("button");
  clueButton.setAttribute("id", "clueButton");
  var clueButtonName = document.createTextNode("Need a clue?");
  clueButton.appendChild(clueButtonName);
  clueButton.addEventListener("click", function(){
    getClue(phrase);
  });
  body.appendChild(clueButton);
}

function getClue(phrase) {
  var body = document.querySelector("body");
  var clue = document.getElementById("clue");
  clue.innerHTML = phrase.clue;
  body.appendChild(clue);
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
    var removeInstructions = document.getElementById("instructions");
    if(removeInstructions) {
      removeInstructions.parentNode.removeChild(removeInstructions);
    }
  }
}

//adds to the hangman until end of game with a loss
function hangingGuy() {
  var image = document.getElementById("man");
  var body = document.querySelector("body");
  switch (misses.length) {
    case 1:
    man.src="Hangman-1.png";
    break;
    case 2:
    man.src="Hangman-2.png";
    break;
    case 3:
    man.src="Hangman-3.png";
    break;
    case 4:
    man.src="Hangman-4.png";
    break;
    case 5:
    man.src="Hangman-5.png";
    break;
    case 6:
    man.src="Hangman-6.png";
    playAgain();
    stopInterval();
    removeEventListener("keydown", listenToKeys);
    var youLose = document.getElementById("youLose");
    youLose.innerHTML = "Sorry ... game over :(";
    body.appendChild(youLose);
    var removeInstructions = document.getElementById("instructions");
    if(removeInstructions) {
      removeInstructions.parentNode.removeChild(removeInstructions);
    }
    break;
    default:
    man.src = "Hangman-0.png";
    break;
  }
}

//button to refresh and play again
function playAgain() {
  console.log("in play again");
  var header = document.querySelector("header");
  var againButton = document.createElement("button");
  againButton.setAttribute("id", "again");
  var againButtonName = document.createTextNode("Play Again!");
  againButton.appendChild(againButtonName);
  header.appendChild(againButton);
  againButton.addEventListener("click", goToIndex);

  // againButton.addEventListener("click", function(e) {
  //   e.preventDefault();
  //   console.log("in function");
  //   window.location.assign("index.html");
  // });

}

var goToIndex = function() {
  console.log("in function");
  window.location.assign("index.html");
}
