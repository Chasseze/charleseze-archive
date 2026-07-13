/* ── Build navigation & sections from PORTFOLIO data ─── */
(function () {
  console.log("App started");
  var D = window.PORTFOLIO;
  console.log("PORTFOLIO:", D);
  if (!D) {
    console.error("PORTFOLIO data not loaded");
    return;
  }
  console.log("PORTFOLIO loaded OK");

  /* ── Render sidebar nav ─────────────────────────── */
  var sideNav = document.getElementById("sideNav");
  console.log("sideNav:", sideNav);
  D.nav.forEach(function (n) {
    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = "#" + n.id;
    a.innerHTML =
      '<span class="ni">' +
      n.index +
      '</span><span class="nl">' +
      n.label +
      "</span>";
    sideNav.appendChild(a);
  });
  console.log("Nav links created");

  /* ── Render sections ────────────────────────────── */
  var el = document.getElementById("sections");
  console.log("sections container:", el);
  var year = new Date().getFullYear();

  /* ── About ──────────────────────────────────────── */
  el.innerHTML +=
    '<section class="section" id="about">' +
    '<header class="sec-head">' +
    '<div class="sec-index">00 — About</div>' +
    '<h2 class="sec-title">' +
    D.about.lead +
    "</h2>" +
    "</header>" +
    '<div class="about-grid">' +
    "<div>" +
    '<p class="about-lede">' +
    D.identity.tagline +
    "</p>" +
    '<div class="about-body">' +
    D.about.paragraphs
      .map(function (p) {
        return "<p>" + p + "</p>";
      })
      .join("") +
    "</div>" +
    "</div>" +
    "<aside>" +
    '<div class="portrait">' +
    '<img class="portrait-img" src="https://picsum.photos/seed/charleseze/400/500" alt="Portrait of Charles Eze" />' +
    '<span class="portrait-tag">Portrait — Charles Eze</span>' +
    "</div>" +
    '<div class="facts">' +
    D.about.facts
      .map(function (f) {
        return (
          '<div class="fact-row"><span class="k">' +
          f.k +
          '</span><span class="v">' +
          f.v +
          "</span></div>"
        );
      })
      .join("") +
    "</div>" +
    "</aside>" +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 00</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("About section added");

  /* ── Experience ─────────────────────────────────── */
  el.innerHTML +=
    '<section class="section" id="experience">' +
    '<header class="sec-head">' +
    '<div class="sec-index">01 — Experience</div>' +
    '<h2 class="sec-title">A decade of shipping digital work.</h2>' +
    "</header>" +
    '<div class="timeline">' +
    D.experience
      .map(function (e) {
        return (
          '<article class="tl-row">' +
          '<div class="tl-period">' +
          e.period +
          "</div>" +
          "<div>" +
          '<h3 class="tl-role">' +
          e.role +
          "</h3>" +
          '<p class="tl-org">' +
          e.org +
          "</p>" +
          '<p class="tl-detail">' +
          e.detail +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("") +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 01</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("Experience section added");

  /* ── Services ───────────────────────────────────── */
  el.innerHTML +=
    '<section class="section" id="services">' +
    '<header class="sec-head">' +
    '<div class="sec-index">02 — Services</div>' +
    '<h2 class="sec-title">What I can do for you.</h2>' +
    "</header>" +
    '<div class="services-grid">' +
    D.services
      .map(function (s) {
        return (
          '<article class="svc-card">' +
          '<div class="svc-no">' +
          s.no +
          "</div>" +
          '<h3 class="svc-title">' +
          s.title +
          "</h3>" +
          '<p class="svc-body">' +
          s.body +
          "</p>" +
          "</article>"
        );
      })
      .join("") +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 02</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("Services section added");

  /* ── Projects ───────────────────────────────────── */
  var patterns = ["p1", "p2", "p3", "p4"];
  el.innerHTML +=
    '<section class="section" id="projects">' +
    '<header class="sec-head">' +
    '<div class="sec-index">03 — Projects</div>' +
    '<h2 class="sec-title">Selected work from the archive.</h2>' +
    "</header>" +
    '<div class="projects-grid">' +
    D.projects
      .map(function (p, i) {
        return (
          '<a class="proj-card" href="#" onclick="return false">' +
          '<div class="proj-img ' +
          (patterns[i] || "p1") +
          '">' +
          '<span class="proj-img-tag">' +
          p.id +
          " — cover</span>" +
          "</div>" +
          '<div class="proj-tag">' +
          p.tag +
          "</div>" +
          '<div class="proj-title-row">' +
          '<h3 class="proj-title">' +
          p.title +
          "</h3>" +
          '<span class="proj-year">' +
          p.year +
          "</span>" +
          "</div>" +
          '<p class="proj-blurb">' +
          p.blurb +
          "</p>" +
          "</a>"
        );
      })
      .join("") +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 03</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("Projects section added");

  /* ── Writing ────────────────────────────────────── */
  el.innerHTML +=
    '<section class="section" id="writing">' +
    '<header class="sec-head">' +
    '<div class="sec-index">04 — Writing</div>' +
    '<h2 class="sec-title">Notes on design and building.</h2>' +
    "</header>" +
    '<div class="posts">' +
    D.writing
      .map(function (w) {
        return (
          '<a class="post-row" href="#" onclick="return false">' +
          "<div>" +
          '<h3 class="post-title">' +
          w.title +
          "</h3>" +
          '<p class="post-blurb">' +
          w.blurb +
          "</p>" +
          "</div>" +
          '<div class="post-meta">' +
          w.date +
          "<br>" +
          w.read +
          "</div>" +
          "</a>"
        );
      })
      .join("") +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 04</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("Writing section added");

  /* ── Contact ────────────────────────────────────── */
  el.innerHTML +=
    '<section class="section" id="contact">' +
    '<header class="sec-head">' +
    '<div class="sec-index">05 — Contact</div>' +
    '<h2 class="sec-title">Let\'s build something clear.</h2>' +
    "</header>" +
    '<p class="contact-blurb">' +
    D.contact.blurb +
    "</p>" +
    '<a class="contact-email" href="mailto:' +
    D.contact.email +
    '">' +
    D.contact.email +
    "</a>" +
    '<div class="contact-links">' +
    D.contact.links
      .map(function (l) {
        return (
          '<a class="clink" href="' +
          l.href +
          '">' +
          '<span class="lbl">' +
          l.label +
          "</span>" +
          '<span class="val">' +
          l.v +
          "</span>" +
          "</a>"
        );
      })
      .join("") +
    "</div>" +
    '<div class="sec-foot"><span>INDEX / 05</span><span>&copy; ' +
    year +
    " Charles Eze</span></div>" +
    "</section>";
  console.log("Contact section added");
  console.log("sections HTML:", el.innerHTML.length);

  /* ── Smooth scroll helper ───────────────────────── */
  function scrollToSec(id) {
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ── Hero 'Browse the archive' link ─────────────── */
  document
    .querySelector(".hero-scroll")
    .addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSec("about");
    });

  /* ── Smooth scroll on nav clicks ────────────────── */
  var navLinks = document.querySelectorAll(".nav-link");
  console.log("Nav links found:", navLinks.length);
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSec(this.getAttribute("href").substring(1));
    });
  });

  /* ── Scroll spy ─────────────────────────────────── */
  var sections = document.querySelectorAll(".section[id]");
  console.log("Sections found:", sections.length);

  function updateActive() {
    var current = "";
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top < window.innerHeight * 0.4) {
        current = sec.id;
      }
    });
    if (!current && sections.length) current = sections[0].id;

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + current;
      if (isActive) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
  console.log("App init complete");
})();
