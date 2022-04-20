import axios from "axios"

export const usersignin=async(Object)=>{
    let response=await axios.post("https://localhost:44328/api/User/AllLogin",Object)
    return response
}

export const usersignup=async(Object)=>{
    let response=await axios.post("https://localhost:44328/api/User/Register",Object)
    return response
}