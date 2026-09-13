function App() {
  const skills = [
    'Web application development',
    'Mobile app development',
    'RESTful APIs',
    'Object-oriented programming',
    'Database design and optimization',
    'Version control and deployment',
  ]

  const workHistory = [
    {
      title: 'Programmer',
      company: 'Apex Solutions Limited',
      period: 'Aug 2021 - Jun 2025',
      bullets: [
        'Developed custom software solutions for clients, tailored to their business needs and operational challenges.',
        'Optimized database performance by refining existing SQL queries to improve data retrieval and processing efficiency.',
        'Collaborated with cross-functional teams to gather requirements, improve functionality, and troubleshoot software issues.',
        'Supported software maintenance and updates to ensure stable, reliable performance.',
      ],
    },
    {
      title: 'Programmer',
      company: 'Webwave (HK) Limited',
      period: 'Mar 2018 - Aug 2021',
      bullets: [
        'Reduced system errors and improved reliability through focused debugging and maintenance work.',
        'Improved user experience by redesigning software interfaces based on usability improvements and user feedback.',
        'Coordinated deployment of new features, updates, and fixes to ensure smooth rollout.',
        'Built and managed e-commerce solutions, including payment integration and product listing updates.',
      ],
    },
  ]

  const highlights = [
    '7+ years of software development experience',
    'Strong attention to detail and system reliability',
    'Experience across web, mobile, and business software solutions',
  ]

  const profileLinks = [
    { name: 'Experior Asia', url: 'https://web.archive.org/web/20210730040945/https://www.experiorasia.com/' },
    { name: '手工淘', url: 'https://handmadetao.com/education/' },
    { name: 'Point S', url: 'https://web.archive.org/web/20250613093059/https://point-s.com.hk/' },
    { name: 'Icon Optical', url: 'https://www.iconoptical.com/' },
  ]

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">YS</div>
          <div>
            <strong>Yue Yeung SIU</strong>
            <span>Programmer</span>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#links">Links</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="primary-button" href="#contact">
          Let’s connect
        </a>
      </header>

      <main className="page-content">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Programmer • Web &amp; App Developer</p>
            <h1>Building reliable software experiences for modern businesses.</h1>
            <p className="hero-text">
              I’m a programmer with experience in web applications, mobile app development,
              and backend systems. I focus on clean implementation, dependable performance,
              and practical solutions that match real-world business needs.
            </p>

            <div className="cta-group">
              <a className="primary-button" href="#contact">
                Hire Me
              </a>
              <a className="secondary-button" href="#experience">
                View Experience
              </a>
            </div>

            <ul className="stats-list">
              <li>
                <strong>7+</strong>
                <span>Years of software development</span>
              </li>
              <li>
                <strong>2</strong>
                <span>Key professional roles</span>
              </li>
              <li>
                <strong>4</strong>
                <span>Profile links featured</span>
              </li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card highlight-card">
              <p className="small-label">Current focus</p>
              <h3>Application development, database optimization, and user-centered software delivery.</h3>
            </div>

            <div className="panel-card details-card">
              <div className="detail-row">
                <span className="detail-label">Email</span>
                <a href="mailto:douglassiu009@gmail.com">douglassiu009@gmail.com</a>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone</span>
                <a href="tel:+85262717339">+852 6271 7339</a>
              </div>
              <div className="detail-row">
                <span className="detail-label">Education</span>
                <span>BSc in Computer Science</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell about-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Thoughtful developer with a practical, user-first mindset.</h2>
          </div>

          <div className="about-grid">
            <p>
              Experienced in building and maintaining web applications, delivering clean and
              scalable code, and understanding end-user behavior to translate it into practical,
              working systems. I enjoy solving real-world problems through reliable software
              design and thoughtful implementation.
            </p>

            <div className="mini-points">
              {highlights.map((item) => (
                <div key={item} className="mini-point">
                  <span className="point-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Career highlights.</h2>
          </div>

          <div className="experience-list group-list">
            {workHistory.map((role) => (
              <article key={`${role.company}-${role.period}`} className="experience-item group-item">
                <div className="experience-head">
                  <div>
                    <p className="role-label">{role.title}</p>
                    <h3>{role.company}</h3>
                  </div>
                  <span className="experience-period">{role.period}</span>
                </div>

                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technical strengths and core capabilities.</h2>
          </div>

          <div className="skills-grid group-list">
            {skills.map((skill) => (
              <div key={skill} className="skill-card group-item">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="links" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Profile links</p>
            <h2>Selected projects and company profiles.</h2>
          </div>

          <div className="links-grid group-list">
            {profileLinks.map(({ name, url }) => (
              <a key={name} className="link-card group-item" href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-shell">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something dependable and useful.</h2>
          </div>

          <div className="contact-actions">
            <a className="primary-button" href="mailto:douglassiu009@gmail.com">
              douglassiu009@gmail.com
            </a>
            <a className="secondary-button" href="tel:+85262717339">
              +852 6271 7339
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
