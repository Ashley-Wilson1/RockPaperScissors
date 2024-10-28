function getComputerChoice()
{
    let randNum = Math.random();
    if(randNum<=1/3){
        return "rock"
    }
    else if(randNum<=2/3){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let valid = ["rock","paper","scissors"]
    let invalid = true
    let choice = ""
    while(invalid){
        choice = prompt("rock, paper, or scissors?")
        if(valid.includes(choice.toLowerCase())){
            invalid=false
            
        }
        else{
            prompt("enter a correct option")

        }
    }
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
  
    if(humanChoice == "rock"){
        if(computerChoice=="paper"){
            computerScore++
            console.log("YOU LOSE, paper beats rock")
        }
        else if(computerChoice=="scissors"){
            humanScore++
            console.log("YOU WIN, rock beats scissors")
        }else{
            console.log("DRAW, both picked rock")
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice=="scissors"){
            computerScore++
            console.log("YOU LOSE, scissors beats paper")
        }
        else if(computerChoice=="rock"){
            humanScore++
            console.log("YOU WIN, paper beats rock")
        }else{
            console.log("DRAW, both picked paper")
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice=="rock"){
            computerScore++
            console.log("YOU LOSE, rock beats scissors")
        }
        else if(computerChoice=="paper"){
            humanScore++
            console.log("YOU WIN, scissors beats paper")
        }else{
            console.log("DRAW, both picked scissors")
        }
    }
}


function playGame(){
    humanScore = 0
    computerScore = 0
    let humanChoice 
    let computerChoice 

    for(let i = 0; i<5;i++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        console.log("Human: "+humanChoice)
        console.log("computer: "+computerChoice)
        playRound(humanChoice,computerChoice)
        
    }

    if(humanScore>computerScore){
        console.log("Well done you win the game " +humanScore+" to "+computerScore)
    }else if(humanScore<computerScore){
        console.log("Unlucky, you lost the game "+humanScore+" to "+computerScore)
    }else{
        console.log("wow the game was a draw "+humanScore+" - "+computerScore)
    }
}
let humanScore
let computerScore 
playGame()



