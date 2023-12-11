// CreateUserModal.jsx
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "@material-tailwind/react";
import CreateUser from './CreateUser';

const CreateUserModal = ({ isOpen, onClose }) => {
  // Define the handleButtonClick function
  const handleButtonClick = () => {
    // Add the desired functionality for the button click
    console.log('Button clicked');
    onClose(); // Close the modal or perform other actions
  };

  return (
    <Modal size="lg" active={isOpen} toggler={onClose}>
      <ModalHeader toggler={onClose}>
        Create User
      </ModalHeader>
      <ModalBody>
        <CreateUser />
      </ModalBody>
      <ModalFooter>
        {/* Use the defined handleButtonClick function */}
        <Button color="blue" onClick={handleButtonClick}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateUserModal;
