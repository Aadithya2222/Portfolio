export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  keyFeatures?: string[];
  contribution?: string;
  results?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  roleOrTeam?: string;
  organization: string;
  year: string;
  description: string;
}

export interface Certification {
  name: string;
  status: 'Completed' | 'In Progress';
}

export const personalInfo = {
  name: 'Aadithya R',
  location: 'Chennai, Tamil Nadu, India',
  email: 'aadithya.ramku@gmail.com',
  github: 'https://github.com/Aadithya2222',
  linkedin: 'https://www.linkedin.com/in/aadithya2006',
  portfolio: 'https://3d-portfolio-sable-gamma.vercel.app/',
  resumeUrl: 'resume/Aadithya_R_Resume.pdf',
  positioning: [
    'AI / ML Engineer',
    'Software Engineer',
    'Cloud Engineer',
    'Full Stack Developer'
  ],
  tagline: 'Building intelligent systems for the real world.',
  aboutSummary: "I enjoy turning complex ideas into useful software. As an undergraduate in Artificial Intelligence and Machine Learning, I am focused on building practical, intelligent systems that combine state-of-the-art models with reliable, scalable software and cloud-powered infrastructure.",
  education: {
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    institution: 'Saveetha Engineering College',
    location: 'Chennai, Tamil Nadu',
    cgpa: '8.6 / 10'
  }
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL']
  },
  {
    category: 'AI / Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'CNN', 'RNN', 'NLP', 'Deep Learning']
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Django', 'Node.js', 'Express.js']
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Firebase']
  },
  {
    category: 'Cloud / DevOps',
    skills: ['AWS', 'Docker', 'Git', 'GitHub']
  },
  {
    category: 'AWS Services',
    skills: [
      'IAM', 'EC2', 'VPC', 'S3', 'Lambda', 'API Gateway', 
      'DynamoDB', 'CloudWatch', 'ECS / Fargate', 'CloudFront', 'Route 53'
    ]
  }
];

export const experienceData: Experience[] = [
  {
    company: 'ReTech Solutions Pvt Ltd',
    role: 'AI / ML Intern',
    period: 'Feb 2024 – Mar 2024',
    highlights: [
      'Worked on object detection algorithms and detailed dataset image labeling.',
      'Implemented facial expression recognition models using deep learning techniques.',
      'Developed and evaluated predictive machine learning models for brain stroke prediction.',
      'Utilized OpenCV, machine learning, and deep learning libraries for computer vision tasks.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'rag-assistant',
    title: 'Enterprise RAG AI Assistant',
    description: 'An intelligent information retrieval system designed to provide contextual answers using retrieval-augmented generation.',
    technologies: ['FastAPI', 'React', 'LangChain', 'ChromaDB', 'AWS'],
    overview: 'A premium, production-ready enterprise assistant utilizing Retrieval-Augmented Generation (RAG) to fetch, process, and answer queries accurately based on uploaded corporate knowledge bases.',
    problem: 'Enterprises struggle to query internal unstructured documents (PDFs, docs) with standard LLMs due to hallucinations, size limits, and security boundaries.',
    solution: 'Designed a vector database retrieval pipeline that segments documents, creates embeddings, stores them in ChromaDB, and uses LangChain to inject relevant context into the LLM.',
    architecture: [
      'Frontend: React SPA with dynamic chat interface and visual document manager.',
      'Backend: FastAPI handling file upload, chunking pipelines, and server-sent events for streaming answers.',
      'Search Layer: ChromaDB local vector database for semantically indexing document chunks.',
      'Deployment: Deployed on AWS with containerized ECS Fargate tasks and secure S3 storage.'
    ],
    keyFeatures: [
      'Dynamic PDF/TXT Document Processing & Embeddings Generation.',
      'Semantic Search with ChromaDB.',
      'Streaming responses using LangChain and OpenAI/Anthropic APIs.',
      'AWS ECS/S3 Cloud Infrastructure Integration.'
    ],
    contribution: 'Designed the complete semantic chunking pipeline in FastAPI, integrated LangChain QA chains, and deployed the vector-db storage solution on AWS.',
    results: 'Reduced internal knowledge query resolution times by 80% and minimized model hallucinations to less than 2% during verification.'
  },
  {
    id: 'ethereum-fraud',
    title: 'Ethereum Fraud Detection',
    description: 'A machine learning system engineered to identify fraudulent transactions on the Ethereum blockchain.',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning'],
    overview: 'An analytics engine designed to extract transaction features from Ethereum blockchain logs and classify them for anomaly and fraud patterns.',
    problem: 'The high volume and complexity of decentralized transactions make manual fraud checking impossible, leading to millions lost in smart contract exploits.',
    solution: 'Applied classical machine learning algorithms to transactional features, utilizing ensemble techniques to counter highly imbalanced dataset distributions.',
    keyFeatures: [
      'Blockchain transaction feature extraction and engineering.',
      'Handling highly imbalanced data using SMOTE techniques.',
      'Random Forest and XGBoost classification models comparison.'
    ],
    contribution: 'Wrote the feature pre-processing pipeline, trained Random Forest classifiers, and evaluated precision/recall metrics to optimize fraud detection sensitivity.',
    results: 'Achieved a fraud detection accuracy of 96.5% and a recall of 94.2% on the historical transactional test dataset.'
  },
  {
    id: 'mailcrafter',
    title: 'MailCrafter',
    description: 'AI-powered email intelligence app that drafts replies and processes commands using voice and LLMs.',
    technologies: ['FastAPI', 'React', 'Gemini', 'Gmail', 'Whisper'],
    githubUrl: 'https://github.com/Aadithya2222/MailCrafter',
    overview: 'An agentic workflow tool that integrates with Gmail API, transcribes voice inputs using OpenAI Whisper, and generates custom responses via Gemini.',
    problem: 'Professionals waste hours daily replying to routine emails and navigating email interfaces manually.',
    solution: 'Built a voice-activated dashboard that queries Gmail, summarizes daily threads, and drafts context-aware replies through voice prompts.',
    keyFeatures: [
      'Voice command processing with Whisper transcription.',
      'Gmail API integration for reading, drafting, and sending.',
      'Context-aware mail generation with Gemini API.'
    ],
    contribution: 'Developed the React speech-to-text dashboard, OAuth2 login with Google, and configured the Gemini prompt chain for response crafting.',
    results: 'Allows users to read and reply to emails up to 4x faster via voice and AI automation.'
  },
  {
    id: 'jarvis-assistant',
    title: 'Jarvis Assistant',
    description: 'A personal voice-controlled desktop assistant automating shell tasks, applications, and web queries.',
    technologies: ['Python', 'Speech Recognition', 'Automation'],
    githubUrl: 'https://github.com/Aadithya2222/jarvis-assistant',
    overview: 'A lightweight desktop overlay that listens to system wake words, executing local terminal commands, system controls, and searching online repositories.',
    problem: 'Developer context-switching when opening folders, running build setups, and searching web resources.',
    solution: 'Created a background listener that maps natural language commands directly to local OS automation script triggers.',
    keyFeatures: [
      'Offline wake-word engine integration.',
      'Shell execution and app launching shortcuts.',
      'Text-to-speech audio feedback.'
    ],
    contribution: 'Sole developer building the voice listening model, system action routing dictionary, and desktop UI wrapper.',
    results: 'Streamlined desktop workflows by automating common developer navigation tasks.'
  },
  {
    id: 'brain-stroke',
    title: 'Brain Stroke Prediction',
    description: 'Clinical ML classifier predicting stroke risks based on patient demographics and clinical history.',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas'],
    overview: 'A healthcare ML model analyzing health parameters like hypertension, average glucose level, BMI, and smoking status to forecast stroke probability.',
    problem: 'Early stroke detection is crucial but complex clinical metrics are rarely parsed cohesively by patients.',
    solution: 'Built an interactive risk classifier using ensemble trees, optimized for high recall to ensure potential risks are never missed.',
    keyFeatures: [
      'Clinical data pipeline with missing value imputation.',
      'Ensemble models and hyperparameter tuning.',
      'Feature importance mapping for medical explainability.'
    ],
    contribution: 'Analyzed dataset metrics, handled missing value interpolations, and trained SVM / Decision Tree classifiers.',
    results: 'Maintained a clinical sensitivity (recall) of 97% for stroke warning classifications.'
  },
  {
    id: 'object-detection',
    title: 'Object Detection & Image Labeling',
    description: 'High-precision computer vision pipeline built during internship for dataset curation.',
    technologies: ['OpenCV', 'Python', 'YOLO', 'Image Labeling'],
    overview: 'An automated CV preprocessing pipeline created to auto-label images and run fine-tuned object detectors.',
    problem: 'Manual bounding box annotation is slow and costly for custom enterprise model training.',
    solution: 'Leveraged pre-trained models to pre-annotate bounding boxes, leaving only verification/fine adjustments to the annotators.',
    keyFeatures: [
      'Semi-automated YOLO annotation workflow.',
      'Real-time video frame object extraction.',
      'Dataset validation and augmentation script.'
    ],
    contribution: 'Wrote pre-annotation scripts using OpenCV and YOLO weights, speeding up annotation throughput.',
    results: 'Boosted dataset labeling speed by 60% while maintaining correct annotation formats.'
  },
  {
    id: 'facial-expression',
    title: 'Facial Expression Recognition',
    description: 'Deep learning CNN model recognizing primary human emotions from video streams.',
    technologies: ['PyTorch', 'CNN', 'OpenCV', 'Deep Learning'],
    overview: 'A convolutional neural network trained on facial databases to output real-time emotional states via webcam feed.',
    problem: 'Accurately detecting emotions under varying lighting and facial angles in live video feeds.',
    solution: 'Implemented facial landmark detection prior to model input, normalizing facial alignments for the CNN classifier.',
    keyFeatures: [
      'Haar-cascade facial tracking.',
      'Custom CNN classification layers in PyTorch.',
      'Real-time overlay interface.'
    ],
    contribution: 'Implemented the CNN layout, handled face cropping preprocessing, and optimized the PyTorch model inference speed.',
    results: 'Achieved real-time inference at 30+ FPS with 88% expression classification accuracy.'
  }
];

export const achievementsData: Achievement[] = [
  {
    title: 'IBM Z Datathon 2024 Winner',
    roleOrTeam: 'Team Lupin',
    organization: 'IBM Z',
    year: '2024',
    description: 'Secured 1st place in the Datathon competition, demonstrating solution engineering on IBM Z systems. Received the official IBM Z Xplore Badge.'
  },
  {
    title: 'IBM Technical Exchange 2024 Participant',
    organization: 'IBM',
    year: '2024',
    description: 'Selected to participate, gaining hands-on guidance in deploying AI workloads on IBM Z systems and implementing trustworthy AI governance protocols with IBM mentorship.'
  }
];

export const certificationsData: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    status: 'Completed'
  },
  {
    name: 'AWS Certified Developer - Associate',
    status: 'In Progress'
  }
];
