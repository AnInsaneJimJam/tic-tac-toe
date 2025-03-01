let turn = 1; // 1->X and 2->O
let gameEnded = false

const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
const X = [];
const O = [];

const displayTurn = document.getElementById("displayTurn")
const reset = document.getElementById("reset")

function getSymbol(Turn) {
    return Turn == 1 ? "X" : "O";
}

function markSymbol(button) {
    const symbol = getSymbol(turn);
    button.innerHTML = symbol;
    const idx = Number(button.id)
    symbol == "X" ? X.push(idx) : O.push(idx)
    console.log(symbol)
    if (isWinner(symbol == "X" ? X : O)) {
        document.getElementsByClassName("Winner")[0].innerHTML = `Winner : ${symbol}`
        document.querySelectorAll(".grid button").forEach(button => {
            button.disabled = true;
        });
        gameEnded = true
    }

    nextTurn()
    button.removeAttribute("onClick")
    DisplayTurn(turn)
}

function DisplayTurn(turn) {
    gameEnded ? displayTurn.innerHTML = ("GAME ENDED") : displayTurn.innerHTML = (`TURN : PLAYER ${turn}`);
}

function nextTurn() {
    turn = (turn == 1) ? 2 : 1
}

function isWinner(type) {
    let isSubset = false;
    for (let i = 0; i < 8; i++) {
        isSubset = winConditions[i].every(elem => type.includes(elem));
        if (isSubset) break
    }
    return isSubset
}

function newGame() {
    location.reload();
}

DisplayTurn(turn)

