"use strict";
let score = 0;
let highScore = [0, 0];
let activePlayer = 0;
const diceEL = document.querySelector(".img");
const scoreEL0 = document.querySelector(".score_0");
const scoreEL1 = document.querySelector(".score_1");
const highScoreEL0 = document.querySelector(".highScore_0");
const highScoreEL1 = document.querySelector(".highScore_1");
const winningScoreEL = document.querySelector(".winningScoreValue");
const messageEL = document.querySelector(`.scoreLabel_${activePlayer}`);
const resetEL = document.querySelector(".reset");
const fastColorEL_0 = document.querySelector(".sides_0");
const fastColorEL_1 = document.querySelector(".sides_1");
const playBtn = function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceEL.classList.remove("hidden");
  diceEL.src = `images/IMG_${randomNumber}.png`;
  if (randomNumber !== 1) {
    score += randomNumber;
    document.querySelector(`.score_${activePlayer}`).textContent = score;
  } else {
    document.querySelector(`.score_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    score = 0;
    fastColorEL_1.classList.toggle("fastColor");
    fastColorEL_0.classList.toggle("fastColor");
  }
};
const holdBtn = function () {
  highScore[activePlayer] += score;
  document.querySelector(`.highScore_${activePlayer}`).textContent =
    highScore[activePlayer];
  score = 0;
  document.querySelector(`.score_${activePlayer}`).textContent = 0;
  diceEL.classList.add("hidden");
  fastColorEL_0.classList.toggle("fastColor");
  fastColorEL_1.classList.toggle("fastColor");
  if (highScore[activePlayer] >= winningScoreEL.value) {
    document.querySelector(`.scoreLabel_${activePlayer}`).textContent =
      "you won";
    document.querySelector(".play").removeEventListener("click", playBtn);
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};
const reset = function () {
  scoreEL0.textContent = 0;
  scoreEL1.textContent = 0;
  highScoreEL0.textContent = 0;
  highScoreEL1.textContent = 0;
  winningScoreEL.value = 99;
  score = 0;
  highScore = [0, 0];
  diceEL.classList.add("hidden");
  document.querySelector(`.scoreLabel_${activePlayer}`).textContent = "score";
  document.querySelector(".play").addEventListener("click", playBtn);
  fastColorEL_0.classList.add("fastColor");
  fastColorEL_1.classList.remove("fastColor");
};
document.querySelector(".play").addEventListener("click", playBtn);
document.querySelector(".hold").addEventListener("click", holdBtn);
resetEL.addEventListener("click", reset);
