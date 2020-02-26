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
    // maxWidth              : '750px',
    height                : '80%',
    background            : '#0B0C10'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

function DemoModal({ gif, title, dis, features}){
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
          id='modal'
        >
          <button class='close-but' onClick={closeModal}>close</button>  
          <h2 class='modal-title'>{title}</h2>
          <img class='demo-gif' src={require(`${gif}`)}/>
          <p class='modal-dis'>{dis}</p>
          <div class='key-feature-div'>
             {features.map((x)=> {
                      return (
                        <div>
                          <h6 class='modal-kf'>{x}</h6>
                          {/* <div class='list-point-ul'/> */}
                        </div>
                      )  
                    })}
          </div>
        </Modal>
      </div>
    );
}



export default DemoModal;