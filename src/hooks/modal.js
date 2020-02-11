import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '88%',
    height                : '79%',
    background            : '#0B0C10'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

function DemoModal({ gif }){
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  useEffect(() => {
    Modal.setAppElement('#root');

  },[])
    return (
      <div>
        <button class='demo-but' onClick={openModal}>Demo</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Demo-Modal"
          // id='modal'
        >
          <img class='demo-gif' src={require(`${gif}`)}/>
          <button onClick={closeModal}>close</button>  
        </Modal>
      </div>
    );
}



export default DemoModal;