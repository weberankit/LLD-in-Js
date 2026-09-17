/*
Encapsulation in JavaScript

1. Data (properties) and behavior (methods) are wrapped together inside a class.
2. Private fields (#) hide internal data from outside access.
*/

class SportsCar {
    #brand;
    #model;
    #isEngineOn;
    #currentSpeed;
    #currentGear;
    #tyreCompany;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
        this.#isEngineOn = false;
        this.#currentSpeed = 0;
        this.#currentGear = 0;
        this.#tyreCompany = "MRF";
    }

    getSpeed() {
        return this.#currentSpeed;
    }

    getTyreCompany() {
        return this.#tyreCompany;
    }

    setTyreCompany(tyreCompany) {
        this.#tyreCompany = tyreCompany;
    }

    startEngine() {
        this.#isEngineOn = true;
        console.log(
            `${this.#brand} ${this.#model} : Engine starts with a roar!`
        );
    }

    shiftGear(gear) {
        if (!this.#isEngineOn) {
            console.log(
                `${this.#brand} ${this.#model} : Engine is off! Cannot Shift Gear.`
            );
            return;
        }

        this.#currentGear = gear;
        console.log(
            `${this.#brand} ${this.#model} : Shifted to gear ${this.#currentGear}`
        );
    }

    accelerate() {
        if (!this.#isEngineOn) {
            console.log(
                `${this.#brand} ${this.#model} : Engine is off! Cannot accelerate.`
            );
            return;
        }

        this.#currentSpeed += 20;
        console.log(
            `${this.#brand} ${this.#model} : Accelerating to ${this.#currentSpeed} km/h`
        );
    }

    brake() {
        this.#currentSpeed -= 20;

        if (this.#currentSpeed < 0) {
            this.#currentSpeed = 0;
        }

        console.log(
            `${this.#brand} ${this.#model} : Braking! Speed is now ${this.#currentSpeed} km/h`
        );
    }

    stopEngine() {
        this.#isEngineOn = false;
        this.#currentGear = 0;
        this.#currentSpeed = 0;

        console.log(
            `${this.#brand} ${this.#model} : Engine turned off.`
        );
    }
}

// Main
const mySportsCar = new SportsCar("Ford", "Mustang");

mySportsCar.startEngine();
mySportsCar.shiftGear(1);
mySportsCar.accelerate();
mySportsCar.shiftGear(2);
mySportsCar.accelerate();
mySportsCar.brake();
mySportsCar.stopEngine();
mySportsCar.setTyreCompany("Bridgestone");
console.log(
   
   mySportsCar.getTyreCompany() 
    
    
);

// ❌ Error - private field cannot be accessed outside class
// mySportsCar.#currentSpeed = 500;