let score = 0;
let multiplier = 0;
let bonus = 0;
let autoClicker = 0;

let autoClickerPrice = 25;
let multiplierPrice = 50;
let bonusPrice = 75;

document.getElementById('score').innerHTML = score;

function addToscore (n){
    score = score + n;
    document.getElementById('score').innerHTML = score;
}

setInterval(function(){
    score = score + autoClicker;
    score = score * multiplier;
    score = score * bonus;
    document.getElementById('score').innerHTML = score;
}, 1000);



