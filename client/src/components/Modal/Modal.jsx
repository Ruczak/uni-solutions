import React, { useEffect, useState } from 'react';
import ModalOption from './ModalOption';
/* 
  props: {
    type: 'success' | 'warning' | 'failure' | 'neutral',
    title: string,
    description: string,
    options: Array<{
      label: string,
      action: (e: Event) => void,
    }>
    onDisplay: (v: bool) => void
    show: bool
  }
*/

const Modal = ({ type, title, description, options, onDisplay, show }) => {
  const [display, setDisplay] = useState(false);

  const classList = ['modal', !show ? 'modal--hidden' : null];

  switch (type) {
    case 'success':
      classList[2] = 'modal--success';
      break;
    case 'warning':
      classList[2] = 'modal--warning';
      break;
    case 'failure':
      classList[2] = 'modal--failure';
      break;
    case 'neutral':
    default:
      classList[2] = null;
      break;
  }

  useEffect(() => {
    onDisplay(display);
  }, [display]);

  useEffect(() => {
    setDisplay(show);
  }, [show]);

  return (
    <div className={classList.join(' ').trim()}>
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
                  action(e);
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
