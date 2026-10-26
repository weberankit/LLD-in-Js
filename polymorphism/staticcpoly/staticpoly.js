
class ManualCar {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.isEngineOn = false;
        this.currentSpeed = 0;
        this.currentGear = 0;
    }

    startEngine() {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model}: Engine started.`);
    }

    stopEngine() {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model}: Engine turned off.`);
    }

    // Simulating method overloading
    accelerate(speed = 20) {
        if (!this.isEngineOn) {
            console.log(
                `${this.brand} ${this.model}: Cannot accelerate! Engine is off.`
            );
            return;
        }

        this.currentSpeed += speed;

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

    shiftGear(gear) {
        this.currentGear = gear;

        console.log(
            `${this.brand} ${this.model}: Shifted to gear ${this.currentGear}`
        );
    }
}

// Main program
const myManualCar = new ManualCar("Suzuki", "WagonR");

myManualCar.startEngine();
myManualCar.accelerate();      // Default: increases speed by 20
myManualCar.accelerate(40);    // Custom: increases speed by 40
myManualCar.brake();
myManualCar.stopEngine();
