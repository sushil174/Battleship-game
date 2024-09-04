class GameBoard {
    constructor(size = 10) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null))
        this.ships = []
    }


    placeShip(ship,coords) {

        for(let [x,y] of coords) {
            if (x < 0 || x >= this.size || y < 0 || y >= this.size || this.board[x][y] !== null) {
                throw new Error("invalid position")
            }
        }

        for(let [x,y] of coords) {
            this.board[x][y] = ship
        }

        ship.placeShip(coords)
        this.ships.push(ship)
    }

    receiveAttack(coords) {
        const [x,y] = coords
        const target = this.board[x][y]
        if(target !== null) {
            target.hit()
            return "Hit"
        }
        this.board[x][y] = "attacked"
        return "Miss"
    }

    allSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
}

export default GameBoard