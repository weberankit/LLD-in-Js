class Car{
    constructor(){
        if(new.target==Car){
            throw new Error("cannot create object from abstract ")
        }
    }
    startEngine(){
        throw new Error("startengine neede to be implement")

    }
    stopEngine(){
        throw new Error("stopped the engine")
    }
}

class SportsCar extends Car{
    constructor(brand,model){
        super()
        this.brand=brand
        this.model=model
        this.EngineOn=false
    }
    startEngine(){
        this.EngineOn=true
        console.log("started")
    }
    stopEngine(){
        this.EngineOn=false
        console.log("stopped")
    }
}

const audi= new SportsCar("audi","s4")
audi.startEngine()
audi.stopEngine()
//not allowed to create object of abstract class    
const car=new Car()
car.startEngine()