function getComputerChoice() {
  const random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});

function playRound(humanChoice, computerChoice) {
	// Show choices
  document.getElementById("humanChoice").innerText = humanChoice;
  document.getElementById("computerChoice").innerText = computerChoice;

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return true;
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return false;
  }
}

let userScore = 0;
let computerScore = 0;

function playGame(humanChoice) {
  const result = playRound(humanChoice, getComputerChoice());

  switch (result) {
    case true:
      userScore++;
      document.getElementById("result").innerText = "ez win!";
      break;
    case false:
      computerScore++;
      document.getElementById("result").innerText = "You suck!";
      break;
    case "tie":
      document.getElementById("result").innerText = "Tie!";
      break;
  }
	// Update scores
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;

  getWinner(userScore, computerScore);
}

function getWinner(userScore, computerScore) {
  if (userScore >= 5) {
    document.querySelector("dialog").showModal();
    document.getElementById("winner").innerText = "You win! GGEZ!";
  } else if (computerScore >= 5) {
    document.querySelector("dialog").showModal();
    document.getElementById("winner").innerText = "You suck! Bad try!";
  }
}

// Play again button
document.getElementById("playAgain").addEventListener("click", () => {
  document.querySelector("dialog").close();

  // Reset scores
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("result").innerText = "";
  document.getElementById("winner").innerText = "";
});
