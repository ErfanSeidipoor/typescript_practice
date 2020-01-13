const add = (a: number, b: number) => {
  if (a>5) {
    return "bigger than 5"
  }
  return a+b
}

const add_:(a: number, b: number) => number = (a , b) => {
  return a+b
}

const subtract = (a:number, b:number): number => {
  return a - b
}

function divided(a:number,b: number):number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string):void => {
  console.log(message)
  // return null
  // return undefined
}

const throwError = (message: string):never => {
  throw new Error(message)
}

const forcast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forcast: { date: Date,weather: string}): void => {
  console.log(forcast.date)
  console.log(forcast.weather)
}
logWeather(forcast)


const logWeather_ = ({date, weather}: { date: Date,weather: string}): void => {
  console.log(date)
  console.log(weather)
}
logWeather_(forcast)