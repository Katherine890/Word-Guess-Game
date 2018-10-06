// This hides the display.
document.getElementById("startGame").style.cssText= "display: none";  
document.getElementById("gameOver").style.cssText= "display: none";
document.getElementById("roundWon").style.cssText= "display: none";

// Allows game to start when pressing a key.
document.body.onkeydown = function(e){
    if(e.keyCode !=  2){
        newGame();
        
    }
};

// Starts the game and displays text with press of a key.
function newGame() {
    document.getElementById("startGame").style.cssText = "display: block";
    gameStart = document.getElementById("begin");
    gameStart.textContent = "Good Luck!";
}


 const wordBank =   // array of Words
    [
        ["S","P","O","N","G","E","B","O","B"],
        ["P","A","T","R","I","C","K"],
        ["S","Q","U","I","D","W","A","R","D"],
        ["M","R","K","R","A","B","S"],
        ["P","L","A","N","K","T","O","N"],
        ["S","A","N","D","Y"]
    ];

    

    let fail = 0;                                                      // This defines wrong letters.
    let randNum = Math.floor((Math.random() * (wordBank.length-1)));   // This randomizes the words in the wordBank. 
    let chosenWord = wordBank[randNum];                                // chosenWord will generate random word.
    let chosenLetter = new Array(chosenWord.length);                   // This separates the letters in each word as individual strings.
    let trialLeft = 10;                                                // This defines number of guesses remaining.
    let wins = 0;                                                      // This defines number of wins.

    let totalWins = document.getElementById("totalWins");              // displays number of wins.

    // This is local storage for the scores.
    if (typeof storedScore !== 'undefined') {
    totalWins.textContent = storedScore;
    
    }
    

    console.log(chosenWord);

    wrongLetter = document.getElementById("wrongLetterContainer");      // displays letters already guessed.
    remainingGuesses = document.getElementById("remainingGuesses");     // displays number of remaining guesses.
    gameStart = document.getElementById("begin");                       // displays start of game.

    console.log("begin");
    remainingGuesses.textContent = trialLeft;                           

    //This replaces underscores with the correct letters. 
    //chosenLetter.length = how many letters in the word.
    for (var i = 0; i < chosenLetter.length; i++){
        chosenLetter[i] = "_ ";
    }
    function printchosenLetter(){                                       // Prints the letters in the underscores (guessField).
        for (var i = 0; i < chosenLetter.length; i++){
        let currentWord = document.getElementById("currentWord"); 
        let letter = document.createTextNode(chosenLetter[i]);
        currentWord.appendChild(letter);
        }
    }

    // This checks if the the letter we guessed matches the letters in the word.
    let matchLetter = function(){
        let c = document.guessField; 
        let b = c.elements["guessBox"]; 
        let userLetter = b.value;                                      // the letter provided by the user
        let correctLetter = "";
        userLetter = userLetter.toUpperCase();
        for (let i = 0; i < chosenWord.length; i++){
            if(chosenWord[i] === userLetter){
                chosenLetter[i] = userLetter + " ";
                correctLetter = true;
            }
        b.value = "";
        }
    
        let currentWord = document.getElementById("currentWord");     // This deletes the underscores (guessField) and replaces it with the letter.
            currentWord.innerHTML=""; 
            printchosenLetter();


    // if a guessed letter is not in the word, the letter will be stored in the wrongLetters.
    if(!correctLetter){
        let wrongLetter = document.getElementById("wrongLetterContainer");
        let letter = document.createTextNode(" " + userLetter);
        wrongLetter.appendChild(letter);        
        fail++;                                                      // number of wrong letters increase.
        let trialLeft = 10 - fail;                                   // number of remaining guesses decrease.
        remainingGuesses.textContent = trialLeft;
    }
    

    //checks if all letters have been found.
    let gameFinish = true;
    for (let i = 0; i < chosenLetter.length; i++){
        if(chosenLetter[i] === "_ "){
            gameFinish = false;
        }
    }if(gameFinish){
        wins++;                                                     // If all correct letters are in field, wins increase.
        localStorage.setItem("totalScore", wins);
        let storedScore = localStorage.getItem("totalScore").length++;
        totalWins.textContent = storedScore;
        document.getElementById("roundWon").style.cssText= "display: block";
        
       }
    // If you get ten wrong letters, you lose the game.
    if(fail === 10){
        document.getElementById("submissionArea").style.cssText= "display: none";
        document.getElementById("gameOver").style.cssText= "display: block";
    }
}

// Restarts game and gives us a new random word.
function startOver(){
     window.location.reload(false);   
}

// wins stays the same amount instead of starting back to 0.