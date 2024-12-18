import { AnyCar } from "./AnyCar";

export class Car {
  private carType: AnyCar;

  constructor({ gasolineCar, dieselCar }) {
    this.carType = gasolineCar;
  }
  run() {
    console.log(`Running with ${this.carType.fuelType} car, brand: ${this.carType.brand}, make: ${this.carType.make}`);
  }
}
