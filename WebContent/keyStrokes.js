function keyStrokes()
{
  addEventListener("keydown", function(e)
  {
    if (e.keyCode >=65 && e.keyCode <=90)
    {
      var code = e.keyCode;
      var letter = String.fromCharCode(code).toLowerCase();
      console.log(letter);
      //create:
      checkGuess(letter);
    }
    else
    {
      //add an error message??
      console.log("in keyCode else");
    }
  });
}
