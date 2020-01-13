interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summery():string;
  print: ()=>string;
}


const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
  summery(): string {
    return `Name: ${this.name} Year: ${this.year} Broker: ${this.broken}`
  },
  print(): string {
    return `Name: ${this.name} Year: ${this.year} Broker: ${this.broken}`
  },
}

const printVehicle = (vehicle:Vehicle):void =>{
  console.log(vehicle.summery())
}

printVehicle(oldCivic)

// -----------------------------------------------

interface Reportable {
  summary(): string;
}

const oldCivic_ = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
} 

const drink_ = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Name: ${this.color}`
  },
}


const printSummary = (item: Reportable):void => {
  console.log(item.summary())
}