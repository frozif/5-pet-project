var tableElements = [].slice.call(document.querySelectorAll(".tb"));
var btnElement1 = document.querySelector(".btn1");
var btnElement2 = document.querySelector(".btn2");
var btnElementX = document.querySelector(".btnX");
var btnElementO = document.querySelector(".btnO");
var btnsElement = document.querySelector(".btns");
var boardElement = document.querySelector(".board");
var btnsCHElement = document.querySelector(".btns.btnsCh");
var bot = "";
var player = "";
var x = "X";
// ---------------------------------------------------------------------------------------
// массив с комбинациями и результатом
var combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var vin = false;
var result = [];
var gameOver = false;
var mode = null;
function XO() {
    btnsElement.style.display = "none";
    btnsCHElement.style.display = "flex";
    boardElement.style.pointerEvents = "none";
}
function resetGame() {
    tableElements.forEach(function (elm) {
        elm.textContent = "";
        elm.style.backgroundColor = "";
    });
    btnsElement.style.display = "flex";
    btnsCHElement.style.display = "none";
    vin = false;
    x = "X";
    btnsCHElement.style.pointerEvents = "auto";
    boardElement.style.pointerEvents = "none";
}
// ---------------------------------------------------------------------------------------
btnElement1.addEventListener("click", function () {
    mode = 1;
    alert("Нажата кнопка 1");
    XO();
});
btnElement2.addEventListener("click", function () {
    mode = 2;
    alert("Нажата кнопка 2");
    XO();
});
btnElementX.addEventListener("click", function () {
    player = "X";
    x = player;
    bot = "O";
    btnsCHElement.style.pointerEvents = "none";
    boardElement.style.pointerEvents = "auto";
});
btnElementO.addEventListener("click", function () {
    player = "O";
    x = player;
    bot = "X";
    boardElement.style.pointerEvents = "auto";
    btnsCHElement.style.pointerEvents = "none";
});
// ---------------------------------------------------------------------------------------
tableElements.forEach(function (go) {
    go.addEventListener(("click"), function () {
        var _a, _b, _c;
        if (go.textContent !== "" || vin || !mode)
            return;
        go.textContent = x;
        if (mode === 1) {
            go.style.color = "white";
            go.style.backgroundColor = x === "X" ? "blue" : "red";
            x = x === "X" ? "O" : "X";
        }
        if (mode === 2) {
            go.style.color = "white";
            go.style.backgroundColor = "red";
            go.textContent = x;
            // let emptyCells = Array.from(tableElements).filter(cell => cell.textContent === "");
            var emptyCells = [].slice.call(tableElements).filter(function (cell) { return cell.textContent === ""; });
            if (emptyCells.length > 0) {
                var oRandom = Math.floor(Math.random() * emptyCells.length);
                var random = emptyCells[oRandom];
                random.textContent = bot;
                random.style.backgroundColor = "blue";
                random.style.color = "white";
                console.log(random.textContent);
            }
        }
        // -------------------------------------------------------
        // ---------------------------------------------
        for (var _i = 0, combos_1 = combos; _i < combos_1.length; _i++) {
            var _d = combos_1[_i], a = _d[0], b = _d[1], c = _d[2];
            var elA = tableElements[a];
            var elB = tableElements[b];
            var elC = tableElements[c];
            if (!elA || !elB || !elC)
                continue;
            var textA = (_a = elA.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            var textB = (_b = elB.textContent) === null || _b === void 0 ? void 0 : _b.trim();
            var textC = (_c = elC.textContent) === null || _c === void 0 ? void 0 : _c.trim();
            if (textA && textA === textB && textA === textC) {
                alert("\u041F\u043E\u0431\u0435\u0434\u0430: ".concat(textA));
                vin = true;
                resetGame();
                return;
            }
        }
        // ---------------------------------------------
        var friendEnd = true;
        for (var _e = 0, tableElements_1 = tableElements; _e < tableElements_1.length; _e++) {
            var cell = tableElements_1[_e];
            if (cell.textContent === "") {
                friendEnd = false;
                break;
            }
        }
        // ---------------------------------------------
        if (friendEnd && !vin) {
            vin = false;
            alert("Ничья!");
            resetGame();
            return;
        }
    });
    // ---------------------------------------------
});
if (btnElement1) {
    btnElement1.addEventListener("click", function () {
        mode = 1;
        alert("Нажата кнопка 1");
    });
}

btnElement2.addEventListener("click", function () { mode = 2; alert("Нажата кнопка 2"); });
