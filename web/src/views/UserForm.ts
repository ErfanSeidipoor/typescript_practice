import { User, UserProps } from '../models/User'
import { View, EventsMap } from './View'

export class UserForm extends View<User, UserProps> {

    constructor(public parent:Element, model: User){
        super(parent, model)
    }

    eventsMap(): EventsMap {
        return (
            {
                'click:.set-name': this.onSetNameClick,
                'click:.set-age': this.onSetAgeClick,
                'mouseenter:h1': this.onH1Hover,
                'focus:input': this.onInputFocus,
                'click:.save-model': this.onSaveClick,
            }
        )
    }

    onSaveClick = (): void => {
        this.model.save()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('.input-name') as HTMLInputElement
        if (input) {
            const name = input.value
            this.model.set({name})
        }
    }

    onSetAgeClick = ():void => {
        console.log(' on Set age click');
        this.model.setRandomEdge()
    }
    
    onH1Hover(): void {
        console.log('h1 was hovered')
    }

    onInputFocus(): void {
        console.log('input focus')
    }
    
    template(): string {
        return (
            `
            <div>
                <h1>User Form</h1>
                <input class="input-name" placeholder="${this.model.get('name')}" />
                <button class="set-name"> set name </button>
                <button class="set-age"> set Random age </button>
                <button class="save-model"> save </button>
            </div>
            `
        )
    }
}