/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let count = 0;
    let row, col;
    for (let i = 0; i < board.length; i++) {
        let index = board[i].indexOf('R');
        if (index !== -1) {
            row = i;
            col = index;
            break;
        }
    }
    for (let j = col + 1; j < board[0].length; j++) {
        if (board[row][j] === 'B') {
            break;
        } else if (board[row][j] === 'p') {
            count++;
            break;
        }
    }
    for (let j = col - 1; j >= 0; j--) {
        if (board[row][j] === 'B') {
            break;
        } else if (board[row][j] === 'p') {
            count++;
            break;
        }
    }
    for (let i = row + 1; i < board.length; i++) {
        if (board[i][col] === 'B') {
            break;
        } else if (board[i][col] === 'p') {
            count++;
            break;
        }
    }
    for (let i = row - 1; i >= 0; i--) {
        if (board[i][col] === 'B') {
            break;
        } else if (board[i][col] === 'p') {
            count++;
            break;
        }
    }
    return count;
};
