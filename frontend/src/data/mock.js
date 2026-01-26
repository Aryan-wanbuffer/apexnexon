// Mock data for ApexNexon website

export const servicesData = [
  {
    id: 1,
    title: "AI & Machine Learning Solutions",
    description: "Build intelligent systems with custom AI models, predictive analytics, and automated decision-making capabilities tailored to your business needs.",
    icon: "brain",
    features: ["Custom Model Training", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
  },
  {
    id: 2,
    title: "OCR & Document Automation",
    description: "Transform paper-based workflows into intelligent digital processes with advanced OCR, data extraction, and document processing automation.",
    icon: "file-text",
    features: ["Document Digitization", "Data Extraction", "Invoice Processing", "Form Automation"]
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "End-to-end custom software solutions designed to solve complex business challenges with scalable, maintainable, and high-performance code.",
    icon: "code",
    features: ["Enterprise Applications", "API Development", "Database Design", "System Integration"]
  },
  {
    id: 4,
    title: "Web & Mobile App Development",
    description: "Create stunning, responsive web and mobile applications with cutting-edge technologies that deliver exceptional user experiences.",
    icon: "smartphone",
    features: ["React & Next.js", "Flutter Apps", "Progressive Web Apps", "Cross-platform Solutions"]
  },
  {
    id: 5,
    title: "RPA & Business Process Automation",
    description: "Automate repetitive tasks and streamline operations with intelligent RPA solutions that reduce costs and eliminate human errors.",
    icon: "zap",
    features: ["Workflow Automation", "Bot Development", "Process Mining", "Task Scheduling"]
  },
  {
    id: 6,
    title: "Odoo & ERP Automation",
    description: "Implement and customize Odoo ERP systems to unify your business operations with integrated automation and real-time insights.",
    icon: "layers",
    features: ["Odoo Implementation", "Custom Modules", "ERP Integration", "Business Intelligence"]
  },
  {
    id: 7,
    title: "Cloud & DevOps Setup",
    description: "Deploy, scale, and manage your applications with modern cloud infrastructure and DevOps practices for maximum reliability.",
    icon: "cloud",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code"]
  }
];

export const industriesData = [
  {
    id: 1,
    name: "Healthcare",
    description: "AI-powered diagnostic tools, patient management systems, and automated medical document processing.",
    icon: "heart",
    solutions: ["Patient Portal", "Medical OCR", "AI Diagnostics", "HIPAA Compliance"]
  },
  {
    id: 2,
    name: "Logistics & Supply Chain",
    description: "Real-time tracking, route optimization, warehouse automation, and predictive inventory management.",
    icon: "truck",
    solutions: ["Fleet Management", "Route Optimization", "Inventory AI", "Warehouse Automation"]
  },
  {
    id: 3,
    name: "Finance & Banking",
    description: "Fraud detection, automated compliance, intelligent document processing, and customer analytics.",
    icon: "dollar-sign",
    solutions: ["Fraud Detection", "KYC Automation", "Risk Analysis", "Trading Algorithms"]
  },
  {
    id: 4,
    name: "E-commerce & Retail",
    description: "Personalized recommendations, inventory automation, customer insights, and omnichannel platforms.",
    icon: "shopping-cart",
    solutions: ["Recommendation Engine", "Inventory Management", "Customer Analytics", "Chatbots"]
  },
  {
    id: 5,
    name: "Education & E-learning",
    description: "Intelligent learning platforms, automated grading systems, and personalized student experiences.",
    icon: "book",
    solutions: ["LMS Platforms", "AI Tutoring", "Content Management", "Student Analytics"]
  },
  {
    id: 6,
    name: "Enterprise & Startups",
    description: "Scalable MVP development, enterprise automation, and digital transformation solutions.",
    icon: "briefcase",
    solutions: ["MVP Development", "Process Automation", "Digital Transformation", "Legacy Modernization"]
  }
];

export const caseStudiesData = [
  {
    id: 1,
    title: "AI-Powered Invoice Processing System",
    client: "Global Logistics Company",
    industry: "Logistics",
    problem: "Manual processing of 10,000+ invoices monthly led to delays and 15% error rate",
    solution: "Developed custom OCR + AI solution with 98.5% accuracy, automated validation, and ERP integration",
    results: ["95% reduction in processing time", "99.2% accuracy rate", "$500K annual cost savings", "ROI achieved in 4 months"],
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    id: 2,
    title: "Real-Time Healthcare Patient Portal",
    client: "Regional Hospital Network",
    industry: "Healthcare",
    problem: "Fragmented patient data across 12 locations, no unified access for doctors and patients",
    solution: "Built secure cloud-based patient portal with real-time data sync, HIPAA compliance, and mobile apps",
    results: ["50% reduction in admin workload", "35% improvement in patient satisfaction", "Zero security incidents", "Deployed across 12 facilities"],
    technologies: ["React Native", "FastAPI", "MongoDB", "AWS", "HL7 FHIR"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  {
    id: 3,
    title: "Predictive Maintenance for Manufacturing",
    client: "Automotive Parts Manufacturer",
    industry: "Manufacturing",
    problem: "Unexpected equipment failures causing $2M+ in annual production losses",
    solution: "Implemented IoT sensors + ML models to predict equipment failures 48 hours in advance",
    results: ["87% reduction in downtime", "$1.8M annual savings", "Maintenance cost cut by 40%", "Production efficiency +23%"],
    technologies: ["Python", "TensorFlow", "IoT", "Time Series Analysis", "Azure"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    id: 4,
    title: "E-commerce Personalization Engine",
    client: "Fashion Retail Brand",
    industry: "E-commerce",
    problem: "Low conversion rates (1.2%) and high cart abandonment (78%) despite high traffic",
    solution: "Built AI-powered recommendation engine with real-time personalization and dynamic pricing",
    results: ["3.8x increase in conversion rate", "Cart abandonment down to 42%", "45% increase in average order value", "Revenue up 210% YoY"],
    technologies: ["Python", "Recommendation Systems", "React", "Redis", "GCP"],
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
  },
  {
    id: 5,
    title: "Automated Compliance & KYC System",
    client: "Fintech Startup",
    industry: "Finance",
    problem: "Manual KYC taking 3-5 days, high drop-off rate, compliance risks",
    solution: "Developed automated KYC system with AI document verification and risk scoring",
    results: ["KYC completion time: 3 days → 8 minutes", "Customer onboarding +340%", "100% regulatory compliance", "Fraud detection rate 99.1%"],
    technologies: ["Python", "Computer Vision", "FastAPI", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    id: 6,
    title: "Smart Warehouse Management System",
    client: "E-commerce Distribution Center",
    industry: "Logistics",
    problem: "Inventory discrepancies, slow order fulfillment, lack of real-time visibility",
    solution: "Implemented IoT-enabled warehouse system with automated picking, real-time tracking, and AI optimization",
    results: ["Order fulfillment time -60%", "Inventory accuracy 99.8%", "Labor costs reduced 35%", "Capacity increased 40%"],
    technologies: ["React", "FastAPI", "IoT", "Computer Vision", "MongoDB"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "CTO",
    company: "LogiTech Global",
    content: "ApexNexon transformed our invoice processing with their AI solution. The 95% time reduction exceeded all expectations. Their team understood our complex requirements and delivered a production-ready system in just 12 weeks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    position: "Chief Medical Officer",
    company: "HealthCare Plus",
    content: "The patient portal they built has revolutionized how we deliver care. Real-time data access across all our facilities has improved both staff efficiency and patient outcomes. Outstanding work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "VP of Operations",
    company: "AutoParts Manufacturing",
    content: "Their predictive maintenance solution saved us nearly $2M in the first year. The ML models are incredibly accurate, and the system has become mission-critical to our operations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "CEO",
    company: "StyleHub Fashion",
    content: "Our revenue more than doubled after implementing their personalization engine. The AI recommendations feel magical to our customers. ApexNexon delivered beyond what we imagined possible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  }
];

export const techStackData = [
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenAI GPT", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Odoo", category: "ERP" }
];

export const blogPostsData = [
  {
    id: 1,
    title: "How AI is Transforming Business Process Automation in 2025",
    excerpt: "Explore the latest trends in AI-powered automation and how businesses are achieving 10x efficiency gains with intelligent systems.",
    author: "ApexNexon Team",
    date: "2025-01-15",
    category: "AI & Automation",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 2,
    title: "The Complete Guide to OCR Implementation for Enterprises",
    excerpt: "A comprehensive walkthrough of implementing OCR solutions at scale, including accuracy optimization and real-world challenges.",
    author: "ApexNexon Team",
    date: "2025-01-10",
    category: "Document Automation",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 3,
    title: "Building Scalable Cloud Infrastructure: Best Practices for 2025",
    excerpt: "Learn how to design and deploy cloud infrastructure that scales with your business while optimizing costs and performance.",
    author: "ApexNexon Team",
    date: "2025-01-05",
    category: "Cloud & DevOps",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 4,
    title: "RPA vs AI: When to Use Each for Maximum Business Impact",
    excerpt: "Understanding the difference between RPA and AI automation, and how to choose the right approach for your use case.",
    author: "ApexNexon Team",
    date: "2024-12-28",
    category: "Automation Strategy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
  },
  {
    id: 5,
    title: "Machine Learning for Predictive Maintenance: A Case Study",
    excerpt: "Deep dive into how we helped a manufacturing client reduce downtime by 87% using ML-powered predictive maintenance.",
    author: "ApexNexon Team",
    date: "2024-12-20",
    category: "Case Study",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
  },
  {
    id: 6,
    title: "Odoo ERP Customization: Maximizing ROI for Your Business",
    excerpt: "Best practices for customizing Odoo ERP to fit your unique business processes and achieve faster ROI.",
    author: "ApexNexon Team",
    date: "2024-12-15",
    category: "ERP & Business Systems",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

export const whyChooseUsData = [
  {
    id: 1,
    title: "Enterprise-Grade Quality",
    description: "Production-ready solutions built with best practices, comprehensive testing, and scalable architecture.",
    icon: "shield-check"
  },
  {
    id: 2,
    title: "AI & Automation Expertise",
    description: "Deep expertise in cutting-edge AI, ML, and automation technologies that drive real business results.",
    icon: "cpu"
  },
  {
    id: 3,
    title: "Rapid Delivery",
    description: "Agile methodology with 2-week sprints ensures fast time-to-market without compromising quality.",
    icon: "rocket"
  },
  {
    id: 4,
    title: "End-to-End Solutions",
    description: "From strategy to deployment and maintenance, we handle every aspect of your digital transformation.",
    icon: "layers"
  },
  {
    id: 5,
    title: "Proven Track Record",
    description: "50+ successful projects across industries with average ROI of 300% within first year.",
    icon: "trending-up"
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Dedicated support team ensuring your systems run smoothly with 99.9% uptime guarantee.",
    icon: "headphones"
  }
];
