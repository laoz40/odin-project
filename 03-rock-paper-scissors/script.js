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

function playRound(humanChoice, computerChoice) {
  console.log(`You: ${humanChoice}, Bot: ${computerChoice}`);

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    return true;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    return true;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    return true;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else {
    console.log("You suck!");
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

    if (result === "tie") continue;
    result ? userScore++ : computerScore++;
  }

  console.log("==================================");
  console.log(`Your score: ${userScore}, Computer score: ${computerScore}`);
}

playGame();
