import axios from "axios";

export function PostUserData(data){
    return axios.post(`https://hallbookingback.herokuapp.com`, data)
}
export function GetUserData(){
    return axios.get(`https://hallbookingback.herokuapp.com/i`);
}

export function PutUserData(id,data){
    return axios.put(`https://hallbookingback.herokuapp.com/book/${id}`,data);
}
export function PostCustomer(data){
    return axios.post(`https://hallbookingback.herokuapp.com/customer`, data)
}
export function GetCustomer(){
    return axios.get(`https://hallbookingback.herokuapp.com/customer`);
}
export function GetHall(id){
    return axios.get(`https://hallbookingback.herokuapp.com/${id}`);
}

export function GetCus(id){
    return axios.get(`https://hallbookingback.herokuapp.com/customerget/${id}`);
}
export function PutCus(id,data){
    return axios.put(`https://hallbookingback.herokuapp.com/customerput/${id}`, data)
}