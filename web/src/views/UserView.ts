import { User, UserProps } from '../models/User'
import { View, EventsMap } from './View'

export class UserView extends View<User, UserProps> {
    
    template(): string {
        return (
            `
            <div>
                <h1>User View</h1>
                <div>User Id: ${this.model.get('id')} </div>
                <div>User Name: ${this.model.get('name')} </div>
                <div>User Age: ${this.model.get('age')} </div>
            </div>
            `
        )
    }
}