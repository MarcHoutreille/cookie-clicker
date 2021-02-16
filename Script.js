let score = 0;
let multiplier = 0;
let bonus = 0;
let autoClicker = 0;

let autoClickerPrice = 25;
let multiplierPrice = 50;
let bonusPrice = 75;

score = document.getElementById('score').innerHTML;

function addToscore(n) {
    score = parseInt(score) + n;
    document.getElementById('score').innerHTML = score;
}
/*update score per second function ?*/
function buyAutoClicker() {
    if (score >= autoClickerPrice) {
        /*deduct the price from the score */
        score = score - autoClickerPrice;
        autoClicker++;
        /* ajust price increase here*/
        autoClickerPrice = Math.round(autoClickerPrice * 1.05)
        document.getElementById('score').innerHTML = score;
        document.getElementById('autoClicker').innerHTML = autoClicker;
        document.getElementById('autoClickerPrice').innerHTML = autoClickerPrice;

    } else {
        /* make it so the button is grayed out*/
        /* si prix > score:
            classe css : bouton gris & disabled
           sinon: bouton actif */
    }
}


setInterval(function(){
    /*
    score = score + autoClicker;
    score = score * multiplier;
    score = score * bonus;
    */
    document.getElementById('score').innerHTML = score;
}, 1000);




