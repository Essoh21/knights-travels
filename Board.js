import Vertex from "./Vertex.js";

class Board {
    constructor(boardxMax, boardyMax) {
        this.bordxMax = boardxMax;
        this.boardyMax = boardyMax;
        this.root = this.buildGraphFrom()
    }

    buildGraphFrom(position, destination) {

    }
    knightMoves(start, end) {

    }

    checkPossibleMovesFrom(position) {
        let x = position[0];
        let y = position[1];
        const allMovesFromPosition = [
            [x + 2, y - 1], [x + 2, y + 1]
            , [x + 1, y + 2], [x - 1, y + 2]
            , [x - 2, y + 1], [x - 2, y - 1]
            , [x - 1, y - 2], [x + 1, y - 2]
        ];
        return allMovesFromPosition.filter((move) => {
            (move[0] >= 0) && (move[0] < 8)
                && (move[1] >= 0) && (move[1] < 8)
        });
    }

}

const example = new Board(8, 8);
console.log(example.checkPossibleMovesFrom([1, 2]));