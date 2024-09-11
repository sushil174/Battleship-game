import GameBoard from "./Gameboard";
class Player{
    constructor(){
        this. gameBoard = new GameBoard()
    }

    getGameBoard() {
        return this.gameBoard
    }
}

export default Player