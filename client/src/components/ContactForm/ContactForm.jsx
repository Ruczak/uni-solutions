import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const [firstname, ...lastnames] = name.split(' ');

      const message = {
        firstname,
        lastname: lastnames.join(' '),
        email,
        subject,
        description
      };

      if (phone.length > 0) {
        if (!/^\+?[()\-\d\s]+$/i.test(phone))
          throw new Error(
            'Phone field contains characters that are not numbers'
          );
        else message.phone = phone;
      }

      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(message)
      });

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      window.alert('Successfully added ' + body.addedRows);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (error) window.alert(error.message);
  }, [error]);

  return (
    <form className="contact" onSubmit={(e) => submitHandler(e)}>
      <TextInput
        label="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        fill
      />
      <TextInput
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        email={true}
      />
      <TextInput
        label="Phone"
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="contact__submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
