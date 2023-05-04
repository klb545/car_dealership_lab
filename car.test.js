const Car = require('./car');

const car = new Car("Toyota", 20000, "electric");

describe('getters', () => {

    test('get manufacturer', () => expect(car.manufacturer).toBe("Toyota"));

    test('get price', () => expect(car.price).toBe(20000));

    test('get engineType', () => expect(car.engineType).toBe("electric"));
    
});

