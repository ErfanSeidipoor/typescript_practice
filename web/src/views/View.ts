import { Model, HasId } from '../models/Model'


export type EventsMap = {
    [K:string]:()=>void
}

export abstract class View<T extends Model<K>, K> {

    abstract template(): string;
    
    constructor( public parent:Element, public model:T){
        this.model.on('change', ()=>this.render())
    }

    regions: { [key:string]: Element } = {}
    regionsMap(): { [key:string]:string } {
        return {}
    }

    mapRegions(fragment: DocumentFragment):void {
        const regionsMap = this.regionsMap()
        console.log(regionsMap)
        for (const key in regionsMap) {
            const selector = regionsMap[key]         
            const element = fragment.querySelector(selector)
            if (element)
                this.regions[key] = element
        }
    }

    eventsMap (): EventsMap { return {}};

    bindEventHandler(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap()
        for (const keyEventSelector in eventsMap) {
            const [event, selector] = keyEventSelector.split(':')
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(event, eventsMap[keyEventSelector])
            });
        }
    }

    onRender(): void {

    }
    render(): void {
        this.parent.innerHTML = ""
        const templateElement = document.createElement('template')
        templateElement.innerHTML =  this.template()
        this.bindEventHandler(templateElement.content)
        this.mapRegions(templateElement.content)
        this.onRender()
        this.parent.append(templateElement.content)
    }
}