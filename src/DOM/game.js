import BoardDom from "./gameBoardDom";
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

    startGame() {
        const headline = document.querySelector('.headline')
        const playerBoard = new Bot("player",this.player.getGameBoard(),this.player1)    
        const computerBoard = new Bot("bot",this.computer.getGameBoard(),this.player2)
        computerBoard.randomShipPlacement()

        playerBoard.display()
        computerBoard.display()

        const computerGameBoard = this.computer.getGameBoard()
        const playerGameBoard = this.player.getGameBoard()
        
        let current = "player"
        const cells = document.querySelectorAll(`.cell[data-name="bot"]`);   

        for(let cell of cells) {
            cell.addEventListener('click', function handleClick(e) {
                let x = parseInt(cell.dataset.x)
                let y = parseInt(cell.dataset.y)
                const name = cell.dataset.name
                if(current === "player" && name === "bot") {
    
                    const result = computerBoard.recieveAttack([x,y])
                    // console.log(result)
                    if(result === "Hit") {
                        e.target.style.backgroundColor = 'red'
                    }
        
                    if(result === "Miss") {
                        e.target.style.backgroundColor = 'green'}
                }
                cell.removeEventListener('click', handleClick)
    
                if(computerGameBoard.allSunk()) {
                    alert("player won")
                    return
                }
    
                current = "bot";
                headline.textContent = "AI turn"
                setTimeout(() => {
                    playerBoard.randomAttack()
                    if(playerGameBoard.allSunk()) {
                        alert("bot won")
                        return
                    }
                    current = "player"
                    headline.textContent = "player turn"
                },1000)
            })
        }
    }
}

export default game