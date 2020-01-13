import faker from 'faker'
import { Mappabale } from './CustomMap'

// hellp us to implement Company class with Mappebale interface
export class Company implements Mappabale {
  color: string = 'red'
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName  = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  markerContent():string {
    return `Company name ${this.companyName}`
  }

  print() {
    console.log('companyName: ', this.companyName)
    console.log('catchPhrase: ', this.catchPhrase)
    console.log('lat: ', this.location.lat)
    console.log('lng: ', this.location.lng)
  }
}