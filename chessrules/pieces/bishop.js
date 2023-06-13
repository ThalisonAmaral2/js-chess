import { convertToSquareId } from "../../scripts/convert.js";

export const bishopMove = (row, col, pieceColor, currentPosition) => {
  const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
  const moves = [];
  
  for (const [dx, dy] of directions) {
    let [newRow, newCol] = [row + dx, col + dy];

    while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const piece = currentPosition[newRow][newCol];

      if (piece === null || piece.classList.value !== pieceColor) {
        moves.push([newRow, newCol]);
      }

      if (piece !== null) {
        break;
      }

      newRow += dx;
      newCol += dy;
    }
  }

  const legalMoves = moves.map(([newRow, newCol]) =>
    convertToSquareId(newRow, newCol)
  );

  console.log(legalMoves);

  return legalMoves;
};
