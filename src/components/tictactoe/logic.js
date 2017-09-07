

export function gameIsOver(gameState) {
    return checkForWin(gameState) !== 0;
}

// return player number if there is a winner, 3 for draw, otherwise return 0;
export function checkForWin(gameState){
    for (var i = 0; i < winConditions.length; i++) {
        if (gameState[winConditions[i][0]] === gameState[winConditions[i][1]] 
        && gameState[winConditions[i][1]] === gameState[winConditions[i][2]]
        ) {
            return gameState[winConditions[i][0]]
        }
    }

    for (var square in gameState) {
        if (gameState.hasOwnProperty(square)) {
            if(gameState[square] === 0){
                return 0;
            }
        }
    }    
    return 3;
}

export const winConditions = [
    // horizontal
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonall,
    [1, 5, 9],
    [3, 5, 7]
]