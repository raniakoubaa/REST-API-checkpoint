import axios from "axios"
import { ADD, DELETE, EDIT, GET, GETONE } from './actionTypes'
export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("/users/get");
        dispatch({
            type: GET,
             payload: res.data
        })

    } catch (error) {
        alert(" error get")
    }
}
export const getOneUsers = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/user/get/${id}`);
        dispatch({
            type:  GETONE,
             payload: res.data
        })

    } catch (error) {
        alert(" error get One")
    }
}
export const DeleteUser = (_id)=> async(dispatch)=>{
    try {
        const res=await axios.delete(`/user/delete/${_id}`)
        dispatch({
            type: DELETE,
            payload:res.data
        })
    } catch (error) {
        alert("error delete")
    }
}
export const AddUser = (newUser) => async(dispatch)=>{
    try {
        const res=await axios.post("/user/add",newUser)
        dispatch({
            type:ADD,
            payload:res.data
        })
        
    } catch (error) {
       alert("error add") 
    }
}
export const EditOneUser = (edituser) => async(dispatch) =>{
    try {
        const res=await axios.put(`/user/update/${edituser._id}`,edituser)
        dispatch({
            type:EDIT,
            payload:res.data
        })
    } catch (error) {
        alert("error update")
        
    }
}