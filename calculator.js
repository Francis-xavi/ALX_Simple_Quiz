// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  // Optional: Prevent division by zero
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Helper to get inputs
function getInputValues() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  return [number1, number2];
}

// Result display
const resultSpan = document.getElementById("calculation-result");

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  const [number1, number2] = getInputValues();
  resultSpan.textContent = add(number1, number2);
});

document.getElementById("subtract").addEventListener("click", function () {
  const [number1, number2] = getInputValues();
  resultSpan.textContent = subtract(number1, number2);
});

document.getElementById("multiply").addEventListener("click", function () {
  const [number1, number2] = getInputValues();
  resultSpan.textContent = multiply(number1, number2);
});

document.getElementById("divide").addEventListener("click", function () {
  const [number1, number2] = getInputValues();
  resultSpan.textContent = divide(number1, number2);
});