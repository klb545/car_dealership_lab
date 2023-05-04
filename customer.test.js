const Customer = require('./customer');
const Car = require('./car');

const customer = new Customer("Zsolt", 20000);
const toyota = new Car("Toyota", 20000, "electric");
const peugot = new Car("Peugot", 15000, "diesel");
const car3 = new Car("Honda", 25000, "petrol");

describe('getters', () => {

    test('get name', () => expect(customer.name).toBe("Zsolt"));

    test('get wallet', () => expect(customer.wallet).toBe(20000));

    test('get car', () => expect(customer.car).toEqual(null));
    
});


describe('customer can buy car if they have enough money', () => {

    test('customer can buy a car because they have more in their wallet than the value of the car', () => {
        customer.buyCar(peugot);
        expect(customer.wallet).toBe(5000);
        expect(customer.car).toBe(peugot);
    });

    test('customer can buy a car because they have the exact value of the car in their wallet', () => {
        customer.car = null;
        customer.wallet = 20000;
        //
        customer.buyCar(toyota);
        expect(customer.wallet).toBe(0);
        expect(customer.car).toBe(toyota);
    });

    test('customer is unable to buy car because they don\'t have enough money', () => {
        customer.car = null;
        customer.wallet = 20000;
        //
        expect(customer.wallet).toBe(20000);
        expect(customer.car).toEqual(null);
    });
    
});





