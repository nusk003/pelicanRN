import axios from "axios";

class ApiService {

    static _BASE_URL = "http://192.168.1.100:8000"
    static _CLIENT = axios

    static post(endPoint,payload) {
        return new Promise(function(resolve,reject){
            ApiService._CLIENT.post(`${ApiService._BASE_URL}${endPoint}`,payload)
            .then(({data})=>{
                resolve(data)
            })
            .catch(error=>{
                reject(error)
            })
        })
    }

    static get(endPoint) {
        return new Promise(function(resolve,reject){
            ApiService._CLIENT.get(`${ApiService._BASE_URL}${endPoint}`)
            .then(({data})=>{

                resolve(data)
            })
            .catch(error=>{

                reject(error)
            })
        })
    }
}

export default ApiService