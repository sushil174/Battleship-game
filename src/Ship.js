class Ship {
    constructor(length = 4) {
        this.length = length
        this.damage = 0
        this.sunk = false
        this.position = []
    }

    hit() {
        this.damage += 1
    }

    getHit() {
        return this.damage
    }

    getLength() {
        return this.length
    }
    
    isSunk() {
        if (this.length <= this.damage) {
            this.sunk = true
        }
        return this.sunk
    }
    
    getPosition() {
        return this.position
    }
    
    placeShip(position) {
        this.position = position
    }
}

export default Ship