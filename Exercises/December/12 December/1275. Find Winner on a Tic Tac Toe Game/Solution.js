/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let count = 9;
    let playerA = {
        cols: [0, 0, 0],
        rows: [0, 0, 0],
        diags: [0, 0],
        name: 'A',
    };
    let playerB = {
        cols: [0, 0, 0],
        rows: [0, 0, 0],
        diags: [0, 0],
        name: 'B',
    };
    for (let i = 0; i < moves.length; i++) {
        let player = i % 2 === 0 ? playerA : playerB;
        let [row, col] = moves[i];
        player.rows[row]++;
        player.cols[col]++;
        if (row === col && row === 1) {
            player.diags[0]++;
            player.diags[1]++;
        } else if (row === col) {
            player.diags[0]++;
        } else if (row === 2 - col) {
            player.diags[1]++;
        }
        count--;
        if ([
            player.rows[row],
            player.cols[col],
            player.diags[0],
            player.diags[1],
        ].includes(3)) {
            return player.name;
        }
    }
    if (count === 0) {
        return 'Draw';
    }
    return 'Pending';
};
