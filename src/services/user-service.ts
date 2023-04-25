import httpService from "./http-service";

export interface User{
    id:number;
    name:string;
}

export default httpService("users")