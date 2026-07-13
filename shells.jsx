/* Layout shells — Archive (sidebar) and Editorial (top-nav). */

function Clock() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString("en-GB", {
    timeZone: "Africa/Lagos",
    hour12: false,
  });
  return <span className="clock">LAGOS {time}</span>;
}

function TopBar({ extra }) {
  const D = window.PORTFOLIO;
  return (
    <header className="topbar">
      <div className="brand">
        <span className="name">{D.identity.name}</span>
        <span className="sep mono">/</span>
        <span className="sub">{D.identity.role}</span>
      </div>
      <div className="status">
        <Clock />
        {extra}
        <span className="dot" />
        <span>{D.identity.status.toUpperCase()}</span>
      </div>
    </header>
  );
}

/* Prev / next section navigation — shared by both shells. */
function SectionNav({ active, setActive }) {
  const nav = window.PORTFOLIO.nav;
  const i = nav.findIndex((n) => n.id === active);
  const prev = nav[(i - 1 + nav.length) % nav.length];
  const next = nav[(i + 1) % nav.length];
  return (
    <nav className="section-nav" aria-label="Section navigation">
      <button className="sn-btn" onClick={() => setActive(prev.id)}>
        <span className="sn-arrow left">◀</span>
        <span>{prev.index}</span>
        <span className="sn-label">{prev.label}</span>
      </button>
      <span className="sn-hint" aria-hidden="true">← → / 1–6</span>
      <button className="sn-btn" onClick={() => setActive(next.id)}>
        <span className="sn-label">{next.label}</span>
        <span>{next.index}</span>
        <span className="sn-arrow right">▶</span>
      </button>
    </nav>
  );
}

/* ---------- Direction A: Archive ---------- */
function ArchiveShell({ active, setActive, children }) {
  const D = window.PORTFOLIO;
  return (
    <div className="app">
      <TopBar extra={<span>ARCHIVE / {active.toUpperCase()}</span>} />
      <div className="archive-body">
        <nav className="sidebar">
          <div className="side-nav">
            {D.nav.map((n) => (
              <button
                key={n.id}
                className={"nav-item" + (active === n.id ? " active" : "")}
                onClick={() => setActive(n.id)}
              >
                <span className="n-index">{n.index}</span>
                <span className="n-label">{n.label}</span>
              </button>
            ))}
          </div>
          <div className="side-meta">
            <div className="row">
              <span className="k">Location</span>
              <span className="v">{D.identity.location}</span>
            </div>
            <div className="row">
              <span className="k">Since</span>
              <span className="v">{D.identity.started}</span>
            </div>
            <div className="row">
              <span className="k">Contact</span>
              <span className="v">{D.contact.email}</span>
            </div>
          </div>
        </nav>
        <main className="archive-main" key={active}>
          <div className="stage">
            {children}
            <SectionNav active={active} setActive={setActive} />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Direction B: Editorial ---------- */
function EditorialShell({ active, setActive, children }) {
  const D = window.PORTFOLIO;
  return (
    <div className="app">
      <TopBar extra={<span>EDITORIAL</span>} />
      <div className="editorial-body" key={active}>
        <nav className="edi-nav">
          {D.nav.map((n) => (
            <button
              key={n.id}
              className={"nav-link" + (active === n.id ? " active" : "")}
              onClick={() => setActive(n.id)}
            >
              <span className="ni">{n.index}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <div className="edi-stage">
          {children}
          <SectionNav active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Front cover (standalone landing) ---------- */
function Cover({ onEnter }) {
  const D = window.PORTFOLIO;
  const year = new Date().getFullYear();
  const [first, ...rest] = D.identity.name.split(" ");
  const tickerLine = D.services
    .map((s) => s.title)
    .concat(["Lagos → Worldwide"])
    .map((t, i) => (
      <React.Fragment key={i}>
        {t} <em>·</em>{" "}
      </React.Fragment>
    ));
  return (
    <div className="cover">
      <div className="cover-frame">
        <div className="cover-top">
          <span>The Archive</span>
          <span>Vol. 01 — {year}</span>
        </div>

        <div className="cover-center">
          <div className="kicker cover-kicker">The Archive &amp; Digital Portfolio</div>
          <h1 className="cover-name">
            <span className="cover-name-1">{first}</span>{" "}
            <span className="cover-name-2">{rest.join(" ")}</span>
          </h1>
          <p className="cover-tagline">{D.identity.tagline}</p>
        </div>

        <div className="cover-ticker" aria-hidden="true">
          <div className="tick-track">
            <span>{tickerLine}</span>
            <span>{tickerLine}</span>
          </div>
        </div>

        <div className="cover-bottom">
          <div className="cover-meta">
            <div className="cm">
              <span className="k">Role</span>
              <span className="v">{D.identity.role}</span>
            </div>
            <div className="cm">
              <span className="k">Based</span>
              <span className="v">{D.identity.location}</span>
            </div>
            <div className="cm">
              <span className="k">Since</span>
              <span className="v">{D.identity.started}</span>
            </div>
          </div>
          <button className="cover-enter" onClick={onEnter}>
            <span>Enter the archive</span>
            <span className="cover-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TopBar, ArchiveShell, EditorialShell, Cover });
