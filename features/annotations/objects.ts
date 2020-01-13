const profile = {
  age: 20,
  name_: 'alex',
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number):void {
    this.age = age
  }
}

const { age, name_ }:{ age: number; name_: string} = profile
const { coords : {lat,lng} }: { coords : {lat:number; lng:number} } = profile