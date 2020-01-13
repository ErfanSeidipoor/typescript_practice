
// Option 2
// Only accept dependencied into constructor 
// Define a static class method to preconfigure 
// User and assign properties afterwards



import axios , { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User {
    private data: UserProps

    static fromData(data: UserProps): User {
        const user = new User(new Eventing())
        user.set(data)
        return user
    }

    constructor(private events: Eventing){}


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