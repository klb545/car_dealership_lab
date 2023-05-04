const Dealer = require('./dealer');
const Car = require('./car');
const Customer = require('./customer');

// cars
const toyota = new Car("Toyota", 20000, "electric");
const peugot = new Car("Peugot", 15000, "diesel");
const hyundai = new Car("Hyundai", 25000, "petrol");
// dealer
const dealer = new Dealer("dealer name", 2);
// customer
const zsolt = new Customer("Zsolt", 20000);


describe('getters', () => {

    test('get name', () => expect(dealer.name).toBe("dealer name"));

    test('get maxNumberOfCars', () => expect(dealer.maxNumberOfCars).toBe(2));

    test('get stock', () => expect(dealer.stock).toEqual([]));
    
});

describe('adding car(s) to stock', () => {  

    beforeEach(() => {
        dealer.stock = [];
    });

    test('can add single car to stock', () => {
        dealer.addCarToStock(toyota);
        expect(dealer.stock).toEqual([{"manufacturer": "Toyota", "price": 20000, "engineType": "electric"}]);
    });

    test('can add a second car to the stock', () => {
        dealer.addCarToStock(toyota);
        dealer.addCarToStock(peugot);
        // expected = [toyota, peugot];
        expect(dealer.stock).toEqual([{"manufacturer": "Toyota", "price": 20000, "engineType": "electric"}, {"manufacturer": "Peugot", "price": 15000, "engineType": "diesel"}]);
    });

    test('will not add car to stock if it exceeds the dealer\'s max capacity', () => {
        dealer.addCarToStock(toyota);
        dealer.addCarToStock(peugot);
        dealer.addCarToStock(hyundai);
        // expected = [toyota, peugot];
        expect(dealer.stock).toEqual([toyota, peugot]);
        expect(dealer.stockCount()).toBe(2);
    });
    
});

describe('returning/printing stock', () => {  

    test('can return stock', () => expect(dealer.returnAllCarManufacturers()).toEqual(["Toyota", "Peugot"]));
    
});

describe('finding all the cars from a given manufacturer', () => {  

    test('can find all the cars from a given manufacturer', () => expect(dealer.findAllCarsFromAGivenManufacturer("Toyota")).toEqual([toyota]));
    
});

describe('finding the total value of all the cars in stock', () => {  

    test('can find the total value of all the cars in stock', () => expect(dealer.findTotalValueOfAllCarsInStock()).toEqual(35000));
    
});


// // // // // // // // // // // // // // // // // // // // // //
// // // EXTENSION 5 - Write tests for extensions 4 & 5  // // //
// // // // // // // // // // // // // // // // // // // // // //

// 5) Write tests to ensure all possible conditions are met, eg. the customer can afford the car.

describe('dealer can sell car if it is in stock and customer can pay', () => {

    beforeEach(() => {
        dealer.stock = [toyota, peugot];
        zsolt.car = null;
      });
    
    test('dealer will sell car if they have it in stock', () => {
        dealer.sellCar(zsolt, toyota);
        expect(dealer.stockCount()).toEqual(1);
    });

    test('dealer won\'t sell car if they don\'t have it in stock', () => {
        dealer.sellCar(zsolt, hyundai);
        expect(dealer.stockCount()).toEqual(2);
    });

    test('dealer won\'t sell car if they have it in stock but the customer doesn\'t have enough money', () => {
        dealer.stock = [toyota, hyundai];
        dealer.sellCar(zsolt, hyundai);
        expect(dealer.stockCount()).toEqual(2);
    });

    test('dealer won\'t sell car if customer is currently in possession of a car (in a world where you can only own one car at a time)', () => {
        zsolt.car = peugot;
        dealer.sellCar(zsolt, toyota);
        expect(dealer.stockCount()).toEqual(2);
    });

});




