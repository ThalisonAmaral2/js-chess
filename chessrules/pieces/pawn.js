import { convertToSquareId } from "../../scripts/convert.js";

export const pawnMove = (row, col, color, currentPosition) => {
    const moves = [];
    let direction;

    if(color == 'white'){
        direction = 1;
    }else {
        direction = -1;
    }

    const newRow = row + direction;

    // Move pawn ahead

    if(currentPosition[newRow][col] === null){

        moves.push([newRow, col]);

        if(color === "white" && row == 1){
            moves.push([newRow+1, col])
        }
        else if (color === "black" && row == 6){
            moves.push([newRow-1, col])
        }
    }

    //Move the pawn to capture a piece
    const colsToCheck = [col - 1, col + 1];
    for (let i = 0; i < colsToCheck.length; i++) {

        const newCol = colsToCheck[i];                    //Pegando cada coluna individualmente
        const newRow = row + direction;

        if (currentPosition[newRow][newCol] !== null) {
            moves.push([newRow, newCol]);
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