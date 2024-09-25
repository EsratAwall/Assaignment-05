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
// removing and adding history and donation
let previousClickedButton = null;
document.getElementById('donate-history').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    if (previousClickedButton) {
        previousClickedButton.style.backgroundColor = '';
        previousClickedButton.style.color = '';
    }

    // set the new button styles
    let donateHistory = document.getElementById('donate-history');
    donateHistory.style.backgroundColor = '#B4F461'; 
    donateHistory.style.color = '#111111'; 
    previousClickedButton = donateHistory;
  
    let donation2 = document.getElementById('donation-btn-1')
       donation2.style.backgroundColor = 'transparent';
       donation2.style.textColor = '#111111';
       previousClickedButton = donation2;
    // hide the add money form
    document.getElementById('main-hide').classList.add('hidden');
});


    // show add money form and hide history part
    let previousClickedButton2 = null;
    document.getElementById('donation-btn-1').addEventListener('click', function () {
     document.getElementById('main-hide').classList.remove('hidden');

     if (previousClickedButton2) {
        previousClickedButton2.style.backgroundColor = '';
        previousClickedButton2.style.color = '';
    }
     let donation = document.getElementById('donation-btn-1')
       donation.style.backgroundColor = '#B4F461';
       donation.style.textColor = '#111111';
       previousClickedButton2 = donation;

       let donateHistory2 = document.getElementById('donate-history');
    donateHistory2.style.backgroundColor = 'transparent'; 
    donateHistory2.style.color = '#111111'; 
    previousClickedButton2 = donateHistory2;

        document.getElementById('history-section').classList.add('hidden');
    });
