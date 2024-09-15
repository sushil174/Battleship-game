import Ship from "../Ship"

class PlaceShip {
    constructor(name,gameBoard,ground) {
        this.gameBoard = gameBoard
        this.name = name
        this.cells = []
        this.ground = ground
        this.currentShipSize = 0
        this.shipOrientation = "Horizontal"
        this.ship_4 = 1
        this.ship_3 = 2
        this.ship_2 = 3
        this.ship_1 = 4
        this.span_1 = document.createElement('span')
        this.span_2 = document.createElement('span')
        this.span_3 = document.createElement('span')
        this.span_4 = document.createElement('span')
        this.shipButtons()
    }
    
    createShipDiv(container,button,span,count) {
        const div = document.createElement('div')
        div.classList.add('shipDiv')
        button.classList.add('shipButtons')
        span.textContent = `x ${count}`
        div.append(button)
        div.append(span)
        container.append(div)
    }

    updateShipCount() {
        this.span_1.textContent = `x ${this.ship_1}`
        this.span_2.textContent = `x ${this.ship_2}`
        this.span_3.textContent = `x ${this.ship_3}`
        this.span_4.textContent = `x ${this.ship_4}`
    }
    updateSelected() {
        Array.from(document.querySelectorAll('.shipButtons')).forEach(button => button.classList.remove('selected'))
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
            if(this.shipOrientation === "Horizontal") this.shipOrientation = "Vertical"
            else this.shipOrientation = "Horizontal"
            changeOrientation.textContent = this.shipOrientation
            this.cells = []
            this.display()
        })

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttonContainer')
        const container = document.querySelector('.player2')
        container.classList.remove('grid')
        container.classList.remove('ai-grid')

        const button_4 = document.createElement('button')
        button_4.dataset.value = 4
        button_4.addEventListener('click', () => {
            if(this.ship_4 > 0) {
                this.updateSelected()
                button_4.classList.add('selected')
                this.currentShipSize = 4
                this.cells = []
                this.display()
            }
        })


        const button_3 = document.createElement('button')
        button_3.dataset.value = 3
        button_3.addEventListener('click', () => {
            if(this.ship_3 > 0) {
                this.updateSelected()
                button_3.classList.add('selected')
                this.currentShipSize = 3
                this.cells = []
                this.display()
            }
        })

        const button_2 = document.createElement('button')
        button_2.dataset.value = 2
        button_2.addEventListener('click', () => {
            if(this.ship_2 > 0) {
                this.updateSelected()
                button_2.classList.add('selected')
                this.currentShipSize = 2
                this.cells = []
                this.display()
            }
        })

        const button_1 = document.createElement('button')
        button_1.dataset.value = 1
        button_1.addEventListener('click', () => {
            if(this.ship_1 > 0) {
                this.updateSelected()
                button_1.classList.add('selected')
                this.currentShipSize = 1
                this.cells = []
                this.display()
            }
        })
        this.createShipDiv(container,button_4,this.span_4,1)
        this.createShipDiv(container,button_3,this.span_3,2)
        this.createShipDiv(container,button_2,this.span_2,3)
        this.createShipDiv(container,button_1,this.span_1,4)

        buttonContainer.append(changeOrientation)
        buttonContainer.append(begin)
        const p = document.createElement('p')
        p.textContent = "[ right click on ship to remove it from board ]"
        container.append(buttonContainer)
        container.append(p)
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
                    cell.classList.add('ship')
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
        if(orientation === "Horizontal") {
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
                        this.cells[x][y].classList.add('ship')
                    }  
                   

                    this.cells = []
                    if(shipSize === 4){
                        this.ship_4 -= 1
                        if(!this.ship_4) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    } 
                    if(shipSize === 3) {
                        this.ship_3 -= 1
                        if(!this.ship_3) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    if(shipSize === 2) {
                        this.ship_2 -= 1
                        if(!this.ship_2) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    if(shipSize === 1) {
                        this.ship_1 -= 1
                        if(!this.ship_1) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    this.updateShipCount()
                    
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
            if(result) {
                for(let [x,y] of coords) {
                    this.cells[x][y].classList.add('placing')
                }   
            }
        })

        cell.addEventListener('mouseleave', () => {
            if(this.gameBoard.validate(coords)) {
                for(let [x,y] of coords) {
                    this.cells[x][y].classList.remove('placing')
                    this.cells[x][y].classList.remove('not-valid')
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
                this.updateShipCount()
            }
            this.cells = []
            this.display()
        })

    }
 
}

export default PlaceShip