let sumElement = document.querySelector(".js-sum");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let sum = sumElement.value;
    let currency = currencyElement.value;

    let result = sum * currency;


    resultElement.innerText = result;
});

