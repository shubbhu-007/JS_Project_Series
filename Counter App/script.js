const count = document.querySelector("h4");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const inputVal = document.querySelector("input");
const resetBtn = document.querySelector(".reset-btn");

function subtract() {
    let val = parseInt(count.innerText);
    if(inputVal.value === ""){
        val = val - 1;
        return count.innerText = val;
    }
    else{
        val = val - parseInt(inputVal.value);
        return count.innerText = val;
    }

}
function add() {
    let val = parseInt(count.innerText);
    if(inputVal.value === ""){
        val = val + 1;
        return count.innerText = val;
    }
    else{
        val = val + parseInt(inputVal.value);
        return count.innerText = val;
    }
}
minusBtn.addEventListener('click', () => {
    subtract();
})
plusBtn.addEventListener('click', () => {
    add();
});
resetBtn.addEventListener("click",() => {
    count.innerText = 0;
})