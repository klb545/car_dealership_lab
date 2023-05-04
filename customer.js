// // // // // // // // // // // // // // // //
// // // EXTENSION 2 - Customer class  // // //
// // // // // // // // // // // // // // // //

// 2) Add a Customer class with a name, a wallet representing the amount of money they have and a car property which is initialised to be null.

const Car = require('./car');

const Customer = function (name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}


// // // // // // // // // // // // // // // // // // // //
// // // EXTENSION 3 - Customer method - buyCar()  // // //
// // // // // // // // // // // // // // // // // // // //

// 3) Write a buyCar method which checks the Customer wallet and updates their Car property.
Customer.prototype.buyCar = function (purchasedCar) {
    if (this.car !== null) {
        return `${this.name} should sell their ${this.car.manufacturer} before they purchase another car.`;
    };
    if (this.car === null && purchasedCar.price <= this.wallet) {
        this.car = purchasedCar;
        this.wallet = this.wallet - purchasedCar.price;
        return `${this.name} purchased a ${this.car.manufacturer}. Their wallet is now ${this.wallet}.`;
    };
    return `${this.name} is unable to purchase this car. They need ${purchasedCar.price - this.wallet} more in their wallet.`;
}


module.exports = Customer;

