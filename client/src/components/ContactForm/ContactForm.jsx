import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import TextInput from './TextInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

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

      const response = await fetch(
        `${process.env.REACT_APP_SERVER_HOST}/contact`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(message)
        }
      );

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      console.log('ses');

      setError(null);
      setModal(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (error) setModal(true);
  }, [error]);

  return (
    <React.Fragment>
      <form className="contact" onSubmit={(e) => submitHandler(e)}>
        <h1 className="contact__title">Contact form</h1>
        <TextInput
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          fill
        />
        <TextInput
          style={{ width: '50%', paddingRight: '5px' }}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          email={true}
        />
        <TextInput
          style={{ width: '50%' }}
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
      <Modal
        type={error ? 'failure' : 'success'}
        title={error ? 'Sending failed' : 'Success!'}
        description={
          error ? error.message : 'Successfully sent contact request!'
        }
        options={[
          { label: 'OK', action: () => {} },
          {
            label: 'Return to home page',
            action: () => (window.location.href = '/')
          }
        ]}
        onDisplay={(v) => setModal(v)}
        show={modal}
      />
    </React.Fragment>
  );
};

export default ContactForm;
