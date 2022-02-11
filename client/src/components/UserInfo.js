import React from 'react'
import Modal from 'react-modal/lib/components/Modal';

const UserInfo = ({user}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#D2506C',
            border: '2px solid #D2506C',
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
  return (
    <div> <button onClick={openModal}>Info</button>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{color:"White", textAlign:"center",paddingTop:"20px"}}>
       <h2>{user.name}</h2>
       <h3>{user.email}</h3>
       <h4>{user.phone}</h4></div>
    </Modal></div>
  )
}

export default UserInfo