function getComputerChoice(){
    const randomNumber = Math.random()*10;
     

    if(randomNumber<3)
        return "scissors";
    else if(randomNumber>3 && randomNumber<7){
        return "rock";
    }
    else 
        return "paper";
 
}

console.log("Your game has begun !")

function getHumanChoice(){
    let humanChoice= prompt("Your turn !");
    
    return humanChoice;

}
// console.log(getHumanChoice())

let humanScore =0;
let computerScore =0;


function playRound(humanChoice,computerChoice){

    console.log(humanChoice+" "+computerChoice)
    if(humanChoice=="scissors"&&computerChoice=="paper"){
        humanScore++;

    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        computerScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        humanScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        computerScore++;
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        humanScore++;
    }
    else if(humanChoice=="rock"&&computerChoice=="paper"){
        computerScore++;
    }
    else {
        console.log("Same choice")
    }

    console.log(`Your Score : ${humanScore}
    Computer Score = ${computerScore}`)
}



function playGame(){



    for(i=0;i<5;i++){

    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
    
    
    }
    if(humanScore>computerScore){
        console.log("You Won !")
    }
    else if(computerScore>humanScore)
        console.log("You lost !")
    else 
        console.log("the game is tie !")
}

playGame();
