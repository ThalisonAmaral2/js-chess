import { pawnMove } from './pieces/pawn.js'
import { knightMove } from './pieces/knight.js';
import { bishopMove } from './pieces/bishop.js';
import { rookMove } from './pieces/rook.js'
import { queenMove } from './pieces/queen.js';
import { kingMove } from './pieces/king.js';

const findLegalMoves = (selectedPiece, currentPosition) => {

    const id = {
        h: 0, g: 1, f: 2, e: 3, d: 4, c: 5, b: 6, a: 7
    };

    const col = id[selectedPiece.squareId[0]];
    const row = parseInt(selectedPiece.squareId[1]) - 1;

    const pieceColor = selectedPiece.color;
    const pieceType = selectedPiece.type;
  
    switch (pieceType) {
            case 'king':
                return kingMove(row, col, pieceColor, currentPosition)
            case 'queen':
                return queenMove(row, col, pieceColor, currentPosition)
            case 'bishop':
                return bishopMove(row, col, pieceColor, currentPosition)
            case 'rook':
                return rookMove(row, col, pieceColor, currentPosition)
            case 'knight':
                return knightMove(row, col, pieceColor, currentPosition)
            case 'pawn':
                return pawnMove(row, col, pieceColor, currentPosition)
            default:
                break;
        }
        return legalMoves
}

const findAttackedSquares = () => {

}

export {findLegalMoves}