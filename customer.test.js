const Customer = require('./customer');
const Car = require('./car');

const customer = new Customer("Zsolt", 20000);
const toyota = new Car("Toyota", 20000, "electric");
const peugot = new Car("Peugot", 15000, "diesel");
const car3 = new Car("Honda", 25000, "petrol");

describe('getters', () => {

    test('has name', () => {
        expected = "Zsolt";
        actual = customer.name;
        expect(actual).toBe(expected);
    });

    test('has wallet', () => {
        expected = 20000;
        actual = customer.wallet;
        expect(actual).toBe(expected);
    });

    test('has car', () => {
        expected = null;
        actual = customer.car;
        expect(actual).toEqual(expected);
    });
    
});


describe('customer can buy car if they have enough money', () => {

    test('customer can buy a car because they have more in their wallet than the value of the car', () => {
        customer.buyCar(peugot);
        expected = 5000;
        actual = customer.wallet;
        expect(actual).toBe(expected);
        expectedCar = peugot;
        actualCar = customer.car;
        expect(actualCar).toBe(expectedCar);
    });

    test('customer can buy a car because they have the exact value of the car in their wallet', () => {
        customer.car = null;
        customer.wallet = 20000;
        customer.buyCar(toyota);
        expected = 0;
        actual = customer.wallet;
        expect(actual).toBe(expected);
        expectedCar = toyota;
        actualCar = customer.car;
        expect(actualCar).toBe(expectedCar);
    });

    test('customer is unable to buy car because they don\'t have enough money', () => {
        customer.car = null;
        customer.wallet = 20000;
        expected = 20000;
        actual = customer.wallet;
        expect(actual).toBe(expected);
        expectedCar = null;
        actualCar = customer.car;
        expect(actualCar).toEqual(expectedCar);
    });
    
});





