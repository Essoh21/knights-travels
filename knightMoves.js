import Knight from "./Knight.js";

const knightMoves = (start, destination) => {
    const knight = new Knight(start);
    const knightAtDestination = new Knight(destination);
    const q = [knight];

    while (!(queueContainsKnightAtPosition(q, destination))) {
        const currentKnightMove = q.shift();
        const nextMovesFromCurrent = turnPositionsToKnights(
            currentKnightMove.possibleMoves);
        for (let i = 0; i < nextMovesFromCurrent.length; i += 1) {
            nextMovesFromCurrent[i].setPreviousPositionTo(currentKnightMove);
        }

        q.push(...nextMovesFromCurrent);
        console.log(q);
    }

    const knightPathToDestinationQueue = [knightAtDestination];
    const knightPathToDestination = [];
    while (!(queueContainsKnightAtPosition(knightPathToDestinationQueue, start))) {
        // console.log(knightPathToDestinationQueue) //---------------
        const currentKnightPosition = knightPathToDestinationQueue[0]
            .getPreviousPosition();
        knightPathToDestinationQueue.unshift(currentKnightPosition);

    }
}

const turnPositionsToKnights = (positions) => {
    const knights = [];
    for (let i = 0; i < positions.length; i += 1) {
        knights.push(new Knight(positions[i]));
    }
    return knights;
}

const queueContainsKnightAtPosition = (q, positionCoordinates) => {
    let result = false;
    q.forEach((knight) => {
        if ((positionCoordinates[0] == knight.position[0])
            && (positionCoordinates[1] == knight.position[1])) {
            result = true;
        }

    })
    return result;
}
knightMoves([0, 0], [4, 4]);
//console.log(new Knight([2, 1]));