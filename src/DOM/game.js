import Player from "../Player";
import Bot from "./bot.js"
import PlaceShip from "./PlaceShip.js";

class game {
    constructor() {
        this.player1 = document.querySelector('.player1')
        this.player2 = document.querySelector('.player2')
        this.player = new Player()
        this.computer = new Player()
        this.start = new PlaceShip("player",this.player.getGameBoard(),this.player1)
        this.start.display()
        document.addEventListener('shipPlaced', this.startGame.bind(this));
    
    }

    getPlayer() {
        return this.player
    }
    
    getComputer() {
        return this.computer
    }

    reset() {
        this.player1.textContent = ''
        this.player2.textContent = ''
        // this.player.getGameBoard().removeAllShip()
        // this.computer.getGameBoard().removeAllShip()
        document.querySelector('.headline').textcontent = ''
        document.querySelector('.restart').style.display = 'none'
    }

    startGame() {
        this.player1.classList.add('grid')
        this.player2.classList.add('grid')
        const headline = document.querySelector('.headline')
        const playerBoard = new Bot("player",this.player.getGameBoard(),this.player1)    
        const computerBoard = new Bot("bot",this.computer.getGameBoard(),this.player2)
        computerBoard.randomShipPlacement()

        playerBoard.display()
        computerBoard.display()

        const computerGameBoard = this.computer.getGameBoard()
        const playerGameBoard = this.player.getGameBoard()
        
        let current = "player"
        headline.textContent = "Player turn"
        const cells = document.querySelectorAll(`.cell[data-name="bot"]`);   

        for(let cell of cells) {
            cell.addEventListener('click', function handleClick(e) {
                let x = parseInt(cell.dataset.x)
                let y = parseInt(cell.dataset.y)
                const name = cell.dataset.name
                if(current === "player" && name === "bot") {
    
                    const result = computerBoard.recieveAttack([x,y])
                    if(result === "Hit") {
                        // e.target.style.backgroundColor = 'red'
                        e.target.classList.remove('ship')
                        e.target.classList.add('hit')
                    }
        
                    if(result === "Miss") {
                        // e.target.style.backgroundColor = 'green'
                        e.target.classList.add('miss')
                    }
                }
                cell.removeEventListener('click', handleClick)
    
                if(computerGameBoard.allSunk()) {
                    alert("player won")
                    document.querySelector('.restart').style.display = 'block'
                    return
                }
    
                current = "bot";
                headline.textContent = "AI turn"
                setTimeout(() => {
                    playerBoard.randomAttack()
                    if(playerGameBoard.allSunk()) {
                        alert("bot won")
                        document.querySelector('.restart').style.display = 'block'
                        return
                    }
                    current = "player"
                    headline.textContent = "player turn"
                },100)
            })
        }
    }
}

export default game