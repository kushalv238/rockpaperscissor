'use strict';

const game = function(input){
    document.getElementById('userF').textContent = ``;
    document.getElementById('compF').textContent = ``;
    document.getElementById('resF').textContent = ``;
    document.getElementById('toRem').textContent = ``;
        
    const randomNo = Math.trunc(Math.random() * 3);
    const weapons = ['rock', 'paper', 'scissor'];

    let userCh = weapons[parseInt(input)];
    let compCh = weapons[randomNo];
    
    document.getElementById('user-choice').textContent = `${userCh}`;
    document.getElementById('comp-choice').textContent = `${compCh}`;

    const result = getStatus(userCh, compCh);
    document.getElementById('result').textContent = `${result}`;
    console.log(result);
}

function getStatus(userCh_, compCh_) {
    if((userCh_ === 'rock' && compCh_ === 'scissor') || (userCh_ === 'paper' && compCh_ === 'rock') || (userCh_ === 'scissor' && compCh_ === 'paper')) {
        document.getElementById('user-score').textContent++;
        document.getElementById('result').style.color = 'green';
        return("You win!");
    }
    else if((userCh_ === 'rock' && compCh_ === 'paper') || (userCh_ === 'paper' && compCh_ === 'scissor') || (userCh_ === 'scissor' && compCh_ === 'rock')) {
        document.getElementById('comp-score').textContent++;
        document.getElementById('result').style.color = 'red';
        return("You loose!");
    }
    else if(userCh_ == compCh_){
        document.getElementById('result').style.color = 'yellow';
        return("It's a draw!");
    }
    else {
        location.reload();
    }
}


function reload() {
    location.reload();
}

function finalRes() {
    document.getElementById('user-choice').textContent = ``;
    document.getElementById('comp-choice').textContent = ``;
    document.getElementById('result').textContent = ``;

    document.getElementById('userF').textContent = `${document.getElementById('user-score').textContent}`;
    document.getElementById('compF').textContent = `${document.getElementById('comp-score').textContent}`;
    document.getElementById('resF').textContent = `${finalResValue(document.getElementById('user-score').textContent, document.getElementById('comp-score').textContent)}`;

}

function finalResValue(US, CS) {
    if(US > CS) {
        return("Wait how did you win, you probably cheated!");
    }
    else if(US < CS) {
        return("To no one's surprise, I won ;)");
    }
    else {
        return("Well I guess we are equally bad :p");
    }
}