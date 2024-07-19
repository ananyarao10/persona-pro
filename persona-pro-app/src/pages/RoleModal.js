import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const RoleModal = ({ isOpen, onClose, roles }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Role Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Suggested Roles</h2>
      {roles.length > 0 ? (
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      ) : (
        <p>No roles found</p>
      )}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default RoleModal;