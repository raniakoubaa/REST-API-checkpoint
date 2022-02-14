import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LetteredAvatar from 'react-lettered-avatar';

const UserInfo = () => {
    const { id } = useParams();
    const { users } = useSelector(state => state)
    const user = users.find(elt => elt._id === id)
    return (


        <div class="cardInfo">
            
            <div style={{ display: 'flex', marginLeft: "20px" }}>
                <LetteredAvatar
                    name={user.name}
                />
                 <h3 style={{marginLeft:"20px"}}>{user.name}</h3>
            </div>
            <img src="https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png" alt="Avatar" width="100%" />
            <div class="container">
                
                <h3>{user.email}</h3>
                <h4>{user.phone}</h4>
            </div>
        </div >

    )
}

export default UserInfo