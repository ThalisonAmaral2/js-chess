import { findLegalMoves } from './findLegalMoves.js';

const selectPiece = (currentPiece, pieceColor, currentId, currentPosition) => {
    //Selects a piece and returns an object with data;
    let moved = false;
    let pieceImg = currentPiece.offsetParent.innerHTML;
    let pieceType = currentPiece.id;

    

    let selectedPiece = {
        type: pieceType,
        color: pieceColor,
        pieceObject: currentPiece,
        pieceImg: pieceImg,
        squareId: currentId,                //With this I can call the Element from its squareId
        legalMoves: undefined,
        moved: moved,
    };

    
    //FIND LEGAL MOVES FOR THAT SPECIFIC PIECE
    selectedPiece.legalMoves = findLegalMoves(selectedPiece, currentPosition);

    return selectedPiece
}

const movePiece = (selectedPiece, currentId, id) => {
    const originId = selectedPiece.squareId;
    id[currentId].innerHTML = selectedPiece.pieceImg;
    id[originId].innerHTML = '';

    if(selectedPiece.color == 'white'){             //Updates the turn when the move is executed
        return 'black';

    }else {
        return 'white'
    }

}

export {selectPiece, movePiece}