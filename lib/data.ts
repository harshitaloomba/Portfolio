export const profileData = {
  name: "Harshita Loomba",
  role: "Full-Stack Developer & Software Engineer",
  status: "Available for Internships & Full-Time Roles",
  title: "Computer Engineering Student | Software Development Intern at PSPCL | Full-Stack & ML",
  summary:
    "Third-year Computer Engineering undergraduate at Thapar Institute specializing in building scalable distributed platforms, Go/Next.js microservices, and data-driven pipelines. Experienced in containerized CI/CD workflows (Docker, Jenkins) with software engineering internship experience at PSPCL optimizing electrical distribution grids for 12,000+ feeders. Proven leadership managing national youth exchange operations for 120+ delegates at AIESEC.",
  image: "/ak.jpeg",
  contact: {
    phone: "+91 62391 03376",
    email: "harshitaloomba011@gmail.com",
    website: "https://harshitaloomba.vercel.app/",
    linkedin: "https://www.linkedin.com/in/harshita-loomba-975045296/",
    github: "https://github.com/harshitaloomba",
    leetcode: "https://leetcode.com/harshitaloomba",
  },
};

export const education = [
  {
    school: "Thapar Institute of Engineering and Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Patiala, Punjab",
    duration: "Aug. 2023 -- May 2027",
    cgpa: "8.1/10",
    achievement: "Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, Object Oriented Programming, Operating Systems",
  },
];

export const experience = [
  {
    company: "Punjab State Power Corporation Limited (PSPCL)",
    position: "Software Development Intern",
    location: "Patiala, Punjab",
    duration: "Jun. 2026 -- Jul. 2026",
    description: [
      "Engineered Fake Closure Detection Pipeline: Built a PHP and MySQL-based system to flag fraudulent feeder closure events, detecting 150+ false clearances and reducing report backlog by 15%.",
      "Optimized Grid Capacitor Placement: Analyzed half-hourly power consumption data across 12,477 distribution feeders, identifying optimal capacitor placement projected to reduce transmission losses by 10%.",
    ],
  },
];

export const leadership = [
  {
    organization: "AIESEC in Patiala, AIESEC in India",
    position: "Team Leader, Outgoing Global Volunteer",
    location: "Thapar Institute of Engineering and Technology",
    duration: "Feb. 2024 -- Jan. 2025",
    responsibilities: [
      "Led a high-performing team of 15+ members managing the Outgoing Global Volunteering (oGV) product for 120+ individuals, driving strategic alignment and performance management to achieve organizational objectives.",
      "Developed a data-driven dashboard analyzing 5 years of market trends to identify high-potential markets, and executed targeted marketing strategies that increased approvals and revenue by 20%, earning national recognition.",
    ],
  },
];

export const projects = [
  {
    id: "hosmas",
    title: "HOSMAS — Hostel Management System",
    category: "Microservices Platform & 3D Web",
    description:
      "In-house microservices-based hostel management platform serving 10,000+ university residents across 5 operational modules, replacing a paid third-party institutional solution and reducing operational overhead by 40%.",
    technologies: ["Next.js", "Go", "PostgreSQL", "Docker", "Django", "Three.js", "JWT Authentication"],
    duration: "Ongoing",
    metrics: [
      { label: "Residents Served", value: "10,000+" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Microservices", value: "6 Go/Django" },
    ],
    details: [
      "Architected an in-house microservices platform for 10,000+ residents across 5 operational modules, slashing third-party software overhead by 40%.",
      "Developed 6 independent Go and Django microservices with isolated PostgreSQL databases, consumed by 4 Next.js clients and secured via JWT authentication.",
      "Designed an interactive Three.js 3D visualization covering 17 hostels, enabling residents to navigate blocks, floors, and room layouts in real time.",
    ],
    links: {
      github: "https://github.com/harshitaloomba",
      live: "https://hosmas.ccstiet.com",
    },
    featured: true,
  },
  {
    id: "customer-transaction",
    title: "Customer Transaction Prediction Engine",
    category: "Machine Learning & Neural Ensembles",
    description:
      "Data-driven predictive pipeline surfacing transaction behavior insights on an imbalanced dataset (~10:1 ratio), leveraging semi-supervised pseudo-labeling to boost AUROC from 0.89 to 0.95.",
    technologies: ["Python", "LightGBM", "Neural Networks", "Scikit-learn", "Pandas", "NumPy"],
    duration: "Recent",
    metrics: [
      { label: "AUROC Score", value: "0.95" },
      { label: "Cross-Validation", value: "10-Fold" },
      { label: "Class Imbalance", value: "~10:1" },
    ],
    details: [
      "Built a data-driven pipeline on a severely imbalanced dataset (~10:1 class ratio) using semi-supervised pseudo-labeling to leverage unlabeled records, improving model AUROC from 0.89 to 0.95.",
      "Benchmarked LightGBM, neural networks, and ensemble models via 10-fold cross-validation with RankGauss normalization and shuffle augmentation.",
      "Extracted high-fidelity feature importances to identify key driver metrics governing transactional velocity.",
    ],
    links: {
      github: "https://github.com/harshitaloomba",
      live: "",
    },
    featured: true,
  },
  {
    id: "leetcode-tracker",
    title: "LeetCode Progress Tracker & CI/CD",
    category: "Full-Stack Web & DevOps",
    description:
      "Containerized problem-solving tracker with topic-wise filtering, progress analytics, and automated Jenkins CI/CD pipeline serving 100+ active users.",
    technologies: ["React.js", "Express.js", "MongoDB", "Docker", "Jenkins", "REST API"],
    duration: "Recent",
    metrics: [
      { label: "Active Users", value: "100+" },
      { label: "Deploy Time Reduction", value: "30%" },
      { label: "Pipeline", value: "Automated" },
    ],
    details: [
      "Built and deployed full-stack coding tracker using React.js, Express.js, and MongoDB with RESTful APIs, enabling topic-wise filtering and analytics for 100+ active coders.",
      "Containerized application with Docker and established automated CI/CD via Jenkins, cutting release times by 30% and eliminating manual steps.",
    ],
    links: {
      github: "https://github.com/akaushesh/Leetcode_Tracker",
      live: "https://lc-planner.vercel.app/",
    },
    featured: false,
  },
  {
    id: "banking-analytics",
    title: "Banking Client Analytics Dashboard",
    category: "Business Intelligence & Analytics",
    description:
      "Interactive Power BI and Python analytics dashboard tracking client lending, deposit velocity, and engagement across multi-tiered customer relationships.",
    technologies: ["Power BI", "Python", "Pandas", "Seaborn", "Matplotlib"],
    duration: "Recent",
    metrics: [
      { label: "Analysis Scope", value: "Cross-Filtered" },
      { label: "Client Segments", value: "High-Net-Worth" },
      { label: "Decision KPIs", value: "Real-Time" },
    ],
    details: [
      "Constructed interactive Power BI dashboard tracking loan, deposit, and engagement metrics cross-filtered by relationship, nationality, and income tier.",
      "Implemented calculated fields (Engagement Timeframe, Income Band, Total Loan, Total Deposit) converting raw transaction logs into decision-ready metrics.",
      "Conducted Python EDA with Pandas and Seaborn, discovering high-value customer clusters with elevated multi-account deposit balances.",
    ],
    links: {
      github: "https://github.com/harshitaloomba",
      live: "",
    },
    featured: false,
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
    { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
    { name: "Python", devicon: "devicon-python-plain colored" },
    { name: "C/C++", devicon: "devicon-cplusplus-plain colored" },
    { name: "PHP", devicon: "devicon-php-plain colored" },
    { name: "HTML5", devicon: "devicon-html5-plain colored" },
    { name: "CSS3", devicon: "devicon-css3-plain colored" },
  ],
  frameworks: [
    { name: "React.js", devicon: "devicon-react-original colored" },
    { name: "Next.js", devicon: "devicon-nextjs-plain colored" },
    { name: "Express.js", devicon: "devicon-express-original colored" },
    { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
    { name: "Tailwind CSS", devicon: "devicon-tailwindcss-plain colored" },
    { name: "Three.js", devicon: "devicon-threejs-original colored" },
    { name: "LightGBM" },
    { name: "Scikit-learn" },
  ],
  toolsAndCloud: [
    { name: "Docker", devicon: "devicon-docker-plain colored" },
    { name: "Jenkins", devicon: "devicon-jenkins-line colored" },
    { name: "Git / GitHub", devicon: "devicon-github-original colored" },
    { name: "CI / CD" },
    { name: "AWS", devicon: "devicon-amazonwebservices-original colored" },
    { name: "Linux", devicon: "devicon-linux-plain colored" },
    { name: "PostgreSQL", devicon: "devicon-postgresql-plain colored" },
    { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
    { name: "MySQL", devicon: "devicon-mysql-plain colored" },
    { name: "Postman", devicon: "devicon-postman-plain colored" },
    { name: "Figma", devicon: "devicon-figma-plain colored" },
    { name: "Power BI" },
    { name: "VS Code", devicon: "devicon-vscode-plain colored" },
  ],
  competencies: [
    "Agile Development",
    "System Architecture",
    "Decision Making",
    "Team Management",
    "Leadership",
    "Public Speaking",
  ],
};

export const achievements = [
  {
    title: "AWS Educate — Generative AI",
    badge: "AWS Credential",
    stat: "Certified",
    label: "Generative AI",
    description: "Certified in AWS Educate: Introduction to Generative AI, demonstrating foundational understanding of LLMs, foundation models, prompt engineering, and cloud AI use cases.",
    link: "https://www.credly.com/badges/454264c4-4c69-474b-ba5e-5cd67861e089",
    icon: "aws",
  },
  {
    title: "Deloitte Australia — Data Analytics",
    badge: "Deloitte Simulation",
    stat: "Verified",
    label: "Data Simulation",
    description: "Completed professional job simulation on Forage, applying data analysis, forensic dashboarding, and business intelligence to solve enterprise operational challenges.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_q8p7KrRxWCuCfAoaa_1753806895241_completion_certificate.pdf",
    icon: "deloitte",
  },
  {
    title: "Thapar Summer School 2024",
    badge: "TIET Program",
    stat: "ML & DL",
    label: "Machine Learning",
    description: "Completed intensive training in Python-based Machine Learning and Deep Learning, covering CNNs, NLP transformers, and advanced image processing.",
    link: "",
    icon: "code",
  },
];
