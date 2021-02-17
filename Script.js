let score = 0;
let multiplierLevel = 0;
let multiplierPower = 0;
let bonus = 0;
let autoClicker = 0;
let bonusActive = false;

let autoClickerPrice = 25;
let bonusPrice = 125;
let multiplierPrice = 200;


score = document.getElementById('score').innerHTML;

/* Add to score when clicked */
function addToscore(n, multiplierPower, bonus) {
    if ((multiplierPower == 0 && bonus == 0) && (multiplierPower == 0 || bonus == 0)) {
        score = parseInt(score) + n;
    } else {
        score = parseInt(score) + (n * (multiplierPower + bonus));
    }
    document.getElementById('score').innerHTML = score;
}

/*update score per second function ?*/
function buyAutoClicker() {
    let element = document.getElementById("btn-autoclicker");
    if (element.classList.contains("active")) {
        if (score >= autoClickerPrice) {
            /*deduct the price from the score */
            score = score - autoClickerPrice;
            autoClicker++;
            /* ajust price increase here*/
            autoClickerPrice = Math.round(autoClickerPrice * 2)
            document.getElementById('score').innerHTML = score;
            document.getElementById('autoClickerPrice').innerHTML = autoClickerPrice;
            if (score < autoClickerPrice) {
                element.classList.remove("active");
                element.classList.add("disable");
            }
        } 
    }
}

/*Multiplier*/
function buyMultiplier () {
    let element = document.getElementById("btn-multiplier");
    if (element.classList.contains("active")) {
        if (multiplierLevel < 3) {
            if (score >= multiplierPrice) {
                score = score - multiplierPrice;
                multiplierLevel++;
                multiplierPrice = multiplierPrice * 2;
                document.getElementById('score').innerHTML = score;
                document.getElementById("icone-multiplier").style.display = "inline";
                document.getElementById('multiplierPrice').innerHTML = multiplierPrice;
                switch (multiplierLevel) {
                    case 1 :
                        document.getElementById("icone-multiplier").src = "svg/btn/multi_x2.svg";
                        multiplierPower = 2;
                    break;
                    case 2 :
                        document.getElementById("icone-multiplier").src = "svg/btn/multi_x5.svg";
                        multiplierPower = 5;
                    break;
                    case 3 :
                        document.getElementById("icone-multiplier").src = "svg/btn/multi_x10.svg";
                        multiplierPower = 10;
                    break;
                }
            }
            if (score < multiplierPrice) {
                element.classList.remove("active");
                element.classList.add("disable");
            }
        } 
    }  
}

function buyBonus () {
    let element = document.getElementById("btn-bonus");
    if (element.classList.contains("active")) {
        if (bonusActive == false) {
            if (score >= bonusPrice) {
                score = score - bonusPrice;
                document.getElementById('score').innerHTML = score;
                document.getElementById('bonusPrice').innerHTML = bonusPrice;
                bonus = 2;
                document.getElementById("icone-bonus").style.display = "inline";
                bonusActive = true;
                setTimeout(function(){
                    bonus = 0;
                    document.getElementById("icone-bonus").style.display = "none";
                    bonusActive = false;
                }, 30000);
            }
            if (score < bonusPrice) {
                element.classList.remove("active");
                element.classList.add("disable");
            }
        }   
    }
}

 setInterval(function(){
    score = parseInt(score + autoClicker);
    let autoclicker = document.getElementById("btn-autoclicker");
    let multiplier = document.getElementById("btn-multiplier");
    let bonus = document.getElementById("btn-bonus");
    if (score >= autoClickerPrice && autoclicker.classList.contains("disable")) {
        autoclicker.classList.remove("disable");
        autoclicker.classList.add("active");
    } else if (score < autoClickerPrice && autoclicker.classList.contains("active")) {
        autoclicker.classList.remove("active");
        autoclicker.classList.add("disable");
    }

    if (score >= multiplierPrice && multiplier.classList.contains("disable")) {
        multiplier.classList.remove("disable");
        multiplier.classList.add("active");
    } else if (score < multiplierPrice && multiplier.classList.contains("active")) {
        multiplier.classList.remove("active");
        multiplier.classList.add("disable");
    }

    if (score >= bonusPrice && bonusActive == false) {
        bonus.classList.remove("disable");
        bonus.classList.add("active");
    } else if (score < bonusPrice && bonus.classList.contains("active")) {
        bonus.classList.remove("active");
        bonus.classList.add("disable");
    }

    document.getElementById('score').innerHTML = score;
}, 500); 






