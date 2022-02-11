import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import { EditOneUser, getUsers } from '../redux/action';

const EditUser = ({user}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const dispatch=useDispatch()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setphone] = useState(user.phone)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const one={name,email,phone,_id:user._id};
        dispatch(EditOneUser(one))
        closeModal()
       dispatch(getUsers())
    }
  return (
    <div>
         <button onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder='Phone'value={phone} onChange={(e)=>setphone(e.target.value)}/>
                    <button type='submit'>Save</button>
                    <button type="reset">Annuler</button>
                </form>
            </Modal>
    </div>
  )
}

export default EditUser