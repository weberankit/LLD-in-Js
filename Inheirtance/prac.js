class car{
    constructor(company,model){
        this.company=company;
        this.model=model
        this.isEngineOn=false;
    }

    getCompany(){
        return this.company ;
    }
}

class manualCar extends car{
  constructor(company,model,price){
    super(company,model)

    this.price=price
  }

  engineStart(){
    console.log(this.price,"price")
    console.log(this.isEngineOn,"isEngineOn")
  return  this.isEngineOn=true

  }

}

const manualCar1=new manualCar("BMW","X5",900)
console.log(manualCar1.getCompany(),manualCar1.engineStart())