
// global variables
var parrotType = ["macaw", "cockatoo", "budgerigar", "lorikeet", "amazon", "kakapo", "rosella"];

var wins=0;
var losses=0;
var guesses;
var randomParrot;
var hiddenWord;
var wrongLetterChoice;




// Create variables that hold references to the places in the HTML where we want to display things.
var alreadyGuessed = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var displayWord = document.getElementById("displayWord-text");

var startGame = document.getElementsByClassName("btn btn-primary btn-lg");


 

var resetGame = function(){
  //  wins = 0;
  //  losses = 0;
   guesses = 12;
   // Randomly chooses a choice from the options array. 
   randomParrot = parrotType[Math.floor(Math.random() * parrotType.length)].split("");
   console.log(randomParrot);
    hiddenWord = [];
    wrongLetterChoice = [];
    for(var i = 0; i<randomParrot.length; i++){
      hiddenWord.push("_");}

      guessesLeft.textContent = "Guesses left: " + guesses;  

      displayWord.textContent = "Word: " + hiddenWord.join(" ");
      
      alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;
      
      winsText.textContent = "Wins: " + wins;
      
      lossesText.textContent = "Losses:" + losses;  
      
}
startGame.onclick = resetGame();


    

  

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  



for(var j = 0; j<randomParrot.length; j++){
  if(randomParrot[j] === userGuess && hiddenWord[j] === "_") {
    hiddenWord[j] = userGuess;
   
    if (!randomParrot.includes(userGuess)){
        guesses--
    }
    
    
  }

  else if (!wrongLetterChoice.includes(userGuess) && !randomParrot.includes(userGuess)) {
    wrongLetterChoice.push(userGuess);
    guesses--
  }

  }
    
    
if (!hiddenWord.includes("_") && guesses>=0){
    wins++;
    alert("You guessed correctly! The hidden word was " + randomParrot.join("") + "!");
    resetGame();
  }
    
else if (hiddenWord.includes("_") && guesses===0){
  losses++;
  alert("You lose! Please try again.");
  resetGame();
}


guessesLeft.textContent = "Guesses left: " + guesses;  

displayWord.textContent = "Word: " + hiddenWord.join(" ");

alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;

winsText.textContent = "Wins: " + wins;

lossesText.textContent = "Losses:" + losses;

};






 
  
  
 


  

    
  

        
      


 



  
  

