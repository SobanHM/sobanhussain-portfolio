export const portfolioData = {
  personalInfo: {
    name: "Soban Hussain",
    titles: ["AI/ML Engineer", "AI Research & Development", "Jr. Web Developer"],
    location: "Sukkur, Pakistan",
    emails: ["sobanhussainmahesar@gmail.com", "sobanhussain.bscsf22@iba-suk.edu.pk"],
    phone: "+92 313 2265232",
    github: "https://github.com/SobanHM",
    linkedin: "https://www.linkedin.com/in/soban-hussaain-java-software-web-developer/",
    summary: "Fresh Computer Science graduate from Sukkur IBA University focused on AI/ML, Deep Learning, NLP, Computer Vision, and research-oriented model development, combined with hands-on experience building web, Java, database-backed, and AI-enabled software systems. Ready to convert complex business and research requirements into high-performing, maintainable applications.",
    slogan: "Open to AI/ML Engineer, Research Assistant, and Applied AI roles — let's build something worth believing in."
  },
  education: {
    degree: "BS in Computer Science",
    institution: "Sukkur IBA University",
    duration: "2022 – 2026",
    location: "Sukkur, Pakistan",
    cgpa: "3.2",
    details: [
      "Completed all degree requirements through the 8th semester",
      "Relevant Coursework: Artificial Intelligence, Machine Learning, Deep Learning, Advanced Data Analytics, Database Management Systems, Web Development, Object-Oriented Programming, Software Engineering"
    ]
  },
  coreStrengths: [
    {
      title: "Deep Learning & Generative AI",
      description: "Practical experience with VLM benchmarking, LLaVA-based scene understanding, LoRA fine-tuning, RAG pipelines, and personalized chatbot systems."
    },
    {
      title: "Applied Machine Learning",
      description: "End-to-end ML workflows: data preparation, feature extraction, class-imbalance (SMOTE), model evaluation for speaker, emotion, and disease prediction."
    },
    {
      title: "Web & Database Engineering",
      description: "Building React, JavaScript, HTML5/CSS3 interfaces, backed by secure Java/MySQL operations, custom APIs, and SHA-256 transaction handling."
    },
    {
      title: "Research & Experimentation",
      description: "Strong foundation in literature reviews, dataset curation, model comparison, and technical reporting, resulting in an accepted iCOMET 2026 paper."
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "Java", "SQL", "C++"],
    webDev: ["React", "HTML5", "CSS3", "Responsive UI", "Component-Based Development", "API Integration", "CRUD Workflows"],
    aiMl: ["PyTorch", "Scikit-Learn", "XGBoost", "LightGBM", "OpenCV", "DeepSORT", "SMOTE", "Predictive Modeling"],
    genAiNlp: ["RAG", "Vector Search", "BERT", "RoBERTa", "LLaVA", "CogVLM", "Qwen-VL", "BLIP-2", "LoRA Fine-Tuning"],
    databasesTools: ["MySQL", "MongoDB", "Relational Database Design", "GitHub", "Secure System Design", "LaTeX/Overleaf", "Technical Documentation"]
  },
  experience: [
    {
      role: "IT & Automation Intern",
      company: "Pakistan National Assembly Secretariat",
      duration: "25 June 2025 – 6 August 2025",
      location: "Islamabad, Pakistan",
      highlights: [
        "Developed a machine-learning-based speaker recognition system to support automated identity verification in a secure institutional environment.",
        "Processed audio data, extracted discriminative features, trained classifiers, and validated model behavior for reliability-sensitive use cases.",
        "Produced technical documentation and deployment concepts aligned with confidentiality, secure data processing, and public-sector IT standards."
      ]
    },
    {
      role: "Java Developer Intern",
      company: "Programmers Tech IT Company",
      duration: "June 2023 – August 2023",
      location: "Pakistan",
      highlights: [
        "Engineered Java and MySQL applications for banking, education, and management use cases, strengthening full-cycle software development discipline.",
        "Improved database organization, application usability, API-supported processes, and data integrity across client-oriented systems.",
        "Collaborated with team members to translate user requirements into maintainable, scalable, and testable software modules."
      ]
    }
  ],
  projects: [
    {
      title: "SceneNarrator: VLM Benchmarking & Fine-Tuning",
      category: "ai",
      tech: ["LLaVA", "Vision-Language Models", "Python", "PyTorch", "LoRA"],
      description: "Created an assistive scene-narration and navigation-guidance solution using fine-tuned Vision-Language Models for spatial understanding.",
      highlights: [
        "Selected as an Accepted Paper Presenter at iCOMET 2026, with publication expected in the IEEE Xplore Digital Library.",
        "Curated localized visual-language data and applied LoRA-based supervised fine-tuning to improve scene interpretation."
      ],
      type: "Final Year Project, 2026"
    },
    {
      title: "Personalized RAG Chatbot System",
      category: "ai",
      tech: ["Python", "Retrieval-Augmented Generation", "NLP", "Vector Search"],
      description: "Implemented a personalized chatbot that combines semantic retrieval with generative responses for accurate, context-aligned user support.",
      highlights: [
        "Structured document ingestion, embedding-based search, retrieved-context grounding, and response generation for knowledge-aware conversation."
      ],
      type: "Research Project"
    },
    {
      title: "Notes Sharing Website",
      category: "web",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      description: "Developed a student-focused web application for sharing, browsing, and accessing semester notes through a clean interface.",
      highlights: [
        "Implemented component-based pages, interactive JavaScript behavior, structured content presentation, and responsive front-end layouts."
      ],
      type: "Semester Project"
    },
    {
      title: "Fine-Grained Emotion Classifier",
      category: "ai",
      tech: ["NLP", "Transformers", "RoBERTa", "Scikit-Learn"],
      description: "Developed an emotion classification system using a fine-grained dataset built from GoEmotions raw data mapped to Ekman's six basic emotions.",
      highlights: [
        "Evaluated SVM, Logistic Regression, KNN, Random Forest, Naive Bayes, BERT, and RoBERTa; fine-tuned RoBERTa as the best-performing model.",
        "Achieved 89.0% F1-score, 89.4% accuracy, and 90.0% recall on the test dataset."
      ],
      type: "Research Project"
    },
    {
      title: "Bank Management System",
      category: "web",
      tech: ["Java", "MySQL", "APIs", "SHA-256 Cryptography"],
      description: "Architected a secure banking application with employee registration, administrative controls, ATM transactions, and account management modules.",
      highlights: [
        "Implemented SHA-256-based transaction handling and structured MySQL workflows to protect core banking data integrity.",
        "Presented at Grand Tech Expo, ranking 5th among the top 10 projects."
      ],
      type: "Exhibition Project"
    },
    {
      title: "NLP-Based Conversational AI for Dementia Support",
      category: "ai",
      tech: ["Conversational AI", "NLP", "Responsible AI"],
      description: "Designed a human-centered conversational AI system for early-stage dementia support with structured dialogue, reminders, and emotional reassurance.",
      highlights: [
        "Emphasized responsible AI through limited autonomy, interpretability, minimal data retention, and controlled simulated testing."
      ],
      type: "Research Project"
    },
    {
      title: "College Management Real-Time Dedicated System",
      category: "web",
      tech: ["Java", "MySQL"],
      description: "Developed a real-time college management ecosystem with 10 standalone modules for complex academic and administrative operations.",
      highlights: [
        "Won 1st Prize at SIBA Fest 2024 Software Project Exhibition.",
        "Optimized database-backed operations to improve administrative efficiency and usability."
      ],
      type: "Award-Winning Project"
    },
    {
      title: "Anemia & Leukemia Disease Prediction System",
      category: "ai",
      tech: ["Medical AI", "XGBoost", "LightGBM", "Predictive Analytics"],
      description: "Constructed a dual-disease prediction pipeline using blood-parameter datasets and gradient boosting models for healthcare decision support.",
      highlights: [
        "Secured a position for presenting at Tech Fest 2025.",
        "Applied preprocessing, SMOTE-based class balancing, model comparison, and statistical evaluation."
      ],
      type: "Research Project"
    },
    {
      title: "Automated Toll Tax / Smart Toll Vision System",
      category: "ai",
      tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV"],
      description: "Delivered a computer-vision pipeline for real-time vehicle detection, classification, tracking, counting, and dynamic toll estimation.",
      highlights: [
        "Combined YOLOv8 and DeepSORT to reduce manual counting effort and improve operational throughput in traffic-monitoring scenarios."
      ],
      type: "Computer Vision Project"
    },
    {
      title: "SAM3 Human Segmentation Validation",
      category: "ai",
      tech: ["SAM3", "Python", "Computer Vision", "IoU", "Precision", "Recall", "F1"],
      description: "Automatic segmentation models can silently diverge from human judgment on edge cases. Quantified how closely SAM3's automatic masks track human annotations using a structured validation pipeline.",
      highlights: [
        "Built a human-in-the-loop validation pipeline comparing SAM3 masks against human ground-truth labels using IoU, Precision, Recall, and F1.",
        "Delivered a reusable benchmark for evaluating segmentation reliability, exposing edge-case divergence between model outputs and human judgment."
      ],
      type: "Computer Vision Project"
    }
  ],
  honors: [
    {
      title: "1st Prize, SIBA Fest 2024",
      description: "Won the Software Project Exhibition for College Management Real-Time Dedicated System developed using Java and MySQL."
    },
    {
      title: "Tech Fest 2025 Presenter",
      description: "Secured a position for presenting an AI in Healthcare project on anemia and leukemia disease prediction using XGBoost and LightGBM."
    },
    {
      title: "Grand Tech Expo 5th Place",
      description: "Presented a Bank Management System covering administration, account management, and encrypted transactions; ranked 5th among top 10 projects."
    },
    {
      title: "Double Special Mention Award, MUN",
      description: "Received the Special Mention Award twice while representing the People's Republic of China at Model United Nations."
    },
    {
      title: "Book Review Competition Winner",
      description: "Served as team lead, won the intra-university round, and finished runner-up in the inter-university book review competition for Who Moved My Cheese?."
    }
  ],
  leadership: [
    {
      role: "Team Lead, Data Management",
      organization: "Alumni & Welfare Club, Sukkur IBA University",
      duration: "August 2024 – May 2025",
      details: "Led member-record management and workflow organization to improve data accuracy, accessibility, and welfare-operation coordination."
    },
    {
      role: "Executive Member",
      organization: "Society of Computer Science, Sukkur IBA University",
      duration: "September 2025 – April 2026",
      details: "Coordinated academic events, student engagement activities, logistics, and society operations for university-level computer science initiatives."
    }
  ],
  publications: [
    {
      title: "Localized Benchmark Evaluation of Vision-Language Models for Visually Impaired Assistance",
      conference: "iCOMET 2026 (IEEE Xplore, forthcoming)",
      role: "Accepted Paper Presenter",
      status: "Accepted • iCOMET 2026",
      statusTone: "tone-accept",
      relatedProject: "SceneNarrator",
      description:
        "Presented research benchmarking Vision-Language Models for localized scene understanding, assistive narration, and navigation guidance for the visually impaired. Publication is expected in the IEEE Xplore Digital Library."
    }
  ],
  certifications: [
    "Google Career Certificates: Completed Google AI Essentials, Google Prompting Essentials, AI for Research and Insights, and Maximize Productivity With AI Tools through Coursera.",
    "AI for Research and Insights: Covered practical AI use for research workflows, insight generation, information analysis, and productivity-focused problem solving.",
    "AI Tour Sindh 2025: Participated in AI innovation, fintech discussions, and community-focused technology forums.",
    "Latest Trends in Applied Computer Science Workshop: Completed training covering applied AI, DevOps concepts, and modern cybersecurity themes."
  ],
  credlyLink: "https://www.credly.com/users/soban-hussain/badges/credly"
};
