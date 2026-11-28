
import { useState } from 'react'

const sketchImages = [
  '/images/bowtify/bowtify_sketch1.jpeg',
  '/images/bowtify/bowtify_sketch2.png',
  '/images/bowtify/bowtify_sketch3.png',
  '/images/bowtify/bowtify_sketch4.png',
]

const featureImages = [
  '/images/bowtify/bowtify1.png',
  '/images/bowtify/bowtify2.png',
  '/images/bowtify/bowtify3.png',
  '/images/bowtify/bowtify4.png',
  '/images/bowtify/bowtify5.png',
  '/images/bowtify/bowtify6.png',
  '/images/bowtify/bowtify7.png',
  '/images/bowtify/bowtify8.png',
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

function Bowtify() {
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

      <main className="bowtify-project">

        {/* Back Button */}
        <div className="back-link">
          <a href="/projects">← Back to Projects</a>
        </div>

        {/* Hero */}
        <section className="project-hero">
          <p className="project-type">UX/UI DESIGN PROJECT</p>

          <h1>BOWTIEFY</h1>

          <h2>AI-POWERED RISK MANAGEMENT PLATFORM</h2>

          <p className="project-description">
            Redesigned an AI-powered risk management platform to improve
            explainability, usability, and user trust through Human-Centered
            AI design principles.
          </p>
        </section>

        <hr />

        {/* Project Information */}
        <section className="project-info">

          <div className="info-column">

            <div className="info-row">
              <span className="label">Role</span>
              <span>UX/UI Designer & Research Assistant</span>
            </div>

            <div className="info-row">
              <span className="label">Team</span>
              <span>
                Ema Nova | Dr. Ilieva Ageenko | Sofia Mohamed | Cristian Llerena
              </span>
            </div>

            <div className="info-row">
              <span className="label">Industry Partners</span>
              <span>TODUS Advisors</span>
            </div>

            <div className="info-row">
              <span className="label">Tools</span>
              <span>Figma, FigJam, AI</span>
            </div>

            <div className="info-row">
              <span className="label">Primary User Group</span>
              <span>
                Professionals and decision-makers who rely on AI-generated
                insights and need clear, transparent explanations to make
                informed decisions.
              </span>
            </div>

          </div>

          <div className="objective-column">
            <h3>Project Objective</h3>

            <p>
              This research project focused on improving the explainability
              and usability of AI-generated insights within the Bowtiefy
              platform.

              The goal was to understand how users interpret AI recommendations,
              identify opportunities to increase transparency, and design
              solutions that help users better understand the reasoning
              behind AI outputs.
            </p>
          </div>

        </section>

        {/* Main Image */}
        <section className="project-banner">
          <img
            src="/images/bowtify/bowtifyAI(1).png"
            alt="Bowtify AI Platform"
          />
        </section>

        {/* Overview */}
        <section className="project-overview">

          <div className="overview-card mission">
            <h3>Our Mission</h3>
            <p>
              Our mission was to explore how AI systems can become more
              understandable, trustworthy, and user-centered.

              By researching user expectations and challenges with AI
              explanations, we aimed to design experiences that bridge the
              gap between complex AI processes and human decision-making.
            </p>
          </div>

          <div className="overview-card question">
            <h3>Main Question</h3>
            <p>
              How can we design AI explanations that help users understand,
              trust, and effectively interact with AI-generated insights?
            </p>
          </div>

          <div className="overview-card problem">
            <h3>The Problem</h3>
            <p>
              Although AI can provide powerful insights, users often struggle
              to understand how AI reaches its conclusions.

              A lack of transparency can create uncertainty, reduce trust,
              and make it difficult for users to confidently act on AI
              recommendations.
            </p>
          </div>

          <div className="overview-card solution">
            <h3>The Solution</h3>
            <p>
              Design a transparent and user-centered AI experience by
              introducing clearer explanations, improved visual
              communication, and interactive features that allow users
              to understand the reasoning behind AI-generated insights.
            </p>
          </div>

        </section>

        <div className="section-divider"></div>

        {/* Design Process - Milestone 1 */}
        <section className="design-process">

          <h2>Design Process</h2>

          <h3>
            Milestone 1:
            <span> The Research</span>
          </h3>

          <div className="research-container">

            <div className="case-research-card">
              <h4>Research Exploration</h4>

              <p>
                During the first phase of the project, the team focused on
                understanding the current Bowtiefy experience and identifying
                opportunities to improve AI transparency and user understanding.

                <br /><br />

                Research focused on:

                <br /><br />
                • AI explainability principles
                <br />
                • Human-AI interaction patterns
                <br />
                • User challenges with AI-generated insights
                <br />
                • Improving trust and decision-making

                <br /><br />

                The research phase established the foundation for creating
                a more intuitive and human-centered AI experience.
              </p>
            </div>

            <div className="case-research-card">
              <h4>Design Recommendations</h4>

              <p>
                Based on research findings, we identified opportunities
                to make AI-generated insights easier to interpret and
                more actionable.

                <br /><br />

                Key recommendations included:

                <br /><br />
                • Providing clearer explanations behind AI decisions
                <br />
                • Using visual communication to simplify complex information
                <br />
                • Allowing users to explore factors influencing AI recommendations
                <br />
                • Increasing transparency to build user confidence
              </p>
            </div>

          </div>

          {/* Initial Concepts */}
          <div className="sketches">
            <h3>Initial Concepts & Exploration</h3>

            <ImageCarousel
              images={sketchImages}
              alt="Bowtify research sketches"
            />
          </div>

        </section>

        <div className="section-divider"></div>

        {/* Milestone 2 - Key Features */}
        <section className="key-features">

          <h2>Key Features</h2>

          <h3>
            Milestone 2:
            <span> Designing Explainable AI Experiences</span>
          </h3>

          <div className="feature-container">

            <div className="feature-card">
              <h4>Console</h4>
              <p>
                Serving as the central workspace where users begin their
                analysis, manage projects, and access Bowtiefy's core tools.
              </p>
            </div>

            <div className="feature-card">
              <h4>AI Explanation Layer</h4>
              <p>
                Provides users with clearer reasoning behind AI-generated
                results, helping them understand how recommendations are created.
              </p>
            </div>

            <div className="feature-card">
              <h4>Insights</h4>
              <p>
                Presenting important patterns and findings in an
                easy-to-understand format.
              </p>
            </div>

            <div className="feature-card">
              <h4>Reports</h4>
              <p>
                Allowing users to organize, summarize, and share their analysis.
              </p>
            </div>

            <div className="feature-card">
              <h4>Industry Benchmarks</h4>
              <p>
                Helping users compare their results against relevant
                standards and best practices.
              </p>
            </div>

            <div className="feature-card">
              <h4>Structural Validation</h4>
              <p>
                Ensuring analyses are complete, consistent, and aligned
                with established methodologies.
              </p>
            </div>

          </div>

          {/* High-Fidelity Prototyping */}
          <div className="feature-sketches">

            <h3>High-Fidelity Flow & Prototyping</h3>

            <ImageCarousel
              images={featureImages}
              alt="Bowtify feature design"
            />

          </div>

        </section>

        <div className="section-divider"></div>

        {/* Phase 2 / Conclusion */}
        <section className="final-section">

          <div className="final-card">

            <div className="conclusion-text">
              <h2>Coming This Fall: Phase 2</h2>

              <p>
                The next phase of Bowtify will focus on further developing
                and validating the redesigned AI experience.

                <br /><br />

                Future work will include refining the high-fidelity prototype,
                exploring additional Human-AI interaction patterns, and
                evaluating how users interpret AI-generated recommendations.

                <br /><br />

                Through continued research and usability testing, Phase 2
                aims to strengthen transparency, trust, and confidence when
                interacting with AI-powered risk management systems.

                <br /><br />

                The goal is to continue designing AI experiences where users
                understand not only the outcome, but also the reasoning
                behind AI decisions.
              </p>
            </div>

            <div className="prototype-video">
              <video controls>
                <source
                  src="/images/bowtify/BowtifyVideo.mp4"
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
            <a href="/projects" className="view-all">
              View All →
            </a>
          </div>

          <div className="project-cards">

            {/* Clarity */}
            <div className="card">
              <img
                src="/images/clarity1.png"
                alt="Clarity project preview"
              />

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

                <a href="/clarity" className="project-link">
                  View Project →
                </a>
              </div>
            </div>

            {/* Space Blog */}
            <div className="card">
              <img
                src="/images/space1.png"
                alt="Space Blog project preview"
              />

              <div className="card-content">
                <h3>Space Blog</h3>

                <p>
                  A React-based blog application honoring NASA's Artemis II
                  astronauts. Built collaboratively to create a responsive
                  experience while strengthening skills in React,
                  authentication, and modern front-end development.
                </p>

                <div className="tech-tags">
                  <span>React</span>
                  <span>UX/UI</span>
                  <span>Front-End Development</span>
                </div>

                <a href="/space" className="project-link">
                  View Project →
                </a>
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

export default Bowtify
