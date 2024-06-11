import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
   addUser:(state, action)=>{
    state.push(action.payload)
   },
   UpdateUser:(state,actions)=>{
  const {id,name,email} =actions.payload
  const updateuser = state.find(user=>user.id ==id )
  if(updateuser){
    updateuser.name= name,
    updateuser.email=email
  }} ,
  deleteuser:(state,actions)=>{
    const {id} = actions.payload
    const uu= state.find(user=>user.id == id)
    if(uu){
        return state.filter(f=> f.id !== id)
    }
  }



   }
    }
)
export const {addUser,UpdateUser,deleteuser} = userSlice.actions;
export default userSlice.reducer; 