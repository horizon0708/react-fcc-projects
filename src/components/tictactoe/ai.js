// ai should be given the game state, then return a next move.
import * as logic from './logic';

export function evaluateNextMove(gameState){
    if (logic.gameIsOver(gameState)){
        return null;
    }
    if (goForWin(gameState)){
        return goForWin(gameState);
    }
    if (defend(gameState)){
        return defend(gameState);
    }
    if (connectTwo(gameState)){
        return connectTwo(gameState);
    }
    return randomMove(gameState)
}

export function goForWin(gameState){
    return findNextMove(gameState, 2, 1);
}

export function defend(gameState){
    return findNextMove(gameState, 1, 1);
}

export function connectTwo(gameState){
    return findNextMove(gameState, 2, 2);
}

// find win condition for a player. 
function findNextMove(gameState, player, emptySquaresInARow){
    for (var i = 0; i < logic.winConditions.length; i++) {
        // check whether there are two of your squares and one empty square.
        let playerSquare =0 , empty= 0, move = 0;
        for (var n = 0; n < logic.winConditions[i].length; n++) {
            const winCons = logic.winConditions[i];
            if (gameState[winCons[n]] === player ) { 
                playerSquare++;
            }
            if (gameState[winCons[n]] === 0 ) { 
                empty++;
                move = winCons[n];
            }
            if (playerSquare===(3-emptySquaresInARow) && empty === emptySquaresInARow){
                return move;
            }
        }
    }
    return 0;
}

export function randomMove(gameState){
    let diagonalStartingPoints = [1,3,5,7];
    let startArr = [];
    let tempArr = [];
    for (var square in gameState) {
        if (gameState.hasOwnProperty(square)) {
            if(gameState[square] === 0 && diagonalStartingPoints.indexOf(parseInt(square, 10)) >= 0){               
                startArr.push(square);
            }
            if(gameState[square] === 0){               
                tempArr.push(square);
            }
        }
    }
    if (startArr.length > 0) {
        return parseInt(shuffleArray(startArr)[0],10);
    } else {
        return parseInt(shuffleArray(tempArr)[0],10);
        
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}