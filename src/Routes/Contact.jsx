import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Components/utils/global.context'
import Form from '../Components/Form'

function Contact() {
  const { state } = useContext(GlobalContext);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setSubmittedName(formData.name);
    setSubmitted(true);
  };

  return (
    <div className={`contact ${state.theme}`}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Gracias {submittedName}, te contactaremos cuando antes vía mail</p>
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  )
}

export default Contact