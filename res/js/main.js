const info = document.getElementById("info")
const cookie = document.getElementById("cookie")
const counter = document.getElementById("counter")
const cookieClickerMultiplier = document.getElementById("cookieClickerMultiplier");
const cookieClickerMultiplier2 = document.getElementById("cookieClickerMultiplier2");
const cookieClickerMultiplier3 = document.getElementById("cookieClickerMultiplier3");
const cookieClickerMultiplier4 = document.getElementById("cookieClickerMultiplier4");
const AutoClickerButton = document.getElementById("AutoClickerButton");

let numberOfCookie = 0;
let cookieIncrease = 1; 

let AutoClickerPrice = 100;
let AutolickerIncrease = 0;

cookie.onclick = () => {
    numberOfCookie += cookieIncrease; 
    counter.innerHTML = numberOfCookie;
}

    cookieClickerMultiplier.onclick = () => {
        if (numberOfCookie >= 50) {
            numberOfCookie -= 50 //numberOfCookies = numberOfCookies - 50
            cookieIncrease++;
            counter.innerHTML = numberOfCookie;
            let t = cookieIncrease - 1;
            info.innerHTML = `You bought new upgrade with turbo ${t}x`
        }
    }
    cookieClickerMultiplier2.onclick = () => {
        if (numberOfCookie >= 100) {
            numberOfCookie -= 100 //numberOfCookies = numberOfCookies - 50
            cookieIncrease++;
            counter.innerHTML = numberOfCookie;
        }
    }
    cookieClickerMultiplier3.onclick = () => {
        if (numberOfCookie >= 150) {
            numberOfCookie -= 150 //numberOfCookies = numberOfCookies - 50
            cookieIncrease++;
            counter.innerHTML = numberOfCookie;
        }
    }
    cookieClickerMultiplier4.onclick = () => {
        if (numberOfCookie >= 200) {
            numberOfCookie -= 200 //numberOfCookies = numberOfCookies - 50
            cookieIncrease++;
            counter.innerHTML = numberOfCookie;
        }
    }
    AutoClickerButton.onclick = () => {
        if (numberOfCookie >= AutoClickerPrice){
              numberOfCookie -= AutoClickerPrice
              counter.innerHTML = numberOfCookie;
              AutoClickerPrice *= 2; 
              AutoClickerButton.innerHTML = `Buy AutoClicker: ${AutoClickerPrice}`;
            
            if(AutolickerIncrease ==0){
            setInterval(() => {
                numberOfCookie += AutolickerIncrease;
                counter.innerHTML = numberOfCookie;
            }, 1);
                    //spustit interval
                }
                AutolickerIncrease++;
        }


    }