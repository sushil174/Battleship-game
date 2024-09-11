import game from "./DOM/game";
import './style.css'
let gameInstance = new game()

function restartGame() {
    gameInstance.reset()
    gameInstance = new game()
}

const restartButton = document.querySelector('.restart') 
restartButton.addEventListener('click', restartGame)