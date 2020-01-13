class Vehicle_ {
  constructor(public color:string) {}
}

class Vehicle {
  color: string = 'red';

  constructor(color:string) {
    this.color = color;
  }

  public drive():void {
    console.log('chuga chugga')
  }

  protected honk():void {
    console.log("hock")
  }
}

class Car extends Vehicle{
  constructor(color, public wheels: number ) {
    super(color)
  }

  public drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
  }

  public useHonk():void {
    return this.honk()
  }
}

const vehicle = new Vehicle('orange')
vehicle.drive()
console.log(vehicle.color);

// vehicle.honk() // error


const bmw = new Car('blue', 4)
bmw.drive()


interface haveColor {
  color: string;
}

const printColor = (things: haveColor):void => {
  console.log(things.color);
}

printColor(vehicle)

