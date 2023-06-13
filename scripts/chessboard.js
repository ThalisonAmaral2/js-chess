//All the DATA about chessboard

const chessboard = document.getElementById('chessboard')
const idSquares = [
    ['h1','g1','f1','e1','d1','c1','b1','a1'],
    ['h2','g2','f2','e2','d2','c2','b2','a2'],
    ['h3','g3','f3','e3','d3','c3','b3','a3'],
    ['h4','g4','f4','e4','d4','c4','b4','a4'],
    ['h5','g5','f5','e5','d5','c5','b5','a5'],
    ['h6','g6','f6','e6','d6','c6','b6','a6'],
    ['h7','g7','f7','e7','d7','c7','b7','a7'],
    ['h8','g8','f8','e8','d8','c8','b8','a8'],
]




const white = {
    king:`<img class='white' id='king' src='./pieces/whiteKing.png'/>`,
    queen:`<img class='white' id='queen' src='./pieces/whiteQueen.png'/>`,
    bishop:`<img class='white' id='bishop' src='./pieces/whiteBishop.png'/>`,
    knight:`<img class='white' id='knight' src='./pieces/whiteKnight.png'/>`,
    rook:`<img class='white' id='rook' src='./pieces/whiteRook.png'/>`,
    pawn:`<img class='white' id='pawn' src='./pieces/whitePawn.png'/>`,
}
const black = {
    king:`<img class='black' id='king' src='./pieces/blackKing.png'/>`,
    queen:`<img class='black' id='queen' src='./pieces/blackQueen.png'/>`,
    bishop:`<img class='black' id='bishop' src='./pieces/blackBishop.png'/>`,
    knight:`<img class='black' id='knight' src='./pieces/blackKnight.png'/>`,
    rook:`<img class='black' id='rook' src='./pieces/blackRook.png'/>`,
    pawn:`<img class='black' id='pawn' src='./pieces/blackPawn.png'/>`,
}

const initialPosition = [
    [white.rook,white.knight,white.bishop,white.king,white.queen,white.bishop,white.knight,white.rook],
    [white.pawn,white.pawn,white.pawn,white.pawn,white.pawn,white.pawn,white.pawn,white.pawn],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    [black.pawn,black.pawn,black.pawn,black.pawn,black.pawn,black.pawn,black.pawn,black.pawn],
    [black.rook,black.knight,black.bishop,black.king,black.queen,black.bishop,black.knight,black.rook]
]





export {chessboard, black, white, initialPosition, idSquares}

