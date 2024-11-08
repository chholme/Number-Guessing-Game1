// creating a random number between 1 and 100 and storing it in the variable answer
let answer = Math.floor(Math.random() * 100 + 1);

// creating a variable 'trys' to keep track of the number of guesses
let trys = 0;

// Function to start the game
function startGame() {
  // Get the user's guess from the input element with the ID 'guessInput'
  let guess = document.querySelector("#guessInput").value;

  // Get the error message element
  let error = document.querySelector(".error");

  // Check if the user's guess is correct and update the displayed text
  if (guess == answer) {
    document.querySelector("p.inputs").textContent = "You guessed " + guess;
    document.querySelector("p.proximity").textContent =
      "That is correct it is " + guess;
    trys++;
    document.querySelector("p.numGuess").textContent =
      "Number of guesses: " + trys;
    error.textContent = "";

    // Remove the event listener to disable further guesses if guess is correct
    guessBtn.removeEventListener("click", startGame);
  } else if (guess < answer && guess >= 1) {
    // conditional when the guess is too low

    document.querySelector("p.inputs").textContent = "You guessed " + guess;
    document.querySelector("p.proximity").textContent =
      "This number is too low.";
    trys++;
    document.querySelector("p.numGuess").textContent =
      "Number of guesses: " + trys;
    error.textContent = "";
  } else if (guess > answer && guess <= 100) {
    // conditional when the guess is too high
    document.querySelector("p.inputs").textContent = "You guessed " + guess;
    document.querySelector("p.proximity").textContent =
      "This number is too high.";
    trys++;
    document.querySelector("p.numGuess").textContent =
      "Number of guesses: " + trys;
    error.textContent = "";
  } else if (guess < 1 || guess > 100) {
    // conditional when the guess is out of the 1-100 range
    error.textContent = "Error: Please enter an integer between 1 & 100.";
  } else if (!Number.isInteger(guess)) {
    // conditional when the guess is not an integer
    error.textContent = "Error: Please enter an integer.";
  }

  // Log the user's guess and the correct answer to the console
  console.log(guess);
  console.log(answer);
}

// Function to start a new game
function newGame() {
  // Clear the error message and the input value
  document.querySelector(".error").textContent = "";
  document.querySelector("#guessInput").value = "";

  // Add an event listener to the 'Guess' button to enable gameplay
  guessBtn.addEventListener("click", startGame);

  // Reset the number of guesses and create a new random answer
  trys = 0;
  answer = Math.floor(Math.random() * 100 + 1);

  // Update the text for a new game
  document.querySelector("p.inputs").textContent = "Good luck have fun!";
  document.querySelector("p.proximity").textContent = "Awaiting guess...";
  document.querySelector("p.numGuess").textContent =
    "Number of guesses: " + trys;

  // Log the new answer to the console
  console.log(answer);
}

// Get the 'Guess' button and 'Clear' button to add event listeners
let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", startGame);

let guessClear = document.querySelector("#guessClear");
guessClear.addEventListener("click", newGame);
