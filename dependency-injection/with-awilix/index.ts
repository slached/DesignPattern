import { setup, container } from "./awilix";
import { Car } from "./Car";
import { asValue } from "awilix";
// awilix setup initiator
setup();

container.register({
  brand: asValue("Ferrari"),
  make: asValue(1997),
});

// after initiation we could resolve the car class
const car = container.resolve<Car>("car");

/*
IMPORTANT
if the brand and make register was here car could not resolve brand or make
I try to explain more detailed
when "container.resolve<Car>("car")" run Car class initiating and after
initiation Car class trying to access diesel car which we already register 
in awilix.ts setup section and dieselCar is trying to get brand and make 
but can't because register should be before the Car class resolve
container.register({
  brand: asValue("Ferrari"),
  make: asValue(1997),
}); */

car.run();
