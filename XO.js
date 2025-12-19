tableElements = document.querySelectorAll(`.tb`)
btnElement1 = document.querySelector(`.btn1`)
btnElement2 = document.querySelector(`.btn2`)
console.log(tableElements);

let x  = `X`; 
// ---------------------------------------------------------------------------------------
// массив с комбинациями и результатом

let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
let vin = false 
result = []
let gameOver = false;
let mode = null;


function resetGame() {
    tableElements.forEach(elm => {
        elm.textContent = "";
        elm.style.backgroundColor = "";
    });
    vin = false;
    x = "X";
}

// ---------------------------------------------------------------------------------------


tableElements.forEach(go => {

  go.addEventListener((`click`), ()=>{
    if (go.textContent !== "" || vin || !mode) return; 
        go.textContent = x;

if (mode===1){ 
                  go.style.color = `white`
                go.style.backgroundColor = x === "X" ? "blue" : "red";
            x = x === "X" ? "O" : "X";

}
if (mode===2){ 
                  go.style.color = `white`
                go.style.backgroundColor = `red`
                go.textContent = x


                let emptyCells = Array.from(tableElements).filter(cell => cell.textContent === "");
if (emptyCells.length>0) {
  let oRandom = Math.floor(Math.random()*emptyCells.length)
  let random = emptyCells[oRandom]
  random.textContent = "O";
random.style.backgroundColor = "blue";
random.style.color = "white";
console.log(random.textContent);

}
}

// -------------------------------------------------------


// ---------------------------------------------
    for (let [a, b, c] of combos) {
    if (tableElements[a].textContent  !== "" &&
        tableElements[a].textContent === tableElements[b].textContent &&
        tableElements[a].textContent === tableElements[c].textContent) {
      alert(`Победа: ${tableElements[a].textContent}`);

vin = true
    resetGame();
      return;
      
        }
    }


// ---------------------------------------------
let friendEnd = true;
for (let cell of tableElements) {
    if (cell.textContent === "") {
        friendEnd = false;
        break;  
    }    
}
// ---------------------------------------------


if (friendEnd && !vin) {
    vin = false;
    alert("Ничья!");
resetGame()
    return; 
}


    })    
// ---------------------------------------------
  });



  btnElement1.addEventListener("click", ()=>{ mode = 1; alert("Нажата кнопка 1"); });
btnElement2.addEventListener("click", ()=>{ mode = 2; alert("Нажата кнопка 2"); });