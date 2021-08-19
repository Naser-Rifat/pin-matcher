function getPin() {

    const pin = Math.round(Math.random() * 10000);

    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;


    }

    else {
        return getPin();
    }
}


function genaratePin() {



    document.getElementById('display-pin').value = getPin();

}


//

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayValue = document.getElementById('display-number');

    if (isNaN(number)) {
        if (number == 'C')

            displayValue.value = '';

    }
    else {
        const previousNumber = number;
        const dispalyNumber = displayValue.value + previousNumber;
        displayValue.value = dispalyNumber;
    }


})

//submit 
document.getElementById('submit').addEventListener('click', function (event) {

    const PIN = document.getElementById('display-pin').value;
    const displayValue = document.getElementById('display-number').value;
    const failMessege = document.getElementById('fail');
    const successMessege = document.getElementById('pin-match');
    if (PIN == displayValue) {
        successMessege.style.display = "block";
        failMessege.style.display = 'none';


    }

    else {
        failMessege.style.display = 'block';
        successMessege.style.display = "none";


    }


})