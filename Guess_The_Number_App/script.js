const input = document.querySelector("input"); 
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".start_game_btn");
const form = document.querySelector("form");
const msgPara = document.querySelector(".msg");
const content = document.querySelector(".content");
let computerGuess = Math.ceil(Math.random()*100);
let inputValueArray = [];
console.log(computerGuess);

function checkResult(inputValue,computerGuess){
    if(computerGuess < inputValue){
        msgPara.innerText = "Too High ! 🥲";
    }
    else if(computerGuess > inputValue){
        msgPara.innerText = "Too Low ! 😑";
    }
    else{
        msgPara.innerText = "Congrats, You guess it right 🎉";
        // submitBtn.classList.add("disable");
        submitBtn.disabled = true;
        startGameBtn.disabled = false;
        // startGameBtn.classList.remove("disable");
    }
}
function processing(){
    const inputValue = parseInt(input.value);
    inputValueArray.push(inputValue);
    const text = `Your guesses : `;
    content.innerText = text + inputValueArray.join(",");
    checkResult(inputValue,computerGuess);
    form.reset();
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    processing();
})

submitBtn.addEventListener("click",(e) => {
    processing();
})

startGameBtn.addEventListener("click",() => {
    inputValueArray = [];
    msgPara.innerText = ""; 
    content.innerText = "";
    // submitBtn.classList.remove("disable");
    // startGameBtn.classList.add("disable");
    submitBtn.disabled = false;
    startGameBtn.disabled = true;
    computerGuess = Math.ceil(Math.random()*100);
    console.log(computerGuess);
})