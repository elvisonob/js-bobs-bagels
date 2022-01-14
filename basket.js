class Basket {
    constructor() {
        this.contents = []
    }

    addBagel() {
        //we want to add bagel into basket array
        let bagelItem = {
            id: "Bagel",
            name: "blt",
            price: 1.99,
        }
        this.contents.push(bagelItem)
        return this.contents
    }
}