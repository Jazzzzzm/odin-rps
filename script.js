/* Testing connection with index.html
console.log("Hello World");
*/

/* Declaring div */
const div = document.querySelector("#container");

/* Variables to keep track of score*/
let humanScore = 0;
let computerScore = 0;

/* Function to randomly return rock, paper, or scissors */
function getComputerChoice(){
    let rand_num = Math.random()*3;
    if(0 < rand_num && rand_num <= 1) {return "rock"}
    else if(1 < rand_num && rand_num <= 2) {return "paper"}
    else {return "scissors"}
}

/* Testing getComputerChoice() function 
console.log(getComputerChoice());
*/

/* Function to get the player's choice */
function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors: ")
    choice = choice.toLowerCase();
    return choice;
}

/* Testing getHumanChoice() function 
console.log(getHumanChoice());
*/

/* Function to simulate a game of rps and tell if the player won or not */
function playRound(humanChoice, computerChoice){
    let win = 0;
    const msg = document.createElement("p");
    if(humanChoice === computerChoice){
        win = 2;
        msg.textContent = "Draw";
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper") {win = 1}
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock") {win = 1}
    }
    else{
        if(computerChoice === "scissors") {win = 1}
    }

    if(win === 1){
        msg.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
        console.log("win");
    }
    else if(win == 0){
        msg.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
        console.log("lose");
    }

    const score = document.createElement("p");
    score.textContent = "Human: " + humanScore + " || Computer: " + computerScore;
    
    div.textContent = '';
    div.appendChild(msg);
    div.appendChild(score);

    /* Printing out end of game message if human or computer reaches 5 points */

    let gameOverMsg = document.createElement("p");

    if(humanScore == 5){
        gameOverMsg.textContent = "You win!";
    }
    else if(computerScore == 5){
        gameOverMsg.textContent = "You lose!";
    }

    div.appendChild(gameOverMsg);
}

/* Adding Event Handler*/
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", () => playRound('rock', getComputerChoice()));
buttonPaper.addEventListener("click", () => playRound('paper', getComputerChoice()));
buttonScissors.addEventListener("click", () => playRound('scissors', getComputerChoice()));

