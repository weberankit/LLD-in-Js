Inheritance Notes (JavaScript)
JavaScript does not have a protected keyword.

C++ / TypeScript:
- private   → only same class
- protected → same class + child classes
- public    → everyone

JavaScript:
- #field     → private
- normal field (this.name) → public
- protected does not exist
Example
class Car {
    constructor(company) {
        this.company = company; // public
    }
}

Child class can access it:

class ManualCar extends Car {
    showCompany() {
        console.log(this.company); // 
    }
}

Outside code can also access it:

const car = new ManualCar("BMW");

console.log(car.company); // 
Important
In JavaScript, when you write:

this.price

JavaScript looks for a property named "price"
inside the current object.

If the property exists:
→ return its value

If the property does not exist:
→ return undefined

Example:

const car = {
    company: "BMW"
};

console.log(car.price); // undefined
Remember
JavaScript has:
 public fields (this.name)
 private fields (#name)

JavaScript does NOT have:
 protected fields

Developers usually use normal properties
(this.name) when child classes need access.