let side;

const flipper = (side) => {

    if(side == 'white'){
        const chessGUI = document.querySelector('#chessboard');
        const squares = document.querySelectorAll('.square');
        chessGUI.style.transform = 'rotate(180deg)';
        squares.forEach(square => {
            square.style.transform = 'rotate(180deg)'
        })
    }else{
        const chessGUI = document.querySelector('#chessboard');
        const squares = document.querySelectorAll('.square');
        chessGUI.style.transform = 'rotate(0deg)';
        squares.forEach(square => {
            square.style.transform = 'rotate(0deg)'
        })
    }
}

const switchSide = () => {
    side = side === 'white' ? 'black' : 'white';
    flipper(side);


}
const flipButton = document.getElementById('flipboard')
flipButton.addEventListener('click', switchSide)
