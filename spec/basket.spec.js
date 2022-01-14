const Bagel = require("../src/bagel.js");
const Basket = require("../src/basket.js");

describe("Basket", () => {
    let basket

    beforeEach(() => {
        basket = new Basket();
    });

    it("basket is empty", () => {
        const expected = []
        const result = basket.contents
        expect(result).toEqual(expected);
    });

    it("add item to basket", () => {

        const expected = [new Bagel(1, 'blt')]

        const result = basket.addBagel('blt')

        expect(result).toEqual(expected);
    });

    it("remove item from basket", () => {

        const expected = []
        basket.addBagel()
        const result = basket.removeBagel(1)

        expect(result).toEqual(expected);
    });

    it("add a second bagel to basket", () => {

        const expected = [new Bagel(1, "blt"),
            new Bagel(2, "blt")
        ]
        basket.addBagel('blt')
        const result = basket.addBagel('blt')


        expect(result).toEqual(expected);
    });

    it("When Basket is full", () => {

        const expected = 'basket is full'
        basket.addBagel('blt', 4)
        const result = basket.getBagels()


        expect(result).toEqual(expected);
    });

    it("create basket with larger capacity", () => {
        const expected = true
        const largeBasket = new Basket(5)
        const result = largeBasket.capacity > basket.capacity
        expect(result).toEqual(expected);
    });

    it("cannot remove an item that isn't in the basket", () => {
        const expected = "Bagel isn't in basket"
        const result = basket.removeBagel(1)
        expect(result).toEqual(expected);
    });

    it("get price of bagel before adding to basket", () => {
        const testBagel = new Bagel();
        const expected = testBagel.price;
        const result = basket.getPriceOfBagel();
        expect(result).toEqual(expected);
    });

    it("total sum of bagels in my basket ", () => {
        const expected = 3 * 1.99
        basket.addBagel('blt', 3, 1.99)
        const result = basket.getTotal();
        expect(result).toEqual(expected);
    });

});