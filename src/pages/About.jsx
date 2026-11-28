
function About() {
  return (
    <>
      {/* Navigation */}
      <header>
        <nav>
          <div className="nav-left">
            <a href="/projects">Projects</a>
            <a href="/about">About Me</a>
          </div>

          <a href="/" className="logo">Ema Nova</a>

          <div className="nav-right">
            <a href="#footer">Connect!</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="about-hero">

          <p className="about-subtitle">
            HUMAN-CENTERED AI • RESEARCH • UX/UI DESIGNER • FRONT-END DEVELOPER
          </p>

          <div className="about-content">

            <div className="about-image">
              <img src="/images/ProfilePicture.jpeg" alt="Ema Nova" />
            </div>

            <div className="about-text">
              <h1><span>About</span> Me...</h1>

              <p>
                I am an undergraduate Computer Science student pursuing a
                concentration in Human-Computer Interaction (HCI). I'm
                passionate about designing technology that is user-centered,
                accessible, and meaningful, with a special interest in how
                people interact with intelligent systems and AI.
              </p>

              <p>
                My interests combine UX/UI design, front-end development,
                Human-Centered AI, and research. Through these experiences,
                I enjoy creating digital products that solve real problems
                while making technology easier and more enjoyable to use.
              </p>

              <p>
                Beyond technical skills, I value collaboration,
                communication, and continuous learning. I enjoy working on
                multidisciplinary teams where thoughtful design and
                technology come together to create meaningful experiences.
              </p>
            </div>
          </div>

          <div className="about-line"></div>

          {/* Toolkit */}
          <section className="toolkit">
            <h2>Toolkit</h2>

            <div className="toolkit-content">

              <div className="toolkit-row">
                <h3>My Skills:</h3>

                <p>
                  UX/UI Design, Wireframing, Prototyping, User Flows,
                  User Research, Front-End Development, Responsive Design,
                  Accessibility, Design Systems, Usability Testing,
                  Human-Centered AI, AI Research, Figma Prototyping,
                  JavaScript, React, HTML/CSS.
                </p>
              </div>

              <div className="toolkit-row">
                <h3>Program:</h3>

                <div className="toolkit-tags">
                  <span>AI</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>C/C++</span> 
                  <span>Figma</span>
                  <span>JavaScript</span>
                  <span>HTML/CSS</span>
                  <span>Human-Center-AI</span>
                </div> 
              </div>

              <div className="toolkit-row">
                <h3>Certifications:</h3>

                <div className="certifications">

                  <div className="cert">
                    <strong>IBM UX/UI Design Professional Certificate</strong>
                    <p>In Progress • 2026</p>
                  </div>

                  <div className="cert">
                    <strong>Google Foundations of Cybersecurity</strong>
                    <p>Issued July 2025</p>
                  </div>

                  <div className="cert">
                    <strong>Automate Cybersecurity Tasks with Python</strong>
                    <p>Issued August 2025</p>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <p className="footer-heading">Let's Connect...</p>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/emanova" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="https://github.com/EmaNova0" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="mailto:emanovaoficial@gmail.com">Email</a>
        </div>

        <p className="footer-copyright">
          © 2026 Ema Nova. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

export default About
