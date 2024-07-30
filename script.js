

console.log("Your game has begun !")



let humanScore =0;
let computerScore =0;

const outputWindow= document.createElement("div");
outputWindow.style.cssText= 'display:flex;background-color: pink; justify-content:center;border:1px solid green;';
document.body.appendChild(outputWindow);


const messageDiv = document.createElement('div');
messageDiv.textContent='the game has started';
outputWindow.appendChild(messageDiv);

function updateMessage(message){
    messageDiv.textContent=message;
}


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
     

    if(randomNumber==0)
        return "scissors";
    else if(randomNumber==1){
        return "rock";
    }
    else 
        return "paper";
 
}

console.log(getComputerChoice());



function playRound(humanChoice,computerChoice){

     let status='';
    if(humanChoice==computerChoice){
        console.log("same choice");
        status='tie';
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"||
        humanChoice=="paper"&&computerChoice=="rock"||
        humanChoice=="scissors"&&computerChoice=="paper"){
        humanScore++;

            
        }
        else{
        computerScore++;
        
        }
        let scoreMessage=`
            computer : ${computerChoice} \n
        Your Score:${humanScore}  Computer Score:${computerScore}`;
        console.log(scoreMessage);

        if(status=='tie')
        updateMessage('same choice'+ scoreMessage);
        else updateMessage(scoreMessage);
          
}   

// console.log(playRound('rock',getComputerChoice()));


// script.js
const displayMenu = document.querySelector(".displayMenu");
displayMenu.style.backgroundColor = "aqua";




displayMenu.addEventListener('click',(event)=>{
    // console.log(event.target.id);
    humanChoice=event.target.id;
    playRound(humanChoice,getComputerChoice());
    
    if(humanScore==5||computerScore==5){
        if(humanScore>computerScore){
            console.log("You win");
            updateMessage("You Won!")
        }
        else {console.log("You lose!");
            updateMessage("You lose! ")}
        humanScore=computerScore=0;
    }
    console.log(`${humanScore}  ${computerScore}`)


})


// console.log(getHumanChoice())




// function getHumanChoice(){
//     let humanChoice= displayMenu.addEventListener('click',(event)=>{
//         let target = event.target;
//         switch(target.id){
//             case 'rock': return 'rock';
//             break;

//             case 'paper': return 'paper';
//             break;

//             case 'scissors': return 'scissors';
//             break;
//         }
//     })  
    
//     return humanChoice;

// }


