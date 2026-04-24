const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Lakshya Srivastav</h3>
        <p>Full Stack Developer | B.Tech CSE (AIML) Student</p>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>

        <p className="footer-copy">
          © 2026 Lakshya Srivastav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;