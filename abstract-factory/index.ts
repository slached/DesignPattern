interface IProduct {
  getBrand(): string;
}

class OpelCar implements IProduct {
  getBrand(): string {
    return "Opel Car";
  }
}

class FordCar implements IProduct {
  getBrand(): string {
    return "Ford Car";
  }
}

class OpelScissor implements IProduct {
  getBrand(): string {
    return "Opel Scissor";
  }
}

class FordScissor implements IProduct {
  getBrand(): string {
    return "Ford Scissor";
  }
}

abstract class CarFactory_ {
  abstract createCar(): IProduct;
}

class OpelFactory extends CarFactory_ {
  createCar(): IProduct {
    return new OpelCar();
  }
  createScissor(): IProduct {
    return new OpelScissor();
  }
}

class FordFactory extends CarFactory_ {
  createCar(): IProduct {
    return new FordCar();
  }
  createScissor(): IProduct {
    return new FordScissor();
  }
}

const opelFactory = new OpelFactory();
const fordFactory = new FordFactory();

const opelCar = opelFactory.createCar(); // Opel Car
const opelScissor = opelFactory.createScissor(); // Opel Scissor

const fordCar = fordFactory.createCar(); // Ford Car
const fordScissor = fordFactory.createScissor(); // Ford Scissor
