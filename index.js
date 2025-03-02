let turn = 1 // 1->X and 2->O
let gameEnded = false;
let turnCount = 1;

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

const displayWinner = document.getElementsByClassName("Winner")[0]
const displayTurn = document.getElementById("displayTurn")
const reset = document.getElementById("reset")

function getSymbol(Turn) {
    return Turn == 1 ? "X" : "O";
}

function markSymbol(button) {
    if (turnCount == 9) {
        endGame();
        draw();
    }
    const symbol = getSymbol(turn);
    button.innerHTML = symbol;
    const idx = Number(button.id)
    symbol == "X" ? X.push(idx) : O.push(idx)
    console.log(symbol)
    if (isWinner(symbol == "X" ? X : O)) {
        endGame();
    }
    turnCount++;
    nextTurn()
    button.removeAttribute("onClick")
    DisplayTurn(turn)
}

function DisplayTurn(turn) {
    if (gameEnded) {
        displayTurn.innerHTML = ("GAME ENDED !!")
        displayTurn.style.color = "rgb(61, 0, 0)"
    }
    else {
        displayTurn.innerHTML = (`TURN : PLAYER ${turn}`);
        turn == 1 ? displayTurn.style.color = "rgb(113, 231, 254)" : displayTurn.style.color = "rgb(32, 255, 117)"
    }
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
function endGame() {
    displayWinner.innerHTML = `Winner : ${getSymbol(turn)} !!`
    turn == 1 ? displayWinner.style.color = "rgb(113, 231, 254)" : displayTurn.style.color = "rgb(32, 255, 117)"
    document.querySelectorAll(".grid button").forEach(button => {
        button.disabled = true;
    });
    gameEnded = true
}
function draw() {
    document.getElementsByClassName("Winner")[0].innerHTML = "Game Resulted in a Draw !!"
    displayWinner.style.color = "rgb(255, 255, 255)"
}

function newGame() {
    location.reload();
}

DisplayTurn(turn)

