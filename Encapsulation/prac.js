
class sprtsBike {
    #brand;
    #iswork;
    #gear;
    #name;

    constructor(brand, iswork) {
        this.#brand = brand;
        this.#iswork = iswork;
        this.#gear = 0;

        this.name = "Sports Bike"; // Calls the setter
    }

    isBikeWorking() {
        return this.#iswork;
    }

    getGear() {
        return this.#gear;
    }

    setGear(gear) {
        this.#gear = gear;
    }

    set name(value) {
        this.#name = value + " TVS";
    }

    get name() {
        return this.#name;
    }
}

const honda = new sprtsBike("Honda", true);

console.log(honda.name); // Sports Bike TVS

honda.name = "Racing Bike"; // Calls setter
console.log(honda.name);   // Racing Bike TVS
