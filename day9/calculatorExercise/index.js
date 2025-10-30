const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
const error = document.getElementById("error");

function add() {
    if (num1.value === "" || num2.value === "") {
        error.innerText = 'Please enter both the numbers';
        error.style.color = 'red';
        output.innerText = "";
    } else {
        error.innerText = "";
        const op = parseFloat(num1.value) + parseFloat(num2.value);
        output.innerText = op;
    }
}
function sub() {
     if (num1.value === "" || num2.value === "") {
        error.innerText = 'Please enter both the numbers';
        error.style.color = 'red';
        output.innerText = "";
    } else {
        error.innerText = "";
        const op = parseFloat(num1.value) - parseFloat(num2.value);
        output.innerText = op;
    }
}
function mul() {
     if (num1.value === "" || num2.value === "") {
        error.innerText = 'Please enter both the numbers';
        error.style.color = 'red';
        output.innerText = "";
    } else {
        error.innerText = "";
        const op = parseFloat(num1.value) * parseFloat(num2.value);
        output.innerText = op;
    }
}
function div() {
     if (num1.value === "" || num2.value === "") {
        error.innerText = 'Please enter both the numbers';
        error.style.color = 'red';
        output.innerText = "";
    } else {
        error.innerText = "";
        const op = parseFloat(num1.value) / parseFloat(num2.value);
        output.innerText = op;
    }
}