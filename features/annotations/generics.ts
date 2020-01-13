class ArrayOfNumber {
    constructor(public collectoin: number[]){}
    get(index:number): number {
        return this.collectoin[index]
    }
}

class ArrayOfString {
    constructor(public collection: string[]){}
    get (index:number):string {
        return this.collection[index]
    }
}

class ArrayOfAnthings <T> {
    constructor( public collection: T[]) {}
    get(index:number):T {
        return this.collection[index]
    }
}

new ArrayOfAnthings<string>(['a', 'b', 'c','d'])

// Example of Generics with function

function printString(arr: string[]):void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);       
    }
}

function printNumbers(arr: number[]):void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);        
    }
}

function printAnythings<T>(arr: T[]):void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index])        
    }
}
printAnythings(['a','b','c'])
printAnythings<string>(['a','b','c'])

// Generic Constrains


class Car {
    color:string = "red"
    print() {
        console.log("I am a car");
    }

}

class House {
    print() {
        console.log("I am a house");
    }
}

interface Printable {
    print():void
}

function printHouseOrCar<T extends Printable>(arr: T[]):void {
    for (let index = 0; index < arr.length; index++) {
        arr[index].print()
    }
}

printHouseOrCar<House>([new House(), new Car()])