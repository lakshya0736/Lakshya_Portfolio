const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tag">B.Tech CSE (AIML) • 3rd Year • Galgotias University</p>

        <h1>
          Hi, I’m <span>Lakshya Srivastav</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I’m a 3rd year B.Tech CSE (AIML) student at Galgotias University with
          skills in Java, Python, HTML, CSS, JavaScript, React, Node.js, and
          Express. I’m stronger in frontend development and also have working
          knowledge of backend development to build complete web projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;