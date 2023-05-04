const Car = require('./car');

const toyota = new Car("Toyota", 20000, "electric");

describe('getters', () => {

    test('get manufacturer', () => expect(toyota.manufacturer).toBe("Toyota"));

    test('get price', () => expect(toyota.price).toBe(20000));

    test('get engineType', () => expect(toyota.engineType).toBe("electric"));
    
});

