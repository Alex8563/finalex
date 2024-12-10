import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function NewComment() {
  const [form, setForm] = useState({ name: '', comment: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        navigate('/comments');
      }, 2000); 
    }, 1000);
  };

  return (
    <div className="new-comment-page p-8 w-full flex flex-col items-center min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Deja tu comentario</h2>
          <form className="w-full max-w-md text-center" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Nombre</label>
              <input type="text" id="name" className="w-full p-2 rounded-lg" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block font-semibold">Comentario</label>
              <textarea id="comment" className="w-full p-2 rounded-lg" value={form.comment} onChange={handleChange} required maxLength="500"></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
            >
              Enviar Comentario
            </button>
          </form>
          {submitted && (
            <p className="text-green-500 mt-4">Comentario enviado!</p>
          )}
          <button
            onClick={() => navigate('/comments')}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
          >
            Volver a Comentarios
          </button>
        </>
      )}
    </div>
  );
}

export default NewComment;
