/*
Inheritance in JavaScript

Parent Class: Car
Child Classes: ManualCar, ElectricCar

Child classes inherit all properties and methods of Car,
and can also have their own specific properties and methods.
*/

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.isEngineOn = false;
        this.currentSpeed = 0;
    }

    // Common methods for all cars
    startEngine() {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model} : Engine started.`);
    }

    stopEngine() {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Engine turned off.`);
    }

    accelerate() {
        if (!this.isEngineOn) {
            console.log(
                `${this.brand} ${this.model} : Cannot accelerate! Engine is off.`
            );
            return;
        }

        this.currentSpeed += 20;
        console.log(
            `${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`
        );
    }

    brake() {
        this.currentSpeed -= 20;

        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }

        console.log(
            `${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`
        );
    }
}

// Child Class
class ManualCar extends Car {
    constructor(brand, model) {
        super(brand, model); // Calls parent constructor
        this.currentGear = 0;
    }

    // Specific to ManualCar
    shiftGear(gear) {
        this.currentGear = gear;
        console.log(
            `${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`
        );
    }
}

// Child Class
class ElectricCar extends Car {
    constructor(brand, model) {
        super(brand, model); // Calls parent constructor
        this.batteryLevel = 100;
    }

    // Specific to ElectricCar
    chargeBattery() {
        this.batteryLevel = 100;
        console.log(
            `${this.brand} ${this.model} : Battery fully charged!`
        );
    }
}

// Main

const myManualCar = new ManualCar("Suzuki", "WagonR");

myManualCar.startEngine();
myManualCar.shiftGear(1);
myManualCar.accelerate();
myManualCar.brake();
myManualCar.stopEngine();

console.log("----------------------");

const myElectricCar = new ElectricCar("Tesla", "Model S");

myElectricCar.chargeBattery();
myElectricCar.startEngine();
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.stopEngine();