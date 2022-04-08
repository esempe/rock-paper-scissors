


computerPlay = function () {

    computerMoveInt = Math.floor(Math.random() * 3);
    if (computerMoveInt === 0) {
        computerMoveString = 'Rock';
    } else if (computerMoveInt === 1) {
        computerMoveString = 'Paper';
    } else {
        computerMoveString = 'Scissors';
    }
    return computerMoveString
}
console.log(computerPlay());

