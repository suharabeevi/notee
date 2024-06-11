import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { UpdateUser } from "./UserReducer"


function Update() {
    const {id} = useParams()
console.log(id);
    const users = useSelector((state)=> state.users)
const existinguser = users.filter(f  =>f.id  ==id)

const {name,email} = existinguser[0]
const dispatch = useDispatch()
const navigate = useNavigate()


const handleUpdate=(event)=>{
event.preventDefault()
dispatch(
    UpdateUser({
        id:id,
        name:uname,
        email:uemail
    })
)
navigate('/')

}
const [uname,setName] = useState(name)
const [uemail,setEmail] = useState(email)
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>UPDATE  USER</h3>
        <form onSubmit={handleUpdate}>
          <div>
<label htmlFor="name">Name:</label>
<input type="text" name="name" className="form-control" placeholder="Enter your name" onChange={e=> setName(e.target.value)} value={uname}/>

          </div>
          <div>
<label htmlFor="email" >Email:</label>
<input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)} value={uemail}/>
          </div><br/>
          <button className="btn btn-info">
        UPDATE
          </button>
        </form>

      </div>
    </div>
  )
}

export default Update
