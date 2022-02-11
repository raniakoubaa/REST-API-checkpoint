import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/action';
import UserCard from './UserCard'
const UserList = () => {
    const {users,loading}=useSelector(state=>state)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getUsers())
    }, [])
    
  return (
    <div className='list-user'>
        {
            loading? <h1>loading ....</h1>: 
            React.Children.toArray(users.map(elt=> <UserCard user={elt}/>))

        }
    </div>
  )
}

export default UserList