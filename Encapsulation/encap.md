What is Encapsulation?

Encapsulation is the process of:

Bundling data (properties) and behavior (methods) together inside a class.
Restricting direct access to internal data and providing controlled access through methods.
How Encapsulation is Achieved in JavaScript
Using classes to keep data and methods together.
Using private fields (#) to hide internal data.
Using getters, setters, or other methods to control access and updates.
Benefits of Encapsulation
Prevents unauthorized access to data.
Protects the object's internal state.
Allows validation before modifying data.
Makes code easier to maintain and debug.
In the Example

Private Data:

#currentSpeed

Public Methods:

getSpeed()
accelerate()
brake()

Outside code cannot directly change #currentSpeed:

// ❌ Error
car.#currentSpeed = 500;

Instead, speed can only be changed through:

car.accelerate();
car.brake();
Key Point

Encapsulation = Data Hiding + Controlled Access

The object controls how its internal data is accessed and modified, rather than allowing external code to manipulate it directly.