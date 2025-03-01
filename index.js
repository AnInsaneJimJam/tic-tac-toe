let turn = 2; // 1->X and 2->O

const displayTurn = document.getElementById("displayTurn")

function getSymbol(turn) {
    return turn == 1 ? "X" : "O";
}

function markSymbol(button, turn) {
    const symbol = getSymbol(turn);
    button.innerHTML = symbol
}

function DisplayTurn(turn) {
    displayTurn.innerHTML = (`TURN : PLAYER ${turn}`);
}

DisplayTurn(turn)