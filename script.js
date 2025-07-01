/* Testing connection
console.log("Hello World");
*/

function getComputerChoice(){
    let rand_num = Math.random()*3;
    if(0 < rand_num && rand_num <= 1) {return "rock"}
    else if(1 < rand_num && rand_num <= 2) {return "paper"}
    else {return "scissors"}
}

/* Testing getComputerChoice() function */
console.log(getComputerChoice());