let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("You suck!");
  }
  console.log(`Computer chose ${computerChoice}, you chose ${humanChoice}`);
}

playRound(humanChoice, computerChoice);
