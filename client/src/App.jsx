import { useEffect, useRef, useState } from 'react'

import bchcImage from './assets/project-images/bchc.png'
import cafeDecoGroupImage from './assets/project-images/cafedecogroup.png'
import experiorAsiaImage from './assets/project-images/experiorasia.png'
import handmadetaoImage from './assets/project-images/handmadetao.png'
import iconOpticalImage from './assets/project-images/iconoptical.png'
import petsheavenImage from './assets/project-images/petsheaven.png'
import plgroupImage from './assets/project-images/plgroup.jpeg'
import resumePdf from './assets/resume/Resume_SIU_Yue_Yeung.pdf'
import pointSImage from './assets/project-images/points.png'
import roccoImage from './assets/project-images/rocco.png'
import rvgToursImage from './assets/project-images/rvgtours.png'
import shampooImage from './assets/project-images/shampoo.png'
import shampooPosDemo from './assets/project-materials/shampoo_pos_demo.mp4'
import stfImage from './assets/project-images/stf.png'

function App() {
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
      tags: ['Python', 'Flutter', 'ASP.NET', 'MSSQL', 'Doctrine', 'AWS', 'Firebase'],
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
      tags: ['PHP', 'Ionic', 'GIT', 'jQuery', 'Alibaba Cloud', 'MySQL', 'JavaScript', 'CSS', 'Apache', 'Payment Gateway Integration'],
    },
  ]

  const highlights = [
    'Full Stack',
    'Mobile App',
    'eCommerce',
    'REST Apis',
  ]

  const projects = [
    {
      year: '2023',
      name: '寵之天國',
      url: 'https://www.petsheaven.com.hk/',
      description: 'ERP to manage pet cremation services, including order management, delivery recording and inventory of souvenir collection. Websocket is built to provide runtime cremation scheduling. With the aim of continuous delivery, Doctrine and jQuery is helpful but challenging to optimise the performance of the system.',
      tags: ['Doctrine', 'ERP'],
      image: petsheavenImage,
    },
    {
      year: '2023',
      name: 'RVG Tours',
      url: 'https://www.rvgtours.com.au/',
      description: 'Travel booking website for customers to discover tours and complete reservations through a Flutter-powered mobile app or web interface connected with WooCommerce REST API.',
      tags: ['Flutter', 'Travel booking', 'WooCommerce'],
      image: rvgToursImage,
    },
    {
      year: '2022',
      name: 'Cafe Deco Group',
      url: 'https://www.cafedecogroup.com/',
      description: 'Support multi-brand Eats365 POS order migration and build a loyalty program based on customer activity. Mobile app serves table booking and loyalty program. The Django powered CMS also provide some maintenance and improvement tasks.',
      tags: ['Django', 'Flutter','Loyalty program', 'Eats365 integration'],
      image: cafeDecoGroupImage,
      align: 'center',
    },
    {
      year: '2022',
      name: 'Smart Traffic Fund',
      url: 'https://stf.hkpc.org/',
      description: 'Infomative website which provides funding support. It fulfils the government standard of accessibility and is built with a focus on up-to-date security.',
      tags: ['Goverment Standard'],
      image: stfImage,
      align: 'center',
    },
    {
      year: '2021',
      name: '手工淘',
      url: 'https://handmadetao.com/education/',
      description: 'A handmade skincare product e-commerce platform which also provides related courses. Vendor could list their approved own products and promote their own brand.',
      tags: ['E-commerce', 'Vendor platform'],
      image: handmadetaoImage,
    },
    {
      year: '2021',
      name: 'Point S',
      url: 'https://web.archive.org/web/20250613093059/https://point-s.com.hk/',
      description: 'Tyre retail website enabling product discovery, configurable selections, and external tire data integration for a more complete shopping experience. Using cache to reduce API usage.',
      tags: ['E-commerce', 'Product customization', 'Tire API integration'],
      image: pointSImage,
    },
    {
      year: '2020',
      name: 'Shampoo.hk',
      url: shampooPosDemo,
      description: 'Retail POS and ERP for a local beauty brand, apply multiple crm and business logic powered by ajax to minimize page reloads and provide a smooth user experience.',
      tags: ['POS', 'ERP', 'jQuery'],
      image: shampooImage,
    },
    {
      year: '2019',
      name: '樂思．躍思PP家長會',
      url: 'https://web.archive.org/web/20210724002317/https://ppparentsclub.plgroup.hk/',
      description: 'Learning management system (LMS) for a parent-teacher association, built to support online course management, delivery, and progress tracking. The system is integrated with iSpring to support massive learning materials.',
      tags: ['LMS', 'ISpring integration'],
      image: plgroupImage,
    },
    {
      year: '2018',
      name: 'Icon Optical',
      url: 'https://www.iconoptical.com/',
      description: 'Optical retail website built to present products, support customization options, and provide multiple little tools to support daily business workflows.',
      tags: ['E-commerce', 'Product customization', 'POS'],
      image: iconOpticalImage,
    },
    {
      year: '2018',
      name: '寶崇行',
      url: 'https://www.bchc.com.hk/',
      description: 'Corporate website refresh focused on improving responsiveness, modernizing (2018) the visual experience, and strengthening the company’s online brand presence.',
      tags: ['Responsive', 'Revamp', 'UI'],
      image: bchcImage,
    },
    {
      year: '2018',
      name: 'Rocco',
      url: 'https://www.rocco.hk/',
      description: 'Brand website revamp centered on a cleaner responsive layout and improved presentation for a results-oriented audience.',
      tags: ['Responsive', 'Revamp', 'UI'],
      image: roccoImage,
      align: 'right',
    },
    {
      year: '2018',
      name: 'Experior Asia',
      url: 'https://web.archive.org/web/20210730040945/https://www.experiorasia.com/',
      description: 'Recruitment and corporate branding website created to showcase career opportunities and present the company’s expertise through a polished, responsive interface.',
      tags: ['Recruitment', 'UI'],
      image: experiorAsiaImage,
      align: 'right',
    },
  ]

  const uniqueYears = projects.reduce((result, { year }, index) => {
    if (!result.some((entry) => entry.year === year)) {
      result.push({ year, firstIndex: index })
    }

    return result
  }, [])

  const projectRefs = useRef([])
  const [activeYear, setActiveYear] = useState(projects[0]?.year ?? '')

  useEffect(() => {
    const updateActiveYear = () => {
      const scrollThreshold = window.innerHeight * 0.45
      let matchedYear = projects[0]?.year ?? ''

      for (let index = 0; index < projects.length; index += 1) {
        const node = projectRefs.current[index]
        if (!node) continue

        const rect = node.getBoundingClientRect()
        if (rect.top <= scrollThreshold) {
          matchedYear = projects[index].year
        }
      }

      setActiveYear(matchedYear)
    }

    updateActiveYear()
    window.addEventListener('scroll', updateActiveYear, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveYear)
    }
  }, [projects])

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <a className="brand" href="#hero">
          <div className="brand-mark">YS</div>
          <div>
            <strong>Yue Yeung SIU</strong>
            <span>Programmer</span>
          </div>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="primary-button" href="#contact">
          Let’s connect
        </a>
      </header>

      <main className="page-content">
        <section id="hero" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Programmer • Web &amp; App Developer</p>
            <h1>Building reliable software experiences for modern businesses.</h1>
            <p className="hero-text">
              I’m a programmer with experience in web applications, mobile app development,
              and backend systems. I focus on clean implementation, dependable performance,
              and practical solutions that match real-world business needs.
            </p>

            <div className="cta-group">
              {highlights.map((item) => (
                <span key={item} className="secondary-button">
                  {item}
                </span>
              ))}
              <a className="primary-button" href="#contact">
                Hire Me
              </a>
            </div>

            <ul className="stats-list">
              <li>
                <strong>7+</strong>
                <span>Years of software development</span>
              </li>
              <li>
                <strong>{projects.length}</strong>
                <span>Selected Projects</span>
              </li>
              <li>
                <strong>{workHistory.length}</strong>
                <span>Key professional roles</span>
              </li>
            </ul>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="paper-stack">
              <div className="paper paper-back">
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
              </div>
              <div className="paper paper-mid">
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
              </div>
              <div className="paper paper-front">
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
                <span className="paper-line" />
              </div>
              <div className="ink-pen" />
            </div>
          </div>
        </section>

        <section id="projects" className="projects-layout">
          <aside className="projects-sidebar section-shell">
            <div className="section-heading">
              <h2>Selected Works</h2>
            </div>

            <ul className="projects-years">
              {uniqueYears.map(({ year, firstIndex }) => (
                <li key={year} className={activeYear === year ? 'is-active' : ''}>
                  <a href={`#project-${year}-${firstIndex}`}>{year}</a>
                  {activeYear === year && (
                    <svg className="projects-year-tick" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M2.5 8.5L5.5 11.5L13.5 3.5" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div className="projects-list group-list">
            {projects.map(({ name, url, year, description, tags, image, align }, index) => {
              const projectImage = image

              return (
                <a
                  key={name}
                  id={`project-${year}-${index}`}
                  ref={(element) => {
                    projectRefs.current[index] = element
                  }}
                  className={`project-item group-item ${activeYear === year ? 'is-current' : ''}`}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {projectImage ? (
                    <img className={`project-image ${align || 'center'}`} src={projectImage} alt={`${name} project preview`} />
                  ) : (
                    <div className="project-image" aria-hidden="true" />
                  )}

                  <div className="project-content">
                  <div className="project-group">
                    <h3 className="project-name">
                      <span>{name}</span>
                      <svg className="external-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 4h6v6M20 4l-8 8M6 8v12h12" />
                      </svg>
                    </h3>
                  </div>

                  <div className="project-group">
                    <p>{description}</p>
                  </div>

                  <div className="project-group">
                    <div className="project-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              )
            })}
          </div>
        </section>

        <section id="experience">
          <div className="section-heading">
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

                <div className="experience-tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a href={resumePdf} className="resume-link" target="_blank" rel="noreferrer">
            <span>View Full Resume</span>
            <svg className="external-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 4h6v6M20 4l-8 8M6 8v12h12" />
            </svg>
          </a>
        </section>

        <section id="about" className="section-shell about-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Me</h2>
          </div>

          <div className="about-grid">
            <h1>Never trust person on the internet, contact and find out more about me.</h1>
            <div className="about-arrow"></div>
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
