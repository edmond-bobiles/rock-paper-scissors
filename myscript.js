function getRandomInt(){
    return Math.floor(Math.random() * 3)
}

function getComputerChoice(){
    let generate = getRandomInt();

    if (generate == 0)
        return "rock";
    else if (generate == 1)
        return "paper";
    else
        return "scissors";
}

let humanChoice;

do {
  humanChoice = prompt("Enter rock, paper, or scissors").toUpperCase();
} while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS");


// getComputerChoice that randomly returns rock, paper, or scissors
// Use Math.random to generate between 0, 1, and 2
// Convert the number to rock, paper, or scissors

// getHumanChoice via input, case-insensitive

// playRound checks if computer or human wins and allot score to humanScore or computerScore
// playRound console logs the output
// increment the score

// 5 rounds
// playGame calls playRound 5 times
// declare winner at the end
