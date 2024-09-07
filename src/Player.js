import GameBoard from "./Gameboard";
import Ship from "./Ship";
class Player{
    constructor(){
        this. gameBoard = new GameBoard()
    }

    getGameBoard() {
        return this.gameBoard
    }
}

export default Player