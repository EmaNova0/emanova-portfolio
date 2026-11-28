
import { useState } from 'react'
import { Link } from 'react-router-dom'

const featureImages = [
  '/images/spaceblog/spaceblog1.png',
  '/images/spaceblog/spaceblog2.png',
  '/images/spaceblog/spaceblog3.png',
  '/images/spaceblog/spaceblog4.png',
  '/images/spaceblog/spaceblog5.png',
  '/images/spaceblog/spaceblog6.png',
  '/images/spaceblog/spaceblog7.png',
]

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function changeImage(direction) {
    setCurrentIndex((current) =>
      (current + direction + images.length) % images.length
    )
  }

  return (
    <div className="carousel">
      <button
        className="carousel-btn"
        onClick={() => changeImage(-1)}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      <div className="carousel-image">
        <img src={images[currentIndex]} alt={alt} />
      </div>

      <button
        className="carousel-btn"
        onClick={() => changeImage(1)}
        aria-label="Next image"
      >
        &#10095;
      </button>
    </div>
  )
}

function Space() {
  return (
    <>
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

      <main className="space-project">

        {/* Back Button */}
        <div className="back-link">
          <Link to="/projects">← Back to Projects</Link>
        </div>

        {/* Hero */}
        <section className="project-hero">
          <p className="project-type">
            FRONT-END DEVELOPMENT PROJECT
          </p>

          <h1>SPACE BLOG</h1>

          <h2>A NASA-INSPIRED INTERACTIVE BLOG EXPERIENCE</h2>

          <p className="project-description">
            A React-based space blog application that transforms
            traditional blog content into an interactive experience
            through authentication, comments, personalization,
            and responsive design.
          </p>
        </section>

        <hr />

        {/* Project Information */}
        <section className="project-info">
          <div className="info-column">

            <div className="info-row">
              <span className="label">Role</span>
              <span>FRONT-END Developer</span>
            </div>

            <div className="info-row">
              <span className="label">Team</span>
              <span>Ema Nova | Amanda Rangel-Andres</span>
            </div>

            <div className="info-row">
              <span className="label">Tools</span>
              <span>HTML5, JavaScript, React Router, context API</span>
            </div>

            <div className="info-row">
              <span className="label">Primary User Group</span>
              <span>
                Students, technology enthusiasts, and casual readers
                interested in exploring engaging space-related content
                through an interactive and responsive experience.
              </span>
            </div>

          </div>

          <div className="objective-column">
            <h3>Project Objective</h3>

            <p>
              The goal of the Space Blog project was to design and
              develop a responsive web application that transforms
              traditional blog content into an engaging space-themed
              experience. The project focused on creating an
              interactive platform where users can explore posts,
              authenticate into the system, leave comments, customize
              their experience through theme preferences, and navigate
              a modern, responsive interface.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="project-banner">
          <img
            src="/images/spaceblog/Space BLog.png"
            alt="Space Blog Project"
          />
        </section>

        {/* Project Overview */}
        <section className="project-overview">

          <div className="overview-card mission">
            <h3>Our Mission</h3>
            <p>
              Before development, our team focused on understanding
              what makes blog platforms engaging and easy to use.
              We explored common usability practices, responsive web
              design principles, authentication flows, and
              personalization features. Our goal was to create an
              experience that felt interactive rather than simply
              displaying static blog posts.
            </p>
          </div>

          <div className="overview-card question">
            <h3>Main Question</h3>
            <p>
              How might we create a modern, responsive blog platform
              that encourages user interaction while making
              space-related content engaging and enjoyable to explore?
            </p>
          </div>

          <div className="overview-card problem">
            <h3>The Problem</h3>
            <p>
              Traditional blog websites often provide limited
              interaction beyond reading articles. Many lack
              personalization, responsive layouts across devices,
              and engaging visual themes that encourage users to
              continue exploring content. Additionally, maintaining
              consistency across multiple pages while working as a
              development team introduced technical challenges
              throughout the project.
            </p>
          </div>

          <div className="overview-card solution">
            <h3>The Solution</h3>
            <p>
              We developed a responsive space-themed blog that
              combines authentication, interactive commenting,
              customizable themes, and dynamically generated blog
              posts from an API. By integrating modern front-end
              technologies and reusable design components, we
              created an application that provides both functionality
              and an engaging visual experience across desktop,
              tablet, and mobile devices.
            </p>
          </div>

        </section>

        <div className="section-divider"></div>

        {/* Development Process */}
        <section className="design-process">

          <h2>Development Process</h2>

          <h3>
            Milestone 1:
            <span> Research &amp; Development</span>
          </h3>

          <div className="research-container">
            <div className="case-research-card">
              <h4>Research Exploration</h4>

              <p>
                During the first phase of the project, our team
                researched responsive web design, user authentication,
                API integration, and interface consistency.

                <br /><br />

                Our goal was to understand how to create a blog
                experience that was interactive, accessible, and
                visually engaging.

                <br /><br />

                Research focused on:

                <br /><br />

                • Responsive web design principles
                <br />
                • Authentication flows
                <br />
                • API integration
                <br />
                • Reusable components
                <br />
                • User interaction patterns
              </p>
            </div>
          </div>

          <div className="prototype-link">
            <p>
              Explore the completed Space Blog application and
              experience the interactive features.
            </p>

            <a
              href="https://blog-post-project-navy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="figma-btn"
            >
              View Live Website →
            </a>
          </div>

          <div className="section-divider"></div>

          {/* Key Features */}
          <section className="key-features">

            <h2>Key Features</h2>

            <h3>
              Milestone 2:
              <span> Building the Interactive Experience</span>
            </h3>

            <div className="feature-container">

              <div className="feature-card">
                <h4>Authentication System</h4>
                <p>
                  Users can securely log into the application, with
                  their username managed globally using React Context.
                  This allows personalized interactions throughout
                  the website and creates a more customized user
                  experience.
                </p>
              </div>

              <div className="feature-card">
                <h4>Dynamic Space-Themed Blog</h4>
                <p>
                  Blog posts are retrieved from an external API and
                  transformed into visually engaging space-themed
                  reports. Custom titles, categories, and formatting
                  help create a unique reading experience centered
                  around space exploration.
                </p>
              </div>

              <div className="feature-card">
                <h4>Comment System</h4>
                <p>
                  Authenticated users can submit comments that are
                  displayed instantly, creating a more interactive
                  reading experience. The feature encourages users
                  to engage with content and participate in discussions.
                </p>
              </div>

              <div className="feature-card">
                <h4>Individual Post Pages</h4>
                <p>
                  Each blog post includes its own detailed page
                  featuring formatted content, author information,
                  comments, and a like button. This allows users
                  to explore articles in greater depth.
                </p>
              </div>

              <div className="feature-card">
                <h4>Theme Customization</h4>
                <p>
                  Users can switch between light and dark mode,
                  with preferences automatically saved using
                  Local Storage for future visits. This creates
                  a more personalized and comfortable browsing
                  experience.
                </p>
              </div>

              <div className="feature-card">
                <h4>Contact Page</h4>
                <p>
                  Visitors can communicate through a contact form
                  by submitting their name, email, and message.
                  This provides a direct way for users to connect
                  with the platform.
                </p>
              </div>

            </div>

            {/* High Fidelity Screens */}
            <div className="feature-sketches">

              <h3>High-Fidelity Flow &amp; Final Experience</h3>

              <ImageCarousel
                images={featureImages}
                alt="Space Blog interface design"
              />

            </div>

          </section>

        </section>

        <div className="section-divider"></div>

        {/* Conclusion */}
        <section className="final-section">

          <div className="final-card">

            <div className="conclusion-text">
              <h2>Conclusion</h2>

              <p>
                The Space Blog project strengthened my experience
                in front-end development by combining responsive
                design, React development, authentication, API
                integration, and collaborative software development
                practices.

                <br /><br />

                Working within a team taught me the importance
                of maintaining clean code, reusable components,
                and effective version control while solving
                real-world development challenges.

                <br /><br />

                Through this project, I developed a stronger
                understanding of how technical implementation
                and user-centered design work together to create
                engaging digital experiences.

                <br /><br />

                The final application demonstrates my ability
                to build responsive web applications that balance
                functionality, visual design, and user interaction.
              </p>
            </div>

            <div className="prototype-video">
              <video controls>
                <source
                  src="/images/spaceblog/SpaceBlogVideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

        </section>

        {/* Related Projects */}
        <section className="projects-preview">

          <div className="section-header">
            <h2>Projects</h2>
            <Link to="/projects" className="view-all">
              View All →
            </Link>
          </div>

          <div className="project-cards">

            {/* Bowtify */}
            <div className="card">
              <img
                src="/images/Bowtify1.png"
                alt="Bowtify project preview"
              />

              <div className="card-content">
                <h3>Bowtify</h3>

                <p>
                  Redesigned an AI-powered risk management platform
                  to improve explainability, usability, and user
                  trust through Human-Centered AI design principles.
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

            {/* Clarity */}
            <div className="card">
              <img
                src="/images/clarity1.png"
                alt="Clarity project preview"
              />

              <div className="card-content">
                <h3>Clarity</h3>

                <p>
                  AI-powered financial education app that helps
                  teenagers build healthy budgeting and spending habits.
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

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer id="footer">
        <p>Let's Connect...</p>

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

        <a href="/documents/EmaNova_RESUME.pdf">
          Resume
        </a>

        <p>© 2026 Ema Nova. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Space
