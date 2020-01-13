const drink = {
  color:'brown',
  carbonated: true,
  sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40]
pepsi[3] = 'asdasdasd'


type drink = [string, boolean, number]
const coca: drink = ['brown', false, 23]
const tea: drink = ['black', false, 0]
const sprite: drink = ['transparent', false, 0]