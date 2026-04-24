const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <p>Java, Python, JavaScript</p>
        </div>

        <div className="skill-category">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <p>Node.js, Express</p>
        </div>

        <div className="skill-category">
          <h3>Tools & Concepts</h3>
          <p>Responsive Web Design, Problem Solving, Basic Full Stack Development</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;