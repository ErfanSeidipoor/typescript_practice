import { AxiosResponse } from "axios";

type Callback = () => void

export type HasId = {
    id?:number
}

interface ModelAttribute<T> {
    get<K extends keyof T>(propsName: K):T[K];
    set(update: T):void;
    getAll():T;
}

interface ModelSync<T> {
    fetch(id:number):Promise<AxiosResponse<T>>;
    save(data: T):Promise<AxiosResponse<T>>;
}

interface ModelEventing<T> {
    on(eventName: string, callback: Callback):void;
    trigger(eventName: string):void;
}

export class Model<T extends HasId> {

	constructor(
        private events: ModelEventing<T>,    
	    private sync: ModelSync<T>,
	    private attributes: ModelAttribute<T>,
    ) {}

	get on() { // accessor -- reference to "this.events.on"
		return this.events.on
	}
	// on(eventName: string, callback: Callback):void {
	// 	return this.events.on(eventName, callback)
	// }

	// get trigger() {
	// 	return this.events.trigger
	// }

	trigger = this.events.trigger // another for accessor this line is exequted at the first line of constructor
    
	get get() {
		return this.attributes.get
	}

    get getAll() {
		return this.attributes.getAll
	}
	
	set(update: T ):void {
		this.attributes.set(update)
		this.events.trigger('change')
	}

	fetch(): void {
		const id = this.attributes.get('id')
		
		if (!id) {
			throw new Error('Cannot fetch without id')
		}

		this.sync.fetch(id)
			.then( response => this.set(response.data) )
	}


	save(): void {
		this.sync.save(this.attributes.getAll())
			.then(response=>{
				this.events.trigger('save')
			})
	}
}