import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import { AddUser } from '../redux/action';

const AddNewUser = () => {
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setphone] = useState("")
    const newuser={name,email,phone};
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch( AddUser(newuser))
        closeModal()
        setEmail("")
        setName("")
        setphone("")
    }
    return (
        <div style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>
            <button onClick={openModal}  style={{width:'150px',backgroundColor:'#C16E80'}}>Add user</button>
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

export default AddNewUser