import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

const EditStudent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:5000/api/students/allstudents`)
            .then(res=>res.json())
            .then(students=>{
                const student = students.find(s => s.id === parseInt(id))
                if(student){
                    setName(student.name)
                    setEmail(student.email)
                }
            })
    },[id])
    
    const submit=async(e)=>{
        e.preventDefault()
        await fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email})
        })
        navigate("/")
    }
    
    return(
        <>
            <h1>Edit Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Email</label>
                <input required value={email} onChange={e=>setEmail(e.target.value)}/>
                <button>Update</button>
                
            </form>
        </>
    )
}
export default EditStudent;
