import { AnyCar, FuelType } from "./AnyCar";

export class GasolineCar implements AnyCar {
  constructor(params) {
    this.fuelType = FuelType.Gasoline;
    this.brand = params.brand;
    this.make = params.make;
  }
  fuelType: FuelType;
  brand: string;
  make: number;
}
