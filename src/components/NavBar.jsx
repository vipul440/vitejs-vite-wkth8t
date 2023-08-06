import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isListVisible, setListVisible] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };
  return (
    <nav>
      {/* Other Navbar content */}
      <ul>
        <li onClick={toggleListVisibility}>click</li>
        {isListVisible && ( // Conditionally render the list items
          <>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
            <li onClick={openModal}>Login/Signup</li>
          </>
        )}
      </ul>
      <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
