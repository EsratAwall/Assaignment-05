// card-3 function
document.getElementById('btn-donate3').addEventListener('click', function () {
    const inputAmount = getInputFieldValueById('input3');
    const balanceOfBDT = getTextValueByID('span3');
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
document.getElementById('span3').innerText = balance;
const minusBalance = newBalance - inputAmount;
document.getElementById('new-balance').innerText = minusBalance;

})
}
})



