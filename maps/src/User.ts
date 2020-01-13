 import faker from 'faker'
 import {  Mappabale } from './CustomMap'
 
 export class User implements Mappabale {
  color: string = 'blue' 
  name:string;
   location: {

     lat: number,
     lng: number,
   };

   constructor() {
     this.name = faker.name.firstName()
     console.log(this.location)
     this.location = {
       lat: parseFloat(faker.address.latitude()),
       lng: parseFloat(faker.address.longitude()),
     }
   }

   print():void {
     console.log('name: ', this.name)
     console.log('lat: ', this.location.lat)
     console.log('lng: ', this.location.lng)
   }

   markerContent(): string {
     return `User Name: ${this.name}`
   }

 }