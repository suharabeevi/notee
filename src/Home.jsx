
import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { deleteuser } from "./UserReducer";

function Home() {
  const dispatch=useDispatch()

  const users = useSelector((state)=> state.users)



  const handleDelete =(id)=>{
 dispatch(deleteuser({id:id}))
  }
  return (
    <div className="container">
      <h2>
        CRUD APP WITH JSON SERVER
      </h2>
      <Link to="/create" className="btn btn-success my-3">Create +</Link>
      
<table className="table">
<thead>
  <tr>
  <th>ID</th>
  <th>NAME</th>
  <th>EMAIL</th>
  <th>ACTION</th>
  </tr>
</thead>
<tbody>
{users.map((user,index)=>(
  <tr key={index}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>
  <Link  to={`/edit/${user.id}`} className="btn btn-sm btn-primary">EDIT</Link>
  <Link  onClick={()=> handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">DELETE</Link>
</td>

  </tr>
  ))}
</tbody>
</table>



    </div>
  )
}

export default Home
