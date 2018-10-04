const wordBank =   // array of Words
    [
        "spongebob",
        "patrick",
        "squidward",
        "mr.krabs",
        "plankton",
        "sandy"
    ];

    const maxTries = 13;                      // This is the max number of guesses.

    let guessedLetters = [];                  //This stores wrong letters in the array.
    let randNum = Math.floor(Math.random() * wordBank.length);   // This randomizes the wordBank. 
    let chosenWord = wordBank[randNum];       // chosenWord will generate random word.
    let currentWord = [];                     // This stores correct letters in the array.
    let underScore = [];                      // This is the blank spot.
    let remainingGuesses = [];                // This stores number of remaining guesses left.
    let gameStart = true;                     // Tells if the game started.
    let gameFinish = false;                   // Tells if the game ended.
    let totalWins = [];                       // stores number of total wins.

    let wins = 0;
    let guessesLeft = 13;

    //currentWord = underScore[chosenWord];

    console.log(chosenWord);

    // Create variables that hold references to the places in the HTML where we want to display things.
    guessedLetters = document.getElementById("guessedLetters");
    currentWord = document.getElementById("underScore");
    underScore = document.getElementById("underScore");
    remainingGuesses = document.getElementById("remainingGuesses");
    totalWins = document.getElementById("totalWins");
    gameStart = document.getElementById("begin");

    console.log("begin");
   
   
    // Resets game.
    function resetGame() {
        guessesLeft = maxTries;
    }

    // Assures that you press any key to start.
    if(guessesLeft === maxTries)addEventListener('keydown', function(event) {
        gameStart.textContent = "Good Luck!";
    // Display wins, current word, etc.
        totalWins.textContent = wins;
        remainingGuesses.textContent = guessesLeft;
        currentWord.textContent = underScore; 
        guessedLetters.textContent = "";
    })

    // Clear out arrays.
        guessedLetters = [];
        underScore = [];

    // Hide game over and Try Again images/text
    document.getElementById("TryAgain").style.cssText= "display: none";
    document.getElementById("game-over").style.cssText= "display: none";


    // New Method for underscore replacement
    //if(currentWord.textContent = underScore)addEventListener('keydown', function(event) {
      //  underScore.textContent = indexOf(chosenWord);
    //})

    //This replaces underscores with the correct letters. 
    //chosenWord.length = how many letters in the word.
    let generateUnderscore = () => {
      for(let i = 0; i < chosenWord.length; i++) {
           underScore.push('_');
        }
        return underScore;
        
    }
      console.log(generateUnderscore());

        document.addEventListener('keydown', (event) => {
        underScore = document.getElementById("underScore").innerHTML; 
        currentWord = underScore.replace(underScore, chosenWord.length);
        document.getElementById("underScore").innerHTML = chosenWord;
    })

   // document.addEventListener('keydown', (event) => {
      //  let keyword = String.fromCharCode(event.keyCode);
       // if(chosenWord.indexOf(keyword) > -1) {
        // add to current words array
       // currentWord.push(keyword);
        // replaces underscore with correct letter
       // underScore[chosenWord.indexOf(keyword)] = keyword;
       // if(underScore.join('') == chosenWord) {
       //     wins++
       // }
       // console.log(underScore);
       // console.log(keyword);
       // guessedLetters.push(keyword); 
   // }
        //console.log(guessedLetters);
        
        
   // });

    

    //if(currentWord === chosenWord.length) {
        //totalWins++
    //}
    
    // Update display on HTML page
   

  