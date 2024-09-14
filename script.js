const playerOptions = document.querySelectorAll(".rps-choice");
let playerChoices = [];
const playerChoicesUi = document.querySelectorAll(".player-choice");
const cpuOptions = ["✊","🤚","✌️"];
const countUi = document.getElementById("count");
let cpuChoices = [];
const cpuChoicesUi = document.querySelectorAll(".cpu-choice");
const roundResults = document.querySelectorAll(".round-result")
let cpuScore = 0;
const cpuScoreUi = document.getElementById("cpu-score");
let playerScore = 0;
const playerScoreUi = document.getElementById("player-score");

playerOptions.forEach((element) => {
    element.addEventListener("click",()=>{            
        if(playerChoices.length < 4){
        cpuChoices.push(cpuOptions[Math.floor(Math.random()*3)]);
        playerChoices.push(element.innerText);
    }
    else if(playerChoices.length == 5){} 
    else{
        playerChoices.push(element.innerText);
        cpuChoices.push(cpuOptions[Math.floor(Math.random()*3)]);
        console.log(playerChoices); 
        playGame();
    }
    switch(playerChoices.length) {
        case 1:
            countUi.innerText = "second";
            break;
        case 2:
            countUi.innerText = "third";
            break;
        case 3:
            countUi.innerText = "fourth";
            break;
        case 4:
            countUi.innerText = "fifth";
            break;        
    }
    })
});

function playGame(){
    for(let i=0;playerChoicesUi.length>i;i++){
        playerChoicesUi[i].innerText = playerChoices[i];
        cpuChoicesUi[i].innerText = cpuChoices[i];
        if(playerChoices[i] === cpuChoices[i]){
            roundResults[i].innerText = "DRAW!";
        }
        else if(
            playerChoices[i] === "✊"&& cpuChoices[i] === "✌️"
          ||playerChoices[i] === "🤚"&& cpuChoices[i] === "✊"
          ||playerChoices[i] === "✌️"&& cpuChoices[i] === "🤚"
        ){
            roundResults[i].innerText = "PLAYER WINS!";
            playerScore += 1;
            playerScoreUi.innerText = playerScore;
        }
        else{
            roundResults[i].innerText = "CPU WINS!";
            cpuScore += 1;
            cpuScoreUi.innerText = cpuScore;
        }
    }
}

function resetGame(){
    for(let i=0;5>i;i++){
        playerChoicesUi[i].innerText = "?";
        cpuChoicesUi[i].innerText = "?";
        roundResults[i].innerText = "";
    }
    playerChoices = [];
    cpuChoices = [];
    countUi.innerText = "first";
}

/**
 * TODO:
 * 
 * 1. Switch case for hvilket valg det er
 * 2. Lag CPU valg
 * 3. Array med spiller valg
 * 
**/