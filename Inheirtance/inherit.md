Inheritance + Access Modifiers Notes
Inheritance

Inheritance allows a child class to reuse properties and methods from a parent class.

class Car {
    startEngine() {
        console.log("Engine Started");
    }
}

class ManualCar extends Car {
    shiftGear() {
        console.log("Gear Changed");
    }
}

Now ManualCar can use:

startEngine() (from Car)
shiftGear() (its own)
Access Modifiers

Access modifiers control who can access data and methods.

1. Public

Public members can be accessed from anywhere.

class Car {
    company = "Tesla";
}

const car = new Car();
console.log(car.company); // Tesla
Rule

 Inside class
 Child class
 Outside class

2. Private

Private members can only be accessed inside the same class.

JavaScript uses #.

class Car {
    #speed = 100;

    showSpeed() {
        console.log(this.#speed);
    }
}

const car = new Car();

car.showSpeed(); // 100
// console.log(car.#speed);  Error
Rule

Inside class

 Child class

 Outside class

3. Protected (C++ Concept)

JavaScript does not have a real protected keyword.

In C++:

class Car {
protected:
    int speed;
};
Rule

 Inside class

 Child class

 Outside class

Why Protected is Useful?

Suppose Car has speed.

class Car {
protected:
    int speed;
};

class ManualCar : public Car {
public:
    void accelerate() {
        speed += 20; // Allowed
    }
};

Child classes can use speed.

But outside code cannot:

ManualCar car;
car.speed = 100; //  Error
Quick Comparison
Modifier	Same Class	Child Class	Outside Class
Public	
Protected	
Private	
Relation with Inheritance
Parent Class
Car
 ├── company
 ├── model
 ├── speed
 └── startEngine()
Child Class
ManualCar
 ├── currentGear
 └── shiftGear()

ManualCar automatically gets:

company
model
speed
startEngine()

from Car.

This is the main benefit of inheritance:
Reuse existing code instead of writing it again.

One-Line Interview Answer

Public → Everyone can access.

Private → Only the same class can access.

Protected → Same class and child classes can access, but outside code cannot.

Inheritance → Child class acquires properties and methods of the parent class to achieve code reusability.