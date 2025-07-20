import '../styles/styles.css';
const Skills = () => {
  const skills = [
    { name: "HTML", image: "/img/html-logo.png" },
    { name: "CSS", image: "/img/CSS-logo.png" },
    { name: "JavaScript", image: "/img/JS-logo.png" },
    { name: "Java", image: "/img/Java-logo.png" },
    { name: "Python", image: "/img/Python-logo.png" },
    { name: "Bootstrap", image: "/img/bootstrap.png" },
    { name: "React", image: "/img/React-logo.png" }
  ];

  return (
    <section id="skills" className="bg-dark-section py-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">Mes compétences</h3>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-2 col-6 skill-card">
              <img src={skill.image} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;