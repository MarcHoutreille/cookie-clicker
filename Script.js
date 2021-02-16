let score = 0;
let multiplierLevel = 0;
let multiplierPower = 0;
let bonus = 0;
let autoClicker = 0;

let autoClickerPrice = 25;
let multiplierPrice = 50;
let bonusPrice = 75;

score = document.getElementById('score').innerHTML;

/* Add to score when clicked */
function addToscore(n, multiplierPower, bonus) {
    if ((multiplierPower == 0 && bonus == 0) && (multiplier == 0 || bonus == 0)) {
        score = parseInt(score) + n;
    } else {
        score = parseInt(score) + (n * (multiplierPower + bonus));
    }
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

/*Multiplier*/

if (multiplierLevel < 2) {
    document.getElementById("active-multiplier").style.display = "none";
} 

function buyMultiplier () {
    if (multiplierLevel < 3) {
        if (score >= multiplierPrice) {
            score = score - multiplierPrice;
            multiplierLevel++;
            multiplierPrice = multiplierPrice * 2;
            document.getElementById('score').innerHTML = score;
            document.getElementById("active-multiplier").style.display = "inline";
            document.getElementById('multiplierPrice').innerHTML = multiplierPrice;
            switch (multiplierLevel) {
                case 1 :
                    document.getElementById("active-multiplier").innerHTML = "x 2";
                    multiplierPower = 2;
                break;
                case 2 :
                    document.getElementById("active-multiplier").innerHTML = "x 5";
                    multiplierPower = 5;
                break;
                case 3 : 
                    document.getElementById("active-multiplier").innerHTML = "x 10";
                    multiplierPower = 10;
                break;
            }
        }
    } else {
        // bouton inactif 
    }
}
            

// addToscore(multiplier); quand bonus acheté


function buyBonus () {
    bonus = 2;
    setTimeout(function(){
        bonus = 0;
    }, 30000);
    if (score >= bonusPrice) {
        score = score - bonusPrice;
        document.getElementById('score').innerHTML = score;
        document.getElementById('bonusPrice').innerHTML = bonusPrice;
    } else {
        // bonus price inactif
    }
}


/* setInterval(function(){
    score = score + autoClicker;
    score = score * multplier;
    score = score * bonus;
    document.getElementById('score').innerHTML = score;
}, 1000); */




