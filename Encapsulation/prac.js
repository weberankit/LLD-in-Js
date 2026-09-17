class sprtsBike{
    #brand;
    #iswork;
    #gear;

    constructor(brand,iswork){
        this.#brand=brand;
        this.#iswork=iswork;
        this.#gear=0;
    }

    isBikeWorking(){
        return this.#iswork;
    }

    getGear(){
        return this.#gear;
    }

    setGear(gear){
        this.#gear=gear;
    }
}

const honda=new sprtsBike("Honda",true);
console.log(honda.getGear());
honda.setGear(3);
console.log(honda.getGear());
console.log(honda.isBikeWorking());
