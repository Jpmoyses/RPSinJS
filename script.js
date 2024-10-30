function getComputerChoice(){
    let i = Math.floor(Math.random() * 100) + 1;

    if(i < 33){return "paper";}
    else if (i > 66){return "rock";}
    else {return "scissors";}
}

function getHumanChoice(){
    let answer = prompt("Choose between rock, paper and scissors:");
    answer = answer.toLowerCase();
    answer = answer.trim();
    if ((answer === "rock" || answer === "paper" || answer === "scissors") == true){
        return answer;
    }
    else{
        alert("Error, try again.");
        return getHumanChoice();
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let x = 1;

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
        console.log("Round " + x);
        if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win, " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win, " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win, " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if(humanChoice === computerChoice){
            console.log("Draw!")
        }
        else{
            console.log("You lose, " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        x++;
    }

    for(let i = 0; i < 5; i++){
        playRound();
    }

    if(humanScore > computerScore){
        console.log("You win! " + humanScore + " x " + computerScore);
    }
    else if(humanScore == computerScore){
        console.log("Its a draw!" + humanScore + " x " + computerScore);
    }
    else{
        console.log("You lose! " + humanScore + " x " + computerScore);
    }
}

while(true) { playGame(); }