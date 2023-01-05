import Knight from "./Knight.js";

const knightMoves = (start, destination) => {
    const knight = new Knight(start);
    const q = [knight];
    const knightPathToDestination = [destination];
    if ((start[0] === destination[0]) && (start[1] === destination[1])) {
        return knightPathToDestination;
    }

    while (!(queueContainsKnightAtPosition(q, destination))) {
        const currentKnightMove = q.shift();
        const nextMovesFromCurrent = turnPositionsToKnights(
            currentKnightMove.possibleMoves);
        for (let i = 0; i < nextMovesFromCurrent.length; i += 1) {
            nextMovesFromCurrent[i].setPreviousPositionTo(currentKnightMove);
        }

        q.push(...nextMovesFromCurrent);

    }

    let index = getIndexOfDestinationKnightFromQ(q, destination);
    const knightPathToDestinationQueue = [q[index]];
    while (!(queueContainsKnightAtPosition(
        knightPathToDestinationQueue
        , start
    ))) {
        const previousKnight = knightPathToDestinationQueue[0]
            .getPreviousPosition();
        knightPathToDestinationQueue.unshift(previousKnight);
        knightPathToDestination.push(previousKnight.position);
    }
    return knightPathToDestination.slice().reverse();
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

const getIndexOfDestinationKnightFromQ = (q, destinationCoordinates) => {
    let destinationIndex;
    q.forEach((knight, index) => {
        if ((destinationCoordinates[0] == knight.position[0])
            && (destinationCoordinates[1] == knight.position[1])) {
            destinationIndex = index;
        }

    })
    return destinationIndex;
}


console.log(knightMoves([3, 3], [0, 0]));