const sumElement = document.querySelector(".js-sum");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    const sum = sumElement.value;
    const currency = currencyElement.value;

    const result = sum * currency;


    resultElement.innerText = result;
});

