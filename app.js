let answer = 10;
let guesses = [];

while (true) {
  let guess = parseInt(
    prompt(
      `Guess the number (current value: ${answer}).Enter a number between 0 and 10 or type 'stop' to end:`
    )
  );
  if (guess === "stop") {
    break;
  }

  if (isNaN(guess) || guess < 0 || guess > 10) {
    alert("please enter the number between 0 and 10.");
    continue;
  }
  guesses.push(guess);

  if (guess === 10) {
    answer--;
  } else {
    answer++;
  }
  alert("Your guess is ${guess}. The current value is now ${answer}.");
}
alert("Game  over! You made ${guesses.lenght} guesses.");
