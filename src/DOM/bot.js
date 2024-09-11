import Ship from "../Ship";
class Bot {
    constructor(name,gameBoard,ground) {
        this.name = name
        this.gameBoard = gameBoard
        this.cells = []
        this.availabe = []
        this.player = ground
        this.getValidIndex()
    }

    display() {
        this.player.textContent = ''
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10; i++) {
            let row = []
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i
                cell.dataset.y = j
                cell.dataset.name = this.name
                cell.classList.add('cell')
                this.player.append(cell)
                row.push(cell)

                if(board[i][j] === "hit") {
                    cell.style.backgroundColor = 'red'
                }
                
                if(board[i][j] === "miss") {
                    cell.style.backgroundColor = 'green'
                }

                if(board[i][j] instanceof Ship ) {
                    cell.style.backgroundColor = "blue"
                }

            }
            this.cells.push(row)
        }
        return this.cells
    }

    recieveAttack([x,y]) {
        let board = this.gameBoard.getBoard()
        const result = this.gameBoard.receiveAttack([x,y])
        return result
    }

    getValidIndex() {
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10 ; i++) {
            for(let j = 0; j < 10; j++) {
                if(board[i][j] === null || board[i][j] instanceof Ship) {
                    this.availabe.push({x:i, y:j})
                }
            }
        }        
    }

    randomAttack() {
        const index = Math.floor(Math.random() * this.availabe.length)
        let {x,y} = this.availabe[index]
        this.availabe.splice(index,1)
        const result = this.gameBoard.receiveAttack([x,y])
        if(result === "Hit") {
            this.cells[x][y].style.backgroundColor = "red"
        }
        
        if(result === "Miss") {
            this.cells[x][y].style.backgroundColor = "green"
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
            if(this.show) {
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = "blue"
                }
            }
        }
    }

}

export default Bot