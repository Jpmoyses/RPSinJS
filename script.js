let humanScore = 0;
let computerScore = 0;

const humanScoreUI = document.getElementById("humanScore");
const computerScoreUI = document.getElementById("computerScore");
const result = document.getElementById("result");
const botButton = document.querySelectorAll(".disable");

function getComputerChoice(){
    let i = Math.floor(Math.random() * 100) + 1;

    if(i < 33){
        addBGBot("paper");
        return "paper";
    }
    else if (i > 66){
        addBGBot("rock");
        return "rock";
    }
    else {
        addBGBot("scissors");
        return "scissors";
    }
}

function addBGBot(id){
    botButton.forEach((item) => {
        if (item.id == id){
            item.classList.add("bgClick");
        }
    })
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win, " + humanChoice + " beats " + computerChoice);
        humanScore++;
        humanScoreUI.innerText = humanScore;
        result.classList.add("win");
        result.classList.remove("lost");
        result.innerText = "You win!";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win, " + humanChoice + " beats " + computerChoice);
        humanScore++;
        humanScoreUI.innerText = humanScore;
        result.classList.add("win");
        result.classList.remove("lost");
        result.innerText = "You win!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win, " + humanChoice + " beats " + computerChoice);
        humanScore++;
        humanScoreUI.innerText = humanScore;
        result.classList.add("win");
        result.classList.remove("lost");
        result.innerText = "You win!";
    }
    else if(humanChoice === computerChoice){
        console.log("Draw!")
        result.classList.remove("win");
        result.classList.remove("lost");
        result.innerText = "Draw!";
    }
    else{
        console.log("You lose, " + computerChoice + " beats " + humanChoice);
        computerScore++;
        computerScoreUI.innerText = computerScore;
        result.classList.remove("win");
        result.classList.add("lost");
        result.innerText = "You lost!";
    }

    if(humanScore == 5 || computerScore == 5) endGame();
}

// add event listener to buttons
const btn = document.querySelectorAll("button");
btn.forEach( (button) => {
    button.addEventListener("click", () =>{
        removeBG();
        playRound(button.id, getComputerChoice());
        button.classList.add("bgClick");
        if(humanScore == 0 && computerScore == 0) endGame();
    })
})

function removeBG(){
    btn.forEach((button) =>{
        button.classList.remove("bgClick");
    })
}

function endGame(){
    if(humanScore == 5){
        alert("You win!");
    }
    if(computerScore == 5){
        alert("You lose!");
    }

    removeBG();
    humanScore = 0;
    humanScoreUI.innerText = humanScore;
    computerScore = 0;
    computerScoreUI.innerText = computerScore;
    result.classList.remove("win");
    result.classList.remove("lost");
    result.innerText = "Click one!";
}
