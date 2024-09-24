// card-1 function
document.getElementById('btn-donate').addEventListener('click', function () {
    const inputAmount = getInputFieldValueById('input1');
    const balanceOfBDT = getTextValueByID('span1');
    const newBalance = getTextNewBalance('new-balance');
 // Input validation
if (inputAmount < 0 || isNaN(inputAmount)){
    alert('Invalid Donation Amount');
    return;
}else if(inputAmount > newBalance){
    alert('Invalid Donation Amount');
    return;
}else{
     // Show the modal
    document.getElementById("my_modal_5").showModal();
    document.getElementById('modal-close').addEventListener('click', function () {
const balance = inputAmount + balanceOfBDT;
document.getElementById('span1').innerText = balance;
const minusBalance = newBalance - inputAmount;
document.getElementById('new-balance').innerText = minusBalance;

})
}

})



