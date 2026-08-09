// ============================================================================
// Central content source for the entire portfolio.
// Sourced from: resume, internship report, and 5 real academic-project decks
// (screenshots extracted from the actual presentations/poster provided).
// Fields marked "PLACEHOLDER" are intentionally generic — swap in real values.
// ============================================================================
import {
  FiCode,
  FiFolder,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

export const profile = {
  name: "Murala Chinni Spandana",
  shortName: "Spandana",
  initials: "MS",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Java Developer",
    "AI Enthusiast",
    "Problem Solver",
  ],
  email: "mcspandana12@gmail.com",
  phone: "+91 7799179569",
  location: "Hyderabad, India",
  github: "https://github.com/spandana162",
  githubUsername: "spandana162",
  linkedin: "https://linkedin.com/in/spandana-murala",
  resumeUrl: "/RESUME_spandana___.pdf", // PLACEHOLDER: drop your resume.pdf into /public
  bio: [
    "I'm a Computer Science (Cybersecurity) student who builds software from both sides of the fence — as a developer shipping full-stack features, and as a penetration tester trying to break them. That combination shapes how I work: I design systems assuming they'll be attacked, and I test systems with the structured, algorithmic thinking I'd use to solve a DSA problem.",
    "My hands-on experience spans Java and Spring Boot on the backend, React and Node.js on the front, and SQL/MongoDB for data — plus applied AI work in TensorFlow and OpenCV, and security tooling like Burp Suite. I've cut API response times by rewriting slow queries, caught real access-control gaps before they shipped, and built AI systems that hit 98% classification accuracy.",
    "I care about scalable systems, clean APIs, and code that's been actually tested — not just written. Outside of internships, I keep sharpening the fundamentals: 700+ DSA problems solved, several full-stack and AI projects shipped end-to-end, and a growing list of security and cloud certifications.",
  ],
};
export const stats = [
  {
    label: "DSA Problems",
    value: 700,
    suffix: "+",
    icon: FiCode,
  },
  {
    label: "Projects Built",
    value: 15,
    suffix: "+",
    icon: FiFolder,
  },
  {
    label: "Internships",
    value: 2,
    suffix: "",
    icon: FiBriefcase,
  },
  {
    label: "Certifications",
    value: 9,
    suffix: "+",
    icon: FiAward,
  },
];
export const journey = [
  { year: "2022", title: "Started B.Tech CSE (Cybersecurity)", detail: "SVECW, Bhimavaram — laid the DSA & CS fundamentals." },
  { year: "2024", title: "Full Stack Developer Intern", detail: "SkillDzire — shipped REST APIs in Java & Spring Boot." },
  { year: "2024", title: "Academic project sprint", detail: "AgriCare, LostNFound, Customer Segmentation & AI Interview Platform, built with a 5-person team." },
  { year: "2025", title: "Penetration Tester", detail: "IBaseIT — found real access-control & injection vulnerabilities in enterprise apps." },
  { year: "2026", title: "Graduating & job hunting", detail: "700+ DSA problems solved, actively interviewing for SWE/backend roles." },
];

export const skillCategories = [
  { id: "languages", label: "Languages", skills: ["Java", "JavaScript", "Python", "PHP", "SQL", "C", "C++"] },
  { id: "frontend", label: "Frontend", skills: ["React", "HTML5", "CSS3", "Tailwind CSS"] },
  { id: "backend", label: "Backend", skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"] },
  { id: "database", label: "Database", skills: ["MySQL", "MongoDB", "Supabase"] },
  { id: "ai", label: "AI", skills: ["TensorFlow", "OpenCV", "Google Vertex AI", "Gemini API"] },
  { id: "tools", label: "Tools", skills: ["Git", "Linux", "VS Code", "Postman", "Burp Suite"] },
  { id: "soft", label: "Soft Skills", skills: ["Problem Solving", "Teamwork", "Communication", "Agile"] },
];

export const experience = [
  {
    role: "Penetration Tester",
    company: "IBaseIT",
    location: "Hyderabad, India",
    period: "Mar 2025 — Sep 2025",
    tags: ["Security Testing", "SQL Injection", "Burp Suite", "RBAC Testing", "OWASP Top 10"],
    points: [
      "Tested 2 enterprise web applications (QBEME, QBEMY) using Burp Suite and found broken access control, session hijacking, and SQL injection issues across 15+ test cases — with no pre-built checklist to follow, had to define the approach from scratch.",
      "Designed and ran 50+ test cases to validate role-based access control across 3 user levels (General Users, CA Admins, ACU_UAT), catching 10+ real gaps before the product went live.",
      "Tested access control by swapping JSESSIONIDs and modifying request parameters between roles, then verified in the UI whether restricted actions were correctly blocked.",
      "Partnered with engineers across two sprint cycles to confirm each fix actually worked, cutting failed re-tests by about 20%.",
      "Broke down large, ambiguous application problems into smaller, testable components by mapping how data and access moved through the system — applying the same structured, algorithmic thinking used to solve DSA problems.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SkillDzire",
    location: "Remote",
    period: "Jan 2024 — Apr 2024",
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "Query Optimization"],
    points: [
      "Built 3+ REST APIs from scratch in Java and Spring Boot, working in 2-week agile sprints, and cut API response time by about 30% by rewriting slow parts of the code.",
      "Rewrote MySQL queries with complex joins and better indexing, cutting data retrieval time by about 25%, and shipped every feature with zero critical bugs at release.",
    ],
  },
];

export const education = {
  school: "SVECW, Bhimavaram",
  degree: "B.Tech in Computer Science & Engineering (Cybersecurity)",
  period: "Oct 2022 — Apr 2026",
  cgpa: "8.85 / 10",
  cgpaPct: 0.885,
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems (SQL, Relational Databases)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering (SDLC)",
    "Cybersecurity",
    "Discrete Mathematics",
    "Machine Learning",
  ],
};

export type ProjectImage = { src: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  team?: string;
  challenges?: string[];
  learnings?: string[];
  github: string;
  demo?: string;
  featured: boolean;
  metric?: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "gesture-math-solver",
    title: "Gesture Math Solver",
    tagline: "Hands-free calculator driven by real-time computer vision",
    overview:
      "A desktop calculator controlled entirely by hand gestures. MediaPipe extracts 21 landmarks per hand from a live webcam feed, a gesture layer converts finger poses into digits and operators, and a safe evaluator computes the result — which is then spoken aloud. Built as a production-style desktop application with a themed UI, calculation history, settings persistence and a full test suite.",
    problem:
      "Conventional calculators require touch, which excludes users who cannot comfortably use a keyboard or touchscreen. An early prototype proved gesture input was viable but was a single 149-line script: it evaluated input with Python's eval(), had no error handling, and repeated a digit continuously whenever a pose was held.",
    solution:
      "Refactored into 16 typed modules across core / features / UI layers. Replaced eval() with an AST evaluator that whitelists numeric literals and five operators, rejecting all other syntax before execution. Added a hold-to-lock gesture rule so a held pose registers exactly once, camera capture on a worker thread that drops stale frames to keep latency low, and a multi-backend speech system that falls back to the OS-native synthesiser when the Python TTS package is unavailable.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "Tkinter", "Pillow", "Computer Vision"],
    features: [
      "Real-time hand tracking at 21 landmarks per hand",
      "Digits 0-9 and four operators via one- and two-hand poses",
      "AST-whitelisted evaluation (no eval)",
      "Live HUD: FPS, detection confidence, active gesture",
      "Three runtime-switchable themes",
      "Calculation history with text and JSON export",
      "Offline text-to-speech with automatic backend fallback",
      "Timestamped screenshot capture",
      "Keyboard input as an accessibility alternative",
    ],
    team: "Solo project",
    challenges: [
      "Holding a pose re-entered the same digit every cooldown, making multi-digit entry unusable.",
      "On Windows the speech engine is COM-based and thread-affine — an engine created on the main thread and called from a worker failed silently, with no audio and no exception.",
      "Field conditions vary: lighting and hand position change detection confidence frame to frame.",
    ],
    learnings: [
      "Gesture input needs an explicit release rule; without one, continuous recognition becomes continuous repetition.",
      "Silent failures are worse than crashes — the COM threading bug produced no error at all, which is why the speech layer now has fallback backends and a built-in diagnostic.",
      "eval() on user-controlled input is a latent RCE; an AST whitelist costs ~40 lines and closes it entirely.",
    ],
    github: "https://github.com/spandana162",
    featured: true,
    metric: "12/12 unit tests passing",
    images: [
      { src: "/projects/gesture-math-solver/loading-screen.png", caption: "Animated loading screen with real startup stages" },
      { src: "/projects/gesture-math-solver/main-dashboard.png", caption: "Main dashboard — live feed, gesture guide and history" },
      { src: "/projects/gesture-math-solver/gesture-detection.png", caption: "Hand landmark detection at 99% confidence" },
      { src: "/projects/gesture-math-solver/solved-result.png", caption: "Solved result with expression and answer" },
      { src: "/projects/gesture-math-solver/settings-window.png", caption: "Settings — camera, sensitivity, voice and theme" },
    ],
  },
  {
    slug: "ai-interview-platform",
    title: "AI Interview Practice Platform",
    tagline: "AI-driven mock interviews, feedback & career coaching",
    overview:
      "A full-stack AI-powered interview preparation and recruitment platform with role-based dashboards for Admins, Recruiters, and Candidates. It runs realistic AI-generated interviews, gives NLP-based feedback on answers, offers AI career coaching, and includes an integrated code editor for technical practice — all without needing a second person in the room.",
    problem:
      "Students and job seekers rarely get to rehearse interviews in a realistic, judgment-free setting, and generic mock-interview tools don't adapt questions or give meaningful feedback on the actual answer content.",
    solution:
      "Built on the MERN stack with the Gemini API driving question generation and NLP-based response analysis. RBAC (JWT-based) separates Admin, Recruiter, and Candidate views so recruiters can review candidate performance while candidates only see their own data. A built-in code editor lets candidates practice technical questions in the same flow as the interview.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "JWT", "RBAC"],
    features: [
      "AI-generated mock interviews (technical & HR)",
      "NLP-based response analysis & feedback",
      "AI career coaching",
      "Integrated code editor for coding practice",
      "Recruiter dashboard to review candidates",
      "Admin dashboard for platform management",
    ],
    team: "Team project (5) — B.Tech final year, batch D7",
    challenges: [
      "Serving three very different user roles from one codebase without leaking permissions across them.",
      "Getting AI-generated interview questions to feel adaptive and realistic rather than generic.",
    ],
    learnings: [
      "Designing RBAC around JWT claims checked at both API and route level.",
      "Using NLP to score open-ended answers instead of just keyword matching.",
    ],
    github: "https://github.com/spandana162",
    featured: true,
    metric: "3 role-based dashboards",
    images: [
      { src: "/projects/ai-interview/01-registration.png", caption: "Registration" },
      { src: "/projects/ai-interview/02-profile.png", caption: "User profile" },
      { src: "/projects/ai-interview/03-dashboard.png", caption: "User dashboard" },
      { src: "/projects/ai-interview/04-live-interview.png", caption: "Live AI interview" },
      { src: "/projects/ai-interview/05-ai-feedback.png", caption: "AI feedback" },
      { src: "/projects/ai-interview/06-career-coach.png", caption: "AI career coach" },
      { src: "/projects/ai-interview/07-code-practice.png", caption: "Code practice" },
    ],
  },
  {
    slug: "trash-tracker",
    title: "Trash Tracker",
    tagline: "Real-time smart waste-collection platform",
    overview:
      "A smart waste-management platform offering real-time vehicle tracking for efficient collection and a friendly interface for residents to request pickups. Separate Driver and User apps stay in sync through push notifications, with an admin layer overseeing the whole operation.",
    problem:
      "Residents had no visibility into when a collection vehicle would actually arrive, and drivers had no structured way to receive and manage pickup requests — leading to missed collections and no accountability.",
    solution:
      "Built the Driver app to log in, view and accept/decline requests, and update job status in real time. The User app lets residents register, submit pickup requests by category (biodegradable, non-biodegradable, e-waste, etc.), and get notified automatically once the truck is roughly 2km away — powered by GPS and Google Maps, with Firebase/Supabase handling realtime sync.",
    tech: ["Flutter", "FlutterFlow", "Supabase", "Firebase", "Google Maps", "GPS"],
    features: [
      "Real-time vehicle/GPS tracking",
      "Driver app — accept/decline pickup requests",
      "User app — request pickup, track status, view history",
      "Proximity-based push notifications",
      "Admin database overseeing drivers & requests",
    ],
    team: "Team project (4) — B.Tech, SVECW",
    challenges: [
      "Keeping driver location, job status, and resident notifications in sync across two separate apps in real time.",
      "Notifying users at the right moment (≈2km out) without spamming them.",
    ],
    learnings: [
      "Using Supabase realtime subscriptions to push state changes instantly across apps.",
      "Structuring a waste-category workflow (biodegradable / non-biodegradable / e-waste) end-to-end.",
    ],
    github: "https://github.com/spandana162",
    featured: true,
    images: [
      { src: "/projects/trash-tracker/01-driver-app-screens.jpg", caption: "Driver app — login, location access, home menu, profile, trip history, requests" },
      { src: "/projects/trash-tracker/02-user-app-screens.jpg", caption: "User app — onboarding, registration, home dashboard, request creation, profile, live tracking, requests" },
    ],
  },
  {
    slug: "agricare",
    title: "AgriCare",
    tagline: "Smart rice leaf disease diagnosis & cure recommendation",
    overview:
      "A Streamlit-based application that helps farmers identify diseases affecting rice crop leaves and get treatment guidance. Farmers upload a photo of an infected leaf; an EfficientNet-based CNN model detects the disease, highlights the infected region, estimates severity, and recommends treatment — all stored locally so it works without a continuous internet connection.",
    problem:
      "Farmers often catch crop disease too late, without an easy way to identify it or know how to treat it — leading to avoidable crop loss and pesticide misuse.",
    solution:
      "Trained an EfficientNet-based CNN with transfer learning on rice leaf disease images, added Grad-CAM visualization to highlight the actual infected area (not just a label), and built a severity-estimation + dosage-calculation step so recommendations are proportional to how bad the infection is.",
    tech: ["Python", "Streamlit", "TensorFlow", "EfficientNet", "CNN", "OpenCV", "Grad-CAM"],
    features: [
      "Upload leaf image for instant analysis",
      "AI disease detection (98% classification accuracy)",
      "Grad-CAM infected-area highlighting",
      "Severity estimation",
      "Treatment recommendation + dose calculator",
      "Works offline via local treatment database",
    ],
    team: "Team project (5) — B.Tech final-year major project, batch D7",
    challenges: [
      "Field images are noisy — inconsistent lighting, angle, and background usually tank CNN accuracy.",
      "Making the model's decision explainable to non-technical farmers.",
    ],
    learnings: [
      "Transfer learning drastically cuts training time and data needs for a narrow domain like crop disease.",
      "Grad-CAM builds trust — showing *where* the model is looking matters as much as the prediction.",
    ],
    github: "https://github.com/spandana162",
    featured: true,
    metric: "98% classification accuracy",
    images: [
      { src: "/projects/agricare/01-upload.png", caption: "Upload paddy leaf image" },
      { src: "/projects/agricare/02-detection.png", caption: "Disease detection" },
      { src: "/projects/agricare/03-severity.png", caption: "Severity estimation" },
      { src: "/projects/agricare/04-result.png", caption: "Results page" },
      { src: "/projects/agricare/05-treatment.png", caption: "Treatment recommendation" },
    ],
  },
  {
    slug: "lostnfound",
    title: "LostNFound",
    tagline: "Secure campus lost-and-found platform",
    overview:
      "A campus web application that streamlines recovering lost items — students can report lost items, browse found items, and search efficiently, while admins manage entries from a dedicated dashboard.",
    problem:
      "Lost items on campus were tracked informally (notice boards, word of mouth), making it slow and unreliable to reunite people with their belongings.",
    solution:
      "Built a PHP/MySQL web app with authenticated accounts, a relational schema (table relationships, primary/foreign keys, complex joins) optimized for fast search, and an admin dashboard for centralized management of lost/found reports.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Secure authentication",
      "Post a lost item / found item",
      "Search & browse items",
      "Admin dashboard for managing entries",
      "SQL-optimized lookups",
    ],
    team: "Team project (5) — B.Tech CSE (Cybersecurity), batch CS7",
    challenges: ["Designing a schema that stays fast to search as reported-item volume grows."],
    learnings: ["Applying relational database fundamentals (joins, keys) to a real, if small-scale, production schema."],
    github: "https://github.com/spandana162",
    featured: true,
    images: [
      { src: "/projects/lostnfound/01-dashboard.jpg", caption: "Dashboard" },
      { src: "/projects/lostnfound/02-lost-items.jpg", caption: "Lost items" },
      { src: "/projects/lostnfound/03-found-items.jpg", caption: "Found items" },
      { src: "/projects/lostnfound/04-search.jpg", caption: "Search" },
      { src: "/projects/lostnfound/05-admin.jpg", caption: "Admin panel" },
    ],
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    tagline: "K-Means clustering to power smarter marketing",
    overview:
      "A machine-learning project that segments customers into distinct groups based on income, spending, and behavioral data — helping a business tailor campaigns instead of treating every customer the same.",
    problem:
      "Businesses often can't tell which customers behave alike, so marketing spend and messaging end up generic instead of targeted.",
    solution:
      "Cleaned and preprocessed a 29-feature customer dataset, ran bivariate and multivariate analysis to pick meaningful dimensions, then applied Scikit-learn's K-Means to cluster customers by income and spend — visualized with Plotly/Matplotlib so the segments are actually interpretable.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "K-Means", "Matplotlib", "Plotly"],
    features: [
      "Data cleaning & preprocessing pipeline",
      "Bivariate & multivariate analysis",
      "K-Means clustering",
      "Interactive Plotly cluster visualizations",
    ],
    team: "Team project (5) — B.Tech CSE (Cybersecurity), batch CS7",
    challenges: ["Choosing the right number of clusters (K) and features so segments stay meaningful, not just statistically distinct."],
    learnings: ["End-to-end unsupervised ML workflow: cleaning → feature selection → clustering → visualization."],
    github: "https://github.com/spandana162",
    featured: true,
    images: [
      { src: "/projects/customer-segmentation/01-bivariate.png", caption: "Bivariate analysis" },
      { src: "/projects/customer-segmentation/02-multivariate.png", caption: "Multivariate analysis" },
      { src: "/projects/customer-segmentation/03-clusters.png", caption: "Clustering by income & spend" },
      { src: "/projects/customer-segmentation/04-clusters-3d.jpg", caption: "Clustering by income, age & spend" },
      { src: "/projects/customer-segmentation/05-implementation.jpg", caption: "K-Means implementation" },
    ],
  },
  {
    slug: "phishing-detector",
    title: "AI-Powered Phishing Website Detector",
    tagline: "ML-based phishing URL detection",
    overview:
      "A machine-learning system that analyzes URL and page-structure features to flag likely phishing websites before a user interacts with them.",
    problem: "Phishing sites are easy to spin up and often bypass simple blocklist-based detection.",
    solution: "Extracted URL/page-structure features and trained a classifier to flag likely-phishing sites, served through a lightweight Flask API.",
    tech: ["Machine Learning", "Python", "Flask", "URL Analysis", "Cybersecurity"],
    features: ["URL feature extraction", "AI-based detection", "Cybersecurity-focused evaluation"],
    github: "https://github.com/spandana162",
    featured: true,
    images: [],
  },
  {
    slug: "password-manager",
    title: "Password Manager",
    tagline: "Encrypted local password vault",
    overview: "A password manager focused on secure storage — encrypting saved credentials, generating strong passwords, and gating access behind authentication.",
    problem: "Reusing weak passwords across sites is one of the most common security failures.",
    solution: "Encrypts stored credentials at rest, includes a strong password generator, and gates the vault behind authentication.",
    tech: ["Encryption", "Authentication"],
    features: ["Password encryption", "Secure storage", "Password generator", "Authentication"],
    github: "https://github.com/spandana162",
    featured: true,
    images: [],
  },
  {
    slug: "crypto-dashboard",
    title: "Crypto Dashboard",
    tagline: "Live cryptocurrency analytics dashboard",
    overview: "A dashboard that pulls live data from a cryptocurrency API and renders it as interactive charts for quick market analysis.",
    problem: "Raw exchange data isn't quick to scan — traders need visual, at-a-glance summaries.",
    solution: "Connected a live cryptocurrency API and rendered the data as interactive, filterable charts.",
    tech: ["Cryptocurrency API", "Charts"],
    features: ["Live charts", "Dashboard", "Analytics"],
    github: "https://github.com/spandana162",
    featured: true,
    images: [],
  },
  {
    slug: "mini-ecommerce",
    title: "Mini E-Commerce",
    tagline: "Responsive shopping cart & product platform",
    overview: "A compact e-commerce experience covering the essentials: browsing products, managing a cart, and authenticating users, fully responsive.",
    problem: "Small catalogs don't need a heavyweight e-commerce stack — just the essentials, done well.",
    solution: "Built product management, an authenticated cart flow, and a fully responsive layout from scratch.",
    tech: ["Authentication", "Responsive Design"],
    features: ["Shopping cart", "Authentication", "Product management", "Responsive design"],
    github: "https://github.com/spandana162",
    featured: true,
    images: [],
  },
];

export const otherProjects = [
  { title: "GameLoom", note: "Game discovery / library project" },
  { title: "Notes App", note: "Lightweight note-taking app" },
  { title: "To-Do List", note: "Task management app" },
  { title: "Joiner Circuit", note: "Circuit / networking utility" },
  { title: "Security Web Password", note: "Web-based password security tool" },
  { title: "GC Internship Project", note: "Built during internship" },
  { title: "Mini Project", note: "Academic mini project" },
];

export type Achievement = { title: string; detail: string; icon: string; count?: number; suffix?: string };

export const achievements: Achievement[] = [
  { title: "700+ DSA Problems Solved", detail: "Across LeetCode, HackerRank & CodeChef", icon: "trophy", count: 700, suffix: "+" },
  { title: "HackerRank Problem Solving — Silver Badge", detail: "Competitive programming badge", icon: "medal" },
  { title: "Hackathon Finalist", detail: "PRAJWALAN 2K24 — National Hackathon", icon: "flag" },
  { title: "Google Cybersecurity Professional Certificate", detail: "Google", icon: "shield" },
  { title: "IBM Cybersecurity Analyst Professional Certificate", detail: "IBM", icon: "shield-check" },
  { title: "Oracle SQL Certification", detail: "SQL query design & relational database concepts", icon: "database" },
  { title: "Fortinet Network Security", detail: "Fortinet", icon: "network" },
  { title: "Google Generative AI", detail: "Google", icon: "sparkles" },
  { title: "Anthropic AI Fluency & Claude 101", detail: "Anthropic", icon: "bot" },
  { title: "Prompt Design in Vertex AI", detail: "Google Cloud", icon: "wand" },
];



export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
