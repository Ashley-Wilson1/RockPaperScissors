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
    let choice =""
    while(invalid){
        let choice = prompt("rock, paper, or scissors?")
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
  
    if(humanChoice = "rock"){
        if(computerChoice="paper"){
            computerScore++
            console.log("YOU LOSE, paper beats rock")
        }
        else if(computerChoice="scissors"){
            humanScore++
            console.log("YOU WIN, rock beats scissors")
        }else{
            console.log("DRAW, both picked rock")
        }
    }
    else if(humanChoice = "paper"){
        if(computerChoice="scissors"){
            computerScore++
            console.log("YOU LOSE, scissors beats paper")
        }
        else if(computerChoice="rock"){
            humanScore++
            console.log("YOU WIN, paper beats rock")
        }else{
            console.log("DRAW, both picked paper")
        }
    }
    else if(humanChoice = "scissors"){
        if(computerChoice="rock"){
            computerScore++
            console.log("YOU LOSE, rock beats scissors")
        }
        else if(computerChoice="paper"){
            humanScore++
            console.log("YOU WIN, scissors beats paper")
        }else{
            console.log("DRAW, both picked scissors")
        }
    }
}




let humanScore = 0
let computerScore =0
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
    
playRound(humanChoice,computerChoice)

console.log(getComputerChoice());
console.log(getHumanChoice())
