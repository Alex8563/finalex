import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Loader from '../components/Loader'; // Asegúrate de que la ruta es correcta
import avatarImage from '../assets/avatar.jpg'; // Importa la imagen del avatar
import '../styles/App.css'; // Ajusta la ruta al archivo CSS

function Home() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/about';
    }, 1000); // Simulamos un tiempo de espera antes de redirigir
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <img
            className="avatar mx-auto rounded-full w-32 h-32 shadow-md"
            src={avatarImage} // Usa la imagen importada
            alt="Avatar"
            data-aos="fade-up"
          />
          <p className="mt-4 text-center text-white font-merriweather" data-aos="fade-up" data-aos-delay="200">
            Hola, soy Alexander. Soy un estudiante de la carrera de ingeniería informática especializado en diseño de software.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
            data-aos="fade-up" data-aos-delay="400"
          >
            Más sobre mí
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
