import Ship from "../Ship"
class BoardDom {
    constructor(gameBoard,show=true) {
        this.gameBoard = gameBoard
        this.show = show
        this.cells = []
    }

    createBoard() {
        const player = document.createElement('div')
        player.classList.add('player')
        for(let i=0;i<10;i++) {
            let row = []
            for(let j=0;j<10;j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i
                cell.dataset.y = j
                cell.dataset.isAttacked = "nope"
                cell.classList.add('cell')
                this.attackListner(cell)
                player.append(cell)
                row.push(cell)
            }
            this.cells.push(row)
        }   
        this.randomShipPlacement()
        return player
    }

    sunkedShip() {
        const ships = this.gameBoard.getShips() 
        for(let ship of ships) {
            if(ship.isSunk()) {
                const coords = ship.getPosition() 
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = "purple"
                }
            }
        }
    }

    fn(e) {

        let x = e.target.dataset.x
        let y = e.target.dataset.y
        // if(this.cells[x][y].dataset.isAttacked === "nope") {
            // console.log("hitting-"+x+" "+y) 
            const result = this.gameBoard.receiveAttack([x,y])
            if(result === "Hit") {
                this.cells[x][y].style.backgroundColor = "red"
            }
            else {
                this.cells[x][y].style.backgroundColor = "green"
            }
            this.cells[x][y].dataset.isAttacked = "yup"
            this.cells[x][y].style.pointerEvents = "none"
        // }
    
        // this.sunkedShip()
        if(this.gameBoard.allSunk()) {
            const headline = document.querySelector('.headline')
            headline.textContent = "all ships sunked"
        }
    }

    attackListner(cell) {
        cell.addEventListener('click', (e) => {
            this.fn(e)
        },{once:true})

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
            if(this.show) {
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = "blue"
                }
            }
        }
    }

    updateShip() {
        const ships = this.gameBoard.getShips()
        for(let ship of ships) {
            this.gameBoard.placeShip(ship.getPosition())
            for(let [x,y] of ship.getPosition()) {
                this.cells[x][y].style.backgroundColor = "blue"
            }
        }
    }

}

export default BoardDom