in OOP, static polymorphism and dynamic polymorphism differ mainly in when the method to execute is determined.
1. Static polymorphism (compile-time)
The method or operation is determined based on the available information at compile time.
Example: method overloading in languages like C++.
class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
};


Here, add(2, 3) and add(2, 3, 4) select different methods based on the number of arguments.
2. Dynamic polymorphism (runtime)
The method implementation is selected at runtime, based on the actual object.
Example: method overriding in JavaScript.
class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}

const animal1 = new Dog();
const animal2 = new Cat();

animal1.sound(); // Bark
animal2.sound(); // Meow


Both objects call sound(), but the implementation differs according to the actual object.
Quick comparison
Static polymorphism	Dynamic polymorphism
Compile-time selection	Runtime selection
Common example: method overloading	Common example: method overriding
Common in C++ templates and overloading	Common in virtual methods in C++ and overridden methods in Java
JavaScript doesn't support traditional method overloading by signature	JavaScript supports runtime method overriding



#########################js####################################

1. Static polymorphism in JavaScript
JavaScript doesn't support traditional method overloading like C++, where methods have the same name but different parameter signatures.
However, you can achieve similar behavior using default parameters, rest parameters, or conditional logic.
class Calculator {
    add(...nums) {
        return nums.reduce((sum, n) => sum + n, 0);
    }
}

const calc = new Calculator();

console.log(calc.add(2, 3));    // 5
console.log(calc.add(2, 3, 4)); // 9


This is flexible behavior, but it's not traditional static polymorphism because JavaScript does not select overloaded methods at compile time.
2. Dynamic polymorphism in JavaScript
JavaScript supports dynamic polymorphism through method overriding.
class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.sound());


Output:
Bark
Meow


The same method call, animal.sound(), executes different implementations depending on the actual object.