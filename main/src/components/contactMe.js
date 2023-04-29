import React,{ useState } from 'react'


// Here we import a helper function that will check if the email is valid
// change this to error when message is not filled in
//import { checkPassword, validateEmail } from '../../utils/helpers';

export default function ContactMe() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    } else if (inputType ==='contact-message'){
      setMessage(inputValue);
    }
  };
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
            />
            <input
              value={email}
              name="contact-email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={message}
              name="contact-message"
              onChange={handleInputChange}
              type="text"
              placeholder="Leave a note"
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