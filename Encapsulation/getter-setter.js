class Car {
    #speed;

    constructor() {
        this.#speed = 0;
    }

    // Getter
    get speed() {
        return this.#speed;
    }

    // Setter
    set speed(newSpeed) {
        if (newSpeed < 0) {
            console.log("Speed cannot be negative");
            return;
        }

        this.#speed = newSpeed;
    }
}

const car = new Car();
console.log(car.speed); // 0

// Setter → setting the value
car.speed = 100;

// Getter → getting the value
console.log(car.speed); // 100


/**
 * 
 * car.speed = 100;       // setter
console.log(car.speed); // getter
 */

/**
 * 
 Getter (get) is used to access/read a property like a normal property, e.g. bike.gear.
Setter (set) is used to control or modify a property when assigning a value, e.g. bike.gear = 3.
Getters and setters let you add logic such as validation or value transformation without changing property-access syntax.
Use a separate field (e.g. #gear) inside them to store the value and avoid infinite recursion.
 */