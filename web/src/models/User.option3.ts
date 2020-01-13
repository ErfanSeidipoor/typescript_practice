
// Option 3
// Only accept properties into constructor 
// Hard code dependencied as class properties


import axios , { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User {

    events: Eventing = new Eventing();    
    constructor(private data: UserProps){}


    get(propsName: string): ( number | string ) {
        return this.data[propsName]
    }

    set(update: UserProps ):void {
        Object.assign(this.data, update)
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then( (response:AxiosResponse)=>{
        this.set(response.data)
        })
    }

    save(): void {
        const id = this.get('id')

        if (id) {
        axios.put(`http://localhost:3000/users/${id}`,this.data)
        }
        else {
        axios.post(`http://localhost:3000/users`,this.data)
        }
    }
 }

 const user = new User({id:12})
