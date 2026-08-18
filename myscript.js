const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector("#reset");

rockButton.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
    playGame();
});

paperButton.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice());
    playGame();
});

scissorsButton.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice());
    playGame();
});

resetButton.addEventListener("click", resetGame);

function getRandomInt(){
    return Math.floor(Math.random() * 3)
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    results.textContent = "";
    winner.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    updateScore();
    score.textContent = "";
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

const prompt = document.querySelector("#prompt");
const enter = document.createElement("div");
enter.classList.add("enter");
prompt.appendChild(enter);

const resultContainer = document.querySelector("#result-container");

const results = document.createElement("div");
results.classList.add("result");
results.classList.add("text-lg", "text-slate-700");
resultContainer.appendChild(results);

const winner = document.createElement("div");
winner.classList.add("winner");
winner.classList.add("text-2xl", "font-bold", "text-green-600");
resultContainer.appendChild(winner);

const score = document.createElement("div");
score.classList.add("score");
score.classList.add("text-sm", "text-slate-500");
resultContainer.appendChild(score);

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        results.textContent = "It's a draw!";
        updateScore(humanScore, computerScore);
        return "Draw";
    }

    if (humanChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            results.textContent = "You lose! Paper beats Rock.";
            computerScore++;
            updateScore(humanScore, computerScore);
            return "Computer";
        }

        else{
            results.textContent = "You win! Rock beats Scissors.";
            humanScore++;
            updateScore(humanScore, computerScore);
            return "Human";
        }

    }

    if (humanChoice == "PAPER"){
        if (computerChoice == "SCISSORS"){
            results.textContent = "You lose! Scissors beats Paper.";
            computerScore++; 
            updateScore(humanScore, computerScore);
            return "Computer";       
        }

        else{
            results.textContent = "You win! Paper beats Rock.";
            humanScore++;
            updateScore(humanScore, computerScore);
            return "Human";
        }

    }

    if (humanChoice == "SCISSORS"){
        if (computerChoice == "ROCK"){
            results.textContent = "You lose! Rocks beats Scissors.";
            computerScore++;
            updateScore(humanScore, computerScore);
            return "Computer";
        }

        else {
            results.textContent = "You win! Scissors beats Paper.";
            humanScore++;
            updateScore(humanScore, computerScore);
            return "Human";
        }
    }
}

function updateScore(humanScore, computerScore){
    score.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
}


function playGame(){
    // Play the game
    let humanChoice = "";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    // Score logic
    if (humanScore === 5) {
        winner.textContent = "You win!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if (computerScore === 5) {
        winner.textContent = "You lose!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

let humanScore = 0;
let computerScore = 0;


