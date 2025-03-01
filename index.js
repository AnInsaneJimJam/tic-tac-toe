let turn = 2; // 1->X and 2->O
const winConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

const displayTurn = document.getElementById("displayTurn")

function getSymbol(Turn) {
    return Turn == 1 ? "X" : "O";
}

function markSymbol(button) {
    const symbol = getSymbol(turn);
    button.innerHTML = symbol;
    nextTurn()
    button.removeAttribute("onClick")
}

function DisplayTurn(turn) {
    displayTurn.innerHTML = (`TURN : PLAYER ${turn}`);
}

DisplayTurn(turn)

function nextTurn() {
    turn = (turn == 1 )? 2 : 1
}