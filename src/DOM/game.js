import BoardDom from "./gameBoardDom";
import Player from "../Player";
import Bot from "./bot.js"
import PlaceShip from "./PlaceShip.js";
const game = () => {
    const player1 = document.querySelector('.player1')
    const player2 = document.querySelector('.player2')
    const headline = document.querySelector('.headline')

    const player = new Player()
    const computer = new Player()
    const start = new PlaceShip(player.getGameBoard(),player1)
    start.display()


    // const playerBoard = new Bot("player",player.getGameBoard(),player1)    
    // const computerBoard = new Bot("bot",computer.getGameBoard(),player2)

    // playerBoard.randomShipPlacement()
    // computerBoard.randomShipPlacement()
    
    // playerBoard.display()
    // computerBoard.display()

    
    // const computerGameBoard = computer.getGameBoard()
    // const playerGameBoard = player.getGameBoard()

    // let current = "player"
    
    // const cells = document.querySelectorAll(`.cell[data-name="bot"]`);   
    // for(let cell of cells) {
    //     cell.addEventListener('click', function handleClick(e) {
    //         let x = parseInt(cell.dataset.x)
    //         let y = parseInt(cell.dataset.y)
    //         const name = cell.dataset.name
    //         if(current === "player" && name === "bot") {

    //             const result = computerBoard.recieveAttack([x,y])
    //             // console.log(result)
    //             if(result === "Hit") {
    //                 e.target.style.backgroundColor = 'red'
    //             }
    
    //             if(result === "Miss") {
    //                 e.target.style.backgroundColor = 'green'}
    //         }
    //         cell.removeEventListener('click', handleClick)

    //         if(computerGameBoard.allSunk()) {
    //             alert("player won")
    //             return
    //         }

    //         current = "bot";
    //        headline.textContent = "AI turn"
    //         setTimeout(() => {
    //             playerBoard.randomAttack()
    //             if(playerGameBoard.allSunk()) {
    //                 alert("bot won")
    //                 return
    //             }
    //             current = "player"
    //             headline.textContent = "player turn"
    //         },1000)
    //     })
    // }
}

export default game