// DOM element references
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector("#reset");

const prompt = document.querySelector("#prompt");
const resultContainer = document.querySelector("#result-container");

// Game state declaration
let humanScore = 0;
let computerScore = 0;

// Dynamic UI elements
const enter = document.createElement("div");
enter.classList.add("enter");
prompt.appendChild(enter);

const results = document.createElement("div");
results.classList.add("result", "text-lg", "text-slate-700");
resultContainer.appendChild(results);

const winner = document.createElement("div");
winner.classList.add("winner", "text-2xl", "font-bold", "text-green-600");
resultContainer.appendChild(winner);

const score = document.createElement("div");
score.classList.add("score", "text-sm", "text-slate-500");
resultContainer.appendChild(score);

// Game logic functions
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    return options[getRandomInt()];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = "It's a draw!";
        return "Draw";
    }

    const beats = {
        ROCK: "SCISSORS",
        PAPER: "ROCK",
        SCISSORS: "PAPER",
    };

    if (beats[humanChoice] === computerChoice) {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        return "Human";
    } else {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        return "Computer";
    }
}

function updateScore() {
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkGameOver() {
    const isOver = humanScore === 5 || computerScore === 5;

    if (isOver) {
        winner.textContent = humanScore === 5 ? "You win!" : "You lose!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    return isOver;
}

function handlePlayerChoice(humanChoice) {
    playRound(humanChoice, getComputerChoice());
    updateScore();
    checkGameOver();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    results.textContent = "";
    winner.textContent = "";
    score.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

// Event listeners
rockButton.addEventListener("click", () => handlePlayerChoice("ROCK"));
paperButton.addEventListener("click", () => handlePlayerChoice("PAPER"));
scissorsButton.addEventListener("click", () => handlePlayerChoice("SCISSORS"));
resetButton.addEventListener("click", resetGame);