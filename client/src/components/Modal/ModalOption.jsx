import React from 'react';

const ModalOption = ({ children, onClick, type }) => {
  return (
    <button
      className="modal-option"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default ModalOption;
