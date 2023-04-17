'use strict';
const inputGuessNumber = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const again = document.querySelector(".again");
let highScore = document.querySelector(".highscore");

let numberOfTries = 20;
let highestScore = 0;
let random = Math.floor(Math.random() * 20) + 1;


function checkInput(state) {
    if (state === "low") {
        message.innerHTML = "Your guess is too low!";
    } else if (state === "high") {
        message.innerHTML = "Your guess is too high!";
    }

    numberOfTries--;
    score.innerHTML = numberOfTries;
    if (numberOfTries === 0) {
        checkButton.disabled = true;
        inputGuessNumber.disabled = true;
        message.innerHTML = "Sorry, you lose!!"
    }
}

console.log("Random Number is: " + random);

checkButton.addEventListener("click", () => {
    if (random == inputGuessNumber.value) {
        message.innerHTML = "Your guess is right!";
        number.innerHTML = random;
        document.body.style.backgroundColor = "red";
        if (highestScore < numberOfTries) {
            highestScore = numberOfTries;
        }
        highScore.innerHTML = highestScore;
        this.disabled = true;
        inputGuessNumber.disabled = true;
    } else if (random > inputGuessNumber.value) {
        checkInput("low");
    } else {
        checkInput("high");
    }
})


again.addEventListener("click", () => {
    random = Math.floor(Math.random() * 20) + 1;
    console.log("Random Number is: " + random);
    numberOfTries = 20;
    score.innerHTML = numberOfTries;
    document.body.style.backgroundColor = "#222";
    checkButton.disabled = false;
    message.innerHTML = "Start guessing...";
    number.innerHTML = "?"
    inputGuessNumber.value = "";
    inputGuessNumber.disabled = false;
})