let coin = document.querySelector(".coin");
let flipBtn= document.querySelector("#flipButton");
let resetBtn= document.querySelector("#resetButton");

let cara= 0;
let cruz= 0;

flipBtn.addEventListener("click",() => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation= "spin-cara 3s forwards"
        }, 100);
        cara++;
    } else{
        setTimeout(function(){
            coin.style.animation= "spin-cruz 3s forwards"
        }, 100);
        cruz++;

    }
setTimeout(updateStats, 3000);
disableButton();
});

function updateStats (){
    document.querySelector("#contar-cara").textContent= `Cara: ${cara}`;
    document.querySelector("#contar-cruz").textContent= `Cruz: ${cruz}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click",() =>{
    coin.style.animation= "none";
    cara = 0;
    cruz = 0;
    updateStats();
});

flipBtn.addEventListener("click", () =>{
    let coin =document.createElement("audio")
    coin.setAttribute("src", "assets/sound/coin-flip-shimmer-85750.mp3")
    coin.play ()
}); 