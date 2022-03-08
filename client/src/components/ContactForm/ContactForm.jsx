import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <form className="contact">
      <TextInput
        label="Name"
        fill={true}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextInput
        label="Email"
        fill={false}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        email={true}
      />
      <TextInput
        label="Phone"
        fill={false}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <div className="contact__message">
        <span className="contact__label">Subject: </span>
        <input
          type="text"
          className="contact__text-input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <span className="contact__label">Description: </span>
        <textarea
          className="contact__text-area"
          cols="30"
          rows="8"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="contact__submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
