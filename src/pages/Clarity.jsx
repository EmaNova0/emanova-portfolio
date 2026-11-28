
import { useState } from 'react'

const sketchImages = [
  '/images/clarity/sketch2.jpeg',
  '/images/clarity/sketch3.jpeg',
  '/images/clarity/sketch4.jpeg',
  '/images/clarity/sketch5.jpeg',
]

const featureImages = [
  '/images/clarity/clarity_prototype1.png',
  '/images/clarity/clarity_prototype2.png',
  '/images/clarity/clarity_prototype3.png',
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

function Clarity() {
  return (
    <>
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

      <main className="clarity-project">

        <div className="back-link">
          <a href="/projects">← Back to Projects</a>
        </div>

        {/* Hero */}
        <section className="project-hero">
          <p className="project-type">UX/UI DESIGN PROJECT</p>

          <h1>CLARITY</h1>

          <h2>
            A Finance Facilitator App for your <span>Teenager</span>
          </h2>

          <p className="project-description">
            AI-powered financial education app that helps teenagers build
            healthy budgeting and spending habits.
          </p>
        </section>

        <hr />

        {/* Project Information */}
        <section className="project-info">

          <div className="info-column">

            <div className="info-row">
              <span className="label">Role</span>
              <span>Product Designer Lead</span>
            </div>

            <div className="info-row">
              <span className="label">Team</span>
              <span>Ema Nova & Alanah Little</span>
            </div>

            <div className="info-row">
              <span className="label">Tools</span>
              <span>Figma, FigJam, AI</span>
            </div>

            <div className="info-row">
              <span className="label">Primary User Group</span>
              <span>
                Teenagers beginning to build healthy money habits.
              </span>
            </div>

          </div>

          <div className="objective-column">
            <h3>Project Objective</h3>

            <p>
              As young adults begin managing their own finances, many
              struggle with budgeting, tracking subscriptions, and
              building healthy financial habits.

              This project aims to design an intuitive digital experience
              that helps teenagers develop financial confidence through
              budgeting, savings, personalized insights, and AI-powered
              guidance.
            </p>
          </div>

        </section>

        {/* Main Mockup */}
        <section className="project-banner">
          <img
            src="/images/clarity/Clarity AI-Powered Personal Finance App for Teenagers.png"
            alt="Clarity Finance App Mockup"
          />
        </section>

        {/* Mission Cards */}
        <section className="project-overview">

          <div className="overview-card mission">
            <h3>Our Mission</h3>
            <p>
              To empower teenagers to develop healthy financial habits
              early by making money management simple, visual, and engaging.
            </p>
          </div>

          <div className="overview-card question">
            <h3>Main Question</h3>
            <p>
              How might we help teenagers understand and manage their
              finances without overwhelming them?
            </p>
          </div>

          <div className="overview-card problem">
            <h3>The Problem</h3>
            <p>
              Teens often struggle to understand budgeting, manage
              subscriptions, build savings habits, and create realistic
              budgets. As a result, many enter adulthood without the
              financial knowledge and confidence needed to make informed
              decisions.
            </p>
          </div>

          <div className="overview-card solution">
            <h3>The Solution</h3>
            <p>
              Clarity empowers teens to build strong financial habits
              with budgeting tools, savings goals, subscription management,
              spending insights, AI-powered guidance, and an optional
              Parent Mode for encouragement and support.
            </p>
          </div>

        </section>

        <div className="section-divider"></div>

        {/* Design Process - Milestone 1 */}
        <section className="design-process">

          <h2>Design Process</h2>

          <h3>
            Milestone 1:
            <span> Understanding User Needs & Pain Points</span>
          </h3>

          <div className="research-container">

            <div className="case-research-card">
              <h4>Primary Research</h4>

              <p>
                Conducted user interviews and usability testing with
                teenagers to understand their financial habits, challenges,
                and expectations when managing money.

                <br /><br />

                Research focused on:

                <br /><br />
                • Budgeting difficulties
                <br />
                • Spending awareness
                <br />
                • Subscription management
                <br />
                • Savings goals

                <br /><br />

                Findings showed that teens need a simple, visual, and
                approachable way to build financial confidence.
              </p>
            </div>

            <div className="case-research-card">
              <h4>Secondary Research</h4>

              <p>
                Conducted competitive analysis of existing financial
                platforms such as Mint, YNAB, and Copilot.

                <br /><br />

                Research showed many current solutions are designed for
                adults with existing financial knowledge, making them
                overwhelming for younger users.

                <br /><br />

                Key insights:

                <br /><br />
                • Simplicity improves engagement
                <br />
                • Visual feedback improves understanding
                <br />
                • Personalized guidance increases confidence
              </p>
            </div>

          </div>

          {/* Initial Sketching */}
          <div className="sketches">
            <h3>Initial Sketching</h3>

            <ImageCarousel
              images={sketchImages}
              alt="Clarity research sketch"
            />
          </div>

        </section>

        <div className="section-divider"></div>

        {/* Milestone 2 - Key Features */}
        <section className="key-features">

          <h2>Key Features</h2>

          <h3>
            Milestone 2:
            <span> Translating Flow Into Experience</span>
          </h3>

          <div className="feature-container">

            <div className="feature-card">
              <h4>Budget Tracker</h4>
              <p>
                Track spending habits, monitor monthly budgets, and help
                teenagers understand where their money goes.
              </p>
            </div>

            <div className="feature-card">
              <h4>Subscription Manager</h4>
              <p>
                Manage recurring subscriptions, receive reminders, and
                prevent unexpected spending.
              </p>
            </div>

            <div className="feature-card">
              <h4>Savings Goal Tracker</h4>
              <p>
                Create personal savings goals and visualize progress
                toward financial milestones.
              </p>
            </div>

            <div className="feature-card">
              <h4>Monthly Spending Report</h4>
              <p>
                Provide visual summaries of spending patterns to help
                teenagers make informed financial decisions.
              </p>
            </div>

            <div className="feature-card">
              <h4>Carl AI Assistant</h4>
              <p>
                Provides financial guidance, budget tips, and
                personalized recommendations.
              </p>
            </div>

            <div className="feature-card">
              <h4>Parent Mode</h4>
              <p>
                Allows parents to monitor their teenager's financial
                activity, provide guidance, and encourage healthy money
                habits.
              </p>
            </div>

          </div>

          {/* High-Fidelity Prototyping */}
          <div className="feature-sketches">

            <h3>High-Fidelity Flow & Prototyping</h3>

            <ImageCarousel
              images={featureImages}
              alt="Clarity feature design"
            />

            <div className="prototype-link">
              <p>
                Explore the complete interactive prototype and
                experience Clarity's user flow.
              </p>

              <a
                href="https://www.figma.com/proto/6HmiRxMWSF9J4kPrZX2p2F/Clarity?node-id=412-3776&p=f&t=pJzdG5B9rm1EYQ6K-1&scaling=scale-down&content-scaling=fixed&page-id=369%3A2304&starting-point-node-id=412%3A3776&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="figma-btn"
              >
                View Figma Prototype →
              </a>
            </div>

          </div>

        </section>

        <div className="section-divider"></div>

        {/* Milestone 3 */}
        <section className="key-features">

          <h2>Design Refinement</h2>

          <h3>
            Milestone 3:
            <span> Refining Experience</span>
          </h3>

          {/* Adaptive Notification System */}
          <div className="refinement-feature">

            <div className="refinement-image">
              <img
                src="/images/clarity/Bandit Algorithm Notifications.png"
                alt="Adaptive Notification Design"
              />
            </div>

            <div className="refinement-card">
              <h4>Adaptive Notification System</h4>

              <p>
                Clarity uses adaptive notification strategies inspired
                by Multi-Armed Bandit algorithms to provide more relevant
                financial reminders.

                <br /><br />

                Instead of sending constant notifications, the system
                learns user preferences and identifies the best timing
                and type of message.
              </p>
            </div>

          </div>

          {/* Visual Design */}
          <div className="visual-design-grid">

            <div className="design-item">
              <h4>Color Palette</h4>
              <img
                src="/images/clarity/Colors.png"
                alt="Clarity color palette"
              />
            </div>

            <div className="design-item">
              <h4>App Mascot</h4>
              <img
                src="/images/clarity/app_mascot.png"
                alt="Clarity app mascot"
              />
            </div>

            <div className="design-item">
              <h4>App Icon Logo</h4>
              <img
                src="/images/clarity/logo.png"
                alt="Clarity app icon"
              />
            </div>

            <div className="design-item">
              <h4>Typography</h4>
              <img
                src="/images/clarity/Typograph.png"
                alt="Clarity typography"
              />
            </div>

          </div>

        </section>

        <div className="section-divider"></div>

        {/* Conclusion */}
        <section className="final-section">

          <div className="final-card">

            <div className="conclusion-text">
              <h2>Conclusion</h2>

              <p>
                Through research and design exploration, Clarity was
                developed to address the challenges teenagers face when
                learning to manage their finances.

                <br /><br />

                The findings highlighted the importance of creating a
                financial experience that is simple, visual, and
                supportive rather than overwhelming.

                <br /><br />

                By combining budgeting tools, spending insights, savings
                goals, subscription management, and personalized guidance,
                Clarity aims to help young users build financial awareness
                and confidence.
              </p>
            </div>

            <div className="prototype-video">
              <video controls>
                <source
                  src="/images/clarity/ClarityVideo.mp4"
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

            <div className="card">
              <img
                src="/images/Bowtify1.png"
                alt="Bowtify project preview"
              />

              <div className="card-content">
                <h3>Bowtify</h3>

                <p>
                  Redesigned an AI-powered risk management platform to
                  improve explainability, usability, and user trust through
                  Human-Centered AI design principles.
                </p>

                <div className="tech-tags">
                  <span>AI</span>
                  <span>UX/UI</span>
                  <span>Figma</span>
                  <span>Research</span>
                  <span>Human-Centered AI</span>
                </div>

                <a href="/bowtify" className="project-link">
                  View Project →
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/space1.png"
                alt="Space Blog project preview"
              />

              <div className="card-content">
                <h3>Space Blog</h3>

                <p>
                  A React-based blog application honoring NASA's Artemis II
                  astronauts. Built collaboratively to create a responsive,
                  engaging experience while strengthening our skills in
                  React, authentication, and modern front-end development.
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

export default Clarity
