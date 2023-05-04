const Car = require('./car');

const Customer = function (name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

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

Customer.prototype.sellCar = function () {
    if (this.car !== null) {
        this.wallet = this.wallet + this.car.price;
        this.car = null;
    }
}


module.exports = Customer;

