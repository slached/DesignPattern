import { AnyCar, FuelType } from "./AnyCar";

export class DieselCar implements AnyCar {
  constructor(params) {
    this.fuelType = FuelType.Diesel;
    this.brand = params.brand;
    this.make = params.make;
  }
  fuelType: FuelType;
  brand: string;
  make: number;
}
