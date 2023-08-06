import React from 'react';
import Modal from  "react-modal";

const LoginModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      <div>
        <h2>Login / Signup Modal</h2>
        <p>This is your login/signup modal content.</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
