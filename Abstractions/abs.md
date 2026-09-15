## Definition:
Abstraction means hiding unnecessary implementation details and showing only the required features to the user. Users know what to do, not how it works internally.

Real-Life Examples
Car → You drive using steering, clutch, brake, and accelerator. You don't need to know how the engine works internally.
TV → You use a remote. You don't need to know the internal circuitry.
Mobile/Laptop → You use apps without knowing the hardware details.
Key Idea

"Hide unnecessary details and expose only what is necessary."

Why Abstraction?
Reduces complexity.
Makes code easier to use.
Hides internal implementation.
Improves maintainability.
In OOP

We provide an interface/abstract class containing only the required methods.

class Car {
    startEngine() {}
    stopEngine() {}
    accelerate() {}
}

User only calls:

myCar.startEngine();
myCar.accelerate();

The user does not know how these methods are implemented internally.

Benefits
Cleaner code
Better readability
Easy to use
Hides implementation details
Focus on "What" instead of "How"
One-Line Interview Definition

Abstraction is the process of hiding implementation details and exposing only essential functionalities to the user.