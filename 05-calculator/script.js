// Operations

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, y, operation) {
  switch (operation) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      return NaN;
  }
}

// Display

const display = document.getElementById("display");
const result = document.getElementById("result");

// Numbers

let input = "";
let x = null;
let calculated = false;

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {

		if (calculated) {
			input = "";
			x = null;
			operation = null;
			result.textContent = "";
			display.value = "";
			calculated = false;
		}

    input += button.dataset.value;
    display.value = input;
  });
});

// Operations

let operation = null;

const operationButtons = document.querySelectorAll(".operation");

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextOperation = button.dataset.value;

    if (input === "") {
      return;
    }

    if (x === null) {
      x = Number(input);
    } else if (operation !== null) {
      const y = Number(input);
      x = operate(x, y, operation);
      result.textContent = x;
    }

    operation = nextOperation;
    input = "";
  });
});

// Equals

const equalButton = document.getElementById("equal");

equalButton.addEventListener("click", () => {
	if (x === null || operation === null || input === "") return;

  const y = Number(input);
	x = operate(x, y, operation);
	result.textContent = x;
  operation = null;
  input = "";
	calculated = true;
});

// Clear Buttons

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  input = "";
  display.value = "";
});

const allClearButton = document.getElementById("allclear");

allClearButton.addEventListener("click", () => {
  input = "";
	x = null;
  operation = null;
  display.value = "";
  result.textContent = "";
});
