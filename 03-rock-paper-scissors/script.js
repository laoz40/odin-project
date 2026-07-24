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

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(`You: ${humanChoice}, Bot: ${computerChoice}`);

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

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  const rounds = 5;
  for (let i = 0; i < rounds; i++) {
    console.log("==================================");
    console.log(`Round ${i + 1} of ${rounds}`);

    const result = playRound(getHumanChoice(), getComputerChoice());

		switch (result) {
			case true:
				userScore++;
				console.log("ez win!");
				break;
			case false:
				computerScore++;
				console.log("You suck!");
				break;
			case "tie":
				console.log("Tie!");
				break;
		}
  }

  console.log("==================================");
  console.log(`Your score: ${userScore}, Computer score: ${computerScore}`);
}

playGame();
