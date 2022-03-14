import React, { useEffect, useState } from 'react';
import ModalOption from './ModalOption';

const Modal = ({ type, title, description, options, onDisplay, show }) => {
  const [display, setDisplay] = useState(false);

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'modal--success';
      case 'warning':
        return 'modal--warning';
      case 'failure':
        return 'modal--failure';
      case 'neutral':
      default:
        return null;
    }
  };

  useEffect(() => {
    onDisplay(display);
  }, [display]);

  useEffect(() => {
    setDisplay(show);
  }, [show]);

  return (
    <div
      className={['modal', !show ? 'modal--hidden' : '', getTypeClass()]
        .join(' ')
        .trim()}
    >
      <div className="modal__popup">
        <h2 className="modal__title">{title}</h2>
        <hr size="1" className="modal__line" />
        <p className="modal__description">{description}</p>
        <div className="modal__options">
          {options.map(({ label, action }, i) => {
            return (
              <ModalOption
                key={i}
                onClick={(e) => {
                  if (action) action(e);
                  setDisplay(false);
                }}
              >
                {label}
              </ModalOption>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
