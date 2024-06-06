const {getFullName, getProductsPurchased} = require('../src/products')

describe("getFullName()", () => {
    it("Should grab names from an object, and return a full name string", () => {
        const input = {names: {first: "Marco", surname: "Quispe"}};
        const trial = getFullName(input);
        const expectation = 'Marco Quispe';
        expect(trial).toEqual(expectation)
    })
})

describe("getProductsPurchased()", () => {
    it("Should return No products purchased.", () => {
        const input = {purchased: []}
        const trial = getProductsPurchased(input)
        const expectation = 'No products purchased.'
        expect(trial).toEqual(expectation)
    })
})
describe("getProductsPurchased()", () => {
    it("Should return  a single product name", () => {
        const input = {purchased: [{name: 'IPhone'}]}
        const trial = getProductsPurchased(input)
        const expectation = 'IPhone'
        expect(trial).toEqual(expectation)
    })
})
describe("getProductsPurchased()", () => {
    it("Should return an array with products name", () => {
        const input = {purchased: [{name: 'IPhone'}, {name: 'IPad'}, {name: 'Mac'}]}
        const trial = getProductsPurchased(input)
        const expectation = ['IPhone', 'IPad', 'Mac']
        expect(trial).toEqual(expectation)
    })
})