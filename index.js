function clearDisplay() {
    document.getElementById('display').value = "";
}

function updateDisplay(value) {
    if (!isNaN(value)) {
        document.getElementById('display').value += value;
    }
}

function backSpace() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function squ() {
    let currentValue = parseFloat(document.getElementById("display").value);
    let c = Math.sqrt(currentValue);
    document.getElementById("display").value = c;
}

let x = document.getElementById("add").value;

function calcy() {
    var a = parseFloat(document.getElementById('display').value);
    var x = operator;
    var b = parseFloat(temp);

    if (x === '+') {
        c = a + b;
    } else if (x === '-') {
        c = a - b;
    } else if (x === '*') {
        c = a * b;
    } else if (x === '/') {
        c = a / b;
    } else if (x === '%') {
        c = (a / b) * 100;
    } else {
        updateDisplay('Invalid value');
        return;
    }

    document.getElementById('display').value = c;
}
// making new function for each operator and also adding the html tag display

function addOperator() {
    operator = '+';
    temp = document.getElementById('display').value;
    clearDisplay();
}
function subOperator() {
    operator = '-';
    temp = document.getElementById('display').value;
    clearDisplay();
}
function divOperator() {
    operator = '/';
    temp = document.getElementById('display').value;
    clearDisplay();
}
function multiply() {
    operator = '*';
    temp = document.getElementById('display').value;
    clearDisplay();
}
function modOperator() {
    operator = '%';
    temp = document.getElementById('display').value;
    clearDisplay();
}