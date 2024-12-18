export enum FuelType {
  Diesel = "Diesel",
  Gasoline = "Gasoline",
}

export interface AnyCar {
  fuelType: FuelType;
  brand: string;
  make: number;
}
