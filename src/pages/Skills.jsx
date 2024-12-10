import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/App.css'; // Asegúrate de importar el CSS principal

function Skills() {
  const skills = [
    { name: 'React', percentage: 40, color: '#FF6F61' },
    { name: 'HTML', percentage: 60, color: '#FFB400' },
    { name: 'CSS', percentage: 50, color: '#009688' },
    { name: 'Python', percentage: 70, color: '#3F51B5' },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const calculatePosition = (index, total) => {
    const angle = (360 / total) * index + rotation;
    const radians = (angle * Math.PI) / 180;
    const radius = 120;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return { x, y };
  };

  return (
    <section className="text-white p-8 w-full flex flex-col items-center min-h-screen">
      <h2 className="text-2xl font-bold text-center" data-aos="fade-up" style={{ marginBottom: '140px' }}>Habilidades</h2>
      <div className="wheel-container" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="wheel" style={{ position: 'relative', width: '300px', height: '300px', marginLeft: '40%' }}>
          {skills.map((skill, index) => {
            const { x, y } = calculatePosition(index, skills.length);
            return (
              <div
                key={skill.name}
                className="skill-item bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                onClick={() => handleSkillClick(skill)}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  fontSize: '0.8em',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
              >
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      {selectedSkill && (
        <div className="skill-graph text-white p-4 shadow-lg" data-aos="fade-up" style={{ textAlign: 'center', marginTop: '20px', width: '150px', backgroundColor: 'rgba(64, 64, 64, 0.8)', borderRadius: '15px' }}>
          <h3 style={{ fontSize: '1em', marginBottom: '5px' }}>{selectedSkill.name}</h3>
          <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
            <CircularProgressbar
              value={selectedSkill.percentage}
              text={`${selectedSkill.percentage}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: selectedSkill.color,
                trailColor: '#D1D5DB',
              })}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
