import { createContainer, InjectionMode, asClass, asFunction } from "awilix";
import { DieselCar } from "./DieselCar";
import { GasolineCar } from "./GasolineCar";
import { Car } from "./Car";

export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

export const setup = () => {
  container.register({
    dieselCar: asFunction(({ brand, make }) => new DieselCar({ brand, make })),
    gasolineCar: asFunction(({ brand, make }) => new GasolineCar({ brand, make })),
    car: asClass(Car),
  });
};
