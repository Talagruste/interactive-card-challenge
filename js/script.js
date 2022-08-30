const cardNumberBox = document.querySelector(".card-number")
const cardNameBox = document.querySelector(".card-name")
const monthBox = document.querySelector(".month")
const yearBox = document.querySelector(".year")
const cvcBox = document.querySelector(".cvc")
const cardholderName = document.getElementById("cardholder-name")
const cardNumber = document.getElementById("card-number")
const cardExpMonth = document.getElementById("month")
const cardExpYear = document.getElementById("year")
const cvc = document.getElementById("cvc")
const submitBtn = document.querySelector(".default-btn")
const tksContainer = document.querySelector(".tks-container")
const form = document.querySelector(".form")
const cardNameError = document.querySelector(".card-name-error")
const cardNumberError = document.querySelector(".card-number-error")
const monthError = document.querySelector(".month-error")
const yearError = document.querySelector(".year-error")
const cvcError = document.querySelector(".cvc-error")
const returnBtn = document.querySelector(".return-btn")

cardholderName.addEventListener("keyup", (e) => {
    let cardNameValue = cardholderName.value
    let key = e.key
    let keyLetters = key.match(/^[A-za-z ]*$/)
    if (cardNameValue.length === 0) {
        cardNameError.innerHTML = "Please enter your name!"
    } else if (keyLetters) {
        cardNameBox.innerHTML = cardNameValue
    } else {
        cardholderName.setAttribute("disabled", "")
        cardNameError.innerHTML = "Please use only letters!"
    }
});
cardNumber.addEventListener("keyup", (e) => {
    let cardNumberValue = cardNumber.value
    let key = e.key
    let keyNumbers = key.match(/^[0-9 ]*$/)
    if (cardNumberValue.length === 0) {
        cardNumberError.innerHTML = "Please enter your card number!"
    } else if (keyNumbers) {
        cardNumberBox.innerHTML = cardNumberValue
    } else if (key === "Backspace") {
        cardNumber.setAttribute("enabled", "")
    } else {
        cardNumber.setAttribute("enabled", "")
        cardNumberError.innerHTML = "Please use only numbers!"
    }
});
cardNumber.addEventListener("input", (e) => {
    e.target.value = e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
});
cardExpMonth.addEventListener("input", (e) => {
    let value = e.target.value
    let valueNumbers = value.match(/^[0-9 ]*$/)
    if (value === "") {
        monthError.innerHTML = "Please enter a month"
    } else if (valueNumbers) {
        monthBox.innerHTML = value
    } else {
        monthError.innerHTML = "Please enter a month!"
        cardExpMonth.setAttribute("enable", "")
    }
});
cardExpMonth.addEventListener("input", (e) => {
    e.target.value = e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .trim();
});
cardExpYear.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/)
    if (value === "") {
        yearError.innerHTML = "Please enter year!"
    } else if (valueNumbers) {
        yearBox.innerHTML = valueNumbers;
    } else {
        yearError.innerHTML = "Please enter year!"
        cardExpYear.setAttribute("enable", "")
    }
});
cardExpYear.addEventListener("input", (e) => {
    e.target.value = e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .trim();
});
cvc.addEventListener("input", (e) => {
    let value = e.target.value
    let valueNumbers = value.match(/^[0-9 ]*$/)
    if (value === "") {
        cvcError.innerHTML = "Please enter cvc!"
    } else if (valueNumbers) {
        cvcBox.innerHTML = valueNumbers
    } else {
        cvcError.innerHTML = "Please enter cvc!"
        cvc.setAttribute("enable", "")
    }
});
cvc.addEventListener("input", (e) => {
    e.target.value = e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .trim();
});
submitBtn.addEventListener("click", () => {
    if (cardholderName.value.length <= 0) {
        cardNameError.innerHTML = "Please enter your name!"
    } else if (cardNumber.value.length <= 0) {
        cardNumberError.innerHTML = "Please enter your card number!"
    } else if (cardExpMonth.value.length <= 0) {
        monthError.innerHTML = "Please enter month!"
    } else if (cardExpYear.value.length <= 0) {
        yearError.innerHTML = "Please enter year!"
    } else if (cvc.value.length <= 0) {
        cvcError.innerHTML = "Please enter your cvc!"
    } else {
        tksContainer.style.display = "block"
        form.style.display = "none"
    }
});
returnBtn.addEventListener("click", () => {
    tksContainer.style.display = "none"
    form.style.display = "block"
    document.getElementById("cardholder-name").value = ""
    document.getElementById("card-number").value = ""
    document.getElementById("month").value = ""
    document.getElementById("year").value = ""
    document.getElementById("cvc").value = ""
});