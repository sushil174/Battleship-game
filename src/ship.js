class ship {
    constructor(length = 4) {
        this.length = length
        this.damage = 0
        this.sunk = false
    }

    hit() {
        this.damage += 1
    }

    getHit() {
        return this.damage
    }

    isSunk() {
        if (this.length <= this.damage ) {
            this.sunk = true
        }
        return this.sunk
    }
}

export default ship