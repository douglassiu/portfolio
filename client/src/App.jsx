function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Web & App Programmer</p>
          <h1>Hi, I’m Douglas — building polished web and mobile experiences.</h1>
          <p>
            I design modern React applications, APIs with Node.js, and cross-platform mobile
            interfaces with performance and usability in mind.
          </p>
          <a className="button" href="#contact">
            Let’s build together
          </a>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <h2>Featured Skills</h2>
            <ul>
              <li>React / Vite</li>
              <li>Node.js / Express</li>
              <li>API design</li>
              <li>Responsive UI</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="section about" id="about">
        <div>
          <h2>About Me</h2>
          <p>
            I’m a full-stack programmer focused on web and app development. I create clean,
            user-friendly interfaces and reliable backend services that scale.
          </p>
        </div>
      </section>

      <section className="section projects" id="projects">
        <h2>Recent Projects</h2>
        <div className="project-grid">
          <article>
            <h3>Portfolio Website</h3>
            <p>A custom React/Vite portfolio with animated transitions and contact integration.</p>
          </article>
          <article>
            <h3>Task Manager API</h3>
            <p>REST API built with Node.js and Express, supporting authentication and data sync.</p>
          </article>
          <article>
            <h3>Mobile UI Prototype</h3>
            <p>Interactive mobile app interface designed for iOS and Android using modern UX patterns.</p>
          </article>
        </div>
      </section>

      <section className="section skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Frontend</h3>
            <p>React, JSX, CSS, responsive design, animation, performance tuning</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs, authentication, data modeling</p>
          </div>
          <div>
            <h3>Tools</h3>
            <p>Vite, Git, GitHub, npm, testing, deployment workflows</p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <h2>Contact</h2>
          <p>
            Ready to launch your next project or improve an existing app? Reach out to start a
            conversation.
          </p>
          <a className="button button-outline" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
