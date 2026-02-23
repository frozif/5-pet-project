const  tableElements = [].slice.call(document.querySelectorAll<HTMLDivElement>(`.tb`)!);  
const btnElement1 = document.querySelector(`.btn1`) as HTMLButtonElement    
const btnElement2 = document.querySelector(`.btn2`) as HTMLButtonElement
const btnElementX = document.querySelector(`.btnX`) as HTMLButtonElement
const btnElementO = document.querySelector(`.btnO`)as HTMLButtonElement
const btnsElement = document.querySelector(`.btns`) as HTMLDivElement
const boardElement = document.querySelector(`.board`) as HTMLDivElement
const btnsCHElement = document.querySelector(`.btns.btnsCh`)as HTMLDivElement
// console.log(btnsCHElement);
let bot = ``
let player = ``
let x  = `X`; 
// ---------------------------------------------------------------------------------------
// массив с комбинациями и результатом

let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
let vin = false 
let result = []
let gameOver = false;
let mode = null;

function XO(){
        btnsElement.style.display = `none`
    btnsCHElement.style.display = `flex`
        boardElement.style.pointerEvents = `none`
}

function resetGame() {
    tableElements.forEach(elm => {
        elm.textContent = "";
        elm.style.backgroundColor = "";
    });
         btnsElement.style.display = `flex`
    btnsCHElement.style.display = `none`
    vin = false;
    x = "X";
        btnsCHElement.style.pointerEvents  = `auto`
                    boardElement.style.pointerEvents = `none`
}


// ---------------------------------------------------------------------------------------


  btnElement1.addEventListener("click", ()=>{ mode = 1;alert("Нажата кнопка 1")
XO()
   });

btnElement2.addEventListener("click", ()=>{ mode = 2; alert("Нажата кнопка 2"); 
    XO()
});



   btnElementX.addEventListener(`click`, ()=>{
    player = `X`
x = player
bot = `O`
    btnsCHElement.style.pointerEvents  = `none`
        boardElement.style.pointerEvents = `auto`
   })

   btnElementO.addEventListener(`click`, ()=>{
    player = `O`
x = player
bot = `X`
    boardElement.style.pointerEvents = `auto`
    btnsCHElement.style.pointerEvents  = `none`
   })
   
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


                // let emptyCells = Array.from(tableElements).filter(cell => cell.textContent === "");
                       let emptyCells = [].slice.call(tableElements).filter((cell: Element) => cell.textContent === "");  
if (emptyCells.length>0) {
  let oRandom = Math.floor(Math.random()*emptyCells.length)
  let random = emptyCells[oRandom]!
  random.textContent = bot;
random.style.backgroundColor = "blue";
random.style.color = "white";
console.log(random.textContent);

}
}

// -------------------------------------------------------


// ---------------------------------------------

    for (const [a, b, c] of combos) {
        const elA = tableElements[a];
          const elB  = tableElements[b];
           const elC  = tableElements[c]; 
      if (!elA || !elB || !elC) continue; 
               const textA  = elA.textContent?.trim();
          const textB  = elB.textContent?.trim();
           const textC  = elC.textContent?.trim();

                 if (textA && textA === textB && textA === textC) {
alert(`Победа: ${textA}`);
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


if (btnElement1) {
      btnElement1.addEventListener("click", ()=>{
         mode = 1;
          alert("Нажата кнопка 1");
         });
}

btnElement2!.addEventListener("click", ()=>{ mode = 2; alert("Нажата кнопка 2"); });