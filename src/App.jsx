import { useEffect, useState } from 'react'
import {
  ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, CalendarDays, Check,
  Code2, Database, GraduationCap, Layers3, Mail, MapPin, Menu, Monitor,
  Phone, Send, Server, Target, Users, Wrench, X, Github, Linkedin,
} from 'lucide-react'
import { education, profile, projects, skills } from './data/portfolio'

const iconMap = { code: Code2, monitor: Monitor, server: Server, database: Database, wrench: Wrench, layers: Layers3 }
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

function SectionTitle({ children, accent }) {
  return <div className="section-title"><h2>{children} <span>{accent}</span></h2><i /></div>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1))
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <header className="header">
    <a className="brand" href="#home" onClick={closeMenu}>LG<span>.</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
      {navItems.map((item) => <a key={item} className={active === item ? 'nav-link active' : 'nav-link'} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
    </nav>
    <a className="button button-primary resume-button" href={`${import.meta.env.BASE_URL}resume.pdf`} download><ArrowDownToLine size={18} /> Download Resume</a>
  </header>
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="eyebrow">FULL-STACK SOFTWARE DEVELOPER <span /></div>
      <h1>Hi, I’m<br /><strong>Leela Gowtham Guntreddi</strong></h1>
      <h3>{profile.role}</h3>
      <p>{profile.summary}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View My Work</a>
        <a className="button button-outline" href="#contact"><Send size={18} /> Send Message</a>
      </div>
      <div className="social-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
      </div>
    </div>
    <div className="hero-visual"><div className="portrait-backdrop" /><div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Leela Gowtham Guntreddi" /></div><div className="spark spark-one">///</div><div className="dot-grid" /></div>
  </section>
}

function Stats() {
  const stats = [
    { icon: Code2, value: '5+', label: 'Projects' },
    { icon: Layers3, value: '10+', label: 'Technologies' },
    { icon: GraduationCap, value: '8.27 / 10', label: 'CGPA' },
    { icon: CalendarDays, value: '2027', label: 'Graduation' },
  ]
  return <div className="stats section-shell">{stats.map(({ icon: Icon, value, label }) => <div className="stat" key={label}><Icon /><div><b>{value}</b><span>{label}</span></div></div>)}</div>
}

function About() {
  return <section className="section-shell section-block" id="about">
    <SectionTitle accent="Me">About</SectionTitle>
    <div className="about-grid">
      <div className="about-text"><p>I’m a B.Tech Computer Science & Engineering student at Vellore Institute of Technology with a passion for full-stack web development. I enjoy building responsive and scalable applications, solving real-world problems, and working with modern web technologies.</p><p>I am always eager to learn, collaborate, and contribute to impactful projects while continuously improving my skills in software development.</p></div>
      <div className="about-facts">
        <div className="fact"><GraduationCap /><div><b>Education</b><span>B.Tech in CSE, VIT-AP University</span></div><em>CGPA: 8.27</em></div>
        <div className="fact"><MapPin /><div><b>Location</b><span>{profile.location}</span></div></div>
        <div className="fact"><Target /><div><b>Interests</b><span>Web Development, Problem Solving, OOP, DSA</span></div></div>
      </div>
    </div>
  </section>
}

function Skills() {
  return <section className="section-shell section-block" id="skills">
    <SectionTitle accent="Skills">Technical</SectionTitle>
    <div className="skills-grid">{skills.map((group) => { const Icon = iconMap[group.icon]; return <article className="skill-card" key={group.title}><div className="skill-heading"><Icon /><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div>
  </section>
}

function Projects() {
  return <section className="section-shell section-block" id="projects">
    <SectionTitle accent="">Projects</SectionTitle>
    <p className="section-intro">A selection of projects from my GitHub repositories.</p>
    <div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}>
      <a className="project-image" href={project.demo} target="_blank" rel="noreferrer"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} screenshot`} loading="lazy" /></a>
      <div className="project-content"><div className="project-heading"><h3>{project.title}</h3><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><ArrowUpRight size={18} /></a></div>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{project.description}</p>
        <div className="project-actions"><a className="button button-small button-primary" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a><a className="button button-small button-light" href={project.repo} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div>
      </div>
    </article>)}</div>
  </section>
}

function Education() {
  return <section className="section-shell section-block" id="education">
    <SectionTitle accent="">Education</SectionTitle>
    <div className="education-card"><div className="timeline">{education.map((item) => <article className="education-item" key={item.school}><div className="timeline-dot" /><div className="education-main"><h3>{item.school}</h3><p>{item.course}</p><span>{item.score}</span></div><em>{item.period}</em></article>)}</div></div>
  </section>
}

function Activities() {
  return <section className="section-shell section-block activities-block">
    <SectionTitle accent="Activities">Co-Curricular</SectionTitle>
    <div className="activity-card"><Users /><p>Volunteered at the Technical Fest at Vellore Institute of Technology, coordinating registrations and event logistics.</p></div>
    <div className="activity-card"><Code2 /><p>Actively participated in campus coding challenges, technical symposia and recreational games, building teamwork and fast problem-solving under constraints.</p></div>
  </section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <section className="section-shell section-block contact-section" id="contact">
    <SectionTitle accent="Me">Contact</SectionTitle>
    <div className="contact-grid"><div className="contact-details">
      <a href={`mailto:${profile.email}`}><Mail /><span>{profile.email}</span></a>
      <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone /><span>{profile.phone}</span></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span>linkedin.com/in/leela-gowtham-guntreddi-84977035b</span></a>
      <a href={profile.github} target="_blank" rel="noreferrer"><Github /><span>github.com/Gowtham04062006</span></a>
      <div className="contact-location"><MapPin /><span>{profile.location}</span></div>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><input name="name" placeholder="Your Name" value={form.name} onChange={update} required /><input name="email" type="email" placeholder="Your Email" value={form.email} onChange={update} required /></div>
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={update} required rows="5" />
      <button className="button button-primary submit-button" type="submit"><Send size={17} /> Send Message</button>
      {sent && <span className="form-note"><Check size={15} /> Your email app should open with the message ready to send.</span>}
    </form></div>
  </section>
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#home">LG<span>.</span></a><p>© {new Date().getFullYear()} Leela Gowtham Guntreddi. All rights reserved.</p><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><Stats /><About /><Skills /><Projects /><div className="lower-grid"><Education /><Activities /></div><Contact /></main><Footer /></>
}
