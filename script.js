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

console.log(getComputerChoice());
