create a base class Car with 3–4 attributes and 3–4 methods. Then create two derived classes: ManualCar and ElectricCar.also which use association or inheritances
- ManualCar should have a changeGear() method.
- ElectricCar should have a chargeBattery() method.


solution- use inheritances
 JavaScript implementation
class Car {
  start() {
    console.log("Car started");
  }
}

class ManualCar extends Car {
  changeGear() {
    console.log("Changing gear");
  }
}

class ElectricCar extends Car {
  chargeBattery() {
    console.log("Charging battery");
  }
}