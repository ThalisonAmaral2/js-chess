
import {  getPosition, savePosition, moveNumber, lastNumber } from './gameHistory.js';

const renderSquares = (chessboard, idSquares) => {
    let row = 0;
    let col = 0;

    for (let i = 0; i < 64 ; i++) {
        const squareDiv = document.createElement('div');
        const squareId = idSquares[row][col];
        squareDiv.className = (squareId.charCodeAt(0) + squareId.charCodeAt(1)) % 2 === 0 ? 'dark square' : 'light square'
        squareDiv.id = squareId
        chessboard.appendChild(squareDiv)

        col++
        if (col == 8 ){
            col = 0;
            row++;
        }
    }
}

const renderPieces = (position, idSquares) => {
    let row = 0;
    let col = 0;
    for (let i = 0; i < 64; i++) {
        const squareId = idSquares[row][col]
        const square = document.getElementById(squareId);
        square.innerHTML = position[row][col]

        col++
        if (col == 8 ){
            col = 0;
            row++;
        }
    }
}



const newGame = (chessboard, idSquares, position) => {

    //Render all chessboard Elements
    renderSquares(chessboard, idSquares);
    renderPieces(position, idSquares);


    //Update position to history
    const initialPosition = getPosition(idSquares)
    const gameHistory = [];
    const newHistory = savePosition(gameHistory, initialPosition); 

    return newHistory
}



export {newGame, renderPieces, renderSquares}
