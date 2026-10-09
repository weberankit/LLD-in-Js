class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }

    accelerate(){
        throw new Error("accelerate() must be implemented by a child class");
    }
}

class newCar extends car{
    constructor(brand,model){
        super(brand,model);
        this.currentSpeed=0;
    }

    accelerate(){
        this.currentSpeed+=20;
        console.log(`${this.brand} ${this.model}: Accelerating to ${this.currentSpeed} km/h`);
    }
}

class secondHandCar extends car{
    constructor(brand,model){
        super(brand,model);
        this.currentSpeed=0;
    }

    accelerate(){
        this.currentSpeed+=10;
        console.log(`${this.brand} ${this.model}: Accelerating to ${this.currentSpeed} km/h`);
    }
}

const myNewCar = new newCar("Honda", "Civic");
const mySecondHandCar = new secondHandCar("Toyota", "Corolla"); 
myNewCar.accelerate();
mySecondHandCar.accelerate();