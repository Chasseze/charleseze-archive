/* Section content components — shared by both layout shells. */

function Placeholder({ label, className }) {
  const words = String(label || "").split(" ");
  const code = (words[0] || "CE").slice(0, 2).toUpperCase();
  return (
    <div className={"ph " + (className || "")}>
      <div className="ph-art" aria-hidden="true">
        <span className="ph-orbit" />
        <span className="ph-panel ph-panel-a" />
        <span className="ph-panel ph-panel-b" />
        <span className="ph-panel ph-panel-c" />
        <span className="ph-line ph-line-a" />
        <span className="ph-line ph-line-b" />
        <span className="ph-mark">{code}</span>
      </div>
      <span className="ph-tag">{label}</span>
    </div>
  );
}

function SectionHead({ index, label, title }) {
  return (
    <header className="section-head">
      <span className="ghost-index" aria-hidden="true">{index}</span>
      <div className="kicker">{index} — {label}</div>
      <h1 className="h-display">{title}</h1>
    </header>
  );
}

function StageFoot({ meta }) {
  const D = window.PORTFOLIO;
  return (
    <div className="stage-foot">
      <span>{meta}</span>
      <span>© {new Date().getFullYear()} {D.identity.name}</span>
    </div>
  );
}

/* ---- About ---- */
function AboutSection() {
  const D = window.PORTFOLIO;
  const a = D.about;
  return (
    <section className="section">
      <div className="about-grid">
        <div className="about-main">
          <SectionHead index="00" label="About" title={a.lead} />
          <p className="lede about-lede">{D.identity.tagline}</p>
          <div className="body-copy">
            {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <aside className="about-aside">
          <Placeholder label="image" className="portrait" />
          <div className="fact-list">
            {a.facts.map((f, i) => (
              <div className="fact" key={i}>
                <span className="k">{f.k}</span>
                <span className="v">{f.v}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <StageFoot meta="INDEX / 00" />
    </section>
  );
}

/* ---- Experience ---- */
function ExperienceSection() {
  const D = window.PORTFOLIO;
  return (
    <section className="section">
      <SectionHead index="01" label="Experience" title="A decade of shipping digital work." />
      <div className="timeline">
        {D.experience.map((e, i) => (
          <article className="tl-row" key={i}>
            <div className="period">{e.period}</div>
            <div>
              <h3 className="tl-role">{e.role}</h3>
              <p className="tl-org">{e.org}</p>
              <p className="tl-detail">{e.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <StageFoot meta="INDEX / 01" />
    </section>
  );
}

/* ---- Services ---- */
function ServicesSection() {
  const D = window.PORTFOLIO;
  return (
    <section className="section">
      <SectionHead index="02" label="Services" title="What I can do for you." />
      <div className="services">
        {D.services.map((s, i) => (
          <article className="svc" key={i}>
            <div className="svc-no">{s.no}</div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-body">{s.body}</p>
          </article>
        ))}
      </div>
      <StageFoot meta="INDEX / 02" />
    </section>
  );
}

/* ---- Projects ---- */
function ProjectsSection() {
  const D = window.PORTFOLIO;
  return (
    <section className="section">
      <SectionHead index="03" label="Projects" title="Selected work from the archive." />
      <div className="projects">
        {D.projects.map((p) => (
          <a className="project" href="#" key={p.id} onClick={(e) => e.preventDefault()}>
            <Placeholder label={p.id + " — cover"} className="p-img" />
            <div className="p-tag">{p.tag}</div>
            <div className="p-meta">
              <h3 className="p-title">{p.title}</h3>
              <span className="p-year">{p.year}</span>
            </div>
            <p className="p-blurb">{p.blurb}</p>
          </a>
        ))}
      </div>
      <StageFoot meta="INDEX / 03" />
    </section>
  );
}

/* ---- Notes ---- */
function NotesSection() {
  const D = window.PORTFOLIO;
  const [activeNoteId, setActiveNoteId] = React.useState(() => {
    const hash = window.location.hash.slice(1);
    if (!hash.startsWith("note-")) return null;
    const id = hash.slice(5);
    return D.notes.some((n) => n.id === id) ? id : null;
  });

  React.useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith("note-")) {
        const id = hash.slice(5);
        if (D.notes.some((n) => n.id === id)) {
          setActiveNoteId(id);
          return;
        }
      }
      setActiveNoteId(null);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const openNote = (id) => {
    setActiveNoteId(id);
    window.history.replaceState(null, "", "#note-" + id);
  };

  const closeNote = () => {
    setActiveNoteId(null);
    window.history.replaceState(null, "", "#notes");
  };

  const note = D.notes.find((n) => n.id === activeNoteId);

  if (note) {
    return (
      <section className="section">
        <button type="button" className="note-back" onClick={closeNote}>
          <span className="note-back-arrow">←</span>
          <span>All notes</span>
        </button>
        <article className="note-detail">
          <div className="note-head">
            <span className="note-topic">{note.topic}</span>
            <span className="note-meta">{note.date} · {note.read}</span>
          </div>
          <h1 className="note-detail-title">{note.title}</h1>
          <div className="note-body">
            <p>{note.summary}</p>
            {note.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="note-takeaways">
            <span className="note-takeaways-label">Key takeaways</span>
            <ul>
              {note.takeaways.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div className="note-tags">
            {note.tags.map((tag) => (
              <span className="note-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>
        <StageFoot meta={"INDEX / 04 — " + note.topic.toUpperCase()} />
      </section>
    );
  }

  return (
    <section className="section">
      <SectionHead index="04" label="Notes" title="Notes on design and building." />
      <div className="notes-list">
        {D.notes.map((n) => (
          <button
            type="button"
            className="note-item"
            key={n.id}
            onClick={() => openNote(n.id)}
          >
            <div className="note-item-main">
              <span className="note-topic">{n.topic}</span>
              <h3 className="note-item-title">{n.title}</h3>
              <p className="note-item-blurb">{n.summary}</p>
            </div>
            <div className="note-item-meta">
              <span>{n.date}</span>
              <span>{n.read}</span>
            </div>
          </button>
        ))}
      </div>
      <StageFoot meta="INDEX / 04" />
    </section>
  );
}

/* ---- Contact ---- */
function ContactSection() {
  const D = window.PORTFOLIO;
  const c = D.contact;
  return (
    <section className="section">
      <SectionHead index="05" label="Contact" title="Let's build something clear." />
      <p className="lede contact-lede" style={{ maxWidth: 620 }}>{c.blurb}</p>
      <a className="contact-email" href={"mailto:" + c.email}>{c.email}</a>
      <div className="contact-links">
        {c.links.map((l, i) => (
          <a className="clink" href={l.href} key={i}>
            <span className="k">{l.label}</span>
            <span className="v">{l.v}</span>
          </a>
        ))}
      </div>
      <StageFoot meta="INDEX / 05" />
    </section>
  );
}

const SECTION_MAP = {
  about: AboutSection,
  experience: ExperienceSection,
  services: ServicesSection,
  projects: ProjectsSection,
  notes: NotesSection,
  contact: ContactSection,
};

Object.assign(window, {
  Placeholder, SectionHead, StageFoot,
  AboutSection, ExperienceSection, ServicesSection,
  ProjectsSection, NotesSection, ContactSection,
  SECTION_MAP,
});
