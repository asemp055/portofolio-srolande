import '../styles/styles.css'; 
const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="section-title">À propos de moi</h3>
          <p>
            Je suis Adriane Semporé, étudiante en deuxième année de génie logiciel à l'Université d'Ottawa, 
            option gestion et entrepreneuriat. Curieuse et motivée, je suis passionnée par le développement web, 
            l'innovation technologique et la création de solutions utiles.
          </p>
        </div>
        <div className="col-lg-6">
          <h3 className="section-title">Ma façon de travailler</h3>
          <p>
            Je me forme actuellement à la conception d'interfaces utilisateur (IU), où j'apprends à concevoir 
            des expériences centrées sur l'utilisateur. J'accorde une grande importance à l'empathie, à l'écoute 
            des besoins et à l'amélioration continue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;