import React, { useState } from 'react'

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (formData.name.length <= 5) errors.name = "El nombre debe tener más de 5 caracteres";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "El email no es válido";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre completo"
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <button type="submit">Enviar</button>
      {Object.keys(errors).length > 0 && (
        <p className="error">Por favor verifique su información nuevamente</p>
      )}
    </form>
  );
}

export default Form;
