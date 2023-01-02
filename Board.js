import Vertex from "./Vertex.js";

class Board {
    constructor(boardxMax, boardyMax) {
        this.boardxMax = boardxMax;
        this.boardyMax = boardyMax;
        // this.root = this.buildGraphFrom()
    }

    buildGraphFrom(position, destination) {
        let currentVertex = new Vertex(position);
        if (
            currentVertex.position[0] == destination[0]
            && currentVertex.position[1] == destination[1]
        ) {
            return currentVertex;
        }


        let possibleMoves = this.getkPossibleMovesFrom(currentVertex.position);
        while (possibleMoves.length < 8) {
            possibleMoves.push(null);
        }

        const vertexChildren = [];
        for (let i = 0; i < possibleMoves.length; i += 1) {
            vertexChildren.push(new Vertex(possibleMoves[i]));
        }

        [
            currentVertex.one
            , currentVertex.two
            , currentVertex.three
            , currentVertex.four
            , currentVertex.fife
            , currentVertex.six
            , currentVertex.seven
            , currentVertex.eight
        ] = vertexChildren;
        for (let i = 0; i < vertexChildren.length; i += 1) {
            if (vertexChildren[i] === null) continue;
            // console.log(vertexChildren[i].position)
            //this.buildGraphFrom(vertexChildren[i].position, destination);
        }

    }

    knightMoves(start, end) {

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

const example = new Board(8, 8);
console.log(example.buildGraphFrom([0, 0], [2, 1]));