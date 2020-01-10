import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

function DemoModal({ gif }){
console.log(gif)
console.log(gif)
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <img src={require(`${gif}`)}/>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          {/* <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
        </Modal>
      </div>
    );
}

// ReactDOM.render(<DemoModal />, appElement); 

export default DemoModal;