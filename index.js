//functions for add/subtract/multiply/devide/modulo
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

//function calculator = we can pass operator from functions we created
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
console.log(calculator(12, 5, modulo));

//debugger -> arrow down = showing whole function steps
debugger;
calculator(12, 5, subtract);