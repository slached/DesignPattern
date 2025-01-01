interface ICar {
  getBrand(): string;
}

class Car implements ICar {
  getBrand(): string {
    return "Car";
  }
}

class Bike implements ICar {
  getBrand(): string {
    return "Bike";
  }
}

class Truck implements ICar {
  getBrand(): string {
    return "Truck";
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): ICar;
}

class CarFactory extends VehicleFactory {
  createVehicle(): ICar {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(): ICar {
    return new Bike();
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle(): ICar {
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

console.log(car.getBrand()); // Output: Car
console.log(bike.getBrand()); // Output: Bike
console.log(truck.getBrand()); // Output: Truck
