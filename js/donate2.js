// card-2 function
document.getElementById('btn-donate2').addEventListener('click', function () {
    const inputAmount = getInputFieldValueById('input2');
    const balanceOfBDT = getTextValueByID('span2');
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
document.getElementById('span2').innerText = balance;
const minusBalance = newBalance - inputAmount;
document.getElementById('new-balance').innerText = minusBalance;

})
// history part
document.getElementById('donate-history').addEventListener('click', function () {
    const donateNoakhali2 = document.getElementById('donatetext-2').innerText;
    const inputAmountNumbr2 = getInputFieldValueById('input2') ;
    // Add to history section
    const div = document.createElement('div');
    div.style.border = "2px solid #EEEEEE";
    div.style.borderRadius = "10px";
    div.style.padding = "20px";
    div.innerHTML = `
      <h2 class="text-black text-xl font-bold mt-5">${inputAmountNumbr2} Taka is donated to ${donateNoakhali2}</h2>
      <p class="text-[#808080] mt-4 font-normal">Date: ${new Date().toLocaleString()}</p>
    `;
    
    document.getElementById('history-section').appendChild(div);
});
}
})



