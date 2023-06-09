const Customer = require('./customer');
const Car = require('./car');
const Dealer = require('./dealer');

const customer = new Customer("Zsolt", 20000);
const dealer = new Dealer("dealer name", 2);
const toyota = new Car("Toyota", 20000, "electric");
const peugot = new Car("Peugot", 15000, "diesel");
const hyundai = new Car("Hyundai", 25000, "petrol");
dealer.stock = [toyota, peugot, hyundai];

describe('getters', () => {

    test('get name', () => expect(customer.name).toBe("Zsolt"));

    test('get wallet', () => expect(customer.wallet).toBe(20000));

    test('get car', () => expect(customer.car).toEqual(null));
    
});


describe('customer can buy car if they have enough money and if they don\'t currently possess a car (...in a world where you can only own one car)', () => {

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
        customer.wallet = 10000;
        dealer.stock = [toyota, peugot];
        //
        customer.buyCar(toyota);
        expect(customer.wallet).toBe(10000);
        expect(customer.car).toEqual(null);
    });

    test('customer is unable to buy car because they currently possess a car', () => {
        customer.car = toyota;
        customer.wallet = 25000;
        dealer.stock = [toyota, peugot];
        //
        customer.buyCar(toyota);
        expect(customer.wallet).toBe(25000);
        expect(customer.car).toEqual(toyota);
    });
    
});





