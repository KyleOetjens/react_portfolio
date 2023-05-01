import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers';

// Here we import a helper function that will check if the email is valid
// change this to error when message is not filled in
//import { checkPassword, validateEmail } from '../../utils/helpers';

export default function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMessageLeave = (e) => {
    const { target } = e;
    const messageContent = target.value;
    const fieldType = target.placeholder
    if (messageContent === '') {
      setErrorMessage(fieldType + ' must be filled in')
    }
    //     try to get it to go away
    // errorMessage.useState('')
  }
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'contact-name') {
      setName(inputValue);
    } else if (inputType === 'contact-email') {
      setEmail(inputValue);
    } else if (inputType === 'contact-message') {
      setMessage(inputValue);
    }
  };

  const handleEmail = (e) => {
    const valid = validateEmail(e.target.value)
    if (!valid) {
      setErrorMessage('email is invalid');
    }
    else {
      setErrorMessage('')
    }
  }
  return (
    <div>
      <p>Contact</p>
      <form className="form">
        <input
          value={name}
          name="contact-name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          onMouseLeave={handleMessageLeave}
        />
        <input
          defautValue={email}
          name="email"
          onBlur={handleEmail}
          type="email"
          placeholder="email"
          //onMouseLeave={handleMessageLeave}
        />
        <input
          className='contact-message'
          value={message}
          name="contact-message"
          onChange={handleInputChange}
          type="text"
          placeholder="Leave a note"
          onMouseLeave={handleMessageLeave}
        />
        <button type="button" /*onClick={handleFormSubmit}*/>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}