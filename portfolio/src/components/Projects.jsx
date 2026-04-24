const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        <div className="project-card">
          <h3>Smart Attendance Marking with Emotion Detection</h3>
          <p>
            Developed an intelligent attendance system that uses FaceNet and CNN-based
            deep learning models to automatically mark student attendance through facial
            recognition. The project also includes emotion detection to help analyze
            student engagement and attentiveness during classroom sessions.
          </p>
          <h4>Tech Stack:</h4>
          <p>Deep Learning, FaceNet, CNN, Python</p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>AI-Driven Healthcare Chatbot</h3>
          <p>
            Built a multi-page healthcare web application with an AI-driven chatbot
            that takes user symptoms as input and suggests possible disease insights
            along with home remedies. The platform also includes doctor contact pages,
            nearby hospital location details, appointment booking functionality, and
            backend record storage for managing user and appointment data.
          </p>
          <h4>Tech Stack:</h4>
          <p>HTML, CSS, JavaScript, React, Node.js, Express, Backend Database</p>
          <div className="project-links">
            <a href="https://github.com/lakshya0736/HealthCare_AI" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://healthcare-ai-dlmm.onrender.com" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Netflix Clone</h3>
          <p>
            Created a Netflix-inspired frontend clone using HTML and CSS, focusing on
            layout design, styling, responsiveness, and recreating the visual structure
            of a modern streaming platform homepage. This project helped strengthen my
            frontend fundamentals and UI building skills.
          </p>
          <h4>Tech Stack:</h4>
          <p>HTML, CSS</p>
          <div className="project-links">
            <a href="https://github.com/lakshya0736/Netflix_Clone" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://lakshya0736.github.io/Netflix_Clone/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;