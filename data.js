/* Content for CharlesEZE Archive & Digital Portfolio.
   All copy here is placeholder-but-believable — edit freely. */
window.PORTFOLIO = {
  identity: {
    name: "Charles Eze",
    handle: "charleseze",
    role: "Product Designer & Frontend Developer",
    location: "Lagos, NG & The US",
    status: "Available for select work",
    tagline:
      "I design and build clear, durable digital products — from the first wireframe to the shipped interface.",
    started: "2016",
  },

  nav: [
    { id: "about", index: "00", label: "About" },
    { id: "experience", index: "01", label: "Experience" },
    { id: "services", index: "02", label: "Services" },
    { id: "projects", index: "03", label: "Projects" },
    { id: "notes", index: "04", label: "Notes" },
    { id: "contact", index: "05", label: "Contact" },
  ],

  about: {
    lead:
      "Charles Eze is a product designer and frontend developer working between interface, systems, and engineering.",
    paragraphs: [
      "For nearly a decade I've helped founders, agencies, and in-house teams turn vague ambition into shipped product. My work lives in the practical middle: design systems that hold up, flows that don't leak, interfaces that feel obvious in hindsight.",
      "I care about clarity over decoration, and about leaving behind codebases and design files that the next person can actually read. This archive collects the work, the services I offer, and a few notes along the way.",
    ],
    facts: [
      { k: "Also known as", v: "Charles Osheokwu" },
      { k: "Based in", v: "Lagos, NG & The US" },
      { k: "Working since", v: "2016" },
      { k: "Focus", v: "Product design · Frontend" },
      { k: "Stack", v: "Figma · React · TypeScript" },
      { k: "Status", v: "Open to select work" },
    ],
  },

  experience: [
    {
      period: "2023 — Present",
      role: "Lead Product Designer",
      org: "Independent Practice",
      detail:
        "Partnering with early-stage teams as a hands-on design lead — strategy, systems and shipped frontend.",
    },
    {
      period: "2021 — 2023",
      role: "Senior Product Designer",
      org: "Northwind Labs",
      detail:
        "Owned the design system and core product surfaces for a B2B analytics platform across web and mobile.",
    },
    {
      period: "2019 — 2021",
      role: "Product Designer",
      org: "Field Studio",
      detail:
        "Designed and prototyped digital products for fintech and logistics clients across three continents.",
    },
    {
      period: "2016 — 2019",
      role: "UI Designer & Frontend Developer",
      org: "Various Agencies",
      detail:
        "Cut my teeth building marketing sites, dashboards and brand systems on tight agency timelines.",
    },
  ],

  services: [
    {
      id: "product-design",
      img: "assets/images/services/product-design.jpg",
      no: "01",
      group: "Design",
      title: "Product Design",
      body:
        "End-to-end interface design — research, flows, prototypes and high-fidelity UI for web and mobile.",
      overview:
        "I design the product before anyone writes a line of code — starting from the problem a real user has, not from a blank canvas. That means understanding who the interface is for, mapping the flow they need to complete, and only then deciding what it should look like. The goal is always the same: something a first-time visitor understands without being told how.",
      included: [
        "Discovery — audience, goals, and the one job the product has to do well",
        "User flows and information architecture for every core journey",
        "Wireframes to test structure before visual design begins",
        "High-fidelity UI for web and mobile, in light and dark states",
        "An interactive prototype you can click through and share",
        "Developer-ready handoff — specs, states, and assets",
      ],
      process: [
        { step: "Understand", detail: "Short discovery conversation to pin down the audience, the goal, and what success looks like." },
        { step: "Structure", detail: "Flows and wireframes that get the logic right before any visual polish." },
        { step: "Design", detail: "High-fidelity screens, iterated with you until the interface feels obvious." },
        { step: "Handoff", detail: "Clean specs and assets your developer — or I — can build from directly." },
      ],
      goodFor: [
        "You have a rough idea or an existing product that needs a clearer interface",
        "You want the flow tested and simplified before it's expensive to change",
        "You need design files a developer can actually build from",
      ],
    },
    {
      id: "design-systems",
      img: "assets/images/services/design-systems.jpg",
      no: "02",
      group: "Design",
      title: "Design Systems",
      body:
        "Durable component libraries and token systems that keep a growing product consistent and fast to build.",
      overview:
        "As a product grows, inconsistency compounds — a button here, a slightly different one there, three shades of the same blue. A design system fixes that at the source: one set of components, tokens, and rules that both design and code pull from, so new screens get faster to ship instead of slower.",
      included: [
        "Audit of existing screens to find and resolve inconsistencies",
        "A token system for color, type, spacing, and motion",
        "A documented component library, built in Figma and matched in code",
        "Usage guidelines so the system stays consistent without you policing it",
        "A rollout plan for migrating existing screens incrementally",
      ],
      process: [
        { step: "Audit", detail: "Review current screens and components to see what's duplicated or drifting." },
        { step: "Define", detail: "Establish the token system and core component set." },
        { step: "Build", detail: "Design and build components in parallel, so design and code never diverge." },
        { step: "Document", detail: "Usage rules and examples so the team can extend it correctly without me." },
      ],
      goodFor: [
        "Your product has grown past a handful of screens and it's starting to show",
        "Multiple people touch the design or codebase and consistency is slipping",
        "You're planning new features and want a faster foundation to build on",
      ],
    },
    {
      id: "frontend-development",
      img: "assets/images/services/frontend-development.jpg",
      no: "03",
      group: "Build",
      title: "Frontend Development",
      body:
        "Pixel-accurate, accessible frontends in React and TypeScript — the bridge from design file to shipped code.",
      overview:
        "This is where a design file becomes something people can actually use. I build interfaces in React and TypeScript that match the design closely, hold up under real content and real screen sizes, and stay fast — because a beautiful interface that loads slowly on a phone isn't a finished product.",
      included: [
        "Component-based build in React and TypeScript",
        "Responsive layouts tested across real device sizes, not just desktop",
        "Accessible markup — keyboard navigation, semantic HTML, sensible contrast",
        "Performance budget — lean assets, lazy loading, minimal dependencies",
        "Integration with your existing APIs, CMS, or design system",
      ],
      process: [
        { step: "Scope", detail: "Confirm the design files, states, and technical constraints before building." },
        { step: "Build", detail: "Component-by-component development, checked against the design at each step." },
        { step: "Harden", detail: "Real-device testing, accessibility pass, and performance tuning." },
        { step: "Ship", detail: "Deployed and handed over with clean, documented code." },
      ],
      goodFor: [
        "You have designs — from me or elsewhere — that need to become a real product",
        "Your current frontend feels slow, inconsistent, or hard to extend",
        "You want code that the next developer can read without a handoff call",
      ],
    },
    {
      id: "full-stack-development",
      img: "assets/images/services/full-stack-development.jpg",
      no: "04",
      group: "Build",
      title: "Full-Stack Development",
      body:
        "End-to-end product builds across interface and server — APIs, auth, data models and the shipped frontend.",
      overview:
        "For products that need more than a frontend — a database, user accounts, business logic, integrations — I build the whole thing: a data model that fits how the product actually works, an API that's simple to reason about, and the interface on top, all built by one person who understands how the pieces connect.",
      included: [
        "Data modeling and database design for the product's real needs",
        "API design and implementation — REST or GraphQL, whichever fits",
        "Authentication, authorization, and role-based access where needed",
        "Third-party integrations — payments, email, storage, analytics",
        "The shipped frontend, connected end-to-end and deployed",
      ],
      process: [
        { step: "Plan", detail: "Map the data model and core flows before writing infrastructure code." },
        { step: "Build the core", detail: "Database, API, and auth first — the foundation everything else depends on." },
        { step: "Build the interface", detail: "Frontend built against the real API, not a mock." },
        { step: "Deploy & support", detail: "Shipped to production with monitoring in place, and support after launch." },
      ],
      goodFor: [
        "You're building a product from scratch and want one person who owns the whole stack",
        "You need accounts, payments, or a real database — not just static pages",
        "You want to avoid the handoff gaps that happen between separate design, frontend, and backend teams",
      ],
    },
    {
      id: "product-consulting",
      img: "assets/images/services/product-consulting.jpg",
      no: "05",
      group: "Advise",
      title: "Product Consulting",
      body:
        "Clear advice before you build — scoping the product, choosing the right stack, and mapping a path to launch.",
      overview:
        "Before committing real budget to a build, it's worth spending a little time getting the plan right. I help founders and teams scope what the product actually needs to do first, choose a stack that fits the team and the timeline, and turn a vague idea into a plan a developer can quote against.",
      included: [
        "A scoping session to separate must-haves from nice-to-haves",
        "A stack recommendation suited to your budget, timeline, and team",
        "A written project brief you can share with any developer or agency",
        "Rough cost and timeline guidance based on real project experience",
        "An honest read on whether you need a website, an app, or neither yet",
      ],
      process: [
        { step: "Listen", detail: "Understand the business goal behind the request, not just the feature list." },
        { step: "Scope", detail: "Separate what the first version actually needs from what can wait." },
        { step: "Recommend", detail: "A clear stack and approach, with the reasoning behind it." },
        { step: "Document", detail: "A brief you can hand to any team — including mine — to get accurate quotes." },
      ],
      goodFor: [
        "You have an idea but aren't sure what to build first or how much it should cost",
        "You're comparing agencies or developers and want an independent scope to quote against",
        "You want a second opinion before committing budget to a build",
      ],
    },
    {
      id: "maintenance-support",
      img: "assets/images/services/maintenance-support.jpg",
      no: "06",
      group: "Advise",
      title: "Maintenance & Support",
      body:
        "Ongoing care after launch — updates, performance monitoring, content changes, and steady iteration as the product grows.",
      overview:
        "Launch isn't the finish line — it's where real usage starts teaching you what to improve. I offer ongoing support after a build ships: keeping dependencies current, watching performance and errors, making content and small feature changes, and planning the next round of work based on how people actually use the product.",
      included: [
        "Regular dependency and security updates",
        "Performance and uptime monitoring, with fast response to issues",
        "Content and copy changes as the business evolves",
        "Small feature additions and refinements between major releases",
        "A monthly summary of what changed and what's worth prioritizing next",
      ],
      process: [
        { step: "Baseline", detail: "Document what's live, how it's deployed, and what 'healthy' looks like." },
        { step: "Monitor", detail: "Track performance, errors, and uptime on an ongoing basis." },
        { step: "Maintain", detail: "Apply updates and fixes before they become visible problems." },
        { step: "Iterate", detail: "Use real usage data to suggest and ship the next round of improvements." },
      ],
      goodFor: [
        "You've launched and don't want the product to quietly go stale",
        "You need small, ongoing changes without the overhead of a full new project",
        "You want one point of contact who already knows the codebase",
      ],
    },
  ],

  projects: [
    {
      id: "egounor",
      title: "EgoUnor",
      year: "2026",
      tag: "Contribution Tracker · Live",
      featured: true,
      img: "assets/images/projects/EgoUnor.jpg",
      url: "https://egounor.com",
      outcome: "Live contribution tracking for groups — transparent balances, less follow-up chaos.",
      blurb:
        "A contribution tracking and management system that shows a group exactly who has paid and what's outstanding — built for transparency and easy follow-up.",
    },
    {
      id: "dmacautos",
      title: "DmacAutos",
      year: "2026",
      tag: "Auto Workshop · Booking System",
      img: "assets/images/projects/DmacAutos.jpg",
      blurb:
        "A website for an auto repair shop that takes customer bookings, lets the team reply to them, and keeps owners updated as their repairs move along.",
    },
    {
      id: "syncpay",
      title: "SyncPay",
      year: "2025",
      tag: "Social Finance · Web App",
      img: "assets/images/projects/SyncPay.jpg",
      blurb:
        "A social finance platform that helps groups, friends and communities manage shared money together — without the usual confusion over who owes what.",
    },
    {
      id: "expensetracking",
      title: "Expense Tracker",
      year: "2025",
      tag: "Expense Tracker · Web App",
      img: "assets/images/projects/ExpenseTracking.jpg",
      blurb:
        "A secure expense tracker and blog that helps people record their spending, stay on budget, and keep all their financial notes in one place.",
    },
  ],

  notes: [
    {
      id: "avoid-design-overkill",
      topic: "Product Strategy",
      title: "The need to avoid design overkill",
      date: "Jun 2026",
      read: "5 min",
      summary:
        "More features rarely means a better product. A note on guiding clients away from clutter — and toward something visitors can actually use.",
      body: [
        "When a client is excited about a new website, the first brief often contains everything: animation on every section, several calls to action, multiple menus, live chat, a customer portal, a blog, and features copied from much larger competitors. The ambition is understandable, but adding everything at once usually makes the final product harder to use.",
        "Every feature asks something from the visitor. It takes attention, creates another decision, and adds another place where the experience can fail. If every block moves, nothing feels important. If every button is prominent, visitors cannot tell which action matters. Good design is not measured by how much is visible; it is measured by how quickly a person understands what the business offers and what to do next.",
        "My role is therefore not just to execute a wish list. I help clients separate business goals from feature requests. We identify the primary visitor, the main problem they need solved, and the one action that moves the relationship forward. Features that directly support that journey stay. Everything else is delayed, simplified, or removed.",
        "This does not produce a boring website. It produces a focused one. Strong typography, useful imagery, thoughtful spacing, and a clear story create more confidence than decorative complexity. A focused first release is also easier to maintain and gives us real evidence about what customers need before more money is spent.",
      ],
      takeaways: [
        "Begin with the customer's main task, not a list of desired features.",
        "Give every page one clear purpose and one primary action.",
        "Launch the focused version first, then add features based on real use.",
      ],
      tags: ["Strategy", "Simplicity", "User Experience"],
    },
    {
      id: "design-pays-for-itself",
      topic: "Business Value",
      title: "Why good design pays for itself",
      date: "Apr 2026",
      read: "6 min",
      summary:
        "Getting the design right early feels slow and costs money — here's when that investment starts paying you back.",
      body: [
        "Good design can look expensive at the beginning because its most important work happens before the polished screens appear. Time goes into understanding customers, deciding what the product should say, organizing content, testing flows, and resolving uncertainty. Skipping those steps may make development start sooner, but it does not make the project finish sooner.",
        "Poor decisions become more expensive as they move through a project. Changing a rough wireframe takes minutes. Changing a completed interface takes hours. Rebuilding a feature after it has been developed, launched, and connected to business operations can cost weeks. Early design work finds those mistakes while they are still cheap.",
        "The return also continues after launch. Clear navigation reduces support requests. A trustworthy visual system improves conversion. Reusable components make future pages faster to build. Accessible, responsive layouts reach more customers. None of these benefits is as dramatic as a launch-day animation, but they save time and earn money repeatedly.",
        "Clients should not spend without limits in the name of quality. The right investment is proportional to the risk and value of the product. A simple campaign page needs less discovery than a service customers use every day. My job is to identify where design thinking will prevent costly mistakes and where a straightforward solution is enough.",
      ],
      takeaways: [
        "Resolve expensive questions before development begins.",
        "Judge design by reduced confusion, rework, and support—not decoration.",
        "Invest according to the product's risk, lifespan, and business value.",
      ],
      tags: ["Investment", "Planning", "Business"],
    },
    {
      id: "slow-internet-websites",
      topic: "Performance",
      title: "Building websites that work on slow internet",
      date: "Jan 2026",
      read: "9 min",
      summary:
        "What building an app for unreliable African networks taught me about keeping websites light, fast and dependable.",
      body: [
        "A website that is fast in the studio can feel unusable to a customer on an older phone, a busy mobile network, or an expensive data plan. That gap matters across African markets, where a visitor may be interested in a service but leave before a large hero image or heavy script finishes loading.",
        "Working on a product for unreliable networks changed the order of my decisions. Content and essential actions had to appear first. Images were compressed and loaded only when needed. Fonts were limited. Decorative scripts were questioned. The interface still needed to explain what was happening when a request was slow, interrupted, or waiting to reconnect.",
        "Performance is both an engineering concern and a design choice. A developer can optimize code, but the page will remain heavy if the design requires autoplaying video, five font families, enormous photographs, and animation libraries. The best results come when speed is treated as a requirement from the first sketch.",
        "For customers, a fast website feels more professional and dependable. It appears sooner in search results, uses less data, and allows more people to complete an enquiry or purchase. Keeping a site light is not about lowering ambition; it is about making sure the work can actually reach the people it was built for.",
      ],
      takeaways: [
        "Design the essential experience to work before optional media loads.",
        "Treat image size, fonts, scripts, and animation as part of the design budget.",
        "Test on real mobile devices and constrained networks, not only office Wi-Fi.",
      ],
      tags: ["Performance", "Accessibility", "Mobile"],
    },
    {
      id: "good-design-feels-obvious",
      topic: "Design Principles",
      title: "Good design feels obvious",
      date: "Sep 2025",
      read: "4 min",
      summary:
        "The best screens are the ones nobody has to think about — a short note on keeping things simple on purpose.",
      body: [
        "People rarely visit a business website because they want to admire its interface. They want to understand an offer, compare options, find evidence they can trust, or contact someone. When the design supports those goals, it almost disappears. The visitor simply knows where to look and what to do.",
        "That feeling is not accidental. It comes from making the hierarchy clear, using familiar language, placing related information together, and removing competing actions. The hardest part is often deciding what not to show. Simplicity is the result of careful editing, not a lack of effort.",
        "A clear interface also respects what customers already know. A logo that returns home, visible navigation, readable buttons, and predictable forms are not uncreative. They reduce the amount of learning required before someone can engage with the business. Originality should strengthen the brand without making basic actions mysterious.",
        "When reviewing a design with clients, I ask practical questions: Can a new visitor explain the offer after a few seconds? Is the next step obvious? Can they use the page with one hand on a phone? If the answers are yes, the design is doing its job—even if nobody comments on it.",
      ],
      takeaways: [
        "Use familiar patterns for important actions and navigation.",
        "Create hierarchy by removing competition, not by making everything louder.",
        "Test whether visitors understand the offer and next step quickly.",
      ],
      tags: ["Clarity", "Usability", "Simplicity"],
    },
    {
      id: "website-cost-breakdown",
      topic: "Project Planning",
      title: "What a website actually costs (and why)",
      date: "Jun 2025",
      read: "7 min",
      summary:
        "A plain-English breakdown of where the money goes when you hire someone to build your site — so there are no surprises.",
      body: [
        "The price of a website is not determined only by the number of pages. Two five-page sites can require very different amounts of work. A brochure site with supplied text and images is simpler than one that needs brand direction, copywriting, booking, payments, customer accounts, or connections to existing business systems.",
        "The first cost is planning: understanding the audience, agreeing on goals, organizing content, and deciding what the site must do. Next comes design—the structure, visual direction, responsive layouts, and important states. Development turns those decisions into a working product and includes performance, accessibility, content management, testing, and integrations.",
        "There are also ongoing costs. A domain is renewed yearly. Hosting may be monthly or annual. Paid fonts, email services, analytics, payment providers, and third-party tools can have their own fees. Maintenance covers software updates, backups, security, content changes, and support after launch. These should be discussed before work begins, not hidden in a final invoice.",
        "A useful proposal makes scope and assumptions visible. It should state what is included, who supplies content, how many review rounds are planned, which services carry recurring fees, and what happens when the scope changes. The cheapest quote is not always the lowest total cost if important work has simply been left out.",
      ],
      takeaways: [
        "Ask for a scope that separates planning, design, development, and support.",
        "Confirm content responsibilities and recurring third-party costs upfront.",
        "Compare proposals by what is included—not only by the final number.",
      ],
      tags: ["Pricing", "Scope", "Planning"],
    },
    {
      id: "website-before-app",
      topic: "Digital Strategy",
      title: "You don't need an app — you need a good website",
      date: "Mar 2025",
      read: "5 min",
      summary:
        "Many small businesses ask for an app when a fast, mobile-friendly website would serve them better and cost far less.",
      body: [
        "An app can sound like the natural next step for a growing business. It feels established, gives the brand an icon on a customer's phone, and promises direct access through notifications. But those benefits only matter when customers have a reason to install the app and return to it often.",
        "Most small businesses first need discovery and trust. Customers arrive from search, social media, a shared link, or a QR code. A good website opens immediately without an app-store visit, installation, permissions, or an account. It works across phones and computers and can be updated without asking users to download a new version.",
        "Native apps also create more product to own. iOS and Android may need separate testing and store compliance. Releases require review. Notifications, authentication, offline data, privacy, and device support add real cost. If the product only presents services, accepts enquiries, takes bookings, or sells a manageable catalogue, a responsive website can usually do the job well.",
        "An app becomes justified when customers perform frequent, personal, or device-specific tasks: tracking deliveries throughout the day, working offline, using a camera or location deeply, receiving time-sensitive alerts, or managing an account repeatedly. Until that need is proven, I advise clients to build the strongest web experience first and let customer behaviour make the case for an app.",
      ],
      takeaways: [
        "Choose an app only when customers need to return frequently or use device features.",
        "A responsive website removes installation friction and reaches more people.",
        "Use the website to validate demand before funding a larger app product.",
      ],
      tags: ["Websites", "Apps", "Small Business"],
    },
  ],

  contact: {
    email: "hello@charleseze.com",
    blurb:
      "I take on a small number of projects at a time. If you're building something that needs clear design and solid frontend, let's talk.",
    /* Get a free key at https://web3forms.com — paste it below to receive form emails. */
    web3formsAccessKey: "61442813-6d44-454f-9a26-e32b0d1a9b14",
    formSubject: "New enquiry from charleseze.com",
    links: [
      { label: "Email", v: "hello@charleseze.com", href: "mailto:hello@charleseze.com" },
      { label: "LinkedIn", v: "/in/chasseze", href: "https://www.linkedin.com/in/chasseze" },
      { label: "GitHub", v: "@chasseze", href: "https://github.com/chasseze" },
      { label: "Twitter / X", v: "@chasseze", href: "https://x.com/chasseze" },
    ],
  },
};
