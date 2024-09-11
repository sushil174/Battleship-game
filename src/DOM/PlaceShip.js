import Ship from "../Ship"

class PlaceShip {
    constructor(name,gameBoard,ground) {
        this.gameBoard = gameBoard
        this.name = name
        this.cells = []
        this.ground = ground
        this.currentShipSize = 0
        this.shipOrientation = "horizontal"
        this.ship_4 = 1
        this.ship_3 = 2
        this.ship_2 = 3
        this.ship_1 = 4
        this.shipButtons()
    }

    shipButtons() {

        const begin = document.createElement('button') 
        begin.textContent = "Start"
        begin.addEventListener('click', () => {
            if(this.checkShips()) {
                this.cells = []
                this.ground.textContent = ''
                
                document.dispatchEvent(new Event('shipPlaced'));
                return
            }
            alert("place all ships first")
        })

        const changeOrientation = document.createElement('button')
        changeOrientation.textContent = this.shipOrientation

        changeOrientation.addEventListener('click', () => {
            if(this.shipOrientation === "horizontal") this.shipOrientation = "vertical"
            else this.shipOrientation = "horizontal"
            changeOrientation.textContent = this.shipOrientation
            this.cells = []
            this.display()
        })

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttonContainer')
        const container = document.querySelector('.player2')
        container.classList.remove('grid')
        const button_4 = document.createElement('button')
        button_4.dataset.value = 4
        
        button_4.addEventListener('click', () => {
            console.log(this.ship_4)
            if(this.ship_4 > 0) {
                this.currentShipSize = 4
                this.cells = []
                this.display()
            }
        })


        const button_3 = document.createElement('button')
        button_3.dataset.value = 3
        button_3.addEventListener('click', () => {
            if(this.ship_3 > 0) {
                this.currentShipSize = 3
                this.cells = []
                this.display()
            }
        })

        const button_2 = document.createElement('button')
        button_2.dataset.value = 2
        button_2.addEventListener('click', () => {
            if(this.ship_2 > 0) {
                this.currentShipSize = 2
                this.cells = []
                this.display()
            }
        })

        const button_1 = document.createElement('button')
        button_1.dataset.value = 1
        button_1.addEventListener('click', () => {
            if(this.ship_1 > 0) {
                this.currentShipSize = 1
                this.cells = []
                this.display()
            }
        })


        button_4.textContent = "++++"
        button_3.textContent = "+++"
        button_2.textContent = "++"
        button_1.textContent = "+"
        
        buttonContainer.append(button_4)
        buttonContainer.append(button_3)
        buttonContainer.append(button_2)
        buttonContainer.append(button_1)
        buttonContainer.append(changeOrientation)
        buttonContainer.append(begin)
        container.append(buttonContainer)
    }


    display() {
        this.ground.textContent = ''
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10; i++) {
            let row = []
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.dataset.x = i
                cell.dataset.y = j
                cell.dataset.name = this.name

                if(board[i][j] instanceof Ship ) {
                    cell.style.backgroundColor = "blue"
                }
                this.ground.append(cell)
                row.push(cell)
                this.test(cell,this.currentShipSize,this.shipOrientation)
                
            }
            this.cells.push(row)
        }
    }

    checkShips() {
        return this.ship_1 <= 0 && this.ship_2 <= 0 && this.ship_3 <= 0 && this.ship_4 <= 0
    }

    test(cell,shipSize,orientation) {
        let shipCoords = []
        if(orientation === "horizontal") {
            for(let i = 0; i < shipSize; i++) {
                let position = [0,i]
                shipCoords.push(position)
            }
        }
        else {
            for(let i = 0; i < shipSize; i++) {
                let position = [i,0]
                shipCoords.push(position)
            }
        }
        let coords;
        cell.addEventListener('click', () => {
            if(shipSize) {

                if(this.gameBoard.validate(coords)) {
                    const ship = new Ship(shipSize)
                    this.gameBoard.placeShip(ship,coords)
                    for(let [x,y] of coords) {
                        this.cells[x][y].style.backgroundColor = 'blue'
                    }  
                    this.currentShipSize = 0
                    this.cells = []
                    if(shipSize === 4) this.ship_4 -= 1
                    if(shipSize === 3) this.ship_3 -= 1
                    if(shipSize === 2) this.ship_2 -= 1
                    if(shipSize === 1) this.ship_1 -= 1

                    // if(this.checkShips()) {
                    //     this.cells = []
                    //     this.ground.textContent = ''
                    //     document.dispatchEvent(new Event('shipPlaced'));
                    //     return;
                    // }
                    this.display()
                }

            }
        })


        cell.addEventListener('mouseenter', () => {
            const x = parseInt(cell.dataset.x)
            const y = parseInt(cell.dataset.y)
            coords = shipCoords.map((a)=> {
                return [a[0] + x, a[1] + y]
            })
            let result = this.gameBoard.validate(coords) 
            let color = 'yellow'
            if(result) {
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = color
                }   
            }
        })

        cell.addEventListener('mouseleave', () => {
            if(this.gameBoard.validate(coords)) {
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = 'lightblue'
                }  
            }   
        })
        
        cell.addEventListener('contextmenu', (e)=> {
            e.preventDefault()
            let x = parseInt(e.target.dataset.x)
            let y = parseInt(e.target.dataset.y)
            let board = this.gameBoard.getBoard()
            if(board[x][y] instanceof Ship) {
                if(board[x][y].getLength() === 4) this.ship_4 += 1
                if(board[x][y].getLength() === 3) this.ship_3 += 1
                if(board[x][y].getLength() === 2) this.ship_2 += 1
                if(board[x][y].getLength() === 1) this.ship_1 += 1
                this.gameBoard.removeShip(board[x][y])
            }
            this.cells = []
            this.display()
        })

    }
 
}

export default PlaceShip