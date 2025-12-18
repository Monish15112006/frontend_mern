import {useState} from "react"
import {createStudent} from "../api"
import {useNavigate} from "react-router-dom"
const AddStudent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const submit=async(e)=>{
        e.preventDefault()
        await createStudent({name,email})
        navigate("/")
    }
    return(
        <>
            <h1>Add Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Email</label>
                <input required value={email} onChange={e=>setEmail(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}
export default AddStudent;