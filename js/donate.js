// card-1 function
document.getElementById("btn-donate").addEventListener("click", function () {
  const inputAmount = getInputFieldValueById("input1");
  const balanceOfBDT = getTextValueByID("span1");
  const newBalance = getTextNewBalance("new-balance");
  // Input validation
  if (inputAmount < 0 || isNaN(inputAmount)) {
    alert("Invalid Donation Amount");
    return;
  } else if (inputAmount > newBalance) {
    alert("Invalid Donation Amount");
    return;
  } else {
    // Show the modal
    document.getElementById("my_modal_5").showModal();
    document
      .getElementById("modal-close")
      .addEventListener("click", function () {
        const balance = inputAmount + balanceOfBDT;
        document.getElementById("span1").innerText = balance;
        const minusBalance = newBalance - inputAmount;
        document.getElementById("new-balance").innerText = minusBalance;
      });
    // history part
        const donateNoakhali =
          document.getElementById("donatetext-1").innerText;
        const inputAmountNumbr = inputAmount;
        // Add to history section
        const div = document.createElement("div");
        div.style.border = "2px solid #EEEEEE";
        div.style.marginBottom = "6px";
        div.style.borderRadius = "10px";
        div.style.padding = "20px";
        div.innerHTML = `
        <h2 class="text-black text-xl font-bold mt-5">${inputAmountNumbr} Taka is donated to ${donateNoakhali}</h2>
        <p class="text-[#808080] mt-4 font-normal">Date: ${new Date().toLocaleString()}</p>
      `;

        document.getElementById("history-section").appendChild(div);
     
  }
});
