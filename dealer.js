const Car = require('./car');
const Customer = require('./customer');

const Dealer = function (name, maxNumberOfCars, stock) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.stock = [];
}

// DEALERSHIP METHODS

// Count the number of cars in stock
Dealer.prototype.stockCount = function (){
    return this.stock.length;
};

// Add a car to stock
Dealer.prototype.addCarToStock = function (newCar){
    if(this.stockCount() < this.maxNumberOfCars){
        this.stock.push(newCar);
    };
};

// // Return an array containing each car's manufacturer
Dealer.prototype.returnAllCarManufacturers = function (){
    const carManufacturers = this.stock.map(car => car.manufacturer);
    return carManufacturers;
} 

// Find all the cars from a given manufacturer
Dealer.prototype.findAllCarsFromAGivenManufacturer = function (givenManufacturer){
    const cars = this.stock.filter(car => car.manufacturer === givenManufacturer);
    return cars;
}

// Find the total value of all the cars in stock
Dealer.prototype.findTotalValueOfAllCarsInStock = function (){
    const totalValue = this.stock.reduce((accumulator, car) => accumulator + car.price, 0);
    return totalValue;
}


// Extensions
Dealer.prototype.sellCar = function (customer, carToFind) {
    const thing = this.stock.find(car => car === carToFind);
    if(thing !== undefined && customer.wallet >= carToFind.price){
        this.stock = this.stock.splice(this.stock.findIndex(car => car === carToFind), 1);
        customer.buyCar(carToFind);
    };
}

Dealer.prototype.findAllCarsInPriceRange = function (lowerBound, upperBound){
    const cars = this.stock.filter(car => car.price >= lowerBound && car.price <= upperBound);
    return cars;
}

Dealer.prototype.findAllCarsWithSpecifiedEngineType = function (givenEngineType){
    const cars = this.stock.filter(car => car.engineType === givenEngineType);
    return cars;
}


module.exports = Dealer;


