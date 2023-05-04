const Dealer = require('./dealer');
const Car = require('./car');
const Customer = require('./customer');

const dealer = new Dealer("dealer name", 2);

const car1 = new Car("Toyota", 20000, "electric");
const car2 = new Car("Peugot", 15000, "diesel");
const car3 = new Car("Honda", 25000, "petrol");

const customer = new Customer("Zsolt", 20000);


describe('getters', () => {

    test('has name', () => {
        expected = "dealer name";
        actual = dealer.name;
        expect(actual).toBe(expected);
    });

    test('has maxNumberOfCars', () => {
        expected = 2;
        actual = dealer.maxNumberOfCars;
        expect(actual).toBe(expected);
    });

    test('has stock', () => {
        expected = [];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
    });
    
});


describe('adding car(s) to stock', () => {  

    test('can add single car to stock', () => {
        dealer.addCarToStock(car1);
        expected = [{"manufacturer": "Toyota", "price": 20000, "engineType": "electric"}];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
    });

    test('can add a second car to the stock', () => {
        dealer.addCarToStock(car2);
        // expected = [car1, car2];
        expected = [{"manufacturer": "Toyota", "price": 20000, "engineType": "electric"}, {"manufacturer": "Peugot", "price": 15000, "engineType": "diesel"}];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
    });

    test('will not add car to stock if it exceeds the dealer\'s max capacity', () => {
        dealer.addCarToStock(car3);
        // expected = [car1, car2];
        expected = [car1, car2];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
    });
    
});


describe('returning/printing stock', () => {  

    test('can return stock', () => {
        expected = ["Toyota", "Peugot"];
        actual = dealer.returnAllCarManufacturers();
        expect(actual).toEqual(expected);
    });
    
});



describe('finding all the cars from a given manufacturer', () => {  

    test('can find all the cars from a given manufacturer', () => {
        expected = [car1];
        actual = dealer.findAllCarsFromAGivenManufacturer("Toyota");
        expect(actual).toEqual(expected);
    });
    
});



describe('finding the total value of all the cars in stock', () => {  

    test('can find the total value of all the cars in stock', () => {
        expected = 35000;
        actual = dealer.findTotalValueOfAllCarsInStock();
        expect(actual).toEqual(expected);
    });
    
});



// extensions
describe('dealer can sell car if it is in stock and customer can pay', () => {
    
    test('dealer will sell car if they have it in stock', () => {
        dealer.addCarToStock(car1);
        dealer.addCarToStock(car2);
        dealer.sellCar(customer, car1);
        expected = 1;
        actual = dealer.stockCount();
        expect(actual).toEqual(expected);
    });

    test('dealer won\'t sell car if they don\'t have it in stock', () => {
        dealer.addCarToStock(car1);
        customer.car = null;
        dealer.sellCar(customer, car3);
        expected = 2;
        actual = dealer.stockCount();
        expect(actual).toEqual(expected);
    });

    test('dealer won\'t sell car if they have it in stock but the customer doesn\'t have enough money', () => {
        dealer.stock = [];
        dealer.addCarToStock(car1);
        dealer.addCarToStock(car3);
        dealer.sellCar(customer, car3);
        expected = 2;
        actual = dealer.stockCount();
        expect(actual).toEqual(expected);
    });

})

