const Car = require('./car');

const car = new Car("Toyota", 20000, "electric");

describe('getters', () => {

    test('has manufacturer', () => expect(car.manufacturer).toBe("Toyota"));

    test('has price', () => expect(car.price).toBe(20000));

    test('has engineType', () => expect(car.engineType).toBe("electric"));
    
});

