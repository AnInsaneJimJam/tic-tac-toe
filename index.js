let turn = 1; // 1->X and 2->O


function getSymbol(turn){
    return turn = 1 ? "X":"O" 
}

function markSymbol(button,turn){
    const symbol = getSymbol(turn);
    button.innerHTML = symbol
}