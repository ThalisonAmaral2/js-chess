import { convertToSquareId } from "../../scripts/convert.js";

export const kingMove = (row, col, pieceColor, currentPosition) => {
    const moves = [];
    const directions = [-1, 0, 1];

    
    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions.length; j++) {

        const newRow = row + directions[i];
        const newCol = col + directions[j];
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const piece = currentPosition[newRow][newCol];
            if(piece == null || piece.classList.value != pieceColor ){
                const square = [newRow, newCol];
                moves.push(square);
            }

        }
        
      }
    }
    
    let legalMoves = [];

    for (let i = 0; i < moves.length; i++) {
        const newRow = moves[i][0];
        const newCol = moves [i][1];
        const squareId = convertToSquareId(newRow, newCol);
        legalMoves.push(squareId)
        
    }
    console.log(legalMoves)

    return legalMoves;
}