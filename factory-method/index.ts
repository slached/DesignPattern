interface IVehicle {
  getName(): string;
}

class Car implements IVehicle {
  getName(): string {
    return "Car";
  }
}

class Bike implements IVehicle {
  getName(): string {
    return "Bike";
  }
}

class Truck implements IVehicle {
  getName(): string {
    return "Truck";
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): IVehicle;
}

class CarFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Bike();
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Truck();
  }
}

// Example usage
const carFactory = new CarFactory();
const bikeFactory = new BikeFactory();
const truckFactory = new TruckFactory();

const car = carFactory.createVehicle();
const bike = bikeFactory.createVehicle();
const truck = truckFactory.createVehicle();

console.log(car.getName()); // Output: Car
console.log(bike.getName()); // Output: Bike
console.log(truck.getName()); // Output: Truck
