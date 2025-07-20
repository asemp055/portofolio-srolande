import '../styles/styles.css';
const Hero = () => {
  return (
    <section className="container-fluid p-0 slider" id="home">
      <div className="slider position-relative text-center d-flex align-items-center justify-content-center">
        <img 
          src="/img/slider.jpg" 
          className="slider-background position-absolute w-100 h-100" 
          alt="Image de fond" 
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center slider-content">
          <h1 className="bubble-text">BONJOUR</h1>
          <h2 className="bubble-text">je suis ADRIANE SEMPORE</h2>
          <p>Future ingénieure en Génie logiciel, passionnée par le développement Web, l'innovation et la conception centrée sur l'utilisateur.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;