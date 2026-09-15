
# JavaScript `new.target` – Short Notes

### What is `new.target`?

`new.target` is a special JavaScript keyword available inside a constructor.

It tells us:

> Which class was actually used with the `new` keyword to create the object.

### Example

```js
class Car {
    constructor() {
        console.log(new.target.name);
    }
}

new Car(); // Output: Car
```

---

### With Inheritance

```js
class Car {
    constructor() {
        console.log(new.target.name);
    }
}

class SportsCar extends Car {}

new SportsCar(); // Output: SportsCar
```

Even though the `Car` constructor runs, `new.target` refers to the class being instantiated (`SportsCar`).

---

### Why is it Used?

A common use is to simulate an **Abstract Class** in JavaScript.

```js
class Car {
    constructor() {
        if (new.target === Car) {
            throw new Error("Cannot create Car directly");
        }
    }
}
```

Now:

```js
new Car(); // ❌ Error
```

But:

```js
class SportsCar extends Car {}

new SportsCar(); // ✅ Works
```

---

### Real-World Analogy

* `Car` = Blueprint / Contract
* `SportsCar` = Real Car

You cannot drive a blueprint.

You can only drive an actual car built from that blueprint.

---

### Interview Definition

`new.target` is a special constructor property that tells which class is being instantiated. It is commonly used to prevent direct creation of a base class and simulate abstract classes in JavaScript.
