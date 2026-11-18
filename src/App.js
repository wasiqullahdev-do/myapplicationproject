import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copied, setCopied] = useState(false);

  const emailAddress = 'wasiqullah.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const skills = [
    {
      category: 'AI & Python Backend',
      tag: 'Core Intelligence',
      items: ['Python 3', 'Artificial Intelligence & ML', 'Django Framework', 'RESTful API Architecture']
    },
    {
      category: 'Full-Stack Web',
      tag: 'Modern Web',
      items: ['React.js (Hooks & State)', 'JavaScript (ES6+)', 'Java Spring Boot', 'Responsive UI/UX']
    },
    {
      category: 'Mobile Engineering',
      tag: 'Cross-Platform',
      items: ['React Native', 'iOS & Android Interfaces', 'Native API Integration', 'App Performance']
    },
    {
      category: 'Leadership & Mindset',
      tag: 'Human Skills',
      items: ['Clear Technical Communication', 'Team Collaboration', 'Avid Reader', 'Analytical Problem Solving']
    }
  ];

  const projects = [
    {
      title: 'Enterprise Bank Management System',
      category: 'web',
      description: 'A secure, full-scale banking system featuring account management, real-time financial transactions, loan processing, and role-based security.',
      tech: ['Java Spring Boot', 'Python / Django', 'React', 'SQL Database'],
      link: 'https://github.com'
    },
    {
      title: 'AI-Driven Analytics Engine',
      category: 'ai',
      description: 'An intelligent platform built with Python and Django that processes raw datasets and generates automated predictive insights.',
      tech: ['Python', 'AI / ML', 'Django', 'React'],
      link: 'https://github.com'
    },
    {
      title: 'Enterprise Mobile Storefront',
      category: 'mobile',
      description: 'A fast, cross-platform mobile commerce app built with React Native and backed by a secure Java Spring Boot API.',
      tech: ['React Native', 'Java Spring Boot', 'REST API'],
      link: 'https://github.com'
    }
  ];

  const books = [
    { title: 'Clean Code', author: 'Robert C. Martin', note: 'Writing maintainable, human-readable software.' },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', note: 'Architecting reliable and scalable backend systems.' },
    { title: 'How to Win Friends & Influence People', author: 'Dale Carnegie', note: 'Mastering empathy, teamwork, and clear communication.' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#top" className="brand">
            Wasiqullah<span className="dot">.dev</span>
          </a>
          <div className="nav-menu">
            <a href="#skills">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#mindset">Mindset & Books</a>
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="top" className="hero">
        <div className="badge">Full-Stack • Mobile • AI Engineer</div>
        <h1>
          Building <span className="gradient-text">Intelligent Systems</span><br />
          for Web & Mobile.
        </h1>
        <p className="lead">
          Hi, I'm <strong>Wasiqullah</strong>. I engineer scalable applications using{' '}
          <span>Python (Django & AI)</span>, <span>React & React Native</span>, and{' '}
          <span>Java Spring Boot</span>—bridging deep technical execution with strong human communication.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Featured Work</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub Profile ↗
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-head">
          <h2>Technical & Core Expertise</h2>
          <p>A multi-disciplinary stack designed to take ideas from concept to production.</p>
        </div>
        <div className="grid-4">
          {skills.map((group, idx) => (
            <div key={idx} className="card skill-card">
              <span className="card-tag">{group.tag}</span>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill, i) => (
                  <li key={i}>
                    <span className="bullet">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-head flex-between">
          <div>
            <h2>Featured Projects</h2>
            <p>Selected architectures across Banking Systems, Artificial Intelligence, Web, and Mobile.</p>
          </div>
          <div className="filter-group">
            {['all', 'ai', 'web', 'mobile'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="card project-card">
              <div>
                <div className="project-top">
                  <h3>{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noreferrer" title="View Source">
                    ↗
                  </a>
                </div>
                <p>{proj.description}</p>
              </div>
              <div className="tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Code: Communication & Books */}
      <section id="mindset" className="section">
        <div className="mindset-banner">
          <div className="mindset-info">
            <span className="card-tag">Beyond Engineering</span>
            <h2>Communication & Continuous Reading</h2>
            <p>
              Great software is never built in isolation. My dedication to reading books on software architecture, psychology, and leadership allows me to translate complex technical concepts into clear business value and collaborate effortlessly with teams.
            </p>
          </div>
          <div className="reading-shelf">
            <h4>📚 Books That Shape My Thinking</h4>
            {books.map((book, idx) => (
              <div key={idx} className="book-row">
                <div className="book-title">
                  <strong>{book.title}</strong> — <span>{book.author}</span>
                </div>
                <small>{book.note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="footer">
        <h2>Ready to Collaborate?</h2>
        <p>Open to software engineering roles, full-stack consulting, and AI projects.</p>
        <div className="contact-actions">
          <button onClick={handleCopyEmail} className="btn btn-primary">
            {copied ? '✓ Email Copied!' : `Copy Email (${emailAddress})`}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub (@wasiqullahdev-do)
          </a>
        </div>
        <div className="footer-bottom">
          © 2026 Wasiqullah • Built with React.js
        </div>
      </footer>
    </div>
  );
}

export default App;
