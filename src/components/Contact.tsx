import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error messages
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    setSuccessMessage('');
    setErrorMessage('');

    // Validate input
    const isNameValid = name !== '';
    const isEmailValid = email !== '';
    const isMessageValid = message !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      if (form.current) {
        try {
          await emailjs.sendForm(
            'service_kb7raom',         
            'template_3ya3syq',        
            form.current,               
            'pOsudsGb9Ui-XErGg'        
          );

          // Clear form and show success message
          setName('');
          setEmail('');
          setMessage('');
          setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
          console.log('FAILED...', error);
          setErrorMessage('Failed to send the message. Please try again later.');
        }
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1 style={{ fontFamily: 'Uzicute' } }>Contact Me</h1>
          <p style={{ fontFamily: 'Times New Roman' } }>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <form
            ref={form}
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                name="user_name"
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                name="user_email"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              name="message"
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
