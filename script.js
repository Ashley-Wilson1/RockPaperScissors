function getComputerChoice()
{
    let randNum = Math.random();
    if(randNum<=1/3){
        return "Rock"
    }
    else if(randNum<=2/3){
        return "Paper"
    }
    else{
        return "Scissors"
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
    return choice
}



    


console.log(getComputerChoice());
console.log(getHumanChoice())
