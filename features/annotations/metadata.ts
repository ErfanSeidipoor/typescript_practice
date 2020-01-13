import "reflect-metadata";

const plane  =  {
  color: 'red',
}

Reflect.defineMetadata('note', 'Hi, there', plane)
Reflect.defineMetadata('height', 10 , plane)
console.log(plane)

const note = Reflect.getMetadata('note',plane) as string
const height = Reflect.getMetadata('height',plane) as number
console.log(note)
console.log(height)




console.log('--------------  class metadata decorator -----------------------')


@controller
class Plane {
  color:string = 'red'

  @get('/login')
  fly(): void  {
    // const secret = Reflect.getMetadata('secret', this , 'fly')
    // console.log(secret)
  }
}

function get (path:string){
  return function(target:any, key: string) {
    Reflect.defineMetadata('path', path , target , key)
  }
}

function controller(target: typeof Plane) {
  for (const method in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, method)
    const middleware = Reflect.getMetadata('middleware', target.prototype, method)
    // router.get(path, middleware, target.prototype[key])
    // console.log(Reflect.getMetadataKeys(target.prototype, method))
  }
  console.log("target.prototype:", target.prototype)
}

new Plane().fly()

const secret = Reflect.getMetadata('secret', Plane.prototype , 'fly')
console.log(secret)