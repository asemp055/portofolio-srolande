import '../styles/styles.css';
import { MdEmail, MdPhone, MdLink } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="bg-dark-section py-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">Contactez-moi</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 contact-method">
            <a href="mailto:asemp055@uottawa.ca" className="contact-link">
              <MdEmail className="icon" size={40} />
              <span className="label">Email</span>
              <span className="value">asemp055@uottawa.ca</span>
            </a>
          </div>
          <div className="col-md-4 contact-method">
            <a href="tel:+18199187286" className="contact-link">
              <MdPhone className="icon" size={40} />
              <span className="label">Téléphone</span>
              <span className="value">819-918-7286</span>
            </a>
          </div>
          <div className="col-md-4 contact-method">
            <a href="https://www.linkedin.com/in/adriane-sempore2004/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <MdLink className="icon" size={40} />
              <span className="label">LinkedIn</span>
              <span className="value">/in/adrianesempore</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;