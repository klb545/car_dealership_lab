const Customer = require('./customer');
const Car = require('./car');
const Dealer = require('./dealer');

// customer
const zsolt = new Customer("Zsolt", 20000);
// dealer
const dealer = new Dealer("car dealer", 3);
// cars
const toyota = new Car("Toyota", 20000, "electric");
const peugot = new Car("Peugot", 15000, "diesel");
const honda = new Car("Honda", 25000, "petrol");


// setting stock for the car dealer
dealer.stock = [toyota, peugot, honda];

// print objects
console.log(zsolt);
console.log(dealer);

// manual tests for methods
// console.log(zsolt.buyCar(toyota));
// stock doesn't go down but I think that might be okay because it will go down if you call the buyCar method within the dealer's sellCar method

zsolt.car = null;
zsolt.wallet = 20000;
dealer.stock = [toyota, peugot, honda];


// BEFORE dealer sells Toyota to Zsolt
console.log('Zsolt\'s wallet before purchasing Toyota:', zsolt.wallet);
console.log('Zsolt\'s car before purchasing Toyota:', zsolt.car);
console.log('Stock Count before selling Toyota to Zsolt:', dealer.stockCount());
console.log('Stock List before selling Toyota to Zsolt:', dealer.stock);

// SELLING Toyota to Zsolt
dealer.sellCar(zsolt, toyota);

// AFTER dealer sells Toyota to Zsolt
console.log('Zsolt\'s wallet after purchasing Toyota:', zsolt.wallet);
console.log('Zsolt\'s car after purchasing Toyota:', zsolt.car);
console.log('Stock Count after selling Toyota to Zsolt:', dealer.stockCount());
console.log('Stock List after selling Toyota to Zsolt:', dealer.stock);

