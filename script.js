/* Testing connection with index.html
console.log("Hello World");
*/

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
    if(humanChoice === computerChoice){
        win = 2;
        console.log("Draw.")
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
        let message = "You win! " + humanChoice + " beats " + computerChoice;
        console.log(message);
        humanScore++;
    }
    else if(win == 0){
        let message = "You lose! " + computerChoice + " beats " + humanChoice;
        console.log(message);
        computerScore++;
    }
}

/* Variables to keep track of score*/
let humanScore = 0;
let computerScore = 0;

/* For loop to play 5 rounds of rps*/
for(let i = 0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

/* Printing out end of game message */
if(humanScore > computerScore){
    console.log("You win!");
}
else if(humanScore < computerScore){
    console.log("You lose.");
}
else{
    console.log("Draw.")
}