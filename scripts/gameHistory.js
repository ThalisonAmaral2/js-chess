// --- CHESSGAME HISTORY VARIABLES --- //

let moveNumber = 0;
let lastNumber;


const getPosition = (idSquares) => {
    //Extract and returns a matrix of the chess position

    let chessboard = [[],[],[],[], [],[],[],[]]  
                   

    let col = 0; let row = 0;
    for (let i = 0; i < 64; i++) {
        const squareId = idSquares[row][col]
        const square = document.getElementById(squareId)

        chessboard[row][col] = square.firstElementChild

        col++
        if (col == 8 ){
            col = 0;
            row++;
        }
    }

    //Returns a picture of a "current" position
    return chessboard;
}

const savePosition = (gameHistory, position) => {
    //Get the matrix of a chess position 
    //and pushes it to a list of history of chess positions

    //returns the new history

    let updatedHistory = gameHistory;
    updatedHistory.push(position);


    return updatedHistory;
}

export { getPosition, savePosition, moveNumber, lastNumber }