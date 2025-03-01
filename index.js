let turn = 1; // 1->X and 2->O
const winConditions = []

const displayTurn = document.getElementById("displayTurn")

function getSymbol(Turn) {
    return Turn == 1 ? "X" : "O";
}

function markSymbol(button) {
    console.log(turn)
    const symbol = getSymbol(turn);
    console.log(symbol)
    button.innerHTML = symbol
}

function DisplayTurn(turn) {
    displayTurn.innerHTML = (`TURN : PLAYER ${turn}`);
}

DisplayTurn(turn)

function nextTurn(turn) {
    return turn == 1 ? 2 : 1
}