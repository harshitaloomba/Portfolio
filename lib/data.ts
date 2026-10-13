export const profileData = {
  name: "Harshita Loomba",
  role: "ML Engineer & Full-Stack Developer",
  status: "Available for Internships & Projects",
  title: "Computer Engineering Student | ML Enthusiast | Data-Driven Problem Solver",
  summary:
    "Computer Engineering student at Thapar Institute specializing in Machine Learning, Computer Vision, and Data Analytics. Creator of MOKSHA (real-time posture correction engine with 95% accuracy) and architect of the TIET Robotics Lab research showcase. Passionate about turning complex data streams and vision models into high-performance, intuitive software.",
  image: "/ak.jpeg",
  contact: {
    phone: "+91 623-910-3376",
    email: "hloomba_be23@thapar.edu",
    linkedin: "http://linkedin.com/in/harshita-loomba-975045296",
    github: "https://github.com/harshitaloomba",
  },
};

export const education = [
  {
    school: "Thapar Institute of Engineering and Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Patiala, Punjab",
    duration: "Aug. 2023 -- May 2027",
    cgpa: "8.21/10",
    achievement: "Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Database Systems, Finance Accounting & Valuation",
  },
];

export const experience = [
  {
    company: "AIESEC in Patiala, AIESEC in India",
    position: "Team Leader, Outgoing Global Volunteer",
    location: "Thapar Institute of Engineering and Technology",
    duration: "Feb. 2024 -- Jan. 2025",
    description: [
      "Extracted and synthesized 5 years of historical exchange data across global operations, revealing pipeline bottlenecks to inform strategic decision-making and revenue generation.",
      "Oversaw product lifecycle and customer journey for 100+ international exchange participants, ensuring seamless operational alignment with national organizational targets.",
      "Designed and executed data-backed digital outreach campaigns, delivering a 20% increase in qualified participant conversion and engagement.",
      "Spearheaded weekly performance tracking frameworks and cross-functional syncs to keep field operations agile and aligned.",
    ],
  },
];

export const projects = [
  {
    id: "moksha",
    title: "MOKSHA — AI Yoga Posture Correction Engine",
    category: "Computer Vision / Machine Learning",
    description:
      "Real-time computer vision system that tracks anatomical joint vectors and provides instant feedback on yoga pose alignment with 95% accuracy.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "JavaScript", "HTML5", "CSS3"],
    duration: "Recent",
    metrics: [
      { label: "Pose Accuracy", value: "95%" },
      { label: "Injury Risk Reduction", value: "30%" },
      { label: "Processing", value: "Real-Time" },
    ],
    details: [
      "Engineered real-time geometric angle computation across 33 anatomical keypoints to validate posture alignment against standardized yoga benchmarks.",
      "Achieved 95% classification precision with sub-50ms latency for seamless frame-by-frame user feedback.",
      "Crafted an interactive web interface offering visual posture guidance and error cues to prevent joint hyperextension.",
    ],
    links: {
      github: "https://github.com/harshitaloomba/Yoga-Pose-Predictor",
      live: "",
    },
    featured: true,
  },
  {
    id: "robotics-lab",
    title: "TIET Robotics Lab Platform",
    category: "Full-Stack Web Architecture",
    description:
      "Component-driven research platform for Thapar Institute's Robotics Lab, showcasing ongoing faculty publications, robotics projects, and lab resources.",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Vercel"],
    duration: "Ongoing",
    metrics: [
      { label: "Visibility", value: "+40%" },
      { label: "Page Load Speed", value: "35% Faster" },
      { label: "Modular Components", value: "12+" },
    ],
    details: [
      "Architected responsive, SEO-optimized research hub featuring 8+ faculty research initiatives and active lab equipment inventories.",
      "Engineered 12+ modular React components, standardizing UI architecture and slashing page load times by 35%.",
      "Collaborated directly with faculty lab directors to translate technical research milestones into an engaging public-facing portal.",
    ],
    links: {
      github: "https://github.com/harshitaloomba",
      live: "https://robotics-lab-tiet.vercel.app/",
    },
    featured: true,
  },
];

export const skills = {
  core: [
    { name: "Python", category: "Languages", devicon: "devicon-python-plain colored" },
    { name: "C/C++", category: "Languages", devicon: "devicon-cplusplus-plain colored" },
    { name: "JavaScript", category: "Languages", devicon: "devicon-javascript-plain colored" },
    { name: "R", category: "Languages", devicon: "devicon-r-plain colored" },
    { name: "HTML5/CSS3", category: "Languages", devicon: "devicon-html5-plain colored" },
  ],
  mlAndData: [
    { name: "Computer Vision", category: "AI & ML" },
    { name: "Machine Learning", category: "AI & ML" },
    { name: "Deep Learning", category: "AI & ML" },
    { name: "Data Analytics", category: "Analytics" },
    { name: "NumPy & Pandas", category: "Analytics", devicon: "devicon-pandas-plain colored" },
    { name: "Image Processing", category: "AI & ML" },
  ],
  frontend: [
    { name: "React.js", category: "Frontend", devicon: "devicon-react-original colored" },
    { name: "Tailwind CSS", category: "Frontend", devicon: "devicon-tailwindcss-plain colored" },
  ],
  backend: [
    { name: "Node.js", category: "Backend", devicon: "devicon-nodejs-plain colored" },
    { name: "Express.js", category: "Backend", devicon: "devicon-express-original colored" },
    { name: "MongoDB", category: "Database", devicon: "devicon-mongodb-plain colored" },
    { name: "MySQL", category: "Database", devicon: "devicon-mysql-plain colored" },
  ],
  devops: [
    { name: "Docker", category: "DevOps", devicon: "devicon-docker-plain colored" },
    { name: "Git & GitHub", category: "DevOps", devicon: "devicon-github-original colored" },
    { name: "GitHub Actions", category: "DevOps", devicon: "devicon-githubactions-plain colored" },
    { name: "Vercel", category: "DevOps", devicon: "devicon-vercel-plain" },
    { name: "AWS", category: "Cloud", devicon: "devicon-amazonwebservices-original colored" },
    { name: "Azure", category: "Cloud", devicon: "devicon-azure-plain colored" },
    { name: "Jenkins", category: "DevOps", devicon: "devicon-jenkins-line colored" },
    { name: "Nginx", category: "DevOps", devicon: "devicon-nginx-original colored" },
  ],
  tools: [
    { name: "VS Code", category: "Tools", devicon: "devicon-vscode-plain colored" },
    { name: "Tableau", category: "Analytics" },
    { name: "Figma", category: "Design", devicon: "devicon-figma-plain colored" },
    { name: "Postman", category: "API", devicon: "devicon-postman-plain colored" },
    { name: "Jira", category: "Management", devicon: "devicon-jira-plain colored" },
    { name: "Trello", category: "Management", devicon: "devicon-trello-plain colored" },
    { name: "Notion", category: "Productivity", devicon: "devicon-notion-plain colored" },
  ],
};

export const achievements = [
  {
    title: "Deloitte Australia — Data Analytics",
    badge: "Deloitte Simulation",
    stat: "Verified",
    label: "Industry Credential",
    description: "Completed professional job simulation demonstrating business intelligence, dashboard synthesis, and data-driven client recommendations.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_q8p7KrRxWCuCfAoaa_1753806895241_completion_certificate.pdf",
    icon: "deloitte",
  },
  {
    title: "Thapar Summer School 2024",
    badge: "Intensive Program",
    stat: "ML & DL",
    label: "Specialization",
    description: "Intensive theoretical and practical immersion in Python machine learning algorithms, deep neural networks, NLP, and computer vision pipelines.",
    link: "",
    icon: "code",
  },
  {
    title: "Corporate Roadies 2023",
    badge: "Enactus TIET",
    stat: "3rd Place",
    label: "Case Competition",
    description: "Secured 3rd position in annual strategic case and business decision-making competition conducted by Enactus, Thapar University.",
    link: "",
    icon: "trophy",
  },
];

export const leadership = [
  {
    organization: "AIESEC in Patiala",
    position: "Team Leader — Outgoing Global Volunteer",
    location: "Thapar Institute of Engineering and Technology",
    duration: "Feb. 2024 -- Jan. 2025",
    responsibilities: [
      "Guided a high-performing team of 15+ members across strategic talent cultivation and operational goal achievement.",
      "Facilitated international leadership exchange programs for 100+ youth, coordinating with international partner entities.",
      "Organized recruitment drives, leadership workshops, and youth impact symposiums across the university campus.",
    ],
  },
];
