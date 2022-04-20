import axios from "axios";

let configObj = {
    headers: {
      Authorization:"Bearer" + " " + localStorage.getItem("token")
    },
  }

export const Postnotes=async(Object)=>{
    console.log(configObj)
    let responce= await axios.post("https://localhost:44328/api/Notes/CreateNotes",Object,configObj)
    return responce
}

export const getNotes=async()=>{
  console.log(configObj)
  let response = await axios.get('https://localhost:44328/api/Notes/GetAll',configObj)
  return response
}

