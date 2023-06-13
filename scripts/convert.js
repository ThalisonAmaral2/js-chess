export const convertToSquareId = (row, col) => {
    const id = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const squareId = `${id[col]}${row+1}`;
    return squareId;
  };

