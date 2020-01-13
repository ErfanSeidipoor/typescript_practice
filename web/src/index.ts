import { UserEdit } from "./views/UserEdit";
import { User } from './models/User'

const user = User.from({id:23, name: 'erfan', age: 29})

const userEdit = new UserEdit(
  document.getElementById('root'),
  user
)
userEdit.render()



import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps } from "./models/User";

const users = new Collection('http://localhost:3000/users', (data:UserProps)=>User.from(data) )
users.fetch()

users.on('fetch', ()=>{
  console.log(users)

  new UserList(document.getElementById('root1'), users).render()  
})