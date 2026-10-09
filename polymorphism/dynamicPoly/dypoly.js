
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
        console.log(`${this.brand} ${this.model}: Engine started.`);
    }

    stopEngine() {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model}: Engine turned off.`);
    }

    // Abstract methods (simulated in JavaScript)
    accelerate() {
        throw new Error("accelerate() must be implemented by a child class");
    }

    brake() {
        throw new Error("brake() must be implemented by a child class");
    }
}

class ManualCar extends Car {
    constructor(brand, model) {
        super(brand, model);
        this.currentGear = 0;
    }

    shiftGear(gear) {
        this.currentGear = gear;
        console.log(
            `${this.brand} ${this.model}: Shifted to gear ${this.currentGear}`
        );
    }

    // Overriding the parent method
    accelerate() {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model}: Cannot accelerate! Engine is off.`);
            return;
        }

        this.currentSpeed += 20;
        console.log(
            `${this.brand} ${this.model}: Accelerating to ${this.currentSpeed} km/h`
        );
    }

    brake() {
        this.currentSpeed = Math.max(0, this.currentSpeed - 20);

        console.log(
            `${this.brand} ${this.model}: Braking! Speed is now ${this.currentSpeed} km/h`
        );
    }
}

class ElectricCar extends Car {
    constructor(brand, model) {
        super(brand, model);
        this.batteryLevel = 100;
    }

    chargeBattery() {
        this.batteryLevel = 100;
        console.log(`${this.brand} ${this.model}: Battery fully charged!`);
    }

    // Overriding the parent method
    accelerate() {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model}: Cannot accelerate! Engine is off.`);
            return;
        }

        if (this.batteryLevel <= 0) {
            console.log(`${this.brand} ${this.model}: Battery dead! Cannot accelerate.`);
            return;
        }

        this.batteryLevel -= 10;
        this.currentSpeed += 15;

        console.log(
            `${this.brand} ${this.model}: Accelerating to ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`
        );
    }

    brake() {
        this.currentSpeed = Math.max(0, this.currentSpeed - 15);

        console.log(
            `${this.brand} ${this.model}: Regenerative braking! Speed is now ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`
        );
    }
}

// Main program
const myManualCar = new ManualCar("Suzuki", "WagonR");

myManualCar.startEngine();
myManualCar.accelerate();
myManualCar.accelerate();
myManualCar.brake();
myManualCar.stopEngine();

console.log("----------------------");

const myElectricCar = new ElectricCar("Tesla", "Model S");

myElectricCar.startEngine();
myElectricCar.accelerate();
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.stopEngine();
