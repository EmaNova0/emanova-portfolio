
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      {/* Navigation */}
      <header>
        <nav>
          <div className="nav-left">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
          </div>

          <Link to="/" className="logo">Ema Nova</Link>

          <div className="nav-right">
            <a href="#footer">Connect!</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="projects-page">

          {/* Projects Header */}
          <div className="projects-header">
            <h1>
              <span>My</span> Projects
            </h1>

            <p>
              A collection of my recent work. Each project represents a challenge
              I've tackled and a solution I've built.
            </p>

            <div className="project-tags">
              <span>UX/UI</span>
              <span>AI</span>
              <span>Python</span>
              <span>Java/JavaScript</span>
              <span>Web Development</span>
            </div>
          </div>

          {/* Project Cards */}
          <div className="project-cards">

            {/* Clarity */}
            <div className="card">
              <img src="/images/clarity1.png" alt="Clarity project" />

              <div className="card-content">
                <h3>Clarity</h3>

                <p>
                  AI-powered financial education app that helps teenagers
                  build healthy budgeting and spending habits.
                </p>

                <div className="tech-tags">
                  <span>Figma</span>
                  <span>UX/UI</span>
                  <span>AI</span>
                  <span>Research</span>
                </div>

                <Link to="/clarity" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>

            {/* Bowtify */}
            <div className="card">
              <img src="/images/Bowtify1.png" alt="Bowtify project" />

              <div className="card-content">
                <h3>Bowtify</h3>

                <p>
                  Redesigned an AI-powered risk management platform to improve
                  explainability, usability, and user trust through
                  Human-Centered AI design principles.
                </p>

                <div className="tech-tags">
                  <span>AI</span>
                  <span>UX/UI</span>
                  <span>Figma</span>
                  <span>Research</span>
                  <span>Human-Centered AI</span>
                </div>

                <Link to="/bowtify" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>

            {/* Space Blog */}
            <div className="card">
              <img src="/images/space1.png" alt="Space project" />

              <div className="card-content">
                <h3>Space Blog</h3>

                <p>
                  A React-based blog application honoring NASA's Artemis II
                  astronauts. Built collaboratively to create a responsive,
                  engaging experience while strengthening our skills in React,
                  authentication, and modern front-end development.
                </p>

                <div className="tech-tags">
                  <span>React</span>
                  <span>UX/UI</span>
                  <span>Front-End Development</span>
                </div>

                <Link to="/space" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <p>Let's Connect...</p>

        <a href="https://www.linkedin.com/in/emanova" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/EmaNova0" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href="mailto:emanovaoficial@gmail.com">Email</a>

        <a href="/documents/EmaNova_RESUME.pdf">Resume</a>

        <p>© 2026 Ema Nova. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Projects
