import React from 'react';

const TextInput = ({ label, onChange, value, fill = false, email = false }) => {
  return (
    <div className={fill ? 'text-input text-input--fill' : 'text-input'}>
      {`${label}: `}
      <input
        type={!email ? 'text' : 'email'}
        className="text-input__input"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default TextInput;
