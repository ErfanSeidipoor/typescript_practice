let apples = 123.12312;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in object 
let now: Date =  new Date();

// Array 
let colors: string[] = ['red','grren', 'blue'];
let myNumbers: number[] = [1,2,3,4,5];
let truth: boolean[] = [true,false,true]


// classes

class Car {

}

let car: Car =  new Car();

// Object literal

let point: {
  x:number;
  y:number;
} = {
  x: 10,
  y: 20,
}


// Function 

const logNumber: ( i:number ) =>  void = (i:number)  => {
  console.log(i)
}

// When to use annotation
// 1) Function that retruns the 'any' type

const json = '{"x":10, "y": 20}'
const coordinates: { x:number; y:number; } = JSON.parse(json)

// 2) When we declare a variable on one line and initializate it later

let words = ['red', 'green', 'blue' ]
let foundWord = false
for (let index = 0; index < words.length; index++) {
  if ('green'=== words[index]) {
    foundWord = true
  }
}

// 3) Variables whose type cannot infererred correctly 

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
}


