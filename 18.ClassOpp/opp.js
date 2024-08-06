// class Named {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let name = new Named();

// class Person extends Named {}

// let insan1 = new Person("fatma");
// console.log(insan1.name);

class Car {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  getInfo() {
    return `Bu avtomobil ${this.marka} markasinin ${this.model} modelidir`;
  }

  static getClassInfo() {
    return `Bu class masinlarin markasi haqqindadir`;
  }
}

let masin1 = new Car("bnw", "f30");

class ElectricCar extends Car {
  constructor(marka, model, engineType) {
    super(marka, model);
    this.engineType = engineType;
  }

  getInfo() {
    return super.getInfo() + " / " + this.engineType;
  }
}

let car2 = new ElectricCar("tesla", "model s", "elektrik");

// console.log(car2);
// console.log(car2.getInfo());

class FuelCar extends Car {
  #vinkod;

  constructor(marka, model, engineType, vinkod) {
    super(marka, model);
    this.engineType = engineType;
    this.#vinkod = vinkod;
  }

  get vinkod() {
    return this.#vinkod;
  }
  set vinkod(yeniVinkod) {
    this.#vinkod = yeniVinkod;
  }
}
let car3 = new ElectricCar("tesla", "model s", "fuel", "1234567");

console.log(car3);
console.log(car3.vinkod);

car3.vinkod("asdfghj");
console.log(car3.vinkod);
