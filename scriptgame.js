"use strict";

//DOM - Manipulação do HTML
/* console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13; */

//value = quando tem a ver c um input, variável
/* document.querySelector(".guess").value = 23; */

//EVENTS

//DRY CODE
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let recorde = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayBody = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};

//
//click event
document.querySelector(".check").addEventListener("click", function () {
  const palpite = Number(document.querySelector(".guess").value);

  console.log(palpite);

  //inital condition
  if (!palpite || palpite > 20 || palpite < 1) {
    displayMessage("⛔ Digite um número válido ");

    //when guess is right
  } else if (palpite === secretNumber) {
    displayMessage("🥳 Acertou");
    displayNumber(secretNumber);
    displayBody("#59da48");

    //disable button
    document.querySelector(".check").disabled = true;

    if (score > recorde) {
      recorde = score;
      document.querySelector(".highscore").textContent = recorde;
    }

    //when guess is higher or lower
  } else if (palpite !== secretNumber) {
    if (score > 1) {
      displayMessage(
        palpite > secretNumber ? " 📈 Muito alto" : "📉 Muito baixo"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("💩 Você perdeu!");
      displayScore(0);
      displayBody("#e93838");
      document.querySelector(".check").disabled = true;
    }
  }
});

// click event to again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber(secretNumber);
  displayMessage("Comece a adivinhar ... ");
  document.querySelector(".guess").value = "";
  displayNumber("?");
  displayBody("#222");
  document.querySelector(".check").disabled = false;
});
