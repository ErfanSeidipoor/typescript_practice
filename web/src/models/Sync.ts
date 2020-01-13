// option 1 
// Sync gets function arguments

// option 2 
// Sync expects arguments that  statisfy interfasees  
// "Serialize" and "Desrialize"

// option 3
// sync is a generic class to customize the tyoe of
// data comming into save()

import axios , { AxiosResponse } from 'axios'

interface HasId {
    id?: number;
}

export class Sync<T extends HasId> {
    constructor(public rootUrl: string){}
    
    fetch = (id:number):Promise<AxiosResponse<T>> => {
        return axios.get<T>(`${this.rootUrl}/${id}`)
    }

    save = (data: T): Promise<AxiosResponse<T>> => {
        const { id } = data
        if (id)     
            return axios.put(`${this.rootUrl}/${id}`, data)
        return axios.post(this.rootUrl, data)
    }
}