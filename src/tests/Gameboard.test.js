import GameBoard from "../Gameboard";
import Ship from "../Ship";

describe('GameBoard object', () => {
    let gameBoard;
    beforeEach(()=> {
        gameBoard = new GameBoard()
    });

    test('place ship', () => {
        let ship = new Ship()
        gameBoard.placeShip(ship, [[0,0],[0,1],[0,2],[0,3]])
        expect(ship.getPosition()).toEqual([[0,0],[0,1],[0,2],[0,3]])
        
        let ship2 = new Ship(2)
        expect(()=> {
            gameBoard.placeShip(ship2,[[0,10],[0,11]])
        }).toThrow("invalid position")
    })
})

