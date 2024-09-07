import BoardDom from "./gameBoardDom";
import Player from "../Player";
const game = () => {
    const container = document.querySelector('.container')
    const button = document.querySelector('button')
    const player = new Player()
    const computer = new Player()
    const playerBoard = new BoardDom(player.getGameBoard())
    const computerBoard = new BoardDom(computer.getGameBoard(),false)

    // button.addEventListener('click',()=> {

    //     playerBoard.randomShipPlacement()
    // })
    container.append(playerBoard.createBoard())
    container.append(computerBoard.createBoard())
    

}   
export default game