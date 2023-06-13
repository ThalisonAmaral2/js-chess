import { convertToSquareId } from "../../scripts/convert.js";

export const rookMove = (row, col, pieceColor, currentPosition) => {
    const moves = [];
    const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
   

    for (let i = 0; i < directions.length; i++) {
   
        let [dx, dy] = directions[i];
        let [newRow, newCol] = [row+dx, col+dy]

        while(newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8){
            const piece = currentPosition[newRow][newCol];
            if(piece == null){
                moves.push([newRow, newCol]);
            }else if (piece.classList.value != pieceColor){
                moves.push([newRow, newCol]);
                break;
            }else {
                break;
            }
            newRow += dx;
            newCol += dy;
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

