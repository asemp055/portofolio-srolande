import '../styles/styles.css';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PC sur mesure",
      description: "Site e-commerce pour ordinateurs personnalisés",
      image: "/img/PCsurMésure.png"
    },
    {
      id: 2,
      title: "FreshAlert",
      description: "Application de gestion des aliments",
      image: "/img/FreshAlert.png"
    }
  ];

  return (
    <section id="projects" className="container py-5">
      <h3 className="section-title text-center mb-5">Mes réalisations</h3>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <div className="project-card">
              <img src={project.image} className="project-img" alt={project.title} />
              <div className="project-overlay">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href="#" className="btn btn-outline-light">Voir le projet</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;