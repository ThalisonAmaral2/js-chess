import { convertToSquareId } from "../../scripts/convert.js";

export const knightMove = (row, col, pieceColor, currentPosition) => {
  
    const moves = [];
    const directions = [[-2,-1], [-2,1], [-1,-2], [-1,2], [1,-2], [1,2], [2,-1], [2,1]];

    for (let i = 0; i < directions.length; i++) {

        const [dx, dy] = directions[i];
        let [newRow, newCol] = [row+dx, col+dy]



        if(newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8){
            const piece = currentPosition[newRow][newCol];
            if(piece == null || piece.classList.value != pieceColor){
                moves.push([newRow, newCol])
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