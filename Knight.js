class Knight {
    constructor(knightPosition) {
        this.position = knightPosition;
        this.possibleMoves = this.getkPossibleMovesFrom(knightPosition);
    }
    previousPosition = null;
    getPreviousPosition() {
        return this.previousPosition;
    }

    setPreviousPositionTo(position) {
        this.previousPosition = position;
    }

    getkPossibleMovesFrom(position) {
        let x = position[0];
        let y = position[1];
        const allMovesFromPosition = [
            [x + 2, y - 1], [x + 2, y + 1]
            , [x + 1, y + 2], [x - 1, y + 2]
            , [x - 2, y + 1], [x - 2, y - 1]
            , [x - 1, y - 2], [x + 1, y - 2]
        ];
        return allMovesFromPosition.filter(function (move) {
            if ((move[0] > 0)
                && (move[0] < 8)
                && (move[1] > 0)
                && (move[1] < 8)) return true;
            return false;
        });

    }
}
export default Knight;