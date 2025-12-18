import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import StudentList from "./components/StudentList"
import AddStudent from "./components/AddStudent"
import EditStudent from "./components/EditStudent"
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentList/>}></Route>
        <Route path='/add' element={<AddStudent/>}></Route>
        <Route path='/edit/:id' element={<EditStudent/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App