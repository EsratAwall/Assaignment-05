function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id);
    const inputEmptyString = inputValue.value;
    const inputNumber = parseFloat(inputEmptyString);
    inputValue.value = '';
    return inputNumber;
}
function getTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getTextNewBalance(id) {
    const topBalance = document.getElementById(id).innerText;
    const topBalanceNumber = parseFloat(topBalance);
    return topBalanceNumber;
}


