import { UserProps } from "./User";
// in TS, strings can be types

// type BestName = 'string'
// const name:BestName = 'strings' // error

// const printName  = (name: BestName):void => {
//     console.log(name);
// }
// printName('string')

// in JS (and TS), all object keys are string (keys of object can be type)

export class Attributes<T> {    
    constructor(private data: T) {}
    
    get = <K extends keyof T>(propsName: K): T[K] => {
      return this.data[propsName];
    }

    set = (update: T ):void => {
      Object.assign(this.data, update)
    }

    getAll = ():T => {
        return this.data
    }
}



// class Color {
//   color = 'red'
//   // constructor() {
//   //   this.printColor = this.printColor.bind(this.)
//   // }

//   printColor():void {
//     console.log(this.color);
//   }

//   // printColor = ():void => {
//   //   console.log(this.color);
//   // }  
// }
// const color = new Color()
// const printColor = color.printColor() // red
// const printColor_ = color.printColor; printColor_() // undefined
