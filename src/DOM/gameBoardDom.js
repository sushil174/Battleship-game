import Ship from "../Ship"
class BoardDom {
    constructor(gameBoard) {
        this.gameBoard = gameBoard
        this.cells = []
    }

    createBoard() {
        for(let i=0;i<10;i++) {
            let row = []
            for(let j=0;j<10;j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i
                cell.dataset.y = j
                row.push(cell)
            }
            this.cells.push(row)
        }
    }

    randomShipPlacement() {
        
        const ship1 = new Ship(4)

        const ship2 = new Ship(3)
        const ship3 = new Ship(3)

        const ship4 = new Ship(2)
        const ship5 = new Ship(2)
        const ship6 = new Ship(2)

        const ship7 = new Ship(1)
        const ship8 = new Ship(1)
        const ship9 = new Ship(1)
        const ship10 = new Ship(1)
        let ships = [ship1,ship2,ship3,ship4,ship5,ship6,ship7,ship8,ship9,ship10]

        function getCoords(ship) {
            let coords = []
            let x = Math.floor(Math.random() * 10)
            let y = Math.floor(Math.random() * 10)
            let align = Math.floor(Math.random() * 2)
            if(align === 0) {
                for(let i = 0; i < ship.getLength(); i++) {
                    coords.push([x+i,y])
                }
            } else {
                for(let i = 0; i < ship.getLength(); i++) {
                    coords.push([x,y+i])
                }
            }
            return coords
        }
        
        for(let ship of ships) { 
            let coords = getCoords(ship)
            while(!this.gameBoard.validate(coords)) {
                coords = getCoords(ship)
            }
            this.gameBoard.placeShip(ship,coords)
        }
    }

    updateShip() {
        const ships = this.gameBoard.getShips()
        for(let ship of ships) {
            for(let [x,y] of ship.getPosition()) {
                this.cells[x][y].style.backgroundColor = "blue"
            }
        }
    }

    recieveAttack([x,y]) {
        
    }
}

export default BoardDom