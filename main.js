import { getPosition, savePosition, moveNumber, lastNumber } from './scripts/gameHistory.js';
import { chessboard, black, white, initialPosition, idSquares} from "./scripts/chessboard.js";
import { newGame, renderPieces, renderSquares } from './scripts/render.js';
import { selectPiece, movePiece } from "./chessrules/clickEvent.js";
import { findLegalMoves } from './chessrules/findLegalMoves.js';



const initializeBoard = (boardType, side) => {
    const gameHistory = newGame(chessboard, idSquares, initialPosition);
    let selectedPiece;
    let turn = 'white';
    const squares = document.querySelectorAll('.square');
  
    const id = {
      h1, g1, f1, e1, d1, c1, b1, a1,
      h2, g2, f2, e2, d2, c2, b2, a2,
      h3, g3, f3, e3, d3, c3, b3, a3,
      h4, g4, f4, e4, d4, c4, b4, a4,
      h5, g5, f5, e5, d5, c5, b5, a5,
      h6, g6, f6, e6, d6, c6, b6, a6,
      h7, g7, f7, e7, d7, c7, b7, a7,
      h8, g8, f8, e8, d8, c8, b8, a8,
    };
  
    flipper(side);
  
    const trySelection = (currentPieceColor, currentPiece, currentId, currentPosition) => {
      if (currentPieceColor === turn) {
        selectedPiece = selectPiece(currentPiece, currentPieceColor, currentId, currentPosition);
        console.log(selectedPiece);
      } else {
        selectedPiece = undefined;
        console.log('Seleção resetada', selectedPiece);
      }
    };
  
    const selectOrMove = (currentPieceColor, currentPiece, currentId, currentPosition) => {
      if (selectedPiece === undefined) {
        trySelection(currentPieceColor, currentPiece, currentId, currentPosition);
      } else {
        const legalMoves = selectedPiece.legalMoves;
        if (legalMoves.includes(currentId)) {
          turn = movePiece(selectedPiece, currentId, id);
          selectedPiece = undefined;
          savePosition(gameHistory, currentPosition);
        } else {
          selectedPiece = undefined;
          trySelection(currentPieceColor, currentPiece, currentId, currentPosition);
        }
      }
    };
  
    squares.forEach((currentSquare) => {
      currentSquare.addEventListener('click', (e) => {
        const currentPosition = getPosition(idSquares);
        const currentPiece = currentSquare.firstChild;
        let currentPieceColor;
        const currentId = currentSquare.id;
  
        if (currentPiece != null) {
          currentPieceColor = currentPiece.classList.value;
        }
        
        selectOrMove(currentPieceColor, currentPiece, currentId, currentPosition);
      });
  
      currentSquare.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    });
};
  
  
initializeBoard('newGame', 'black');

