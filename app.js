const adviceNumber = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.querySelector(".dice-btn");

function generateAdvice() {
    const apiURL = "https://api.adviceslip.com/advice";
    fetch(apiURL)
        .then(function (response) {
            const data = response.json();
            return data;
        })
        .then(function (data) {
            adviceNumber.innerText = data.slip.id;
            adviceText.innerHTML = data.slip.advice;
        });
}

generateAdvice();

diceBtn.addEventListener("click", generateAdvice);