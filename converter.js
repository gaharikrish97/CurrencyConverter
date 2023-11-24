
document.getElementById("btn").addEventListener("click", convertCurrency, false);


// Function to convert USD to CAD
function convertCurrency() {
    // Get the USD amount from the input field
    var usdAmount = document.getElementById('usdAmount').value;

    if (usdAmount == 0 || isNaN(usdAmount)) {
        alert('Please enter a valid number more than 0');
        return;
    }

    // Convert USD to CAD using a fixed  rate 
    var exchangeRate = 1.25;
    var cadConvertedAmount = usdAmount * exchangeRate;

    // Round the result to 3 decimal places
    cadConvertedAmount = cadConvertedAmount.toFixed(3);

    // Displaying the converted amount
    document.getElementById('result').value = cadConvertedAmount;
    
}


