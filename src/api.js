import axios from "axios"
const API="http://localhost:5000/api/students"
export const getStudents=()=>{
    return axios.get(`${API}/allstudents`)
} 
export const createStudent=(data)=>{
    return axios.post(API,data)
}