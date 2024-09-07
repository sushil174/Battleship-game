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

    test('receiving attack', () => {
        let ship = new Ship()
        gameBoard.placeShip(ship, [[0,0],[0,1],[0,2],[0,3]])
        expect(gameBoard.receiveAttack([0,2])).toBe("Hit")
    })

    test('receiving attack', () => {
        expect(gameBoard.receiveAttack([1,2])).toBe("Miss")
    })

    test('place ship on already attacked position', () => {
        let ship2 = new Ship(2)
        gameBoard.receiveAttack([1,2])
        expect(()=> {
            gameBoard.placeShip(ship2,[[1,2],[1,3]])
        }).toThrow("invalid position")
    })

    test('all ships sunks', ()=> {
        let ship = new Ship(2)
        gameBoard.placeShip(ship,[[0,0],[0,1]])
        gameBoard.receiveAttack([0,0])
        expect(gameBoard.allSunk()).toBeFalsy()
        gameBoard.receiveAttack([0,1])
        expect(gameBoard.allSunk()).toBeTruthy()
    })
})

