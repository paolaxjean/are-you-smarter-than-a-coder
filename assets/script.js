

// TIMER
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenAnswer = "";
var wins = 0;
var losses = 0;
var seconds = 0;
var countdownTimer;

seconds = 120;
timerElement.textContent = seconds;
chosenAnswer = words[Math.floor(Math.random() * words.length)];
renderWord();
countdownTimer = setInterval(function () {
  seconds = seconds - 1;
  timerElement.textContent = seconds;

  // game over if countdown reaches 0
  if (seconds === 0) {
    gameOver = gameOver + 1;
    localStorage.setItem("gameOver", gameOver);
    wordElement.textContent = "Times Up! 🤷‍♂️";
    endGame();
  }
}, 12000);




countdown();



// BUTTONS
document.querySelector("#start-button").addEventListener("click", function () {
    window.location.href = "./q1.html";
    window.location.replace("./q1.html");
});