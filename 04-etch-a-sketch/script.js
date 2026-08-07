// Create grid of squares
function createSquares(gridSide) {
  const container = document.getElementById("container");

  for (let i = 0; i < gridSide ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.setProperty("--square-width", `calc(1000px / ${gridSide})`);

    const randomColour = Math.floor(Math.random() * (256 ** 3 - 1))
      .toString(16)
      .padStart(6, "0");
    square.style.backgroundColor = `#${randomColour}`;
    square.style.opacity = 0;

    container.appendChild(square);
  }

  addDrawEffect();
}

// Add draw effect
function addDrawEffect() {
  const container = document.getElementById("container");
  const squares = container.querySelectorAll(".square");

  squares.forEach((square) => {
    let opacity = 0;
    square.addEventListener("mouseover", () => {
      opacity = Math.min(opacity + 0.1, 1);
      square.style.opacity = opacity;
    });
  });
}

// Init 16 * 16 squares
let gridSide = 16;
createSquares(gridSide);

// Set grid width size button
const button = document.querySelector("button");

button.addEventListener("click", () => {
  container.innerHTML = "";

  const input = prompt("Choose the width of the grid (in squares)");
  const number = parseInt(input);

  if (number > 100) {
    alert("Too big bro");
    return;
  } else if (number < 1) {
    alert("Too small bro");
    return;
  }

  createSquares(number);
});
