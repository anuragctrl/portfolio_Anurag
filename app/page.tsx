'use client'

import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight, Bot, Braces, Check, ChevronDown, ChevronRight, Code2, Database,
  Download, ExternalLink, GitFork, Camera, Mail, Menu, MessageCircle,
  Network, Phone, Play, Send, Sparkles, Terminal, UserRound, X, Zap,
} from 'lucide-react'

const portrait = '/profile.jpg'
const navItems = ['About', 'Skills', 'Education', 'Projects', 'AI & Automation', 'Contact']
const skills: { name: string; text: string; icon: LucideIcon }[] = [
  { name: 'C / C++', text: 'Building strong programming fundamentals.', icon: Code2 },
  { name: 'Python', text: 'The language behind my AI experiments.', icon: Terminal },
  { name: 'Java', text: 'Object-oriented thinking and application logic.', icon: Braces },
  { name: 'HTML / CSS', text: 'Interfaces that feel clear and intentional.', icon: Code2 },
  { name: 'JavaScript', text: 'Interactive experiences for the web.', icon: Zap },
  { name: 'SQL / DBMS', text: 'Organizing data into useful systems.', icon: Database },
  { name: 'AI / ML', text: 'Exploring practical intelligence in software.', icon: Bot },
  { name: 'n8n / Automation', text: 'Connecting tools into smart workflows.', icon: Network },
  { name: 'Git / GitHub', text: 'Learning in public and shipping often.', icon: GitFork },
]
const projects = [
  { number: '01', title: 'AI Inventory Management System', text: 'A practical inventory management system designed to manage products, stock information and business operations efficiently, with an AI-powered conversational interface.', tags: ['AI', 'n8n', 'Database', 'Automation'], demo: 'https://anuragctrl.app.n8n.cloud/webhook/80f73fab-29c6-4705-997d-24bdb091d9c0/chat' },
  { number: '02', title: 'AI Gmail Responder System', text: 'An AI-powered email automation system that analyzes incoming emails and generates intelligent responses using an automated workflow.', tags: ['AI', 'Gmail', 'n8n', 'Automation'] },
  { number: '03', title: 'AI Document Analysis System', text: 'An AI-powered document analysis system that processes documents, understands their content and provides useful answers and insights.', tags: ['AI', 'Documents', 'Python', 'APIs'] },
  { number: '04', title: 'Desktop Assistant', text: 'An intelligent desktop assistant designed to interact with users and perform useful tasks using Python, AI and automation.', tags: ['Python', 'AI', 'Automation'] },
  { number: '05', title: 'Quiz Web Application', text: 'An interactive quiz web application designed to provide an engaging question-and-answer experience using a clean and responsive interface.', tags: ['HTML', 'CSS', 'JavaScript'] },
]
const socials = [
  { label: 'GitHub', href: 'https://github.com/anuragctrl', icon: GitFork },
  { label: 'Instagram', href: 'https://www.instagram.com/anurag.ctrl?stkn=YWh0MGg0NjE2anVo', icon: Camera },
  { label: 'Email', href: 'mailto:anurag2512muz@gmail.com', icon: Mail },
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add('is-visible'); observer.disconnect() } }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function Tilt({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  function move(event: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return
    const rect = node.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -7
    node.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-3px)`
  }
  function leave() { if (ref.current) ref.current.style.transform = '' }
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`}>{children}</div>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const dot = document.querySelector<HTMLElement>('.cursor-dot')
    const ring = document.querySelector<HTMLElement>('.cursor-ring')
    const onPointerMove = (event: PointerEvent) => {
      if (dot) { dot.style.left = `${event.clientX - 2}px`; dot.style.top = `${event.clientY - 2}px` }
      if (ring) { ring.style.left = `${event.clientX}px`; ring.style.top = `${event.clientY}px` }
    }
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('pointermove', onPointerMove, { passive: true }); onScroll()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onPointerMove) }
  }, [])
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setFormError(''); setSent(false)
    const form = event.currentTarget
    if (!form.checkValidity()) { setFormError('Please complete all fields with a valid email.'); return }
    setSent(true); form.reset()
  }
  function closeMenu() { setMenuOpen(false) }
  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" /><div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" /><div className="cursor-ring" aria-hidden="true" />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu}><span>AK</span><small>ANURAG KUMAR</small></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>{navItems.map(item => <a key={item} href={`#${item.toLowerCase().replaceAll(' & ', '-')}`} onClick={closeMenu}>{item}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a></div>
      </nav>

      <section id="home" className="hero page-section">
        <div className="hero-copy"><div className="status-pill"><span className="status-dot" /> Open to learning, building &amp; opportunities</div><p className="eyebrow hero-eyebrow">HELLO, I&apos;M</p><h1>Anurag<br /><span>Kumar</span></h1><p className="hero-role">Full-Stack Developer <i>·</i> AI Developer <i>·</i> Computer Application Student</p><p className="hero-description">I build modern web applications, AI-powered systems and practical automation solutions that turn ideas into useful digital experiences.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <ChevronRight size={17} /></a><a className="button button-ghost" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a><a className="cv-link" href="/assets/resume.pdf" download>Download CV <Download size={15} /></a></div><div className="social-row">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noreferrer"><Icon size={17} /> {label}</a>)}</div></div>
        <div className="hero-visual"><div className="wire-sphere" aria-hidden="true" /><div className="hero-image-wrap"><div className="image-ring" /><img src={portrait} alt="Anurag Kumar - Full-Stack and AI Developer" /><div className="image-caption"><span>01</span><span>BUILDING WITH<br /><strong>INTENTION</strong></span></div></div><div className="tech-badge badge-ai">AI</div><div className="tech-badge badge-python">Python</div><div className="tech-badge badge-js">JS</div><div className="tech-badge badge-n8n">n8n</div><div className="scroll-note"><span /> Scroll to explore</div></div>
      </section>

      <section id="about" className="page-section section-block"><Reveal><SectionHeading eyebrow="ABOUT ME" title="Turning ideas into digital solutions." /></Reveal><div className="about-grid"><Reveal className="about-copy"><p className="lead">I am Anurag Kumar, a Computer Application student and aspiring Full-Stack &amp; AI Developer. I enjoy learning new technologies and transforming ideas into practical applications.</p><p>I am particularly interested in Full-Stack Development, Artificial Intelligence, Automation, Web Applications, Database Systems and Software Engineering. I like the process of taking a rough idea, understanding the problem behind it, and building something genuinely useful.</p><a className="text-link" href="#contact">Let&apos;s make something useful <ArrowUpRight size={16} /></a></Reveal><Reveal><Tilt className="profile-card glass-card"><div className="card-index">PROFILE / 2026</div><div className="profile-card-top"><div className="mini-avatar"><img src={portrait} alt="" /></div><div><h3>Anurag Kumar</h3><p>Full-Stack Developer / AI Developer</p></div></div><div className="profile-details"><div><span>Education</span><strong>Bachelor&apos;s in Computer Application</strong></div><div><span>Current semester</span><strong>5th Semester</strong></div><div><span>Based in</span><strong>Muzaffarpur, Bihar, India</strong></div></div><div className="card-footer"><span>anuragctrl</span><span className="availability"><i /> learning &amp; building</span></div></Tilt></Reveal></div></section>

      <section id="skills" className="page-section section-block"><Reveal><SectionHeading eyebrow="TECHNOLOGIES" title="Skills & tools." copy="A growing toolkit shaped by curiosity, coursework and a lot of hands-on building." /></Reveal><div className="skills-grid">{skills.map(({ name, text, icon: Icon }, index) => <Reveal key={name} className="skill-reveal"><Tilt className="skill-card glass-card"><div className="skill-top"><span className="skill-number">0{index + 1}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{name}</h3><p>{text}</p><ChevronRight className="skill-arrow" size={17} /></Tilt></Reveal>)}</div></section>

      <section id="education" className="page-section section-block"><Reveal><SectionHeading eyebrow="EDUCATION" title="My academic journey." /></Reveal><div className="timeline"><div className="timeline-line" />{[{ n: '01', title: 'Matriculation', details: ['Board · BSEB Patna', 'Score · 84%'] }, { n: '02', title: 'Intermediate in Science', details: ['Stream · PCMB', 'Score · 77.4%'] }, { n: '03', title: "Bachelor's in Computer Application", details: ['College · RDS College, Muzaffarpur', 'Status · Currently pursuing', 'Current semester · 5th Semester'] }].map((item, i) => <Reveal key={item.n} className="timeline-item"><div className="timeline-node">{item.n}</div><div className="timeline-card glass-card"><span className="timeline-label">{i === 2 ? 'CURRENTLY PURSUING' : 'COMPLETED'}</span><h3>{item.title}</h3>{item.details.map(detail => <p key={detail}>{detail}</p>)}</div></Reveal>)}</div></section>

      <section id="projects" className="page-section section-block"><Reveal><SectionHeading eyebrow="SELECTED WORK" title="Things I&apos;ve built." copy="A few practical experiments at the intersection of software, intelligence and automation." /></Reveal><div className="projects-list">{projects.map(project => <Reveal key={project.number}><Tilt className="project-card glass-card"><div className="project-number">{project.number}</div><div className="project-content"><div className="project-heading"><h3>{project.title}</h3><ArrowUpRight size={20} /></div><p>{project.text}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="#contact">GitHub <ExternalLink size={14} /></a>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Play size={13} fill="currentColor" /></a> : <a href="#contact">Live demo <Play size={13} fill="currentColor" /></a>}</div></div></Tilt></Reveal>)}<Reveal><div className="more-projects"><span>06</span><div><h3>More projects</h3><p>More experiments, applications and AI-powered projects are continuously being built.</p></div><a href="https://github.com/anuragctrl" target="_blank" rel="noreferrer" aria-label="View more projects"><ArrowUpRight /></a></div></Reveal></div></section>

      <section id="ai-automation" className="page-section section-block ai-section"><Reveal><SectionHeading eyebrow="AI & AUTOMATION" title="Building with AI." copy="I enjoy exploring how AI and automation can turn repetitive tasks into intelligent workflows and useful applications." /></Reveal><div className="ai-grid">{[{ n: '01', icon: Bot, title: 'AI applications', text: 'Build intelligent applications that interact with users, documents and data.' }, { n: '02', icon: Sparkles, title: 'Document intelligence', text: 'Explore AI-powered document processing, analysis and question-answering systems.' }, { n: '03', icon: Network, title: 'Workflow automation', text: 'Build automated workflows using n8n, APIs, AI services and external applications.' }].map(({ n, icon: Icon, title, text }) => <Reveal key={n}><Tilt className="ai-card glass-card"><span className="ai-number">{n}</span><Icon className="ai-icon" size={31} strokeWidth={1.2} /><h3>{title}</h3><p>{text}</p><span className="ai-line" /></Tilt></Reveal>)}</div></section>

      <section className="page-section learning-section"><Reveal><div className="learning-inner glass-card"><div><span className="eyebrow">LEARNING &amp; BUILDING</span><h2>Still learning.<br /><em>Always building.</em></h2></div><div className="learning-copy"><p>Continuously learning through academic study, personal projects, AI experiments, web development and automation workflows.</p><div className="focus-list">{['Programming', 'AI', 'Full-Stack Development', 'Automation', 'Databases', 'Software Engineering'].map(item => <span key={item}><Check size={13} />{item}</span>)}</div></div></div></Reveal></section>

      <section className="page-section social-section"><Reveal><div className="social-panel"><div><span className="eyebrow">FIND ME ONLINE</span><h2>Let&apos;s stay connected.</h2></div><div className="social-cards"><a href="https://github.com/anuragctrl" target="_blank" rel="noreferrer" className="social-card"><GitFork /><span><small>GITHUB</small><strong>@anuragctrl</strong></span><ArrowUpRight /></a><a href="https://www.instagram.com/anurag.ctrl?stkn=YWh0MGg0NjE2anVo" target="_blank" rel="noreferrer" className="social-card"><Camera /><span><small>INSTAGRAM</small><strong>@anurag.ctrl</strong></span><ArrowUpRight /></a></div></div></Reveal></section>

      <section id="contact" className="page-section section-block contact-section"><Reveal><SectionHeading eyebrow="GET IN TOUCH" title="Let&apos;s build something great." copy="Have an idea, project, collaboration or opportunity? I&apos;d be happy to connect." /></Reveal><div className="contact-grid"><Reveal className="contact-details"><a href="mailto:anurag2512muz@gmail.com"><Mail /><span><small>PRIMARY EMAIL</small><strong>anurag2512muz@gmail.com</strong></span><ArrowUpRight /></a><a href="mailto:anurag844127muz@gmail.com"><Mail /><span><small>ALTERNATE EMAIL</small><strong>anurag844127muz@gmail.com</strong></span><ArrowUpRight /></a><a href="tel:6203635570"><Phone /><span><small>PHONE</small><strong>+91 62036 35570</strong></span><ArrowUpRight /></a><a href="https://github.com/anuragctrl" target="_blank" rel="noreferrer"><GitFork /><span><small>GITHUB</small><strong>@anuragctrl</strong></span><ArrowUpRight /></a></Reveal><Reveal><form className="contact-form glass-card" onSubmit={submit} noValidate><div className="form-head"><span>DROP A NOTE</span><MessageCircle size={18} /></div><label htmlFor="name">Name<input id="name" name="name" required placeholder="Your name" /></label><label htmlFor="email">Email<input id="email" name="email" type="email" required placeholder="you@example.com" /></label><label htmlFor="message">Message<textarea id="message" name="message" required minLength={10} placeholder="Tell me a little about your idea..." /></label>{formError && <p className="form-message error">{formError}</p>}{sent && <p className="form-message success">Thanks — your note is ready. Connect a form backend to receive submissions.</p>}<button className="button button-primary" type="submit">Send message <Send size={15} /></button><p className="form-note">Frontend only for now · ready for Formspree, EmailJS or Netlify Forms</p></form></Reveal></div></section>

      <footer><div className="footer-brand"><span>AK</span><p>© 2026 Anurag Kumar. All rights reserved.</p></div><p>Full-Stack Developer <i>·</i> AI Developer <i>·</i> Computer Application Student</p><div className="footer-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}</div></footer>
    </main>
  )
}
