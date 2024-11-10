let secretNumber = 5;

function guessNumber(guess) {
  if (guess > 10) {
    console.log("Too big! Pick a number less than 10.");
  } else if (guess < 1) {
    console.log("Too small! Pick a number greater than 1.");
  } else if (guess === secretNumber) {
    console.log("You guessed it!");
  } else {
    console.log("Try again!");
  }
}

guessNumber(0);
