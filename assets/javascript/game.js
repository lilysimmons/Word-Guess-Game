// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var parrotType = ["macaw", "cockatoo", "budgerigar", "lorikeet", "amazon"];
// var randomParrot = parrotType[Math.floor(Math.random() * parrotType.length)].split("")
// console.log(parrotType);
// var hiddenWord = []

// for(var i = 0; i<randomParrot.length; i++){
//     hiddenWord.push("_")
// }
// console.log(hiddenWord)

// var incorrectLetter = ["f", "h", "j", "p", "q", "s", "v", "x", "y"];

// var correctLetter = ["m", "o", "b", "g", "l", "n", "a", "k", "u","e","i","c","t","d","r","w","z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins;
var losses;
var guesses;

var randomParrot

var hiddenWord 

var wrongLetterChoice

// var letterGuessed = [];

// var randomParrot = parrotType[Math.floor(Math.random() * parrotType.length)].split(" ");


// Create variables that hold references to the places in the HTML where we want to display things.
var alreadyGuessed = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var displayWord = document.getElementById("displayWord-text");

var startGame = document.getElementsByClassName("btn btn-primary btn-lg");


 

var resetGame = function(){
   wins = 0;
   losses = 0;
   guesses = 12;
   randomParrot = parrotType[Math.floor(Math.random() * parrotType.length)].split("");
   console.log(randomParrot);
    hiddenWord = [];
    wrongLetterChoice = [];
    console.log(wrongLetterChoice);
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
    wins++;}
    
else if (hiddenWord.includes("_") && guesses===0){
  losses++;
}





// for(var i = 0; i<correctLetter.length; i++){
//   letterGuessed.push([i]);
//   console.log(letterGuessed);


//   if (correctLetter[i] === userGuess){
//       letterguessed[i] = userGuess;
//       // console.log(hiddenWord);
//   }
//   else if (correctLetter[i] !== userGuess) {
//     letterGuessed.push([i]);
//     console.log(letterGuessed);
//   }
 
    
//   }
    
guessesLeft.textContent = "Guesses left: " + guesses;  

displayWord.textContent = "Word: " + hiddenWord.join(" ");

alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;

winsText.textContent = "Wins: " + wins;

lossesText.textContent = "Losses:" + losses;


}


// alreadyGuessed.textContent = " " + letterGuessed.join(" ");



 
  
  
 


  // Randomly chooses a choice from the options array. This is the Computer's guess.
  // var  = parrotType[Math.floor(Math.random() * parrotType.length)];
  
  

  // Only run the following code block if the user presses "r" or "p" or "s".
  // if ((userGuess === "m") || (userGuess === "a") || (userGuess === "c") 
  //     || (userGuess === "o") || (userGuess === "k") || (userGuess === "t")
  //     || (userGuess === "b") || (userGuess === "u") || (userGuess === "d")
  //     || (userGuess === "g") || (userGuess === "e") || (userGuess === "r")
  //     || (userGuess === "l") || (userGuess === "i") || (userGuess === "z") 
  //     || (userGuess === "n") || (userGuess === "w")){

  //       hiddenWord.textContent = "_ " + userGuess;
          
  //     }


        
    // hiddenWord.textcontent = "you chose:" + userGuess;
    
     
 
      // else if ((userGuess === "f") || (userGuess === "h") || (userGuess === "j")
      // || (userGuess === "p") || (userGuess === "q") || (userGuess === "s")
      // || (userGuess === "v") || (userGuess === "x") || (userGuess === "y")){

      //   alreadyGuessed.textContent = "Already Guessed: " + userGuess;
      //   guessesLeft.textContent = "Guesses Left: " + guessesLeft--;
      // }

    
  

        
      


 




      // userChoiceText.textContent = "You chose: " + userGuess;
 
  // event.textContent = "You chose: " + letter;
  //       console.log("this worked")
 

    // // Hide the directions
    // directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    
    
    
    
    // newWordText.textContent = "The computer chose: " + newWord;
    // winsText.textContent = "wins: " + wins;
    // lossesText.textContent = "losses: " + losses;
  
  

