import '../styles/styles.css';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Design 1: Site de services",
      description: "Site web pour salon de coiffure",
      date: "Terminé le 8/6/2025",
      link: "https://madribraids.netlify.app/",
      image: "/img/logoM.png"
    },
    {
      id: 2,
      title: "Design 2: Petit jeu",
      description: "Jeu interactif simple et engageant",
      date: "Terminé le 22 Juin 2025",
      link: "https://memotripp.netlify.app/",
      image: "/img/jeux.jpg"
    },
    {
      id: 3,
      title: "Design 3: Site e-commerce",
      description: "Plateforme de vente en ligne",
      date: "Terminé le 6 juillet 2025",
      link: "https://naturium.netlify.app/",
      image: "/img/ecommerce.png"
    },
    {
      id: 4,
      title: "Tableau de bord interactif",
      description: "Dashboard analytique avec visualisation de données",
      date: "Terminé le 19  2025",
      link: "https://mls-dashboard.netlify.app/",
      image: "/img/Dashboard.png" 
    }
  ];

  return (
    <section id="case-studies" className="container py-5">
      <h3 className="section-title text-center mb-5">Études de cas (4/4 complétés)</h3>
      <div className="row g-4">
        {caseStudies.map((study) => (
          <div key={study.id} className={`col-md-6 col-lg-3 ${study.featured ? 'featured-case' : ''}`}>
            <div className="case-study-card h-100">
              <img src={study.image} alt={study.title} className="case-study-img" />
              <div className="case-study-overlay">
                <h4>{study.title}</h4>
                <p>{study.description}</p>
                
                {/* Badge de statut amélioré */}
                <div className="d-flex flex-wrap gap-1 mb-2">
                  <span className="badge bg-success">
                    <i className="fas fa-check-circle me-1"></i> {study.date}
                  </span>
                  {study.technologies?.map(tech => (
                    <span key={tech} className="badge bg-light text-dark">{tech}</span>
                  ))}
                </div>

                <a 
                  href={study.link} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary mt-auto"
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;