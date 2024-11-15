document.addEventListener("DOMContentLoaded",function(){
    const loanAmountInput=document.getElementById("loan-amount");
    const interestRateInput=document.getElementById("interest-rate");
    const loanTenureInput=document.getElementById("loan-tenure");

    const loanDisplay=document.getElementById("loan-amount-display");
    const interestRateDisplay=document.getElementById("interest-rate-display");
    const loanTenureDisplay=document.getElementById("loan-tenure-display");

    const emiResult=document.getElementById("emi-result");

    function updateEMI(){
        const loanAmount=parseFloat(loanAmountInput.value);
        const interestRate=parseFloat(interestRateInput.value);
        const loanTenure=parseInt(loanTenureInput.value);

        const monthlyInterestRate=interestRate/(12*100);
        const numberOfMonths=loanTenure*12;

        const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1;
        const monthlyEMI = numerator / denominator;

        
        loanDisplay.textContent = `₹ ${loanAmount.toLocaleString()}`;
        interestRateDisplay.textContent = `${interestRate}%`;
        loanTenureDisplay.textContent = `${loanTenure} Yr`;
        

        emiResult.textContent=monthlyEMI.toFixed(2);
        

    }

    loanAmountInput.addEventListener("input",updateEMI);
    interestRateInput.addEventListener("input",updateEMI);
    loanTenureInput.addEventListener("input",updateEMI);
    emiResult.addEventListener("input",updateEMI);


    updateEMI();
});