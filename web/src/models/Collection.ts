import axios , {  AxiosResponse } from "axios";
import { Eventing } from './Eventing'

export class Collection<T,K>{
    models: T[] = []
    events = new Eventing()

    constructor(
        public rootUrl:string,
        public deseialize: (data:K)=>T
    ) {}

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    fetch():void {
        axios
            .get(this.rootUrl)
            .then((response:AxiosResponse<K[]>)=>{
                response.data.forEach( data=> this.models.push(this.deseialize(data)) )
                this.trigger('fetch')
            })
    }
}