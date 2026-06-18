function calcmortgage() {
const principalBox = document.getElementById("principal");
const rateBox = document.getElementById("rate");
const yearsBox = document.getElementById("years");
const answerSpan = document.getElementById("result");


    const principal = parseFloat(principalBox.value);
    const rate = parseFloat(rateBox.value) / 1200;
    const years = parseFloat(yearsBox.value);
    const payments = years * 12;    

    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -payments));

    answerSpan.textContent =" $" + monthlyPayment.toFixed(2);
}