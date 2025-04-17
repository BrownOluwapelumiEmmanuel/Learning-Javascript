let num1 = parseFloat(prompt("Enter first number:", "8"));
let operator = prompt("Enter operator (+, -, *, /):", "/");
let num2 = parseFloat(prompt("Enter second number:", "2"));

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  alert("Invalid operator");
}

if (result !== undefined) {
  alert("Result: " + result);
}