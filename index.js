let t = 0;

let l = 0;

let w = 0;

let badAnswer = 0;

let choice;

let rock;

let paper;

let scissors;

function computerPLAY(){
    let COMPUTERSelect = Math.floor(Math.random()*100);
    console.log(COMPUTERSelect);
   if (COMPUTERSelect <= 33){
        return rock;
    }
    else if(COMPUTERSelect >= 66){
        return paper;
    }
    else {
       return scissors;
    }
} 

function playerSelection(){
    let cpuChoice = computerPLAY();
    if(choice.toLowerCase() == `rock` && cpuChoice == rock){
        t++;
        return tieResult = `COMPUTER CHOOSES ROCK! \rTIE!`;
    }
    else if (choice.toLowerCase() == `rock` && cpuChoice == paper){
        l++;
        return loseResult = 'COMPUTER CHOOSES PAPER! \rLOSER!';
    }
    else if (choice.toLowerCase() == 'rock' && cpuChoice == scissors){
        w++;
        return winResult = `COMPUTER CHOOSES SCISSORS! \rWINNER!`;
    }
//----------------------------------------------
    else if(choice.toLowerCase() == `paper` && cpuChoice == rock){
        w++;
        return winResult = `COMPUTER CHOOSES ROCK! You \rWINNER!`;
    }
    else if (choice.toLowerCase() == `paper` && cpuChoice == paper){
        t++;
        return tieResult = 'COMPUTER CHOOSES PAPER! You \rTIE!';
    }
    else if (choice.toLowerCase() == 'paper' && cpuChoice == scissors){
        l++;
        return loseResult = `COMPUTER CHOOSES SCISSORS! \rLOSER!`;
    }
//----------------------------------------------
    else if(choice.toLowerCase() == `scissors` && cpuChoice == rock){
        l++;
        return loseResult = `COMPUTER CHOOSES ROCK! \rLOSER!`;
    }
    else if (choice.toLowerCase() == `scissors` && cpuChoice == paper){
        w++;
        return winResult = 'COMPUTER CHOOSES PAPER! \rWINNER!';
    }
    else if (choice.toLowerCase() == 'scissors' && cpuChoice == scissors){
        t++;
        return tieResult = `COMPUTER CHOOSES SCISSORS! \rTIE!`;
    }
//----------------------------------------------
    else{
        badAnswer++;
        return noResult = `PLEASE CHOOSE ROCK PAPER SCISSORS!`;
    }
}

function GAME(){
    for (let i = 1; i < 4; i++){
        choice = prompt(`ROCK PAPER SCISSORS?`);
        alert(`PLAYER: `+ choice[0].toUpperCase() + choice.substring(1) + `!\r` + playerSelection());
        alert(`GAME: ` + i + ` OF 3\r` + `SCORE \rPLAYER: ` + w +`\rCOMPUTER: ` + l + `\rTIES: ` + t);
        if (badAnswer == 1){
            i--;
            badAnswer--;
        }
}}

GAME();