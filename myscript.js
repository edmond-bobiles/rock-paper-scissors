function getRandomInt(){
    return Math.floor(Math.random() * 3)
}

function getComputerChoice(){
    let generate = getRandomInt();

    if (generate == 0)
        return "ROCK";
    else if (generate == 1)
        return "PAPER";
    else
        return "SCISSORS";

}

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors").toUpperCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a draw!")
        return "Draw";
    }

    if (humanChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            return "Computer";
        }

        else{
            console.log("You win! Rock beats Scissors.");
            humanScore++;
            return "Human";
        }

    }

    if (humanChoice == "PAPER"){
        if (computerChoice == "SCISSORS"){
            console.log("You lose! Scissors beats Paper.");
            computerScore++;     
            return "Computer";       
        }

        else{
            console.log("You win! Paper beats Rock.");
            humanScore++;
            return "Human";
        }

    }

    if (humanChoice == "SCISSORS"){
        if (computerChoice == "ROCK"){
            console.log("You lose! Rocks beats Scissors.");
            computerScore++;
            return "Computer";
        }

        else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
            return "Human";
        }
    }
}

function playGame(){
    for (let i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore == computerScore)
        console.log("It's a draw! Both scores are tied.");
    else if (humanScore > computerScore)
        console.log("You win! You scored more than the computer.");
    else 
        console.log("You lose! The computer scored more than you.");
}

let humanScore = 0;
let computerScore = 0;
playGame();



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
