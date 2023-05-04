const Car = require('./car');

const car = new Car("Toyota", 20000, "electric");

describe('getters', () => {

    test('has manufacturer', () => {
        expected = "Toyota";
        actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    test('has price', () => {
        expected = 20000;
        actual = car.price;
        expect(actual).toBe(expected);
    });

    test('has engineType', () => {
        expected = "electric";
        actual = car.engineType;
        expect(actual).toBe(expected);
    });
    
});






