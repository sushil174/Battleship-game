import Ship from "../Ship"

class PlaceShip {
    constructor(gameBoard,ground) {
        this.gameBoard = gameBoard
        this.cells = []
        this.ground = ground
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

                if(board[i][j] instanceof Ship ) {
                    cell.style.backgroundColor = "blue"
                }
                this.ground.append(cell)
                row.push(cell)
                this.test(cell)
                
            }
            this.cells.push(row)
        }
    }

    test(cell) {
        const ship = [[0,0],[0,1],[0,2],[0,3]]
        let coords;
        cell.addEventListener('mouseenter', () => {
            const x = parseInt(cell.dataset.x)
            const y = parseInt(cell.dataset.y)
            coords = ship.map((a)=> {
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

        cell.addEventListener('click', () => {
            if(this.gameBoard.validate(coords)) {
                const ship = new Ship(4)
                this.gameBoard.placeShip(ship,coords)
                // this.display()
            }
        })
    }
    // const domCells = playerBoard.display()
    // let clicked = false
    // const cells = document.querySelectorAll('.cell')
    // cells.forEach( cell => {
    //     let x = parseInt(cell.dataset.x)
    //     let y = parseInt(cell.dataset.y)
    //     cell.addEventListener('mouseenter', (e)=> {
    //         if(!clicked) {
    //             domCells[x][y].style.backgroundColor = 'yellow'
    //             domCells[x][y + 1].style.backgroundColor = 'yellow'
    //             domCells[x][y + 2].style.backgroundColor = 'yellow'
    //             domCells[x][y + 3].style.backgroundColor = 'yellow'
    //         }
                
    //     })

        // cell.addEventListener('mouseleave', (e)=> {
        //     if(!clicked) {
        //         domCells[x][y].style.backgroundColor = 'lightblue'
        //         domCells[x][y + 1].style.backgroundColor = 'lightblue'
        //         domCells[x][y + 2].style.backgroundColor = 'lightblue'
        //         domCells[x][y + 3].style.backgroundColor = 'lightblue'
        //     }
        // })

    //     cell.addEventListener('click', () => {
    //         clicked = true
    //         domCells[x][y].style.backgroundColor = 'yellow'
    //         domCells[x][y + 1].style.backgroundColor = 'yellow'
    //         domCells[x][y + 2].style.backgroundColor = 'yellow'
    //         domCells[x][y + 3].style.backgroundColor = 'yellow'
    //     })
    // })
}

export default PlaceShip