
import { Link } from 'react-router-dom'

function Home() {
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
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-heading">
            <h2>
              <span>Creating</span> Meaningful <span>Experiences</span>
            </h2>

            <p className="subtitle">
              HUMAN-CENTERED AI • RESEARCH • UX/UI DESIGN • FRONT-END DEVELOPMENT
            </p>
          </div>

          <div className="hero-main">
            <div className="hero-image">
              <Link to="/about">
                <img src="/images/ProfilePicture.jpeg" alt="Ema Nova" />
              </Link>
            </div>

            <div className="hero-text">
              <p>
                I'm Ema Nova CS student specializing in Human Computer
                Interaction at UNC Charlotte. I design user-centered digital
                experiences through UX/UI Design, Figma Prototyping, and
                thoughtful interface design.
              </p>

              <div className="hero-buttons">
                <Link to="/projects">View Projects</Link>
                <a href="/documents/EmaNova's_Resume.pdf">View Resume</a>
              </div>
            </div>
          </div>
        </section>

        {/* I Design Connection */}
        <section className="design-connection">
          <h2>I design Connection</h2>
        </section>

        {/* Projects Preview */}
        <section className="projects-preview">
          <div className="section-header">
            <h2>Projects</h2>
            <Link to="/projects" className="view-all">
              View All →
            </Link>
          </div>

          <div className="project-cards">
            <div className="card">
              <img src="/images/clarity1.png" alt="Clarity project preview" />

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

            <div className="card">
              <img src="/images/Bowtify1.png" alt="Bowtify project preview" />

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

            <div className="card">
              <img src="/images/space1.png" alt="Space project preview" />

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

        {/* My Skills */}
        <section className="skills">
          <h2>My Skills</h2>

          <div className="skills-list">
            <span>HTML/CSS</span>
            <span>Front-End Development</span>
            <span>JavaScript</span>
            <span>AI Research</span>
            <span>Figma Prototyping</span>
            <span>Java</span>
            <span>C / C++</span>
            <span>Python</span>
            <span>UX Research</span>
            <span>UI Design</span>
            <span>Usability Testing</span>
            <span>React</span>
            <span>AI Centered Design</span>
          </div>
        </section>

        
            
        {/* Research */}
        <section className="research">
        <h2>Research & Presentations</h2>

        <div className="research-cards">

            {/* Spring 2026 Research */}
            <div className="research-card">
            <div className="card">
                <img
                src="/images/Spring2026-Research.jpeg"
                alt="Spring 2026 research presentation on Horizontal Gene Transfer in Budding Yeast"
                />

                <div className="card-content">
                <h3>
                    Horizontal Gene Transfer in Budding Yeast | Spring 2026
                </h3>

                <p>
                    Conducted computational biology research validating
                    Horizontal Gene Transfer events using phylogenetic
                    analysis and bioinformatics tools.
                </p>

                <div className="tech-tags">
                    <span>Research</span>
                    <span>Bioinformatics</span>
                    <span>Python</span>
                    <span>Data Analysis</span>
                </div>

                <a
                    href="https://symposium.foragerone.com/urc2026/presentations/77538"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Research →
                </a>
                </div>
            </div>
            </div>

            {/* UNC Charlotte AI Day 2026 */}
            <div className="research-card">
            <div className="card">
                <img
                src="/images/AI-Day-2026.png"
                alt="UNC Charlotte AI Day 2026 research presentation"
                />

                <div className="card-content">
                <h3>
                    Designing Trustworthy AI | UNC Charlotte AI Day 2026
                </h3>

                <p>
                    Presented research on trustworthy AI recommendations
                    for engineers, highlighting explainability,
                    human-in-the-loop interfaces, and cognitive biases
                    in human-AI decision-making.
                </p>

                <div className="tech-tags">
                    <span>Artificial Intelligence</span>
                    <span>Research</span>
                    <span>AI Ethics</span>
                    <span>HCI</span>
                </div>

                <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7525579586886180865/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View AI Day Presentation →
                </a>
                </div>
            </div>
            </div>



            {/* OUR Fall 2026 Research Fair */}
            <div className="research-card">
            <div className="card">
                <img
                src="/images/Fall2026-Research.png"
                alt="Designing Trustworthy AI Recommendations for Engineers research poster"
                />

                <div className="card-content">
                <h3>
                    Designing Trustworthy AI Recommendations for Engineers |
                    OUR Fall 2026 Research Showcase
                </h3>

                <p>
                    Presented HCI research exploring how explainable AI
                    and human-in-the-loop interfaces can help engineers
                    evaluate AI recommendations, recognize cognitive
                    biases, and make more informed decisions.
                </p>

                <div className="tech-tags">
                    <span>AI</span>
                    <span>HCI Research</span>
                    <span>Explainable AI</span>
                    <span>Human-in-the-Loop</span>
                </div>

                <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7528489181161963520/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Research Presentation →
                </a>
                </div>
            </div>
            </div>

            
        </div>
    </section>
</main>

      {/* Footer */}
      <footer id="footer">
        <p className="footer-heading">Let's Connect...</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/emanova"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/EmaNova0"
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default Home
