function theQu() {
  let answer = 0;
  let guesses = [];

  let guess = prompt(
    `Guess the number (current value: ${answer}).Enter a number between 0 and 10 or type 'stop' to end:`
  );
  while (guesses.length >= 0) {
    guesses.push(guess);
    if (guess === "stop") {
      break;
    } else if (parseInt(guess) < 0 || parseInt(guess) > 10) {
      guess = prompt("please enter the number between 0 and 10.");
    } else if (parseInt(guess) <= 5) {
      let answer = parseInt(guess) + 1;
      guess = prompt(
        `Not this time, you were wrong! The answer is ${answer}. If you have given up, type "stop".`
      );
    } else if (parseInt(guess) > 5) {
      let answer = parseInt(guess) - 1;
      guess = prompt(
        `Are you done yet? The answer is ${answer}. If you have given up, type "stop".`
      );
    }
  }
  alert(`Game  over! You made ${guesses.length} guesses.`);
}

function darkMode() {
  let modeDark = document.body;
  modeDark.classList.toggle("dark-mode");
}
