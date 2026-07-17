/* ============================================================
   tweaks-panel.jsx — inline
   ============================================================ */

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;overflow-wrap:anywhere}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}
  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}
  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel"
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  );
}

function TweakSection({ label }) {
  return <div className="twk-sect">{label}</div>;
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;

  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);

  if (!fitsAsSegments) {
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }

  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

/* ============================================================
   sections.jsx — inline
   ============================================================ */

function Placeholder({ label, className, src, eager }) {
  if (src) {
    return (
      <div className={"ph ph-filled " + (className || "")}>
        <img
          src={src}
          alt={label || ""}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : undefined}
        />
      </div>
    );
  }
  return (
    <div className={"ph " + (className || "")} aria-label={label}>
      <span className="ph-label">{label}</span>
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

function AboutSection({ onNavigate }) {
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
          {onNavigate && (
            <button type="button" className="inline-cta" onClick={() => onNavigate("projects")}>
              <span>View selected work</span>
              <span className="inline-cta-arrow" aria-hidden="true">→</span>
            </button>
          )}
        </div>
        <aside className="about-aside">
          <Placeholder label="Portrait of Charles Eze" className="portrait" src="assets/images/portrait.jpg" />
          <p className="photo-caption">Charles Eze · ChassEZE Group</p>
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

function ServicesSection() {
  const D = window.PORTFOLIO;
  let lastGroup = null;
  return (
    <section className="section">
      <SectionHead index="02" label="Services" title="What I can do for you." />
      <div className="services">
        {D.services.map((s, i) => {
          const showGroup = s.group && s.group !== lastGroup;
          if (s.group) lastGroup = s.group;
          return (
            <article className={"svc" + (showGroup ? " svc-group-start" : "")} key={s.no || i} data-group={s.group || undefined}>
              {showGroup && <div className="svc-group">{s.group}</div>}
              <div className="svc-no">{s.no}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-body">{s.body}</p>
            </article>
          );
        })}
      </div>
      <StageFoot meta="INDEX / 02" />
    </section>
  );
}

function ProjectCard({ p, featured }) {
  const href = p.url || "#";
  const external = Boolean(p.url);
  return (
    <a
      className={"project" + (featured ? " project-featured" : "")}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { onClick: (e) => e.preventDefault() })}
    >
      <div className="p-media">
        <Placeholder label={p.title + " — cover"} className="p-img" src={p.img} />
      </div>
      <div className="p-body">
        <div className="p-tag">{p.tag}</div>
        <div className="p-meta">
          <h3 className="p-title">{p.title}</h3>
          <span className="p-year">{p.year}</span>
        </div>
        {featured && p.outcome && <p className="p-outcome">{p.outcome}</p>}
        <p className="p-blurb">{p.blurb}</p>
        {external && (
          <span className="p-link">
            Visit project <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </a>
  );
}

function ProjectsSection() {
  const D = window.PORTFOLIO;
  return (
    <section className="section">
      <SectionHead index="03" label="Projects" title="Selected work from the archive." />
      <div className="projects">
        {D.projects.map((p) => (
          <ProjectCard p={p} key={p.id} featured={Boolean(p.featured)} />
        ))}
      </div>
      <StageFoot meta="INDEX / 03" />
    </section>
  );
}

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

function ContactForm() {
  const c = window.PORTFOLIO.contact;
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");
  const formRef = React.useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const key = c.web3formsAccessKey;
    if (!key || key === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setMessage("Add your Web3Forms access key in data.js to enable this form.");
      return;
    }

    setStatus("loading");
    setMessage("Sending…");

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());
    payload.access_key = key;
    payload.subject = c.formSubject || "New enquiry from charleseze.com";
    payload.from_name = "Charles Eze Archive";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Message sent. I'll get back to you soon.");
        formRef.current.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again or email me directly.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again or email me directly.");
    }
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={onSubmit} noValidate>
      <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex="-1" autoComplete="off" />

      <div className="contact-form-row">
        <label className="contact-field">
          <span className="contact-label">Name</span>
          <input type="text" name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className="contact-field">
          <span className="contact-label">Email</span>
          <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
        </label>
      </div>

      <label className="contact-field">
        <span className="contact-label">Project</span>
        <input type="text" name="project" placeholder="What are you building?" />
      </label>

      <label className="contact-field">
        <span className="contact-label">Message</span>
        <textarea name="message" required rows="5" placeholder="Tell me about the work, timeline, and goals." />
      </label>

      <div className="contact-form-actions">
        <button type="submit" className="contact-submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
          <span className="contact-submit-arrow" aria-hidden="true">→</span>
        </button>
        {message && (
          <p className={"contact-form-status is-" + status} role="status">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

function ContactSection() {
  const D = window.PORTFOLIO;
  const c = D.contact;
  return (
    <section className="section">
      <SectionHead index="05" label="Contact" title="Let's build something clear." />
      <div className="contact-grid">
        <div className="contact-main">
          <p className="lede contact-lede">{c.blurb}</p>
          <a className="contact-email" href={"mailto:" + c.email}>{c.email}</a>
          <ContactForm />
        </div>
        <aside className="contact-aside">
          <Placeholder label="Portrait of Charles Eze" className="contact-photo" src="assets/images/portrait.jpg" />
          <div className="contact-links">
            {c.links.map((l, i) => (
              <a
                className="clink"
                href={l.href}
                key={i}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="k">{l.label}</span>
                <span className="v">{l.v}</span>
              </a>
            ))}
          </div>
        </aside>
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

/* ============================================================
   shells.jsx — inline
   ============================================================ */

const THEME_COLORS = { dark: "#0c0e10", light: "#f4f1ea" };

function ThemeToggle() {
  const [theme, setTheme] = React.useState(
    () => document.documentElement.dataset.theme || "dark"
  );
  const dark = theme === "dark";
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = THEME_COLORS[next];
    setTheme(next);
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
    >
      {dark ? (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
          <circle cx="8" cy="8" r="3.1" />
          <path d="M8 1.2v1.7M8 13.1v1.7M1.2 8h1.7M13.1 8h1.7M3.2 3.2l1.2 1.2M11.6 11.6l1.2 1.2M12.8 3.2l-1.2 1.2M4.4 11.6l-1.2 1.2" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M13.8 9.9A6 6 0 0 1 6.1 2.2a.4.4 0 0 0-.5-.5 6.6 6.6 0 1 0 8.7 8.7.4.4 0 0 0-.5-.5Z" />
        </svg>
      )}
    </button>
  );
}

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

function TopBar({ extra, onHome }) {
  const D = window.PORTFOLIO;
  return (
    <header className="topbar">
      <div className="brand">
        <button
          type="button"
          className="name"
          onClick={onHome}
          aria-label="Return to landing page"
        >
          {D.identity.name}
        </button>
        <span className="sep mono">/</span>
        <span className="sub">{D.identity.role}</span>
      </div>
      <div className="status">
        <Clock />
        {extra}
        <span className="dot" />
        <span>{D.identity.status.toUpperCase()}</span>
        <ThemeToggle />
      </div>
    </header>
  );
}

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

function ArchiveShell({ active, setActive, onHome, children }) {
  const D = window.PORTFOLIO;
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TopBar
        onHome={onHome}
        extra={<span>ARCHIVE / {active.toUpperCase()}</span>}
      />
      <div className="archive-body">
        <nav className="sidebar">
          <div className="side-nav">
            {D.nav.map((n) => (
              <button
                key={n.id}
                className={"nav-item" + (active === n.id ? " active" : "")}
                onClick={() => setActive(n.id)}
                aria-current={active === n.id ? "page" : undefined}
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
        <main className="archive-main" id="main-content" tabIndex="-1" key={active}>
          <div className="stage">
            {children}
            <SectionNav active={active} setActive={setActive} />
          </div>
        </main>
      </div>
    </div>
  );
}

function EditorialShell({ active, setActive, onHome, children }) {
  const D = window.PORTFOLIO;
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TopBar onHome={onHome} extra={<span>EDITORIAL</span>} />
      <div className="editorial-body" key={active}>
        <nav className="edi-nav">
          {D.nav.map((n) => (
            <button
              key={n.id}
              className={"nav-link" + (active === n.id ? " active" : "")}
              onClick={() => setActive(n.id)}
              aria-current={active === n.id ? "page" : undefined}
            >
              <span className="ni">{n.index}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <main className="edi-stage" id="main-content" tabIndex="-1">
          {children}
          <SectionNav active={active} setActive={setActive} />
        </main>
      </div>
    </div>
  );
}

function Cover({ onEnter }) {
  const D = window.PORTFOLIO;
  const year = new Date().getFullYear();
  const [first, ...rest] = D.identity.name.split(" ");
  return (
    <div className="cover">
      <div className="cover-frame">
        <div className="cover-top">
          <span>The Archive</span>
          <span className="cover-top-right">
            <span>Vol. 01 — {year}</span>
            <ThemeToggle />
          </span>
        </div>
        <div className="cover-body">
          <div className="cover-main">
            <div className="cover-center">
              <div className="kicker cover-kicker">The Archive &amp; Digital Portfolio</div>
              <h1 className="cover-name">
                <span className="cover-name-1">{first}</span>{" "}
                <span className="cover-name-2">{rest.join(" ")}</span>
              </h1>
              <p className="cover-tagline">{D.identity.tagline}</p>
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
          <aside className="cover-aside">
            <Placeholder label="Charles Eze cover" className="cover-photo" src="assets/images/chassezecover.jpg" eager />
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   App entry point
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "archive",
  "density": "regular",
  "sidebar": "boxed"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState("cover");
  const [active, setActive] = React.useState("about");

  const selectSection = React.useCallback((id) => {
    setActive(id);
    window.history.replaceState(null, "", "#" + id);
  }, []);

  const goHome = React.useCallback(() => {
    setPage("cover");
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.density = t.density;
    document.documentElement.dataset.sidebar = t.sidebar;
  }, [t.density, t.sidebar]);

  React.useEffect(() => {
    const nav = window.PORTFOLIO.nav;
    const onKey = (e) => {
      const tag = e.target.tagName;
      const isTyping = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if (isTyping || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key.toLowerCase() === "t") {
        window.postMessage({ type: "__activate_edit_mode" }, "*");
        return;
      }
      if (page === "cover" && e.key === "Enter") {
        setPage("archive");
        return;
      }
      if (page !== "archive") return;
      const current = nav.findIndex((n) => n.id === active);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        selectSection(nav[(current - 1 + nav.length) % nav.length].id);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        selectSection(nav[(current + 1) % nav.length].id);
      } else if (/^[1-6]$/.test(e.key)) {
        e.preventDefault();
        selectSection(nav[Number(e.key) - 1].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, page, selectSection]);

  React.useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith("note-")) {
        const noteId = hash.slice(5);
        if (window.PORTFOLIO.notes.some((n) => n.id === noteId)) {
          setActive("notes");
          setPage("archive");
          return;
        }
      }
      if (window.PORTFOLIO.nav.some((n) => n.id === hash)) {
        setActive(hash);
        setPage("archive");
      }
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  React.useEffect(() => {
    if (page === "archive") {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [active, page]);

  const Shell = t.direction === "editorial" ? EditorialShell : ArchiveShell;
  const SectionComp = SECTION_MAP[active] || SECTION_MAP.about;
  const sectionProps = active === "about" ? { onNavigate: selectSection } : {};

  const tweaks = (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Layout" />
      <TweakRadio
        label="Direction"
        value={t.direction}
        options={[
          { value: "archive", label: "Archive" },
          { value: "editorial", label: "Editorial" },
        ]}
        onChange={(v) => setTweak("direction", v)}
      />
      {t.direction === "archive" && (
        <>
          <TweakSection label="Sidebar" />
          <TweakRadio
            label="Style"
            value={t.sidebar}
            options={[
              { value: "numbered", label: "Numbered" },
              { value: "minimal", label: "Minimal" },
              { value: "boxed", label: "Boxed" },
            ]}
            onChange={(v) => setTweak("sidebar", v)}
          />
        </>
      )}
      <TweakSection label="Typography" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={[
          { value: "regular", label: "Regular" },
          { value: "compact", label: "Compact" },
        ]}
        onChange={(v) => setTweak("density", v)}
      />
    </TweaksPanel>
  );

  if (page === "cover") {
    return (
      <>
        <Cover onEnter={() => setPage("archive")} />
        {tweaks}
      </>
    );
  }

  return (
    <>
      <Shell active={active} setActive={selectSection} onHome={goHome}>
        <SectionComp {...sectionProps} />
      </Shell>
      {tweaks}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
