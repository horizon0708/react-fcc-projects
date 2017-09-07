var board = [];
var turn = 1;
var isGameOver = false;
var vsAI = false;
var horizontalWinConditions = [[],[],[]];
var verticalWinConditions = [[], [], []];
var diagonalWinConditions = [[], []];
var winConditions = [];

var aiMoves = [];
var playerMoves = [];
var combinedMoves = [];


function square(x, y, owner) {
	this.x = x;
	this.y = y;
	this.owner = owner;
}

function gameStart() {
	initialiseBoard();
	populateWinConditions();
}

function gameRestart() {
	console.log(winConditions);
	aiMoves = [];
	playerMoves = [];
	board = [];
	combinedMoves = [];
	turn = 1;
	isGameOver = false;
	initialiseBoard();
	clearBoard();
}

function initialiseBoard() {
	for (var i = 0; i < 3; i++) {
		for (var n = 0; n < 3; n++) {
			board.push(new square(i, n, 0));
		}
	}
}

function populateWinConditions() {
	for (var i = 0; i < board.length; i++) {
		for (var n = 0; n < 3; n++) {
			if (board[i]['x'] == n) {
				horizontalWinConditions[n].push(i);
			}
			if (board[i]['y'] == n) {
				verticalWinConditions[n].push(i);
			}
		}
		if (board[i]['x'] == board[i]['y']) {
			diagonalWinConditions[0].push(i);
		}
		if (board[i]['x'] + board[i]['y'] == 2) {
			diagonalWinConditions[1].push(i);
		}
	}
	winConditions = [
		horizontalWinConditions[0],
		horizontalWinConditions[1],
		horizontalWinConditions[2],
		verticalWinConditions[0],
		verticalWinConditions[1],
		verticalWinConditions[2],
		diagonalWinConditions[0],
		diagonalWinConditions[1]
	];
}

function checkWinConditions() { // returns the integer of the winner. P1 win -> 1, P2 win -> 2, none -> 0.
	//console.log(winConditions);
	for (var i =0; i< winConditions.length; i++){
		if (areEqual(board[winConditions[i][0]]['owner']
		,board[winConditions[i][1]]['owner']
		,board[winConditions[i][2]]['owner']
		)){
			return board[winConditions[i][0]]['owner'];
		}
	}
	return 0;
}

function areEqual() {
	var len = arguments.length;
	for (var i = 1; i < len; i++) {
		if (arguments[i] === 0 || arguments[i] !== arguments[i - 1]) // 0 is empty square
			return false;
	}
	return true;
}

// --------- player moves ---------

function onSquareClick(square) {
	// check whether it is a valid time to move
	if (vsAI && turn != 1
		|| square['owner'] !== 0
		|| isGameOver) {
		return;
	}
	// if its not, the active player takes the square
	square['owner'] = turn;
	drawBoard();
	// check for win condition
	if (checkWinConditions() > 0) {
		isGameOver = true;
		$('#winner').html("Winner is: " + checkWinConditions());
		// TODO: do winner stuff

	}
	// change turn
	turn == 1 ? turn = 2 : turn = 1;
	
	// if(vsAI){
		aiMove();
		drawBoard();
		if (checkWinConditions() > 0) {
			isGameOver = true;
			$('#winner').html("Winner is: " + checkWinConditions());
		// TODO: do winner stuff
		}
	//}
	// if playing against AI, ai moves after player makes his move
}

// --------- DOM manipuation ---------
$(document).ready(function () {
	gameStart();
});

$('.square').click(function (e) {
	onSquareClick(board[e.target.id]);
});

$('#restart').click(function (e) {
	gameRestart();
	$('#winner').html("");
})

function drawBoard() {
	for (var i = 0; i < board.length; i++) {
    $('#' + i).html(board[i]['owner']);
    //console.log(board[i]['owner']);
    //drawCirclesAndCrosses(i, board[i]['owner']);
	}
}

function drawCirclesAndCrosses(i, owner){
  if (owner === 1){
    $('#' + i).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
  } else if (owner === 2){
    $('#' + i).html('<i class="fa fa-times-o" aria-hidden="true"></i>');
  } else {
    $('#' + i).html(' ');
  }
  
}

function clearBoard() {
	for (var i = 0; i < board.length; i++) {
		$('#' + i).html('');
	}
}

// --------- AI ---------

function aiMove() {
	// 1. if there is an immediate win condition, place there
	// 2. if there is an immediate lose condition, place there
	// 3. check for double prong possibility
	// 4. try to make 2
	// 5. randomise?
	//console.log(playerMoves);
	//console.log(aiMoves);
	if(isGameOver){
		return;
	}	
	refreshMoves();
	// if (typeof immediateEndCheck(aiMoves) == 'number') { // 1.
	// 	board[immediateEndCheck(aiMoves)]['owner'] = 2;
	// 	turn = 1;
	// 	return;
	// }
	// if (typeof immediateEndCheck(playerMoves) == 'number') { // 2.
	// 	board[immediateEndCheck(playerMoves)]['owner'] = 2;
	// 	turn = 1;
	// 	return;
	// }
	console.log(connectTwo());
	if (connectTwo()){
		// board[connectTwo() - 1]['owner'] = 2;
		
		// turn = 1;
		// console.log("connectTwo");
		return;
	}
	if (typeof randomMove() == "number") {
		//console.log(board[randomMove()]);
		board[randomMove()]['owner'] = 2;
		turn = 1;
		console.log("random");
		//console.log(board);
		return;
	}
	return;
}

function refreshMoves() {
		aiMoves = [];
		playerMoves = [];
		combinedMoves = [];
	for (var i = 0; i < board.length; i++) {
		if (board[i]['owner'] == 2) {
			aiMoves.push(i);
		}
		if (board[i]['owner'] == 1) {
			playerMoves.push(i);
		}
		if (board[i]['owner'] !== 0) {
			combinedMoves.push(i);
		}
	}
}


//compare index numbers to the win conditions.
// if two of the index numbers match a particular win condition...
// deploy at the index number not yet there.


function immediateEndCheck(arr) { // returns the winning move(number) or false
    for (var i = 0; i < winConditions.length; i++) {
		var moves = winConditions[i];
		for (var n = 0; n < 3; n++) {
			if (moves.length == 1 && board[moves[0]]['owner'] == 0){
				return moves[0];
			}
			if (arr.indexOf(winConditions[i][n]) !== -1) {
				//moves.splice(n, 1);
			}
		}
	}
	return false;
}
// TODO: why do i even have separate win conditions??? they are all teh same!!!


// compare winconditions to played squares, return array of available wincodntions for each player
// if the wincondition exists for both players, take it out
// pick a square out of the remaining wincoditions.
function connectTwo(){
	if(aiMoves.length == 0){
		return false;
	}
	
	var candidateConditions = [];
	// get the index of potential winconditions
	loop1:
	for (var i = 0; i < winConditions.length; i++) {
		for (var n = 0; n < 3; n++) {
			if (aiMoves.indexOf(winConditions[i][n]) !== -1) {
				candidateConditions.push(i);
				continue loop1;
			}
		}
	}
	//console.log("canddiates: "+ candidateConditions);
	if (candidateConditions.length == 0){
		return false;
	}
	// check whether enemy move block any of the potential win conditions.
	console.log("players have moved: " + playerMoves);

	for (var i = candidateConditions.length -1; i > -1; i--){
		for (var n = 0; n < 3; n++) {
			if (playerMoves.indexOf(winConditions[candidateConditions[i]][n]) !== -1){
				candidateConditions.splice(i,1);
				console.log('remaining canddiate conditions are: ' + candidateConditions);
				continue;
			}
		}
	}
	console.log(candidateConditions);
	// of course!, for + splice won't work! make for go in reverse!

	if (candidateConditions.length < 1){
		return false;
	}
	console.log('final candidate conditions are: ' + candidateConditions);
	console.log('final candidate condition indexs is: '+ candidateConditions[0]);// + ". containing: " +
	//winConditions[candidateConditions[0]][0], winConditions[candidateConditions[0]][1], winConditions[candidateConditions[0]][2]);
	for (var i = 0; i < winConditions[candidateConditions[0]].length; i++) {
		if (board[winConditions[candidateConditions[0]][i]]['owner'] === 0 ){
			return winConditions[candidateConditions[0]][i] + 1;
		}
		
		
		
		// if (aiMoves.indexOf(winConditions[candidateConditions[0]][i] === -1)){
		// 	console.log(aiMoves.indexOf(winConditions[candidateConditions[0]][i]));
		// 	console.log("i have moved: "+ aiMoves);
		// 	console.log("moving to: "+winConditions[candidateConditions[0]][i]);
		// 	return winConditions[candidateConditions[0]][i] + 1;
		// } 
	}
	return false;
}

function randomMove(){
	var moves = [0,1,2,3,4,5,6,7,8];
	//var combined = playerMoves.concat(aiMoves);
	//console.log("asdf");
	moves = shuffleArray(moves);
	for (var i = 0; i < board.length; i++) {
		if(board[moves[i]]['owner'] === 0){
			return moves[i];
		}	
	}
	return false;
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}var board = [];
var turn = 1;
var isGameOver = false;
var vsAI = false;
var horizontalWinConditions = [[],[],[]];
var verticalWinConditions = [[], [], []];
var diagonalWinConditions = [[], []];
var winConditions = [];

var aiMoves = [];
var playerMoves = [];
var combinedMoves = [];


function square(x, y, owner) {
	this.x = x;
	this.y = y;
	this.owner = owner;
}

function gameStart() {
	initialiseBoard();
	populateWinConditions();
}

function gameRestart() {
	console.log(winConditions);
	aiMoves = [];
	playerMoves = [];
	board = [];
	combinedMoves = [];
	turn = 1;
	isGameOver = false;
	initialiseBoard();
	clearBoard();
}

function initialiseBoard() {
	for (var i = 0; i < 3; i++) {
		for (var n = 0; n < 3; n++) {
			board.push(new square(i, n, 0));
		}
	}
}

function populateWinConditions() {
	for (var i = 0; i < board.length; i++) {
		for (var n = 0; n < 3; n++) {
			if (board[i]['x'] == n) {
				horizontalWinConditions[n].push(i);
			}
			if (board[i]['y'] == n) {
				verticalWinConditions[n].push(i);
			}
		}
		if (board[i]['x'] == board[i]['y']) {
			diagonalWinConditions[0].push(i);
		}
		if (board[i]['x'] + board[i]['y'] == 2) {
			diagonalWinConditions[1].push(i);
		}
	}
	winConditions = [
		horizontalWinConditions[0],
		horizontalWinConditions[1],
		horizontalWinConditions[2],
		verticalWinConditions[0],
		verticalWinConditions[1],
		verticalWinConditions[2],
		diagonalWinConditions[0],
		diagonalWinConditions[1]
	];
}

function checkWinConditions() { // returns the integer of the winner. P1 win -> 1, P2 win -> 2, none -> 0.
	//console.log(winConditions);
	for (var i =0; i< winConditions.length; i++){
		if (areEqual(board[winConditions[i][0]]['owner']
		,board[winConditions[i][1]]['owner']
		,board[winConditions[i][2]]['owner']
		)){
			return board[winConditions[i][0]]['owner'];
		}
	}
	return 0;
}

function areEqual() {
	var len = arguments.length;
	for (var i = 1; i < len; i++) {
		if (arguments[i] === 0 || arguments[i] !== arguments[i - 1]) // 0 is empty square
			return false;
	}
	return true;
}

// --------- player moves ---------

function onSquareClick(square) {
	// check whether it is a valid time to move
	if (vsAI && turn != 1
		|| square['owner'] !== 0
		|| isGameOver) {
		return;
	}
	// if its not, the active player takes the square
	square['owner'] = turn;
	drawBoard();
	// check for win condition
	if (checkWinConditions() > 0) {
		isGameOver = true;
		$('#winner').html("Winner is: " + checkWinConditions());
		// TODO: do winner stuff

	}
	// change turn
	turn == 1 ? turn = 2 : turn = 1;
	
	// if(vsAI){
		aiMove();
		drawBoard();
		if (checkWinConditions() > 0) {
			isGameOver = true;
			$('#winner').html("Winner is: " + checkWinConditions());
		// TODO: do winner stuff
		}
	//}
	// if playing against AI, ai moves after player makes his move
}

// --------- DOM manipuation ---------
$(document).ready(function () {
	gameStart();
});

$('.square').click(function (e) {
	onSquareClick(board[e.target.id]);
});

$('#restart').click(function (e) {
	gameRestart();
	$('#winner').html("");
})

function drawBoard() {
	for (var i = 0; i < board.length; i++) {
    $('#' + i).html(board[i]['owner']);
    //console.log(board[i]['owner']);
    //drawCirclesAndCrosses(i, board[i]['owner']);
	}
}

function drawCirclesAndCrosses(i, owner){
  if (owner === 1){
    $('#' + i).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
  } else if (owner === 2){
    $('#' + i).html('<i class="fa fa-times-o" aria-hidden="true"></i>');
  } else {
    $('#' + i).html(' ');
  }
  
}

function clearBoard() {
	for (var i = 0; i < board.length; i++) {
		$('#' + i).html('');
	}
}

// --------- AI ---------

function aiMove() {
	// 1. if there is an immediate win condition, place there
	// 2. if there is an immediate lose condition, place there
	// 3. check for double prong possibility
	// 4. try to make 2
	// 5. randomise?
	//console.log(playerMoves);
	//console.log(aiMoves);
	if(isGameOver){
		return;
	}	
	refreshMoves();
	// if (typeof immediateEndCheck(aiMoves) == 'number') { // 1.
	// 	board[immediateEndCheck(aiMoves)]['owner'] = 2;
	// 	turn = 1;
	// 	return;
	// }
	// if (typeof immediateEndCheck(playerMoves) == 'number') { // 2.
	// 	board[immediateEndCheck(playerMoves)]['owner'] = 2;
	// 	turn = 1;
	// 	return;
	// }
	console.log(connectTwo());
	if (connectTwo()){
		// board[connectTwo() - 1]['owner'] = 2;
		
		// turn = 1;
		// console.log("connectTwo");
		return;
	}
	if (typeof randomMove() == "number") {
		//console.log(board[randomMove()]);
		board[randomMove()]['owner'] = 2;
		turn = 1;
		console.log("random");
		//console.log(board);
		return;
	}
	return;
}

function refreshMoves() {
		aiMoves = [];
		playerMoves = [];
		combinedMoves = [];
	for (var i = 0; i < board.length; i++) {
		if (board[i]['owner'] == 2) {
			aiMoves.push(i);
		}
		if (board[i]['owner'] == 1) {
			playerMoves.push(i);
		}
		if (board[i]['owner'] !== 0) {
			combinedMoves.push(i);
		}
	}
}


//compare index numbers to the win conditions.
// if two of the index numbers match a particular win condition...
// deploy at the index number not yet there.


function immediateEndCheck(arr) { // returns the winning move(number) or false
    for (var i = 0; i < winConditions.length; i++) {
		var moves = winConditions[i];
		for (var n = 0; n < 3; n++) {
			if (moves.length == 1 && board[moves[0]]['owner'] == 0){
				return moves[0];
			}
			if (arr.indexOf(winConditions[i][n]) !== -1) {
				//moves.splice(n, 1);
			}
		}
	}
	return false;
}
// TODO: why do i even have separate win conditions??? they are all teh same!!!


// compare winconditions to played squares, return array of available wincodntions for each player
// if the wincondition exists for both players, take it out
// pick a square out of the remaining wincoditions.
function connectTwo(){
	if(aiMoves.length == 0){
		return false;
	}
	
	var candidateConditions = [];
	// get the index of potential winconditions
	loop1:
	for (var i = 0; i < winConditions.length; i++) {
		for (var n = 0; n < 3; n++) {
			if (aiMoves.indexOf(winConditions[i][n]) !== -1) {
				candidateConditions.push(i);
				continue loop1;
			}
		}
	}
	//console.log("canddiates: "+ candidateConditions);
	if (candidateConditions.length == 0){
		return false;
	}
	// check whether enemy move block any of the potential win conditions.
	console.log("players have moved: " + playerMoves);

	for (var i = candidateConditions.length -1; i > -1; i--){
		for (var n = 0; n < 3; n++) {
			if (playerMoves.indexOf(winConditions[candidateConditions[i]][n]) !== -1){
				candidateConditions.splice(i,1);
				console.log('remaining canddiate conditions are: ' + candidateConditions);
				continue;
			}
		}
	}
	console.log(candidateConditions);
	// of course!, for + splice won't work! make for go in reverse!

	if (candidateConditions.length < 1){
		return false;
	}
	console.log('final candidate conditions are: ' + candidateConditions);
	console.log('final candidate condition indexs is: '+ candidateConditions[0]);// + ". containing: " +
	//winConditions[candidateConditions[0]][0], winConditions[candidateConditions[0]][1], winConditions[candidateConditions[0]][2]);
	for (var i = 0; i < winConditions[candidateConditions[0]].length; i++) {
		if (board[winConditions[candidateConditions[0]][i]]['owner'] === 0 ){
			return winConditions[candidateConditions[0]][i] + 1;
		}
		
		
		
		// if (aiMoves.indexOf(winConditions[candidateConditions[0]][i] === -1)){
		// 	console.log(aiMoves.indexOf(winConditions[candidateConditions[0]][i]));
		// 	console.log("i have moved: "+ aiMoves);
		// 	console.log("moving to: "+winConditions[candidateConditions[0]][i]);
		// 	return winConditions[candidateConditions[0]][i] + 1;
		// } 
	}
	return false;
}

function randomMove(){
	var moves = [0,1,2,3,4,5,6,7,8];
	//var combined = playerMoves.concat(aiMoves);
	//console.log("asdf");
	moves = shuffleArray(moves);
	for (var i = 0; i < board.length; i++) {
		if(board[moves[i]]['owner'] === 0){
			return moves[i];
		}	
	}
	return false;
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