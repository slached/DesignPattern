import { FuelType, AnyCar } from "./AnyCar"; 

class Car {
  anyCar: AnyCar;
  constructor(carType : AnyCar) {
    this.anyCar = carType;
  }
  run() {
    console.log(`${this.anyCar.brand} ${this.anyCar.make}'s fuel type is ${this.anyCar.fuelType} and she is ready to ride.`);
  }
}

class DieselCar implements AnyCar {
  constructor(params) {
    this.fuelType = FuelType.Diesel;
    this.brand = params.brand;
    this.make = params.make;
  }
  fuelType: FuelType;
  brand: string;
  make: number;
}

class GasolineCar implements AnyCar {
  constructor(params) {
    this.fuelType = FuelType.Gasoline;
    this.brand = params.brand;
    this.make = params.make;
  }
  fuelType: FuelType;
  brand: string;
  make: number;
}

new Car(new GasolineCar({ brand: "Ford", make: 1969 })).run();
