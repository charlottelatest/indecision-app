import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;
