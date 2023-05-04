const Car = require('./car');
const Customer = require('./customer');

const Dealer = function (name, maxNumberOfCars, stock) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.stock = [];
}


// // // // // // // // // // // // // // //
// // //  MVP - Dealership methods  // // //
// // // // // // // // // // // // // // //

// 1) Count the number of cars in stock
Dealer.prototype.stockCount = function (){
    return this.stock.length;
};

// 2) Add a car to stock
//    ^ note: modified after implementing EXTENSION 1: Modify and test the method for adding a car to stock to ensure we can't add more cars than we have space for.
Dealer.prototype.addCarToStock = function (newCar){
    if(this.stockCount() < this.maxNumberOfCars){
        this.stock.push(newCar);
    };
};

// 3) Return an array containing each car's manufacturer
Dealer.prototype.returnAllCarManufacturers = function (){
    const carManufacturers = this.stock.map(car => car.manufacturer);
    return carManufacturers;
} 

// 4) Find all the cars from a given manufacturer
Dealer.prototype.findAllCarsFromAGivenManufacturer = function (givenManufacturer){
    const cars = this.stock.filter(car => car.manufacturer === givenManufacturer);
    return cars;
}

// 5) Find the total value of all the cars in stock
Dealer.prototype.findTotalValueOfAllCarsInStock = function (){
    const totalValue = this.stock.reduce((accumulator, car) => accumulator + car.price, 0);
    return totalValue;
}

// // // // // // // // // // // // // // // // // // //
// // // EXTENSIONS 4 & 6 - Dealership methods  // // //
// // // // // // // // // // // // // // // // // // //

// 4) Write a sellCar method to Dealership which removes a car from the stock.
//    This method will also call buyCar() from customer.
Dealer.prototype.sellCar = function (customer, carToFind) {
    const checkInStock = this.stock.find(car => car === carToFind);
    if(checkInStock !== undefined && customer.wallet >= carToFind.price && customer.car === null){
        this.stock.splice((this.stock.findIndex(car => car === carToFind)), 1);
        customer.buyCar(carToFind);
    };
}
// 6) Modify the method which searches for cars by manufacturer to let the
//    user search by price or engine type instead.
//    Note: haven't written tests for these yet.
// 6.1) findAllCarsInPriceRange()
Dealer.prototype.findAllCarsInPriceRange = function (lowerBound, upperBound){
    const cars = this.stock.filter(car => car.price >= lowerBound && car.price <= upperBound);
    return cars;
}
// 6.2) findAllCarsWithSpecifiedEngineType()
Dealer.prototype.findAllCarsWithSpecifiedEngineType = function (givenEngineType){
    const cars = this.stock.filter(car => car.engineType === givenEngineType);
    return cars;
}


module.exports = Dealer;


