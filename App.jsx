import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, FileText, Zap, BarChart3, Lock, Cloud, MessageSquare, BookOpen, Sparkles, ArrowRight, Menu, X, Moon, Sun, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

const PDFVerseLanding = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('search');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated background elements
  const FloatingOrb = ({ delay, size, opacity }) => (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}
      style={{
        width: size,
        height: size,
        opacity,
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  const stats = [
    { label: 'PDFs Processed', value: '2.5M+' },
    { label: 'Active Users', value: '125K+' },
    { label: 'Queries Daily', value: '500K+' },
  ];

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Intelligent Search',
      description: 'Search across hundreds of PDFs with AI-powered understanding',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI Summaries',
      description: 'Get instant summaries of any PDF in seconds',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Chat with PDFs',
      description: 'Ask questions and get accurate answers from your documents',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Translate',
      description: 'Translate documents to 50+ languages instantly',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure',
      description: 'Enterprise-grade encryption for all your documents',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Storage',
      description: 'Unlimited cloud storage for your PDF library',
    },
  ];

  const pdfSamples = [
    {
      title: 'Introduction to Machine Learning',
      category: 'Research',
      pages: 245,
      rating: 4.8,
      downloads: '2.3K',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'The Complete Guide to Legal Documents',
      category: 'Legal',
      pages: 189,
      rating: 4.9,
      downloads: '1.8K',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Advanced Python Programming',
      category: 'Technology',
      pages: 412,
      rating: 4.7,
      downloads: '3.1K',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Government Policy Documentation 2024',
      category: 'Government',
      pages: 567,
      rating: 4.6,
      downloads: '5.2K',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  const aiFeatures = [
    {
      title: 'Smart Summarization',
      description: 'AI-powered summaries in multiple lengths and styles',
      icon: '📋',
    },
    {
      title: 'Question Answering',
      description: 'Ask anything about your PDFs and get instant answers',
      icon: '❓',
    },
    {
      title: 'Keyword Extraction',
      description: 'Automatically extract important keywords and topics',
      icon: '🔑',
    },
    {
      title: 'Citation Generator',
      description: 'Auto-generate citations in APA, MLA, Chicago formats',
      icon: '📚',
    },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '0',
      features: ['5 PDFs per month', 'Basic search', 'AI summaries limited', 'Community support'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '9.99',
      features: ['Unlimited PDFs', 'Advanced search', 'Unlimited AI features', 'Priority support', 'Custom folders'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Everything in Pro', 'Team collaboration', 'API access', 'Dedicated support', 'Custom integrations'],
      popular: false,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        .glass-effect {
          background: ${isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(226, 232, 240, 0.5)'};
        }
        .glow-effect {
          box-shadow: 0 0 40px ${isDark ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.1)'};
        }
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px ${isDark ? 'rgba(37, 99, 235, 0.2)' : 'rgba(37, 99, 235, 0.15)'};
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-slate-950/80' : 'bg-white/80'} glass-effect`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">PDFVerse</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
              <a key={item} href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all ${isDark ? 'bg-slate-800' : 'bg-slate-100'} hover:scale-110`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="hidden md:inline-block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Sign In
            </button>
            <button className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-slate-900' : 'bg-slate-50'} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="px-6 py-4 space-y-3">
              {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
                <a key={item} href="#" className="block py-2 font-medium text-blue-600">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingOrb delay={0} size="400px" opacity={0.1} />
          <FloatingOrb delay={2} size="300px" opacity={0.08} />
          <FloatingOrb delay={4} size="350px" opacity={0.1} />
        </div>

        {/* Grid Background */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-white to-white'}`} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Hero Content */}
          <div className="animate-fade-in-up space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-4">Search. Read.</span>
              <span className="block mb-4">Summarize.</span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Chat with PDFs.
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Experience the future of document intelligence. Search, understand, and interact with your PDFs using cutting-edge AI technology.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-xl mx-auto">
              <div className={`relative group glass-effect rounded-2xl p-1 glow-effect transition-all duration-300`}>
                <div className="flex items-center gap-4 px-6 py-4">
                  <Search className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search 2.5M+ PDFs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`flex-1 outline-none text-lg ${isDark ? 'bg-transparent text-white placeholder-slate-500' : 'bg-transparent text-slate-900 placeholder-slate-400'}`}
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:scale-105 transition-transform">
                    Search
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                {['Machine Learning', 'Legal Documents', 'Research Papers'].map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm transition-all hover:scale-105 ${isDark ? 'bg-slate-800 text-slate-300 hover:bg-blue-900' : 'bg-slate-100 text-slate-600 hover:bg-blue-100'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`px-8 py-4 border-2 ${isDark ? 'border-slate-700 hover:bg-slate-900' : 'border-slate-200 hover:bg-slate-50'} font-semibold rounded-xl transition-all`}>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-20 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Everything you need to master your PDFs with AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-2xl glass-effect glow-effect hover-lift border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Showcase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Documents</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Browse millions of PDFs from research papers to legal documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdfSamples.map((pdf, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative rounded-xl overflow-hidden mb-4 h-48 hover-lift glow-effect transition-all`}>
                  <div
                    className="absolute inset-0"
                    style={{ background: pdf.image }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${isDark ? 'bg-slate-800/80' : 'bg-white/20'} backdrop-blur`}>
                        {pdf.category}
                      </span>
                      <button className="hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-white text-sm">{pdf.pages} pages</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{pdf.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-sm line-clamp-2 mb-2">{pdf.title}</h3>
                <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {pdf.downloads} downloads
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className={`py-20 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Capabilities</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Advanced AI models trained to understand your documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-effect border hover-lift glow-effect"
                style={{
                  borderColor: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(226, 232, 240, 0.5)',
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  {feature.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold group">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Dashboard</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Manage, organize, and analyze all your PDFs in one place
            </p>
          </div>

          <div className={`rounded-2xl overflow-hidden glass-effect glow-effect border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="p-8">
              {/* Dashboard Tabs */}
              <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-slate-700">
                {['Overview', 'PDFs', 'Analytics', 'Settings'].map((tab) => (
                  <button
                    key={tab}
          