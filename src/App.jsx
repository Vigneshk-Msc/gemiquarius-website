import "./App.css";
import logo from "./assets/Logo_GM.png";
import ceoPhoto from "./assets/CEO.jpeg";
import mdPhoto from "./assets/MD.jpeg";

function App() {
  return (
    <div className="website">

      {/* HEADER */}
      <header className="header">
        <div className="container header-container">
          <a
            href="#home"
            className="logo"
            aria-label="Gemiquarius Cyber Solutions Home"
          >
            <img
              src={logo}
              alt="Gemiquarius Cyber Solutions"
              className="header-logo"
            />
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#management">Management</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <p className="hero-label">
                TECHNOLOGY • SOFTWARE • DIGITAL SOLUTIONS
              </p>

              <h1>
                Building Digital Solutions
                <span> For Modern Businesses</span>
              </h1>

              <p className="hero-description">
                We create reliable and practical software solutions
                that help businesses grow, improve productivity,
                and simplify their day-to-day operations.
              </p>

              <div className="hero-buttons">
                <a href="#services" className="primary-button">
                  Our Services
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-logo">
                <img
                  src={logo}
                  alt="Gemiquarius Cyber Solutions"
                />
              </div>

              <h2>Gemiquarius</h2>

              <p>
                Cyber Solutions for your digital journey.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about section">
          <div className="container">
            <div className="section-heading">
              <p>ABOUT US</p>

              <h2>
                Technology that works for your business
              </h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <p>
                  Gemiquarius Cyber Solutions is a technology
                  solutions company focused on building modern,
                  reliable, and user-friendly software applications.
                </p>

                <p>
                  We work with businesses to understand their
                  requirements and develop solutions that make
                  their processes simpler and more efficient.
                </p>
              </div>

              <div className="about-box">
                <h3>Our Approach</h3>

                <div className="approach-item">
                  <span>01</span>

                  <div>
                    <h4>Understand</h4>

                    <p>
                      We understand your business requirements.
                    </p>
                  </div>
                </div>

                <div className="approach-item">
                  <span>02</span>

                  <div>
                    <h4>Build</h4>

                    <p>
                      We build practical and scalable solutions.
                    </p>
                  </div>
                </div>

                <div className="approach-item">
                  <span>03</span>

                  <div>
                    <h4>Deliver</h4>

                    <p>
                      We deliver solutions designed for real
                      business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services section">
          <div className="container">
            <div className="section-heading">
              <p>OUR SERVICES</p>

              <h2>
                Solutions for your digital needs
              </h2>
            </div>

            <div className="services-grid">

              <article className="service-card">
                <div className="service-icon">01</div>

                <h3>Web Development</h3>

                <p>
                  Modern and responsive websites designed
                  for businesses and organizations.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">02</div>

                <h3>Software Development</h3>

                <p>
                  Custom software applications built around
                  your specific business requirements.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">03</div>

                <h3>Business Solutions</h3>

                <p>
                  Digital solutions that help businesses
                  manage their daily operations efficiently.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">04</div>

                <h3>IT Solutions</h3>

                <p>
                  Technology solutions to support your
                  business growth and digital transformation.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* MANAGEMENT / LEADERSHIP */}
        <section id="management" className="management section">
          <div className="container">

            <div className="section-heading management-heading">
              <p>OUR LEADERSHIP</p>

              <h2>Meet Our Leadership</h2>
            </div>

            <div className="management-grid">

              {/* CEO */}
              <article className="management-card">
                <div className="management-photo-wrapper">
                  <img
                    src={ceoPhoto}
                    
                    alt="Founder and Chief Executive Officer"
                    className="management-photo"
                  />
                </div>

                <div className="management-content">
                  <p className="management-role">
                    FOUNDER AND CHIEF EXECUTIVE OFFICER
                  </p>

                  <h3>Mr. Vignesh Kaliyamoorthy</h3>

                  <p className="management-description">
                    Leading the organization with a clear vision,
                    strategic direction, and a strong focus on
                    technology and business growth.
                  </p>
                </div>
              </article>

              {/* MD */}
              <article className="management-card">
                <div className="management-photo-wrapper">
                  <img
                    src={mdPhoto}
                    alt="Co-Founder and Managing Director"
                    className="management-photo"
                  />
                </div>

                <div className="management-content">
                  <p className="management-role">
                    CO-FOUNDER AND MANAGING DIRECTOR
                  </p>

                  <h3>Mrs. Devi Ghandhi</h3>

                  <p className="management-description">
                    Guiding business operations and development
                    with a focus on delivering reliable solutions
                    and creating long-term value.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="container">
            <div className="contact-box">

              <div className="contact-content">
                <p className="contact-label">
                  GET IN TOUCH
                </p>

                <h2>
                  Let's build something
                  <span> useful together.</span>
                </h2>

                <p>
                  Have a project or business requirement?
                  Contact us and let's discuss how technology
                  can help your business.
                </p>
              </div>

              <div className="contact-details">

                <div className="contact-item">
                  <span>Email</span>

                  <a href="mailto:info@gemiquariuscybersolutions.com">
                    info@gemiquariuscybersolutions.com
                  </a>
                </div>

                <div className="contact-item">
                  <span>Website</span>

                  <a
                    href="https://gemiquariuscybersolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gemiquariuscybersolutions.com
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-container">

          <div className="footer-company">
            <strong>
              Gemiquarius Cyber Solutions
            </strong>
            
            <p>
              Technology • Software • Digital Solutions
            </p>
            <p>Mayiladuthurai</p>
          </div>

          <p className="footer-copyright">
            © 2026 Gemiquarius Cyber Solutions.
            All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;
