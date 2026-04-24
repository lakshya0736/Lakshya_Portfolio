const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <p>
          I am open to internships, collaborations, and exciting project
          opportunities. If you would like to connect with me, feel free to
          contact me through the details below.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lakshyasrivastav14@gmail.com">lakshyasrivastav14@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 8115070357
          </p>
          <p>
            <strong>Location:</strong> Greater Noida, Uttar Pradesh, India
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://in.linkedin.com/in/lakshya-srivastav-24169b314"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://in.linkedin.com/in/lakshya-srivastav-24169b314
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/lakshya0736"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/lakshya0736
            </a>
          </p>
        </div>

        <div className="contact-button">
          <a href="mailto:lakshyasrivastav14@gmail.com" className="btn primary-btn">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;