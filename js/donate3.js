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
// history part
document.getElementById('donate-history').addEventListener('click', function () {
    const donateNoakhali3 = document.getElementById('donatetext-3').innerText;
    const inputAmountNumbr3 = getInputFieldValueById('input3') ;
    // Add to history section
    const div = document.createElement('div');
    div.style.border = "2px solid #EEEEEE";
    div.style.borderRadius = "10px";
    div.style.padding = "20px";
    div.innerHTML = `
      <h2 class="text-black text-xl font-bold mt-5">${inputAmountNumbr3} Taka is donated to ${donateNoakhali3}</h2>
      <p class="text-[#808080] mt-4 font-normal">Date: ${new Date().toLocaleString()}</p>
    `;
    
    document.getElementById('history-section').appendChild(div);
});
}
})



