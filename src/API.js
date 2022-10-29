import axios from 'axios'

export class API {
    constructor(base = 'https://randomuser.me/api'){
        this.base = base
    }
    getAll = async (resource, params)=> {
        const response = await axios.get(`${this.base}${resource}?${params}`)
        if (response.status < 200 || response.status >= 300) {
            return Promise.reject(new Error(response.status));
        }
        return Promise.resolve(response.data);
    }
}