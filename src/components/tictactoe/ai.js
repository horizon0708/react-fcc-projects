// ai should be given the game state, then return a next move.
import * as logic from './logic';

export function evaluateNextMove(gameState){
    // 1. if there is an immediate win condition, place there
	// 2. if there is an immediate lose condition, place there
	// 3. check for double prong possibility
	// 4. try to make 2
    // 5. randomise?

    if (logic.gameIsOver()){
        return null;
    }

    if (goForWin(gameState)){
        return goForWin(gameState);
    };
    
}

function goForWin(gameState){
    //checks for immediate win condition, if it exists return the square/ or 0.
    for (var i = 0; i < logic.winConditions.length; i++) {
        // check whether there are two of your squares and one empty square.
        let aiSquare, empty, move = 0
        for (var n = 0; n < logic.winConditions[i].length; n++) {
            const winCons = logic.winConditions[i];
            if (gameState[winCons[n]] === 2 ) { 
                aiSquare++;
            }
            if (gameState[winCons[n]] === 0 ) { 
                empty++;
                move = winCons[n];
            }
            if (aiSquare===2 && empty ===1){
                return move;
            }
        }
    }
    return 0;
}

function defend(gameState){

}