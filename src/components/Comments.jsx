import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; 

function Comments() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const comments = [
    { name: 'Juan Pérez', comment: 'Excelente servicio y muy profesional. La atención recibida fue inmejorable y estoy muy satisfecho con los resultados. Sin duda, lo recomendaré a todos mis conocidos.' },
    { name: 'María López', comment: 'Estoy muy satisfecha con el trabajo realizado. El proyecto se completó a tiempo y superó mis expectativas. ¡Gran trabajo y dedicación!' },
    { name: 'Carlos Gómez', comment: 'Altamente recomendado, muy atento y dedicado. La dedicación y el esfuerzo son evidentes en cada detalle. ¡Volveré seguro!' },
    { name: 'Ana Martínez', comment: 'Muy buenos resultados, superó mis expectativas. La calidad del trabajo es impresionante y el proceso fue muy fluido. Definitivamente repetiré.' },
    { name: 'José Fernández', comment: 'Gran experiencia, repetiría sin dudarlo. El profesionalismo y la atención al cliente son incomparables. ¡Muy recomendable!' },
  ];

  const handleCommentClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/new-comment');
    }, 1000);
  };

  return (
    <div className="comments-page p-8 w-full flex flex-col items-center min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Comentarios</h2>
          <div className="comments-list w-full max-w-md">
            {comments.map((comment, index) => (
              <div key={index} className="comment-item bg-gray-800 text-white p-4 rounded-lg mb-4 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{comment.name}</h3>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleCommentClick}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
          >
            Comentar
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
          >
            Volver
          </button>
        </>
      )}
    </div>
  );
}

export default Comments;
