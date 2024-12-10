import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full confirmation-page">
      <h2 className="text-2xl font-bold text-center mb-4">Mensaje enviado</h2>
      <p className="text-center mb-4">Tu mensaje ha sido enviado con éxito.</p>
      <button
        onClick={handleBackClick}
        className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default Confirmation;
