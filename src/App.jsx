import React, { useEffect, useState } from 'react';
import {
  Search,
  FileText,
  Sparkles,
  MessageSquare,
  Lock,
  Cloud,
  ArrowRight,
  Menu,
  X,
  Moon,
  Sun,
  Star,
  Globe,
  CheckCircle,
  Zap,
  BarChart3,
  BookOpen,
  Users,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';

import { pdfData } from './data/pdfData';
const PDFVerseLanding = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const FloatingOrb = ({ delay, size, opacity, position }) => (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-blue-500' : 'bg-blue-400'
      }`}
      style={{
        width: size,
        height: size,
        opacity,
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ...position,
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
      description:
        'Search across hundreds of PDFs with AI-powered understanding.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI Summaries',
      description: 'Get instant summaries of any PDF in seconds.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Chat with PDFs',
      description:
        'Ask questions and get accurate answers from your documents.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Translate',
      description: 'Translate documents to 50+ languages instantly.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure',
      description: 'Enterprise-grade encryption for your documents.',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Storage',
      description: 'Keep your PDF library organized in the cloud.',
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
      description:
        'AI-powered summaries in multiple lengths and styles.',
      icon: '📋',
    },
    {
      title: 'Question Answering',
      description:
        'Ask anything about your PDFs and get instant answers.',
      icon: '❓',
    },
    {
      title: 'Keyword Extraction',
      description:
        'Automatically extract important keywords and topics.',
      icon: '🔑',
    },
    {
      title: 'Citation Generator',
      description:
        'Auto-generate citations in APA, MLA and Chicago formats.',
      icon: '📚',
    },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '0',
      description: 'For students and casual users',
      features: [
        '5 PDFs per month',
        'Basic search',
        'Limited AI summaries',
        'Community support',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '9.99',
      description: 'For serious researchers',
      features: [
        'Unlimited PDFs',
        'Advanced search',
        'Unlimited AI features',
        'Priority support',
        'Custom folders',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'API access',
        'Dedicated support',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  const dashboardStats = [
    { label: 'Total PDFs', value: '248', icon: <FileText className="w-5 h-5" /> },
    { label: 'AI Queries', value: '1,284', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Storage Used', value: '4.8 GB', icon: <Cloud className="w-5 h-5" /> },
    { label: 'Saved Searches', value: '36', icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? 'bg-slate-950 text-slate-100'
          : 'bg-white text-slate-900'
      }`}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(10px);
          }
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

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            box-shadow: 0 0 35px rgba(37, 99, 235, 0.18);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }

        .glass-effect {
          background: ${
            isDark
              ? 'rgba(15, 23, 42, 0.72)'
              : 'rgba(255, 255, 255, 0.72)'
          };
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${
            isDark
              ? 'rgba(148, 163, 184, 0.12)'
              : 'rgba(226, 232, 240, 0.7)'
          };
        }

        .glow-effect {
          box-shadow: 0 0 40px ${
            isDark
              ? 'rgba(37, 99, 235, 0.15)'
              : 'rgba(37, 99, 235, 0.10)'
          };
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px ${
            isDark
              ? 'rgba(37, 99, 235, 0.20)'
              : 'rgba(37, 99, 235, 0.15)'
          };
        }

        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark ? 'bg-slate-950/80' : 'bg-white/80'
        } glass-effect`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              PDFVerse
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('ai')}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              AI Tools
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark((value) => !value)}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${
                isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button className="hidden md:inline-block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Sign In
            </button>

            <button
              onClick={() => scrollToSection('pricing')}
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </button>

            <button
              onClick={() => setIsMenuOpen((value) => !value)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden border-t ${
              isDark
                ? 'bg-slate-900 border-slate-800'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="px-6 py-4 space-y-2">
              {[
                ['Features', 'features'],
                ['AI Tools', 'ai'],
                ['Dashboard', 'dashboard'],
                ['Pricing', 'pricing'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-2 font-medium hover:text-blue-600"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <FloatingOrb
            delay={0}
            size="400px"
            opacity={0.10}
            position={{ top: '-100px', left: '-120px' }}
          />
          <FloatingOrb
            delay={2}
            size="300px"
            opacity={0.08}
            position={{ top: '35%', right: '-100px' }}
          />
          <FloatingOrb
            delay={4}
            size="350px"
            opacity={0.08}
            position={{ bottom: '-120px', left: '35%' }}
          />
        </div>

        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950'
              : 'bg-gradient-to-b from-slate-50 via-white to-white'
          }`}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-2">Search. Read.</span>
              <span className="block mb-2">Summarize.</span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Chat with PDFs.
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Experience the future of document intelligence. Search,
              understand, and interact with your PDFs using AI.
            </p>

            {/* Search */}
            <div className="mt-12 max-w-2xl mx-auto">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (searchQuery.trim()) {
                    alert(`Searching for: ${searchQuery}`);
                  }
                }}
              >
                <div className="relative glass-effect rounded-2xl p-1 glow-effect pulse-glow">
                  <div className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4">
                    <Search className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search PDFs..."
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      className={`flex-1 min-w-0 outline-none text-base md:text-lg bg-transparent ${
                        isDark
                          ? 'text-white placeholder-slate-500'
                          : 'text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-5 md:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:scale-105 transition-transform"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                {[
                  'Machine Learning',
                  'Legal Documents',
                  'Research Papers',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-slate-800 text-slate-300 hover:bg-blue-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('dashboard')}
                className={`px-8 py-4 border-2 ${
                  isDark
                    ? 'border-slate-700 hover:bg-slate-900'
                    : 'border-slate-200 hover:bg-slate-50'
                } font-semibold rounded-xl transition-all`}
              >
                Explore Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm mt-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className={`py-20 ${
          isDark ? 'bg-slate-900/50' : 'bg-slate-50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
              <Zap className="w-5 h-5" />
              Powerful tools
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything for your PDFs
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Search, understand, organize and work with documents faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-2xl glass-effect glow-effect hover-lift border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="w-12 h-12 mb-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p
                  className={isDark ? 'text-slate-400' : 'text-slate-600'}
                >
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Documents
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Explore example documents and discover useful resources.
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
                <div
                  className={`relative rounded-xl overflow-hidden mb-4 h-48 hover-lift glow-effect transition-all ${
                    hoveredCard === idx ? 'scale-[1.01]' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: pdf.image }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-white/20 text-white backdrop-blur">
                        {pdf.category}
                      </span>
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-white text-sm">
                        {pdf.pages} pages
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">
                          {pdf.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-sm line-clamp-2 mb-2">
                  {pdf.title}
                </h3>

                <div
                  className={`text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {pdf.downloads} downloads
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section
        id="ai"
        className={`py-20 ${
          isDark ? 'bg-slate-900/50' : 'bg-slate-50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
              <Sparkles className="w-5 h-5" />
              AI powered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered Capabilities
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Turn long documents into useful information in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-effect border hover-lift glow-effect"
                style={{
                  borderColor: isDark
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.7)',
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p
                  className={isDark ? 'text-slate-400' : 'text-slate-600'}
                >
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

      {/* Dashboard */}
      <section id="dashboard" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
              <BarChart3 className="w-5 h-5" />
              Workspace
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Dashboard
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Manage, organize and analyze your PDF library in one place.
            </p>
          </div>

          <div
            className={`rounded-2xl overflow-hidden glass-effect glow-effect border ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`}
          >
            <div className="p-5 md:p-8">
              {/* Dashboard Tabs - COMPLETELY CLOSED */}
              <div className="flex gap-2 md:gap-6 mb-8 overflow-x-auto border-b border-slate-200 dark:border-slate-700">
                {['Overview', 'PDFs', 'Analytics', 'Settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-2 whitespace-nowrap text-sm font-semibold transition-colors ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : isDark
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'Overview' && (
                <div className="animate-fade-in-up">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {dashboardStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-xl border ${
                          isDark
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`text-sm ${
                              isDark
                                ? 'text-slate-400'
                                : 'text-slate-500'
                            }`}
                          >
                            {stat.label}
                          </span>
                          <div className="text-blue-600">{stat.icon}</div>
                        </div>
                        <div className="text-2xl font-bold">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`rounded-xl p-6 border ${
                      isDark
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold">
                          Recent Activity
                        </h3>
                        <p
                          className={`text-sm mt-1 ${
                            isDark
                              ? 'text-slate-400'
                              : 'text-slate-500'
                          }`}
                        >
                          Your latest document activity
                        </p>
                      </div>
                      <button className="text-blue-600 font-semibold text-sm">
                        View all
                      </button>
                    </div>

                    <div className="space-y-4">
                      {[
                        [
                          'Introduction to Machine Learning',
                          'PDF analyzed',
                          '2 min ago',
                        ],
                        [
                          'Research Paper - AI 2026',
                          'AI summary generated',
                          '18 min ago',
                        ],
                        [
                          'Legal Documents Guide',
                          'Added to library',
                          '1 hour ago',
                        ],
                      ].map(([title, action, time], idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-4 p-4 rounded-lg ${
                            isDark
                              ? 'bg-slate-800/60'
                              : 'bg-slate-50'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold truncate">
                              {title}
                            </p>
                            <p
                              className={`text-sm ${
                                isDark
                                  ? 'text-slate-400'
                                  : 'text-slate-500'
                              }`}
                            >
                              {action}
                            </p>
                          </div>
                          <span
                            className={`text-xs whitespace-nowrap ${
                              isDark
                                ? 'text-slate-500'
                                : 'text-slate-400'
                            }`}
                          >
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'PDFs' && (
                <div className="animate-fade-in-up">
                  <div className="flex flex-col md:flex-row gap-3 mb-6">
                    <div
                      className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-lg border ${
                        isDark
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <Search className="w-5 h-5 text-slate-400" />
                      <input
                        className="w-full bg-transparent outline-none"
                        placeholder="Search your PDF library..."
                      />
                    </div>
                    <button className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                      Upload PDF
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pdfSamples.slice(0, 3).map((pdf, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-xl border ${
                          isDark
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-white border-slate-200'
                        } hover-lift`}
                      >
                        <div
                          className="h-28 rounded-lg mb-4"
                          style={{ background: pdf.image }}
                        />
                        <h4 className="font-bold text-sm mb-2">
                          {pdf.title}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {pdf.pages} pages • {pdf.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Analytics' && (
                <div className="animate-fade-in-up grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-6 rounded-xl border ${
                      isDark
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold">Weekly Activity</h3>
                    </div>
                    <div className="h-44 flex items-end gap-3">
                      {[35, 55, 42, 78, 60, 88, 72].map((height, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                          title={`Day ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-xl border ${
                      isDark
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <h3 className="font-bold mb-5">Usage Breakdown</h3>
                    <div className="space-y-5">
                      {[
                        ['Search', '72%'],
                        ['AI Summary', '58%'],
                        ['Chat', '44%'],
                        ['Translation', '31%'],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{label}</span>
                            <span className="text-blue-600 font-semibold">
                              {value}
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-blue-600"
                              style={{ width: value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Settings' && (
                <div className="animate-fade-in-up max-w-2xl space-y-4">
                  {[
                    ['Email notifications', 'Receive updates about your PDFs'],
                    ['AI suggestions', 'Show helpful AI recommendations'],
                    ['Auto-save', 'Automatically save document changes'],
                  ].map(([title, description], idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-5 rounded-xl border ${
                        isDark
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <h4 className="font-semibold">{title}</h4>
                        <p className="text-sm text-slate-500 mt-1">
                          {description}
                        </p>
                      </div>
                      <div className="w-11 h-6 rounded-full bg-blue-600 relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className={`py-20 ${
          isDark ? 'bg-slate-900/50' : 'bg-slate-50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
              <Zap className="w-5 h-5" />
              Simple pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose your plan
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Start free and upgrade when you need more power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border hover-lift ${
                  plan.popular
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10'
                    : isDark
                    ? 'border-slate-700'
                    : 'border-slate-200'
                } ${isDark ? 'bg-slate-900' : 'bg-white'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-2">
                  {plan.description}
                </p>

                <div className="mt-6 mb-6">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500"> / month</span>
                    </>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : isDark
                      ? 'bg-slate-800 hover:bg-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {plan.name === 'Enterprise'
                    ? 'Contact Sales'
                    : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 md:p-14 text-center text-white">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Sparkles className="w-10 h-10 mx-auto mb-5" />
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Your PDFs. Smarter.
              </h2>
              <p className="max-w-2xl mx-auto text-blue-100 mb-8 text-lg">
                Search, summarize, translate and chat with your documents from
                one powerful workspace.
              </p>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t ${
          isDark
            ? 'border-slate-800 bg-slate-950'
            : 'border-slate-200 bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PDFVerse</span>
              </div>
              <p
                className={`max-w-md ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                A modern document intelligence platform designed to help you
                find, understand and work with PDFs faster.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <div className="space-y-3 text-sm text-slate-500">
                <button
                  onClick={() => scrollToSection('features')}
                  className="block hover:text-blue-600"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('ai')}
                  className="block hover:text-blue-600"
                >
                  AI Tools
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block hover:text-blue-600"
                >
                  Pricing
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-3 text-sm text-slate-500">
                <button className="block hover:text-blue-600">Docs</button>
                <button className="block hover:text-blue-600">Blog</button>
                <button className="block hover:text-blue-600">Support</button>
              </div>
            </div>
          </div>

          <div
            className={`mt-10 pt-6 border-t ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            } flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-500`}
          >
            <p>© 2026 PDFVerse. All rights reserved.</p>
            <p>Built for smarter document workflows.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PDFVerseLanding;
        
