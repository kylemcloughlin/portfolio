import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '85%',
    width: '99%',
    maxWidth: '750px',
    background: '#FEFEFE',
    padding: '0',
    zIndex: '9'
  }
};

function DemoModal({ open, close, website }) {
  console.log(website.gif)
  function closeModal() {
    close();
  }
  useEffect(() => {
    Modal.setAppElement('#root');

  }, [open])
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Demo-Modal"
        id='modal'
      >
    
        <div id={`${website.gifID}`} />
        <div className='modal-body' >

          <h2 className='modal-title'>{website.name}</h2>
          <p className='modal-dis'>{website.discription}</p>
          <div className='key-feature-div'>
            {/* {website.keyFeatures.map((x) => {
              return (
                <div key={x}>
                  <h6 className='modal-kf'>{x}</h6>
                </div>
              )
            })} */}
            {website.linkToProject ? (<button className='demo-but' onClick={() => { window.open(website.linkToProject)}}>DEMO</button>) : (<div></div>)}
            <button className='git-but' onClick={() => { window.open(website.linkToProjectsCode) }}>GITHUB</button>
            <button className='close-but' onClick={closeModal}>X</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}



export default DemoModal;