import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactForm from './pages/ContactForm';
import Confirmation from './components/Confirmation';
import Comments from './components/Comments'; 
import NewComment from './components/NewComment'; 
import Sun from './components/SkyComponents/Sun';
import Clouds from './components/SkyComponents/Clouds';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div id="root">
          <Sun />
          <Clouds />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home" className="home" data-aos="fade-up">
                    <Home />
                  </section>
                  <section id="skills" className="skills" data-aos="fade-up">
                    <Skills />
                  </section>
                  <section id="projects" className="projects" data-aos="fade-up">
                    <Projects />
                  </section>
                  <section id="contact" className="contact" data-aos="fade-up">
                    <ContactForm />
                  </section>
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/comments" element={<Comments />} /> {}
              <Route path="/new-comment" element={<NewComment />} /> {}
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
