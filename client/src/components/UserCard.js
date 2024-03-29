import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteUser, getUsers } from '../redux/action'
import EditUser from './EditUser'
 import LetteredAvatar from 'react-lettered-avatar';
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  const dispatch=useDispatch()
  return (
    <div className='card'>
      <div style={{display:'flex',marginLeft:"20px"}}>
         <LetteredAvatar
            name={user.name}
        />
      <h3 style={{marginLeft:"20px"}}>{user.name}</h3>
      </div>
     <div style={{marginLeft:"100px"}}>
      <h5>{user.email}</h5>
      <h6>{user.phone}</h6>
      </div>
      <div className='buttons'>
      <button onClick={()=>{dispatch(DeleteUser(user._id));dispatch(getUsers())}}>Delete</button>
      <EditUser user={user}/>
      <Link to={`/info/${user._id}`}> <button> Info </button></Link>
            
      </div>
    </div>
  )
}

export default UserCard