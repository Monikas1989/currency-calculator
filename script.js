
const formElement = document.querySelector(".js-form");

const onFormSubmit = (event) => {
    event.preventDefault();
    const sumElement = document.querySelector(".js-sum");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const sum = sumElement.value;
    const currency = currencyElement.value;

    const result= sum * currency;

    resultElement.innerText = result;

};
const init = () => {
    formElement.addEventListener("submit", onFormSubmit);

};
init();

