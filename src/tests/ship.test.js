import ship from "../ship";

describe('Ship object', () => {
    let shipTest;
    beforeEach(()=> {
        shipTest = new ship()
    });

    test('ship hit', () => {
        shipTest.hit();
        shipTest.hit();
        shipTest.hit();
        expect(shipTest.getHit()).toBe(3)
    })

    test('ship isSunk', ()=> {
        expect(shipTest.isSunk()).toBeFalsy();
        shipTest.hit()
        shipTest.hit()
        shipTest.hit()
        shipTest.hit()
        expect(shipTest.isSunk()).toBeTruthy();
    })
})

