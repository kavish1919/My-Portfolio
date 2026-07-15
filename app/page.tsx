'use client'; // This directive is needed for interactive elements

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BrainCircuit, Database, Mail, Phone, Download, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Cpu, Sparkles, Terminal } from 'lucide-react';

// A custom Typewriter component to avoid external dependencies
const TypewriterEffect = ({ words, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1500 }: { words: string[], typeSpeed?: number, deleteSpeed?: number, delaySpeed?: number }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typeSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delaySpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <>
      {text}
      <span className="animate-pulse text-brand-orange">_</span>
    </>
  );
};


export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
    
    // Close mobile menu on link click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "IT Helpdesk Auto-Router",
      period: "",
      subtitle: "Enterprise ITSM Automation Project",
      description: "Built an NLP ticket classifier (TF-IDF, Word2Vec, PyTorch LSTM) achieving 99.7% accuracy (0.996 macro-F1) across 6 categories – TF-IDF outperformed Word2Vec and LSTM on limited enterprise text – plus priority prediction (0.50 macro-F1). Built a Gradient Boosting regressor (R²=0.608, 8.86h MAE) on PCA-compressed text and temporal features to flag SLA-breach risk, powering a rule-based auto-routing engine in an interactive Streamlit dashboard.",
      image: "/images/4.png",
      tags: ["Python", "Scikit-learn", "PyTorch", "NLTK", "Gensim", "Pandas", "Streamlit"],
      liveUrl: "https://it-ticket-router-demo.streamlit.app/",
      githubUrl: "https://github.com/kavish1919/IT-Helpdesk-Ticket-Classification-Auto-Routing-System"
    },
    {
      title: "FakeReview Sentinel",
      period: "",
      subtitle: "E-commerce ML Project",
      description: "Engineered a multi-signal ensemble classifier (combining Naive Bayes, Random Forest, and XGBoost) using soft-voting to fuse textual sentiment (NLP) with user behavioral metadata, achieving 89.2% accuracy and 92.4% ROC-AUC. Engineered features like review sentiment polarity, posting frequency, verified-purchase ratio to flag suspicious reviewer patterns. Designed and deployed a containerized Flask API and interactive dashboard using Docker.",
      image: "/images/2.png",
      tags: ["Python", "Scikit-learn", "XGBoost", "NLP", "SHAP", "Flask", "Docker"],
      liveUrl: "https://huggingface.co/spaces/kavish19/FakeReview-Sentinel",
      githubUrl: "https://github.com/kavish1919/FakeReview-Sentinel"
    },
    {
      title: "AIOps Infrastructure Monitor",
      period: "",
      subtitle: "AIOps & Production Monitoring Project",
      description: "Engineered an unsupervised multi-model anomaly detection pipeline (combining PCA + K-Means, DBSCAN, and Isolation Forest) across a 43,200-row production telemetry dataset (15 servers, 42 time-series features), achieving 94.0% accuracy and 0.29 F1-score without labels. Engineered 1-hour and 4-hour rolling statistical rate-of-change features with per-server z-score normalization to detect subtle diurnal deviations (100% recall on error cascades, 98.6% on latency spikes). Designed and deployed a live SRE triage dashboard using Streamlit.",
      image: "/images/3.png",
      tags: ["Python", "Scikit-learn", "PCA", "K-Means", "DBSCAN", "Isolation Forest", "Streamlit"],
      liveUrl: "https://infra-anomaly-detection.streamlit.app/",
      githubUrl: "https://github.com/kavish1919/infra-anomaly-detection"
    },
    {
      title: "ContentPulse",
      period: "",
      subtitle: "GenAI + Social Media Project",
      description: "Built a production-grade GenAI platform that generates platform-specific social media content using a RAG pipeline (LangChain + ChromaDB) for brand-context retrieval and OpenAI GPT for content generation. Features real-time Google Trends integration, automated NLP quality scoring (VADER + Flesch), and a BYOK dashboard deployed on Hugging Face Spaces via Docker.",
      image: "/images/1.png",
      tags: ["Python", "LangChain", "ChromaDB", "OpenAI API", "RAG", "Flask", "Docker"],
      liveUrl: "https://huggingface.co/spaces/kavish19/ContentPulse",
      githubUrl: "https://huggingface.co/spaces/kavish19/ContentPulse/tree/main"
    },
    {
      title: "Fit Check Mirror",
      period: "",
      subtitle: "AI Vision & Audio Style Analyzer Project",
      description: "Built an AI-powered real-time outfit analysis web application using Groq's Llama 3.2 90B Vision model for instant style ratings (0-100 Drip Score), category-specific evaluations across 6 fashion profiles, and structured improvement tips. Integrated Groq Whisper Large V3 Turbo for low-latency text-to-speech audio roasts and implemented webcam photo capture with dynamic shareable score cards via Flask.",
      image: "/images/5.png",
      tags: ["Python", "Flask", "Groq Llama 3.2 Vision", "Whisper TTS", "JavaScript", "CSS"],
      liveUrl: "https://fit-check-mirror.vercel.app/",
      githubUrl: "https://github.com/kavish1919/Fit-Check-Mirror"
    },
    {
      title: "Sphere - All in One Web Tools",
      period: "",
      subtitle: "Full Stack Web Development Project",
      description: "Developed Project Sphere, a comprehensive Next.js web application suite featuring client-side utilities including a secure PDF merger, image compressor, QR code generator, and color palette generator. Implemented secure user authentication and management using Clerk, enabling a personalized user experience.",
      image: "/images/6.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth", "PDF-lib", "Vercel"],
      liveUrl: "https://sphere-zeta.vercel.app",
      githubUrl: "https://github.com/kavish1919/Sphere---All-in-One-Web-Tools"
    }
  ];
  
  const borderColors = ['border-brand-orange', 'border-brand-purple'];

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between rounded-full bg-brand-dark/80 backdrop-blur-lg border border-white/10 px-6 py-3 shadow-lg">
            {/* Logo */}
            <a href="#home" onClick={handleScroll} className="text-2xl font-bold tracking-tighter text-brand-light flex items-center gap-2">
              <Terminal className="text-brand-orange" size={24} />
              Kavish<span className="text-brand-purple">.</span>AI
            </a>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <a href="#home" onClick={handleScroll} className="px-4 py-2 rounded-full text-brand-light font-medium hover:bg-white/10 transition-all duration-300">Home</a>
              <a href="#about" onClick={handleScroll} className="px-4 py-2 rounded-full text-brand-light font-medium hover:bg-white/10 transition-all duration-300">About & Skills</a>
              <a href="#projects" onClick={handleScroll} className="px-4 py-2 rounded-full text-brand-light font-medium hover:bg-white/10 transition-all duration-300">Projects</a>
              <a href="#experience" onClick={handleScroll} className="px-4 py-2 rounded-full text-brand-light font-medium hover:bg-white/10 transition-all duration-300">Experience & Education</a>
            </nav>

            {/* Contact Button */}
            <a href="#contact" onClick={handleScroll} className="hidden md:block bg-brand-orange text-brand-dark font-semibold px-5 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md">
              Contact Me
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-light focus:outline-none z-20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 bg-brand-dark/95 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
              <nav className="flex flex-col items-center space-y-4 font-medium">
                <a href="#home" onClick={handleScroll} className="text-brand-light hover:text-brand-purple transition-colors duration-300">Home</a>
                <a href="#about" onClick={handleScroll} className="text-brand-light hover:text-brand-purple transition-colors duration-300">About & Skills</a>
                <a href="#projects" onClick={handleScroll} className="text-brand-light hover:text-brand-purple transition-colors duration-300">Projects</a>
                <a href="#experience" onClick={handleScroll} className="text-brand-light hover:text-brand-purple transition-colors duration-300">Experience & Education</a>
                <a href="#contact" onClick={handleScroll} className="w-full text-center mt-2 bg-brand-orange text-brand-dark font-semibold px-5 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
                  Contact Me
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-24 px-6 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto py-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-purple uppercase bg-brand-purple/10 border border-brand-purple/20 rounded-full">
              <Sparkles size={16} /> AI/ML Engineer & GenAI Developer
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-light tracking-tighter mb-6 min-h-[110px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-purple">
                <TypewriterEffect
                  words={[
                    'Building Intelligent AI/ML Systems',
                    'Developing GenAI & RAG Pipelines',
                    'Architecting Agentic Workflows',
                    'Deploying Containerized Models'
                  ]}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-light/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Hi, I&apos;m <strong className="text-white font-semibold">Kavish Bishnoi</strong>. I specialize in developing scalable AI/ML solutions, GenAI-powered applications using LLMs &amp; RAG, and containerized deployment across the full development lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" onClick={handleScroll} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-orange text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-orange/20">
                Explore Projects
                <ArrowRight size={20} />
              </a>
              <a href="#experience" onClick={handleScroll} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-purple text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-purple/20">
                Experience &amp; Education
              </a>
              <a href="#contact" onClick={handleScroll} className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/20 text-brand-light font-bold px-8 py-4 rounded-full hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Me & Technical Skills Section */}
        <section id="about" className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Photo & Bio */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-orange rounded-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 blur-sm opacity-60"></div>
                  <img 
                    src="/profile-photo.jpeg" 
                    alt="Portrait of Kavish Bishnoi - AI/ML Engineer" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
                    onError={(e) => {
                      // Fallback avatar if profile image doesn't exist
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/1E1E1F/8377D1?text=Kavish+Bishnoi';
                    }}
                  />
                </div>
                
                <div>
                  <span className="text-sm font-semibold tracking-wider text-brand-purple uppercase flex items-center gap-2">
                    <BrainCircuit size={18} /> About Me
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-brand-light tracking-tighter mt-2 mb-4">
                    Full-Stack AI/ML &amp; GenAI Engineer
                  </h2>
                  <p className="text-brand-light/80 text-base md:text-lg mb-6 leading-relaxed">
                    AI/ML engineer with a strong foundation in Python, Machine Learning, and Deep Learning, with practical experience in building intelligent systems using Scikit-learn, TensorFlow, and PyTorch.
                  </p>
                  <p className="text-brand-light/80 text-base md:text-lg mb-8 leading-relaxed">
                    Adept at developing GenAI-powered applications leveraging LLMs, RAG, and Agentic AI workflows. Comfortable working across the full AI development lifecycle – from model building to deployment using Flask, Docker, and containerized environments.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href="/resume.pdf" 
                      download 
                      className="inline-flex items-center justify-center gap-2 bg-brand-purple text-brand-dark font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-purple/20"
                    >
                      <Download size={20} />
                      Download Resume
                    </a>
                    <div className="flex items-center gap-3">
                      <a href="https://github.com/kavish1919" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 text-brand-light hover:bg-brand-orange hover:text-brand-dark transition-all duration-300" title="GitHub">
                        <Github size={22} />
                      </a>
                      <a href="https://linkedin.com/in/kavishbishnoi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 text-brand-light hover:bg-brand-purple hover:text-brand-dark transition-all duration-300" title="LinkedIn">
                        <Linkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Technical Skills */}
              <div className="lg:col-span-7 bg-brand-dark/60 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-light mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                  <Cpu className="text-brand-orange" size={28} /> Technical Skills
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-brand-orange mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {["Python", "SQL", "Java"].map((skill, i) => (
                        <span key={i} className="bg-white/10 border border-white/15 text-brand-light font-medium px-4 py-2 rounded-xl text-sm hover:border-brand-orange transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-brand-purple mb-3">Frameworks &amp; Libraries</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Flask"].map((skill, i) => (
                        <span key={i} className="bg-white/10 border border-white/15 text-brand-light font-medium px-4 py-2 rounded-xl text-sm hover:border-brand-purple transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-brand-orange mb-3">AI/ML &amp; GenAI</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {["LLMs", "RAG", "Agentic AI", "NLP", "GANs", "OpenAI APIs"].map((skill, i) => (
                        <span key={i} className="bg-brand-orange/15 border border-brand-orange/30 text-brand-light font-semibold px-4 py-2 rounded-xl text-sm hover:bg-brand-orange/25 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-brand-purple mb-3">Developer Tools</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {["Git", "GitHub", "Docker", "Kubernetes", "Jupyter Notebook", "Kaggle"].map((skill, i) => (
                        <span key={i} className="bg-white/10 border border-white/15 text-brand-light font-medium px-4 py-2 rounded-xl text-sm hover:border-brand-purple transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 lg:py-32 bg-brand-dark/60 border-t border-b border-white/5 relative">
          <div className="container mx-auto px-6 text-center">
            <span className="text-sm font-semibold tracking-wider text-brand-purple uppercase flex items-center justify-center gap-2">
              <Database size={18} /> My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-light tracking-tighter mt-2 mb-16">
              Featured AI/ML &amp; GenAI Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className={`bg-brand-dark/90 border-2 ${borderColors[index % borderColors.length]} rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-xl`}>
                  <div className="relative h-64 overflow-hidden bg-white/5">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{project.subtitle}</span>
                      </div>
                      <h3 className="text-2xl font-black text-brand-light mb-4">{project.title}</h3>
                      <p className="text-brand-light/80 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/10">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-white/10 text-brand-light text-xs font-semibold px-3 py-1.5 rounded-full border border-white/5">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-dark bg-brand-light hover:bg-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md transform hover:scale-105">
                          <Github size={18}/> Code
                        </a>
                        {project.liveUrl !== "#" && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-dark bg-brand-orange hover:bg-brand-orange/90 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md transform hover:scale-105">
                            <ExternalLink size={18}/> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience, Education & Certifications Section */}
        <section id="experience" className="py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-wider text-brand-purple uppercase flex items-center justify-center gap-2">
                <Briefcase size={18} /> Career Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-light tracking-tighter mt-2">
                Experience, Education &amp; Certifications
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience & Education Column */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-brand-light flex items-center gap-3 border-b border-white/10 pb-4">
                  <Briefcase className="text-brand-orange" size={24} /> Experience &amp; Education
                </h3>
                
                {/* Experience Item */}
                <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-orange transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-brand-light">Software Development Intern</h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange w-fit mt-1 sm:mt-0">Feb 2026 – May 2026</span>
                  </div>
                  <h5 className="text-brand-purple font-semibold mb-4">FOSSEE, IIT Bombay</h5>
                  <p className="text-xs font-mono text-brand-light/60 mb-4">Python, ifcopenshell, OpenCASCADE, SQLite</p>
                  <ul className="space-y-2 text-sm text-brand-light/80 list-disc list-inside leading-relaxed">
                    <li>Built an IFC Export Pipeline for Osdag (IIT Bombay) supporting structural connection types using ifcopenshell, enabling BIM interoperability with Revit, Tekla, and BIMcollab.</li>
                    <li>Implemented high-LOD geometric accuracy and dynamic SQLite-driven IFC Property Sets across both Osdag and OsdagBridge, extending the pipeline to IRC-compliant bridge components.</li>
                  </ul>
                </div>

                {/* Education Item 1 */}
                <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-purple transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h4 className="text-xl font-bold text-brand-light">VIT Bhopal University, Bhopal</h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple w-fit mt-1 sm:mt-0">2023 – 2027</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-brand-light/90 text-sm font-medium">B.Tech in Computer Science Engineering (AIML)</span>
                    <span className="font-bold text-brand-orange text-sm">CGPA: 8.63</span>
                  </div>
                </div>

                {/* Education Item 2 & 3 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                    <h5 className="font-bold text-brand-light text-base mb-1">Smt Sridevi Awasiya Vidyapeeth</h5>
                    <p className="text-xs text-brand-purple font-medium mb-3">XII, CBSE (2022)</p>
                    <span className="inline-block bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-brand-light">Score: 87%</span>
                  </div>
                  <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                    <h5 className="font-bold text-brand-light text-base mb-1">Ragendra Swarup Public School</h5>
                    <p className="text-xs text-brand-purple font-medium mb-3">X, ICSE (2020)</p>
                    <span className="inline-block bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-brand-light">Score: 90.2%</span>
                  </div>
                </div>

              </div>

              {/* Certifications & Highlights Column */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-brand-light flex items-center gap-3 border-b border-white/10 pb-4">
                  <Award className="text-brand-purple" size={24} /> Certifications &amp; Achievements
                </h3>

                <div className="space-y-6">
                  <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-purple transition-all flex flex-col justify-between overflow-hidden group shadow-lg">
                    <div>
                      <div className="relative h-48 sm:h-56 mb-5 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                        <img src="/images/Oracle.png" alt="Oracle Cloud Infrastructure 2025 Certified Data Science Professional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-brand-purple/20 rounded-xl text-brand-purple shrink-0">
                          <Award size={26} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-light leading-snug mb-1">Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h4>
                          <p className="text-sm text-brand-light/60">Oracle</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-end">
                      <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=950B2F8C6D14D0360FF514EDDC48AA583C6F8A557EB11C23A36CC98FF769BD74" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-orange hover:underline flex items-center gap-1.5 bg-brand-orange/10 px-4 py-2 rounded-lg transition-colors hover:bg-brand-orange/20">
                        View Certificate <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="bg-brand-dark/70 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-purple transition-all flex flex-col justify-between overflow-hidden group shadow-lg">
                    <div>
                      <div className="relative h-48 sm:h-56 mb-5 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                        <img src="/images/michigan.png" alt="Applied Machine Learning in Python - University of Michigan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-brand-orange/20 rounded-xl text-brand-orange shrink-0">
                          <GraduationCap size={26} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-light leading-snug mb-1">Applied Machine Learning in Python</h4>
                          <p className="text-sm text-brand-light/60">University of Michigan</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-end">
                      <a href="https://www.coursera.org/account/accomplishments/verify/ATW4ZA2K7OPZ" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-orange hover:underline flex items-center gap-1.5 bg-brand-orange/10 px-4 py-2 rounded-lg transition-colors hover:bg-brand-orange/20">
                        View Certificate <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Highlights box */}
                  <div className="bg-gradient-to-br from-brand-purple/20 to-brand-orange/20 border border-white/15 rounded-2xl p-6 md:p-8">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Sparkles className="text-brand-orange" size={20} /> AI/ML Focus &amp; Goals
                    </h4>
                    <p className="text-sm text-brand-light/80 leading-relaxed">
                      Constantly pushing the boundaries of what models can achieve—from fine-tuning transformers to constructing agentic loops and optimizing containerized real-time inference APIs. Eager to collaborate on high-impact GenAI and structural AI initiatives.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32 bg-brand-dark/80 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="text-sm font-semibold tracking-wider text-brand-purple uppercase">
              Connect With Me
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-light tracking-tighter mt-2 mb-6">
              Let&apos;s Build AI-Powered Solutions
            </h2>
            <p className="text-lg text-brand-light/70 max-w-2xl mx-auto mb-12">
              Have an exciting AI/ML role, an innovative project idea, or just want to discuss GenAI architectures? Reach out directly via email or connect on LinkedIn and GitHub.
            </p>

            {/* Direct Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
              <a href="mailto:kavishbishnoi19@gmail.com" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:border-brand-purple hover:bg-white/10 transition-all group">
                <div className="bg-brand-purple/20 p-3 rounded-xl group-hover:bg-brand-purple transition-colors">
                  <Mail className="text-brand-purple group-hover:text-brand-dark transition-colors" size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-brand-light/60">Email Address</span>
                  <span className="text-base font-bold text-brand-light group-hover:text-brand-purple transition-colors">kavishbishnoi19@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917895932727" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:border-brand-orange hover:bg-white/10 transition-all group">
                <div className="bg-brand-orange/20 p-3 rounded-xl group-hover:bg-brand-orange transition-colors">
                  <Phone className="text-brand-orange group-hover:text-brand-dark transition-colors" size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-brand-light/60">Phone Number</span>
                  <span className="text-base font-bold text-brand-light group-hover:text-brand-orange transition-colors">(+91) 7895932727</span>
                </div>
              </a>
            </div>

            <div className="flex justify-center gap-4 mb-16">
              <a href="https://linkedin.com/in/kavishbishnoi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-purple text-brand-dark font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md">
                <Linkedin size={20} /> LinkedIn Profile
              </a>
              <a href="https://github.com/kavish1919" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 text-brand-light font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 border border-white/10">
                <Github size={20} /> GitHub Profile
              </a>
            </div>

            {/* Contact Form */}
            <form action="https://api.web3forms.com/submit" method="POST" className="max-w-xl mx-auto text-left bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <input type="hidden" name="access_key" value="0f88d378-966a-42b0-8b17-22bda77ebd6b" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-brand-light/80 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-brand-dark/80 border border-white/20 rounded-xl py-3 px-4 text-brand-light placeholder-brand-light/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-light/80 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-brand-dark/80 border border-white/20 rounded-xl py-3 px-4 text-brand-light placeholder-brand-light/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-brand-light/80 uppercase tracking-wider mb-2">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, job opportunity, or inquiry..."
                  required
                  rows={4}
                  className="w-full bg-brand-dark/80 border border-white/20 rounded-xl py-3 px-4 text-brand-light placeholder-brand-light/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                ></textarea>
              </div>
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brand-orange/20"
              >
                Send Message <Mail size={20} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-sm text-brand-light/60">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Kavish Bishnoi. Built with Next.js, Tailwind CSS &amp; AI/ML Passion.</p>
        </div>
      </footer>
    </>
  );
}
