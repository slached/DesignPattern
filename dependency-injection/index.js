"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnyCar_1 = require("./AnyCar");
class Car {
    constructor(carType) {
        this.anyCar = carType;
    }
    run() {
        console.log(`${this.anyCar.brand} ${this.anyCar.make}'s fuel type is ${this.anyCar.fuelType} and she is ready to ride.`);
    }
}
class DieselCar {
    constructor(params) {
        this.fuelType = AnyCar_1.FuelType.Diesel;
        this.brand = params.brand;
        this.make = params.make;
    }
}
class GasolineCar {
    constructor(params) {
        this.fuelType = AnyCar_1.FuelType.Gasoline;
        this.brand = params.brand;
        this.make = params.make;
    }
}
new Car(new GasolineCar({ brand: "Ford", make: 1969 })).run();
