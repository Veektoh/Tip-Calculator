const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
    const bill = Number(billTotalInput.value);
    const tip = Number(tipInput.value) / 100;
    const tipAmount = bill * tip;
    const total = bill + tipAmount;
    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}
const increasePeople = () => {
    numberOfPeople++;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill ();
}
const decreasePeople = () => {
    (numberOfPeople <= 1) ? numberOfPeople = 1 : 
    numberOfPeople-- ;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill ();
}