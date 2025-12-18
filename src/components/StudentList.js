import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getStudents } from "../api"


const StudentList=()=>{
    const [students,setStudents]=useState([])
    const loadStudents=()=>{
        getStudents().then(res=>{
            setStudents(res.data)
        })
    }
    const removeStudent=(id)=>{
        fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            loadStudents()
        }).catch(err=>{
            console.error('Delete failed:', err)
            alert('Failed to delete student. Please check if the backend server is running.')
        })
    }
    useEffect(()=>{
        loadStudents()
    },[])
    return(
        <>
            <h1>Student List</h1>
            <Link to="/add">Add Student</Link>
            <table border="1" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student)=>{
                            return(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/edit/${student.id}`}>Edit</Link>
                                    <button onClick={()=>removeStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
   )
}
export default StudentList;