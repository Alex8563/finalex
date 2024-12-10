import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Asegúrate de que la ruta es correcta

function ContactForm() {
  const [form, setForm] = useState({ name: '', surname: '', email: '', message: '' });
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });

    // Validación del correo electrónico
    if (e.target.id === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;
      if (!emailPattern.test(e.target.value)) {
        setEmailError('Correo no aceptado');
      } else {
        setEmailError('');
      }
    }

    // Validación del mensaje
    if (e.target.id === 'message' && e.target.value.length > 500) {
      setMessageError('El mensaje no puede exceder los 500 caracteres');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !messageError && form.name && form.surname && form.email) {
      setLoading(true);
      // Simulamos el envío del formulario y redirigimos a la página de confirmación
      setTimeout(() => {
        navigate('/confirmation');
      }, 1000);
    } else {
      alert('Por favor, corrige los errores antes de enviar');
    }
  };

  const handleCommentsClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/comments');
    }, 1000);
  };

  return (
    <div className="contact-form p-8 w-full flex flex-col items-center min-h-screen" id="contact">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Contacto</h2>
          <form className="w-full max-w-md text-center" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Nombre</label>
              <input type="text" id="name" className="w-full p-2 rounded-lg" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block font-semibold">Apellido</label>
              <input type="text" id="surname" className="w-full p-2 rounded-lg" value={form.surname} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input type="email" id="email" className={`w-full p-2 rounded-lg ${emailError ? 'border-red-500' : ''}`} value={form.email} onChange={handleChange} required />
              {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold">Mensaje</label>
              <textarea id="message" className={`w-full p-2 rounded-lg ${messageError ? 'border-red-500' : ''}`} value={form.message} onChange={handleChange} required maxLength="500"></textarea>
              {messageError && <p className="text-red-500 text-sm mt-2">{messageError}</p>}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
            >
              Enviar
            </button>
          </form>
          <button
            onClick={handleCommentsClick}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
          >
            Ver Comentarios
          </button>
        </>
      )}
    </div>
  );
}

export default ContactForm;
