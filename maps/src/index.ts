import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

console.log('------------ User class ------')

const user  = new User()
user.print()

console.log('---------- Company class ------')

const company  = new Company()
company.print()

console.log('-------------------------------')

console.log(document.getElementById('#map'))
const customeMap = new CustomMap('map')
// customeMap.addUserMarker(user)
// customeMap.addCompanyMarker(company)

customeMap.addMarker(user)
customeMap.addMarker(company)



