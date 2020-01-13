@classDecorator
class Boat {
  // @testDecorator
  color:string = 'red'

  static print():void {
    console.log('print log---')
  }
  
  @testDecorator
  get formatedColler(): string {
    return `this boats color is ${this.color}`
  }

  @logError('Oops boat was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean,
  ): void {
    if (speed==='fast') {
      console.log('fast')
    } else {
      console.log('slow')
    }
    throw new Error()
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log("classDecorator------------------------")
  console.log(constructor)
}
function parameterDecorator( target: any, key: string, index: number) {
  console.log("parameterDecorator------------------------")
  console.log(target)
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  console.log(target)
  console.log(key)
}

function logError(erorMessage:string) {
  return function logError(target: any, key: string, desc: PropertyDescriptor):void {
    const method = desc.value
    desc.value = function() {
      try {
        method()
      } catch (error) {
        console.log(erorMessage)
      }
    }
  }
}

// new Boat().pilot()