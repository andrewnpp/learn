/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let row of board) {
        let set = new Set();
        for (let cell of row) {
            if (cell === '.') {
                continue;
            }
            if (set.has(cell)) {
                return false;
            }
            set.add(cell);
        }
    }

    for (let j = 0; j < board[0].length; j++) {
        let set = new Set();
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] === '.') {
                continue;
            }
            if (set.has(board[i][j])) {
                return false;
            }
            set.add(board[i][j]);
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let arr = [
                ...board[i * 3].slice(j * 3, (j + 1) * 3).filter((item) => item !== '.'),
                ...board[i * 3 + 1].slice(j * 3, (j + 1) * 3).filter((item) => item !== '.'),
                ...board[i * 3 + 2].slice(j * 3, (j + 1) * 3).filter((item) => item !== '.'),
            ];
            if (new Set(arr).size !== arr.length) {
                return false;
            }
        }
    }

    return true;
};
