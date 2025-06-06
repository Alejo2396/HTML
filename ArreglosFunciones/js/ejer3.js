let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

document.getElementById('guessBtn').addEventListener('click', checkGuess);

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsText = document.getElementById('attempts');

  if (isNaN(guess)) {
    message.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  attemptsLeft--;

  if (guess === secretNumber) {
    message.textContent = "¡Felicidades! Adivinaste el número.";
    disableInput();
  } else if (attemptsLeft === 0) {
    message.textContent = `¡Te quedaste sin intentos! El número era ${secretNumber}.`;
    disableInput();
  } else {
    message.textContent = guess < secretNumber ? "Demasiado bajo." : "Demasiado alto.";
    attemptsText.textContent = `Intentos restantes: ${attemptsLeft}`;
  }
}

function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.getElementById('guessBtn').disabled = true;
  
}