function getPlayerName(nameOfPlayer) {
    const nameElement = document.getElementById(nameOfPlayer);
    const nameValue = nameElement.innerText;
    const unoderList = document.getElementById('unoder-list');
    const newElement = document.createElement('li');
    newElement.innerText =  ' ' + nameValue;
    const howMany = unoderList.childNodes.length;
    if(howMany > 6){
        alert('To many plyer. your btn will be disble by clicked but event do not work');
        return;
    }
    unoderList.appendChild(newElement);
}
function calExpenses() {
    const perPlyerPriceInput = document.getElementById('per-plyer-price');
    const priceString = perPlyerPriceInput.value;
    const priceNumber = parseInt(priceString);

    const unoderList = document.getElementById('unoder-list');
    const howMany = unoderList.children.length;

    const expenses = howMany * priceNumber;
    const expensesElement = document.getElementById('expenses');
    const stringValue = expensesElement.innerText = expenses;
    const numberValue = parseInt(stringValue);
};

function totalCalculator() {
    const managerInputValue = document.getElementById('manager-input').value;
    const managerInputValueNumber = parseInt(managerInputValue);

    const coachInputValue = document.getElementById('coach-input').value;
    const coachInputValueNumber = parseInt(coachInputValue);

    const perPlyerPriceInput = document.getElementById('per-plyer-price');
    const priceString = perPlyerPriceInput.value;
    const priceNumber = parseInt(priceString);

    const unoderList = document.getElementById('unoder-list');
    const howMany = unoderList.children.length;

    const expenses = howMany * priceNumber;
    const expensesElement = document.getElementById('expenses');
    const stringValue = expensesElement.innerText = expenses;
    const numberValue = parseInt(stringValue);

    const TotalCalculation = numberValue + managerInputValueNumber + coachInputValueNumber;
    const total = document.getElementById('total-taka');
    total.innerText = TotalCalculation;
}