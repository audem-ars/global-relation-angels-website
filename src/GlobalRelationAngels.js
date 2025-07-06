import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import UltraMesmerizingBackground from './UltraMesmerizingBackground';
import { typography, colorPalette, shadows, glassMorphism, animations, componentStyles } from './ThemeStyles';
import EmployersPage from './EmployersPage';
import EmployerEnquiry from './EmployerEnquiry';
import PermanentPlacement from './PermanentPlacement';
import JobSeekersPage from './JobSeekersPage';
import JobSeekerEnquiry from './JobSeekerEnquiry';
import InterviewPreparation from './InterviewPreparation';
import CurrentJobs from './CurrentJobs';
import CVTips from './CVTips';
import HRServicesPage from './HRServicesPage';
import HRServicesEnquiry from './HRServicesEnquiry';
import PortugalWorkPermit from './PortugalWorkPermit';
import CanadaWorkPermit from './CanadaWorkPermit';
import UKWorkPermit from './UKWorkPermit';
import RomaniaWorkPermit from './RomaniaWorkPermit';
import HungaryWorkPermit from './HungaryWorkPermit';
import BulgariaWorkPermit from './BulgariaWorkPermit';
import MaltaWorkPermit from './MaltaWorkPermit';
import PolandWorkPermit from './PolandWorkPermit';
import BusinessStartup from './BusinessStartup';
import DocumentValidate from './DocumentValidate';

// Import Google Fonts in your main HTML or CSS
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

const GlobalRelations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    regNumber: '',
    message: ''
  });
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState({});
const [isHovering, setIsHovering] = useState(false);
const [isPaused, setIsPaused] = useState(false);
const [animationDirection, setAnimationDirection] = useState('next');
const slideRef = useRef(null);
const [activePage, setActivePage] = useState('home');



  
  // Observer setup to track current section for background changes and animations
  useEffect(() => {
    // Handle scroll events for navbar style changes
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set up intersection observer for sections
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Update current section for background
          switch(id) {
            case 'home':
              setCurrentSection('hero');
              break;
            case 'hr-services':
              setCurrentSection('services');
              break;
            case 'testimonials':
              setCurrentSection('testimonials');
              break;
            case 'contact':
              setCurrentSection('contact');
              break;
            default:
              setCurrentSection('default');
          }
          
          // Mark section as visible for animations
          setVisibleElements(prev => ({
            ...prev,
            [id]: true
          }));
        }
      });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Set up observer for animate-on-scroll elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      elementObserver.observe(el);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
      animatedElements.forEach(el => elementObserver.unobserve(el));
    };
  }, []);
  
  const testimonials = [
    {
      name: "Ravi Sharma",
      country: "INDIA",
      text: "The team at Global Relations is exceptional in handling European work permits. They guided me through every step with clarity and professionalism. Their thorough approach, combined with deep knowledge of the immigration process, made all the difference. I'm extremely satisfied with the results and their unmatched service in international recruitment."
    },
    {
      name: "John Adebayo",
      country: "NIGERIA",
      text: "Global Relations provided exceptional support in securing my European work permit. My consultant was highly professional, ensuring all my immigration documents were in perfect order. Her patience and clear communication throughout the work visa process were invaluable. I'm incredibly grateful for her meticulous guidance and outstanding recruitment assistance."
    },
    {
      name: "Muhammad Ali",
      country: "PAKISTAN",
      text: "Global Relations exceeded my expectations in obtaining a European work visa. Their attention to detail and commitment to my success were remarkable. The team's expert knowledge of international recruitment and proactive approach made the entire process stress-free and efficient. I'm genuinely impressed by their ability to handle everything with such care."
    },
    {
      name: "Sofia Chen",
      country: "CHINA",
      text: "Working with Global Relations on my European work visa was a pleasure. They made a complex and overwhelming process incredibly straightforward. The team's consistent communication, attention to detail, and expertise in international recruitment gave me complete confidence in their services. I highly recommend them for any work permit needs."
    },
    {
      name: "Emmanuel Kwame",
      country: "GHANA",
      text: "My experience with Global Relations was excellent. Their prompt responses and consistent follow-ups on my European work visa application were impressive. The team's dedication is evident, and I wholeheartedly wish them continued success. Their professionalism in handling international recruitment and immigration services made all the difference in my journey."
    },
    {
      name: "Ananya Patel",
      country: "INDIA",
      text: "Global Relations transformed my career journey to Europe with their exceptional visa support services. Their profound knowledge of immigration regulations and personalized guidance were outstanding. The consultants maintained timely communication throughout the process, addressing all my concerns promptly. I highly recommend their services for a seamless international career transition."
    },
    {
      name: "Carlos Rodriguez",
      country: "MEXICO",
      text: "I cannot praise Global Relations enough for their remarkable assistance with my European work permit. Their team demonstrated exceptional expertise in navigating the complex immigration landscape. Their step-by-step guidance, transparent communication, and unwavering support made what seemed impossible become a reality. They are truly masters of international recruitment."
    },
    {
      name: "Elena Petrova",
      country: "RUSSIA",
      text: "Working with Global Relations was a game-changer for my career. Their dedicated team helped me secure a work permit for Germany with remarkable efficiency. Every step was clearly explained, and they were always available to answer my questions. Their personalized approach and attention to detail truly set them apart from other recruitment agencies."
    },
    {
      name: "Takashi Yamamoto",
      country: "JAPAN",
      text: "Global Relations offered outstanding support throughout my European work permit application process. Their consultants' expertise in immigration regulations and thorough understanding of cross-cultural employment needs were impressive. The seamless coordination and constant updates made a potentially stressful process remarkably smooth."
    },
    {
      name: "Maria Garcia",
      country: "COLOMBIA",
      text: "I'm thoroughly impressed with Global Relations' services. Their professional team guided me through the work permit process with patience and expertise. They were consistently responsive, addressing all my concerns promptly. Their deep understanding of European immigration systems and requirements ensured my application was successful on the first attempt."
    }
  ];
  
  // Auto-rotate testimonials with a pause feature
useEffect(() => {
  if (!isPaused) {
    const interval = setInterval(() => {
      if (animationDirection === 'next') {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }, 7000); // 7 seconds per testimonial
    
    return () => clearInterval(interval);
  }
}, [currentTestimonial, isPaused, animationDirection]);
  
  const nextTestimonial = () => {
    if (slideRef.current) {
      // Reset animation
      slideRef.current.style.animation = 'none';
      slideRef.current.offsetHeight; // Trigger reflow
      slideRef.current.style.animation = 'slideOutLeft 0.6s forwards';
      
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        if (slideRef.current) {
          slideRef.current.style.animation = 'slideInRight 0.6s forwards';
        }
      }, 600);
    } else {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
  };
  
  const prevTestimonial = () => {
    if (slideRef.current) {
      // Reset animation
      slideRef.current.style.animation = 'none';
      slideRef.current.offsetHeight; // Trigger reflow
      slideRef.current.style.animation = 'slideOutRight 0.6s forwards';
      
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        if (slideRef.current) {
          slideRef.current.style.animation = 'slideInLeft 0.6s forwards';
        }
      }, 600);
    } else {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      regNumber: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans"
         style={{ fontFamily: typography.body.fontFamily }}>
      {/* Dynamic background component */}
      <UltraMesmerizingBackground section={currentSection} />
      
      {/* Top Contact Bar */}
      <div className={`bg-white bg-opacity-90 backdrop-filter backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap">
            <a href="#contact" className="mr-6 text-sm hover:text-blue-600 transition-colors">Contact Us</a>
            <a href="#about" className="mr-6 text-sm hover:text-blue-600 transition-colors">About Us</a>
            <a href="#faq" className="text-sm hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center mr-6">
              <span className="text-sm">US:</span>
              <a href="tel:+12407266550" className="ml-1 text-sm hover:text-blue-600 transition-colors">+1 240 726 6550</a>
            </div>
            <div className="flex items-center">
              <span className="text-sm">Germany:</span>
              <a href="tel:+919810383802" className="ml-1 text-sm hover:text-blue-600 transition-colors">+91 981 038 3802</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white bg-opacity-95 backdrop-filter backdrop-blur-md shadow-md sticky top-10 z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-2xl font-bold" style={{ 
            fontFamily: typography.headings.fontFamily, 
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent'
          }}>
            GLOBAL RELATIONS
          </div>
          <div className="hidden md:flex space-x-6">
          <button 
  onClick={(e) => setActivePage('home')}
  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
>
  Home
</button>
            <button 
  onClick={(e) => setActivePage('employers')}
  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
>
  Employers
</button>
<button onClick={(e) => setActivePage('jobSeekers')} className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Job Seekers</button>
<button 
  onClick={function() { setActivePage('hrServices'); }}
  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
>
  HR Services
</button>
<div className="relative group">
  <button className="text-gray-800 hover:text-blue-600 font-medium transition-colors flex items-center">
    Work Permit
    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <div className="py-1" role="menu" aria-orientation="vertical">
      <button onClick={() => setActivePage('canadaWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Canada</button>
      <button onClick={() => setActivePage('ukWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">UK</button>
      <button onClick={() => setActivePage('romaniaWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Romania</button>
      <button onClick={() => setActivePage('hungaryWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Hungary</button>
      <button onClick={() => setActivePage('bulgariaWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Bulgaria</button>
      <button onClick={() => setActivePage('maltaWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Malta</button>
      <button onClick={() => setActivePage('polandWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Poland</button>
      <button onClick={() => setActivePage('portugalWorkPermit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left" role="menuitem">Portugal</button>
    </div>
  </div>
</div>
<button 
  onClick={(e) => { setActivePage('businessStartup'); }}
  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
>
  Business Startup
</button>
<button 
  onClick={(e) => { setActivePage('documentValidate'); }}
  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
>
  Document Validate
</button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `.animate-on-scroll { opacity: 1 !important; transform: none !important; }` }} />

      {/* Conditional rendering based on active page */}
{activePage === 'home' ? (
  <>
    {/* Hero Section with Layered Backgrounds */}
<section id="home" className="relative py-32 overflow-hidden min-h-screen flex items-center">
  {/* Background Layer 1 - Main Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/hero/hero-main.jpg" 
      alt="Global Relations Background"
      className="w-full h-full object-cover"
    />
    {/* Minimal Gradient Overlays for Better Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-blue-600/10 to-blue-900/15"></div>
  </div>
  
  {/* Background Layer 2 - Floating Elements */}
  <div className="absolute inset-0 z-1">
    {/* Germany themed image - top right */}
    <div className="absolute top-10 right-10 w-64 h-48 opacity-20 transform rotate-12 animate-float">
      <img 
        src="/images/hero/hero-germany.jpg" 
        alt="Germany"
        className="w-full h-full object-cover rounded-xl shadow-2xl"
      />
    </div>
    
    {/* Europe themed image - bottom left */}
    <div className="absolute bottom-20 left-10 w-48 h-36 opacity-25 transform -rotate-6 animate-float" style={{animationDelay: '2s'}}>
      <img 
        src="/images/hero/hero-europe.jpg" 
        alt="Europe"
        className="w-full h-full object-cover rounded-xl shadow-2xl"
      />
    </div>
    
    {/* People overlay - center right */}
    <div className="absolute top-1/4 right-1/4 w-80 h-60 opacity-15 transform rotate-3 animate-pulse">
      <img 
        src="/images/hero/hero-people.jpg" 
        alt="Professional Team"
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>
  </div>
  
  {/* Animated Particles/Dots */}
  <div className="absolute inset-0 z-2">
    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
    <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-200 rounded-full opacity-50 animate-bounce" style={{animationDelay: '3s'}}></div>
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out" 
           style={{ 
             ...glassMorphism.medium, 
             borderRadius: '1rem',
             padding: '3.5rem 2.5rem',
             boxShadow: shadows.xl,
             backdropFilter: 'blur(20px)',
             background: 'rgba(255, 255, 255, 0.15)'
           }}>
        <h1 className="mb-6 text-white drop-shadow-lg" style={{
          fontFamily: typography.headings.fontFamily,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: typography.headings.weights.black,
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          Welcome To Global Relations
        </h1>
        <p className="mb-10 text-white/90 drop-shadow-md" style={{
          fontFamily: typography.body.fontFamily,
          fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
          lineHeight: '1.6',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Based in Germany, our leading recruitment firm connects top talent with exceptional opportunities. Our multilingual consultants have successfully placed senior managers, professionals, and executives, ensuring the perfect match for both candidates and employers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#about" 
             className="transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
             style={{
               background: 'rgba(255, 255, 255, 0.9)',
               color: colorPalette.blues.primary,
               fontWeight: typography.headings.weights.semibold,
               padding: '0.75rem 1.5rem',
               borderRadius: '0.5rem',
               backdropFilter: 'blur(10px)'
             }}>About Us</a>
          <a href="#contact" 
             className="transform hover:-translate-y-1 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
             style={{
               border: '2px solid rgba(255, 255, 255, 0.8)',
               color: 'white',
               fontWeight: typography.headings.weights.semibold,
               padding: '0.75rem 1.5rem',
               borderRadius: '0.5rem',
               backdropFilter: 'blur(10px)'
             }}>Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* For Candidates/Employers Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll transform transition-all duration-700 ease-out rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2"
               style={{ 
                 background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                 padding: '2.5rem',
                 borderRadius: '1rem',
                 border: '1px solid rgba(255, 255, 255, 0.7)'
               }}>
            <h2 style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: typography.headings.weights.bold,
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              marginBottom: '0.5rem'
            }}>FOR CANDIDATES</h2>
            <p className="text-xl mb-6" style={{
              fontFamily: typography.body.fontFamily,
              color: colorPalette.neutrals.darkGray
            }}>Transforming lives through the world of work</p>
            <a href="#job-seekers" 
               className="inline-block transform hover:-translate-y-1 transition-all duration-300"
               style={{
                 background: colorPalette.blues.gradients.primary,
                 color: colorPalette.neutrals.white,
                 fontWeight: typography.headings.weights.semibold,
                 padding: '0.75rem 1.5rem',
                 borderRadius: '0.5rem',
                 boxShadow: shadows.md
               }}>Learn More</a>
          </div>
          <div className="animate-on-scroll transform transition-all duration-700 ease-out delay-300 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2"
               style={{ 
                 background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', 
                 padding: '2.5rem',
                 borderRadius: '1rem',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 color: colorPalette.neutrals.white
               }}>
            <h2 style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: typography.headings.weights.bold,
              marginBottom: '0.5rem'
            }}>For Employers</h2>
            <p className="text-xl mb-6" style={{
              fontFamily: typography.body.fontFamily,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>Workforce solutions to power your business</p>
            <a href="#employers" 
               className="inline-block transform hover:-translate-y-1 transition-all duration-300"
               style={{
                 background: colorPalette.neutrals.white,
                 color: colorPalette.blues.primary,
                 fontWeight: typography.headings.weights.semibold,
                 padding: '0.75rem 1.5rem',
                 borderRadius: '0.5rem',
                 boxShadow: shadows.md
               }}>Learn More</a>
          </div>
        </div>
      </div>
    </section>

    {/* About Section with Background Image */}
<section id="about" className="py-20 relative overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/about/about-background.jpg" 
      alt="Global Relations About Background"
      className="w-full h-full object-cover"
    />
    {/* Minimal Gradient Overlays for Better Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-blue-800/10 to-blue-900/15"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
  </div>

  {/* Optional: Floating Accent Elements */}
  <div className="absolute inset-0 z-1">
    {/* Floating geometric shapes */}
    <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-md animate-ping" style={{animationDelay: '4s'}}></div>
    
    {/* Connection lines - subtle */}
    <div className="absolute top-1/4 right-1/3 w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent transform rotate-45"></div>
    <div className="absolute bottom-1/4 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-blue-300/40 to-transparent transform -rotate-45"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Main Content Card with Pattern Background */}
    <div className="animate-on-scroll transition-all duration-1000 ease-out relative overflow-hidden" 
         style={{ 
           backgroundImage: `
             linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
             url(/images/about/about-pattern.png)
           `,
           backgroundSize: 'auto 150px',
           backgroundPosition: 'center',
           backgroundRepeat: 'repeat',
           backdropFilter: 'blur(20px)',
           borderRadius: '1rem',
           padding: '3rem',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
           border: '1px solid rgba(255, 255, 255, 0.3)'
         }}>
      
      {/* Content with relative positioning to stay above pattern */}
      <div className="relative z-10">
        <h2 className="text-center mb-12" style={{
          fontFamily: typography.headings.fontFamily,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: typography.headings.weights.bold,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }}>About Global Relations</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-8" style={{
            fontFamily: typography.body.fontFamily,
            fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
            lineHeight: '1.8',
            color: colorPalette.neutrals.darkGray
          }}>
            Global Relations specializes in linking top European talent with global opportunities, focusing on candidates from Asia and the Middle East. Our expert recruiters work closely with businesses to identify the right candidates and understand their unique needs. For job seekers, we offer career counseling, interview preparation, and resume writing services to support their professional journey. We are committed to excellence and building long-term partnerships, helping both businesses and professionals achieve their full potential.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                 style={{ 
                   background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                   borderRadius: '0.75rem',
                   padding: '1.5rem 1rem',
                   boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                   border: '1px solid rgba(147, 197, 253, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}>
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
              <p style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: '2.5rem',
                fontWeight: typography.headings.weights.bold,
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>7<sup>+</sup></p>
              <p className="text-sm" style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray,
                fontWeight: '500'
              }}>Years in business</p>
            </div>
            
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100"
                 style={{ 
                   background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                   borderRadius: '0.75rem',
                   padding: '1.5rem 1rem',
                   boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                   border: '1px solid rgba(147, 197, 253, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" style={{animationDelay: '1s'}}></div>
              <p style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: '2.5rem',
                fontWeight: typography.headings.weights.bold,
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>5,000<sup>+</sup></p>
              <p className="text-sm" style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray,
                fontWeight: '500'
              }}>Candidates placed annually</p>
            </div>
            
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
                 style={{ 
                   background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                   borderRadius: '0.75rem',
                   padding: '1.5rem 1rem',
                   boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                   border: '1px solid rgba(147, 197, 253, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" style={{animationDelay: '2s'}}></div>
              <p style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: '2.5rem',
                fontWeight: typography.headings.weights.bold,
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>25<sup>+</sup></p>
              <p className="text-sm" style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray,
                fontWeight: '500'
              }}>Countries Worked in</p>
            </div>
            
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
                 style={{ 
                   background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                   borderRadius: '0.75rem',
                   padding: '1.5rem 1rem',
                   boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                   border: '1px solid rgba(147, 197, 253, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" style={{animationDelay: '3s'}}></div>
              <p style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: '2.5rem',
                fontWeight: typography.headings.weights.bold,
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>150<sup>+</sup></p>
              <p className="text-sm" style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray,
                fontWeight: '500'
              }}>Number of Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* HR Services Section */}
    <section id="hr-services" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll transition-all duration-1000 ease-out" 
             style={{ 
               ...glassMorphism.medium, 
               borderRadius: '1rem',
               padding: '3rem',
               boxShadow: shadows.xl
             }}>
          <h2 className="mb-4" style={{
            fontFamily: typography.headings.fontFamily,
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: typography.headings.weights.bold,
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent'
          }}>Elevate Your Career with Professional HR</h2>
          <p className="mb-6" style={{
            fontFamily: typography.headings.fontFamily,
            fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
            fontWeight: typography.headings.weights.medium,
            color: colorPalette.blues.primary
          }}>Expert Market Entry Support.</p>
          <p className="mb-6" style={{
            fontFamily: typography.body.fontFamily,
            fontSize: 'clamp(1rem, 1vw, 1.125rem)',
            lineHeight: '1.7',
            color: colorPalette.neutrals.darkGray
          }}>
            We've helped international companies enter the European market. Our services include drafting employment contracts compliant with local laws and setting up efficient payroll systems for your initial hires.
          </p>
          <p style={{
            fontFamily: typography.headings.fontFamily,
            fontWeight: typography.headings.weights.semibold,
            marginBottom: '1rem',
            color: colorPalette.neutrals.darkGray
          }}>Our Key Services:</p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
                borderRadius: '50%',
                marginRight: '0.75rem',
                marginTop: '0.25rem',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span style={{ fontFamily: typography.body.fontFamily }}>
                <strong>Employment Legal Advice:</strong> Expert guidance on employment regulations.
              </span>
            </li>
            <li className="flex items-start animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-500 ease-out delay-100">
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
                borderRadius: '50%',
                marginRight: '0.75rem',
                marginTop: '0.25rem',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span style={{ fontFamily: typography.body.fontFamily }}>
                <strong>Tailored Contracts:</strong> Drafting contracts that meet legal requirements.
              </span>
            </li>
            <li className="flex items-start animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-500 ease-out delay-200">
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
                borderRadius: '50%',
                marginRight: '0.75rem',
                marginTop: '0.25rem',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span style={{ fontFamily: typography.body.fontFamily }}>
                <strong>Payroll Solutions:</strong> Comprehensive payroll services for international companies.
              </span>
            </li>
            <li className="flex items-start animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-500 ease-out delay-300">
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
                borderRadius: '50%',
                marginRight: '0.75rem',
                marginTop: '0.25rem',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span style={{ fontFamily: typography.body.fontFamily }}>
                <strong>Market Research:</strong> Research to guide your entry strategies in Europe.
              </span>
            </li>
          </ul>
          <p style={{
            fontFamily: typography.body.fontFamily,
            fontSize: 'clamp(1rem, 1vw, 1.125rem)',
            lineHeight: '1.7',
            color: colorPalette.neutrals.darkGray
          }}>Contact us for a competitive quote and see how our payroll and HR services can support your business.</p>
        </div>
      </div>
    </section>

    {/* Job Seekers Section with Image Cards and Pattern Background */}
<section id="job-seekers" className="py-20">
  <div className="container mx-auto px-4">
    <div className="animate-on-scroll transition-all duration-1000 ease-out" 
         style={{ 
           backgroundImage: `
             linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
             url(/images/about/about-pattern.png)
           `,
           backgroundSize: 'contain',
           backgroundPosition: 'center',
           backgroundRepeat: 'repeat',
           borderRadius: '1rem',
           padding: '3rem',
           boxShadow: shadows.lg,
           border: '1px solid rgba(255, 255, 255, 0.3)'
         }}>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <h2 className="mb-8" style={{
          fontFamily: typography.headings.fontFamily,
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: typography.headings.weights.bold,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }}>Job Seekers</h2>
        
        <h3 className="text-center mb-10" style={{
          fontFamily: typography.headings.fontFamily,
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: typography.headings.weights.semibold,
          color: colorPalette.blues.primary
        }}>Explore Our Portfolio of Successful Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Factory Workers Card */}
          <a href="#" className="group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              {/* Image with overlay */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <img 
                  src="/images/factory-workers.jpg" 
                  alt="Factory Workers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 style={{
                    fontFamily: typography.headings.fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: typography.headings.weights.bold,
                    marginBottom: '0.25rem'
                  }}>Factory Workers</h4>
                  <p style={{
                    fontFamily: typography.headings.fontFamily,
                    color: '#93c5fd',
                    fontWeight: typography.headings.weights.semibold
                  }}>GERMANY</p>
                </div>
              </div>
            </div>
          </a>
          
          {/* Farm Workers Card */}
          <a href="#" className="group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              {/* Image with overlay */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <img 
                  src="/images/farm-workers.jpg" 
                  alt="Farm Workers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 style={{
                    fontFamily: typography.headings.fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: typography.headings.weights.bold,
                    marginBottom: '0.25rem'
                  }}>Farm Workers</h4>
                  <p style={{
                    fontFamily: typography.headings.fontFamily,
                    color: '#93c5fd',
                    fontWeight: typography.headings.weights.semibold
                  }}>PORTUGAL</p>
                </div>
              </div>
            </div>
          </a>
          
          {/* Restaurant Workers Card */}
          <a href="#" className="group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              {/* Image with overlay */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <img 
                  src="/images/restaurant-workers.jpg" 
                  alt="Restaurant Workers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 style={{
                    fontFamily: typography.headings.fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: typography.headings.weights.bold,
                    marginBottom: '0.25rem'
                  }}>Restaurant Workers</h4>
                  <p style={{
                    fontFamily: typography.headings.fontFamily,
                    color: '#93c5fd',
                    fontWeight: typography.headings.weights.semibold
                  }}>MALTA</p>
                </div>
              </div>
            </div>
          </a>
          
          {/* Truck Drivers Card */}
          <a href="#" className="group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              {/* Image with overlay */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <img 
                  src="/images/truck-drivers.jpg" 
                  alt="Truck Drivers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 style={{
                    fontFamily: typography.headings.fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: typography.headings.weights.bold,
                    marginBottom: '0.25rem'
                  }}>Truck Drivers</h4>
                  <p style={{
                    fontFamily: typography.headings.fontFamily,
                    color: '#93c5fd',
                    fontWeight: typography.headings.weights.semibold
                  }}>LITHUANIA</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="text-center mt-10">
          <a href="#" 
             className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 ease-out inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
             style={{
               background: colorPalette.blues.gradients.primary,
               color: colorPalette.neutrals.white,
               fontWeight: typography.headings.weights.semibold,
               padding: '0.75rem 1.5rem',
               borderRadius: '0.5rem',
               boxShadow: shadows.md,
               transition: animations.transition.bounce
             }}>
            View All Opportunities
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Business Startup Section with Background Image */}
<section id="business-startup" className="py-20 relative overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/business/business-background.jpg" 
      alt="Business Startup Background"
      className="w-full h-full object-cover"
    />
    {/* Minimal Gradient Overlays for Better Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-blue-800/10 to-blue-900/15"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
  </div>

  {/* Optional: Floating Business Elements */}
  <div className="absolute inset-0 z-1">
    {/* Floating geometric shapes representing growth */}
    <div className="absolute top-16 right-12 w-28 h-28 bg-white/10 rounded-lg blur-xl animate-pulse transform rotate-12"></div>
    <div className="absolute bottom-16 left-8 w-20 h-20 bg-blue-300/20 rounded-lg blur-lg animate-bounce transform -rotate-6" style={{animationDelay: '1.5s'}}></div>
    <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-white/15 rounded-lg blur-md animate-ping transform rotate-45" style={{animationDelay: '3s'}}></div>
    
    {/* Arrow elements suggesting growth */}
    <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-gradient-to-t from-transparent via-white/30 to-white/60 transform rotate-12"></div>
    <div className="absolute bottom-1/3 left-1/4 w-1 h-20 bg-gradient-to-t from-transparent via-blue-300/40 to-blue-300/70 transform -rotate-12"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* First Card - Main Business Info */}
    <div className="max-w-4xl mx-auto animate-on-scroll transition-all duration-1000 ease-out" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.95)',
           backdropFilter: 'blur(20px)',
           borderRadius: '1rem',
           padding: '3rem',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
           border: '1px solid rgba(255, 255, 255, 0.3)',
           marginBottom: '4rem'
         }}>
      <h2 className="mb-4" style={{
        fontFamily: typography.headings.fontFamily,
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: typography.headings.weights.bold,
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }}>Business Startups</h2>
      
      <p className="mb-6" style={{
        fontFamily: typography.headings.fontFamily,
        fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
        fontWeight: typography.headings.weights.semibold,
        color: colorPalette.blues.primary
      }}>Opportunity for Non-EU Entrepreneurs.</p>
      
      <p className="mb-6" style={{
        fontFamily: typography.body.fontFamily,
        fontSize: 'clamp(1rem, 1vw, 1.125rem)',
        lineHeight: '1.7',
        color: colorPalette.neutrals.darkGray
      }}>
        If you're a non-EU entrepreneur looking to start an innovative business in Europe, consider applying for an EU Startup or Entrepreneur Visa. These programs are designed to attract top talent to launch ventures in the EU.
      </p>
      
      <h3 className="mb-4" style={{
        fontFamily: typography.headings.fontFamily,
        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
        fontWeight: typography.headings.weights.semibold,
        color: colorPalette.blues.primary
      }}>Visa Programs for Top Talent</h3>
      
      <p className="mb-6" style={{
        fontFamily: typography.body.fontFamily,
        fontSize: 'clamp(1rem, 1vw, 1.125rem)',
        lineHeight: '1.7',
        color: colorPalette.neutrals.darkGray
      }}>
        Many EU countries offer specialized visa programs for promising entrepreneurs. These visas provide a pathway to enter the Schengen Area, making it easier to start and grow your business in Europe.
      </p>
      
      <a href="#" 
         className="inline-block transform hover:-translate-y-1 transition-all duration-300"
         style={{
           background: colorPalette.blues.gradients.primary,
           color: colorPalette.neutrals.white,
           fontWeight: typography.headings.weights.semibold,
           padding: '0.75rem 1.5rem',
           borderRadius: '0.5rem',
           boxShadow: shadows.md
         }}>View More</a>
    </div>

    {/* Second Card - Business Process */}
    <div className="max-w-4xl mx-auto animate-on-scroll transition-all duration-1000 ease-out delay-300" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.95)',
           backdropFilter: 'blur(20px)',
           borderRadius: '1rem',
           padding: '3rem',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
           border: '1px solid rgba(255, 255, 255, 0.3)'
         }}>
      <h3 className="mb-6" style={{
        fontFamily: typography.headings.fontFamily,
        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
        fontWeight: typography.headings.weights.semibold,
        color: colorPalette.blues.primary
      }}>The Business Process</h3>
      
      <p className="mb-8" style={{
        fontFamily: typography.body.fontFamily,
        fontSize: 'clamp(1rem, 1vw, 1.125rem)',
        lineHeight: '1.7',
        color: colorPalette.neutrals.darkGray
      }}>
        Global Relations uses a very simple and fast approach in order to provide the client with a business invitation through the license obtained for the client. The following steps or process makes it easier to reach the goal of getting the business visa.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
             style={{ 
               background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 50%)',
               borderRadius: '0.75rem',
               padding: '1.5rem',
               boxShadow: shadows.md,
               position: 'relative',
               overflow: 'hidden'
             }}>
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <h4 style={{
            fontFamily: typography.headings.fontFamily,
            fontSize: '1.25rem',
            fontWeight: typography.headings.weights.semibold,
            color: colorPalette.blues.deep,
            marginBottom: '0.5rem'
          }}>Industry</h4>
          <p style={{
            fontFamily: typography.body.fontFamily,
            color: colorPalette.neutrals.darkGray,
            fontWeight: '500'
          }}>Your Own Company</p>
        </div>
        
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100"
             style={{ 
               background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 50%)',
               borderRadius: '0.75rem',
               padding: '1.5rem',
               boxShadow: shadows.md,
               position: 'relative',
               overflow: 'hidden'
             }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <h4 style={{
            fontFamily: typography.headings.fontFamily,
            fontSize: '1.25rem',
            fontWeight: typography.headings.weights.semibold,
            color: colorPalette.blues.deep,
            marginBottom: '0.5rem'
          }}>Positions</h4>
          <p style={{
            fontFamily: typography.body.fontFamily,
            color: colorPalette.neutrals.darkGray,
            fontWeight: '500'
          }}>Owner/ Manager</p>
        </div>
        
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
             style={{ 
               background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 50%)',
               borderRadius: '0.75rem',
               padding: '1.5rem',
               boxShadow: shadows.md,
               position: 'relative',
               overflow: 'hidden'
             }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <h4 style={{
            fontFamily: typography.headings.fontFamily,
            fontSize: '1.25rem',
            fontWeight: typography.headings.weights.semibold,
            color: colorPalette.blues.deep,
            marginBottom: '0.5rem'
          }}>Processing Time</h4>
          <p style={{
            fontFamily: typography.body.fontFamily,
            color: colorPalette.neutrals.darkGray,
            fontWeight: '500'
          }}>45 Working Days</p>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Testimonials Section with Background */}
<section id="testimonials" className="py-20 relative overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/testimonials/testimonials-background.jpg" 
      alt="Global Relations Testimonials Background"
      className="w-full h-full object-cover"
    />
    {/* Minimal Gradient Overlays for Better Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-blue-800/10 to-blue-900/15"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
  </div>

  {/* Optional: Floating Success Elements */}
  <div className="absolute inset-0 z-1">
    {/* Floating testimonial bubbles - subtle */}
    <div className="absolute top-16 right-8 w-24 h-24 bg-white/8 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-16 left-8 w-20 h-20 bg-blue-300/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
    <div className="absolute top-1/3 left-1/6 w-16 h-16 bg-white/10 rounded-full blur-md animate-ping" style={{animationDelay: '4s'}}></div>
    
    {/* Quote marks in background - very subtle */}
    <div className="absolute top-1/4 right-1/4 text-white/5 text-8xl font-serif">"</div>
    <div className="absolute bottom-1/4 left-1/4 text-blue-300/8 text-8xl font-serif transform rotate-180">"</div>
    
    {/* Success path lines - subtle */}
    <div className="absolute top-1/3 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-30"></div>
    <div className="absolute bottom-1/3 left-1/3 w-px h-16 bg-gradient-to-b from-transparent via-blue-300/30 to-transparent transform -rotate-30"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto animate-on-scroll transition-all duration-1000 ease-out" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.95)',
           backdropFilter: 'blur(20px)',
           borderRadius: '1rem',
           padding: '3rem',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
           border: '1px solid rgba(255, 255, 255, 0.3)'
         }}>
      <h2 className="text-center mb-12" style={{
        fontFamily: typography.headings.fontFamily,
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: typography.headings.weights.bold,
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }}>Featured Testimonials</h2>
      
      <div 
        className="relative overflow-hidden rounded-xl shadow-2xl min-h-[400px]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
            url(/images/testimonials/testimonials-pattern.png)
          `,
          backgroundSize: 'auto 100px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundColor: '#ffffff'
        }}
        onMouseEnter={() => {
          setIsHovering(true);
          setIsPaused(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsPaused(false);
        }}
      >
        {/* Decorative accent shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Content with animation */}
        <div className="p-10 md:p-16 text-gray-800 relative z-10" ref={slideRef}>
          <div className="text-5xl text-blue-400 opacity-30 mb-6" style={{
            fontFamily: typography.accent.fontFamily,
            fontWeight: typography.accent.weights.bold
          }}>"</div>
          <p className="mb-8" style={{
            fontFamily: typography.accent.fontFamily,
            fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
            fontStyle: 'italic',
            lineHeight: '1.6',
            color: '#374151'
          }}>
            {testimonials[currentTestimonial].text}
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              fontFamily: typography.headings.fontFamily
            }}>
              {testimonials[currentTestimonial].name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="font-bold text-lg" style={{
                fontFamily: typography.headings.fontFamily,
                color: '#1f2937'
              }}>{testimonials[currentTestimonial].name}</div>
              <div style={{
                fontFamily: typography.body.fontFamily,
                color: '#3b82f6'
              }}>{testimonials[currentTestimonial].country}</div>
            </div>
          </div>
          
          {/* Star rating */}
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={() => {
          prevTestimonial();
          setAnimationDirection('prev');
        }}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full focus:outline-none z-20 transition-all duration-300 ${isHovering ? 'opacity-90' : 'opacity-60'}`}
        style={{
          background: colorPalette.neutrals.white,
          boxShadow: shadows.md,
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      <button 
        onClick={() => {
          nextTestimonial();
          setAnimationDirection('next');
        }}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full focus:outline-none z-20 transition-all duration-300 ${isHovering ? 'opacity-90' : 'opacity-60'}`}
        style={{
          background: colorPalette.neutrals.white,
          boxShadow: shadows.md,
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentTestimonial) {
                setAnimationDirection('next');
              } else if (index < currentTestimonial) {
                setAnimationDirection('prev');
              }
              setCurrentTestimonial(index);
            }}
            className={`rounded-full focus:outline-none transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-600 w-6' : 'bg-gray-300 w-3'}`}
            style={{
              height: '0.75rem'
            }}
          ></button>
        ))}
      </div>
    </div>
  </div>
  
  {/* Animation keyframes */}
  <style dangerouslySetInnerHTML={{
  __html: `
    @keyframes slideOutLeft {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(-30px); opacity: 0; }
    }
    @keyframes slideInRight {
      from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(30px); opacity: 0; }
    }
    @keyframes slideInLeft {
      from { transform: translateX(-30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `
}} />
</section>

    {/* Inquiry Form with Background */}
<section id="contact" className="py-20 relative overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/contact/contact-background.jpg" 
      alt="Global Relations Contact Background"
      className="w-full h-full object-cover"
    />
    {/* Minimal Gradient Overlays for Better Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-blue-800/10 to-blue-900/15"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
  </div>

  {/* Optional: Floating Contact Elements */}
  <div className="absolute inset-0 z-1">
    {/* Floating communication bubbles */}
    <div className="absolute top-20 right-12 w-24 h-24 bg-white/8 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 left-8 w-20 h-20 bg-blue-300/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
    <div className="absolute top-1/3 left-1/6 w-16 h-16 bg-white/10 rounded-full blur-md animate-ping" style={{animationDelay: '4s'}}></div>
    
    {/* Communication lines */}
    <div className="absolute top-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-45"></div>
    <div className="absolute bottom-1/3 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-300/30 to-transparent transform -rotate-45"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-center mb-8" style={{
      fontFamily: typography.headings.fontFamily,
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: typography.headings.weights.bold,
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      textShadow: 'none'
    }}>Inquiry Now</h2>
    
    <div className="max-w-3xl mx-auto animate-on-scroll transition-all duration-1000 ease-out" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.95)',
           backdropFilter: 'blur(20px)',
           borderRadius: '1rem',
           padding: '2.5rem',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
           border: '1px solid rgba(255, 255, 255, 0.3)'
         }}>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block mb-2 font-medium" style={{
              fontFamily: typography.headings.fontFamily,
              color: colorPalette.neutrals.nearBlack
            }}>Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                fontFamily: typography.body.fontFamily,
                border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                width: '100%',
                transition: animations.transition.fast
              }}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" style={{
              fontFamily: typography.headings.fontFamily,
              color: colorPalette.neutrals.nearBlack
            }}>Email <span className="text-red-500">*</span></label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                fontFamily: typography.body.fontFamily,
                border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                width: '100%',
                transition: animations.transition.fast
              }}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" style={{
              fontFamily: typography.headings.fontFamily,
              color: colorPalette.neutrals.nearBlack
            }}>Telephone Number <span className="text-red-500">*</span></label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                fontFamily: typography.body.fontFamily,
                border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                width: '100%',
                transition: animations.transition.fast
              }}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Telephone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" style={{
              fontFamily: typography.headings.fontFamily,
              color: colorPalette.neutrals.nearBlack
            }}>Message Subject <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                fontFamily: typography.body.fontFamily,
                border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                width: '100%',
                transition: animations.transition.fast
              }}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Message Subject"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" style={{
              fontFamily: typography.headings.fontFamily,
              color: colorPalette.neutrals.nearBlack
            }}>Registration Number <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              style={{
                fontFamily: typography.body.fontFamily,
                border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                width: '100%',
                transition: animations.transition.fast
              }}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Registration Number"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium" style={{
            fontFamily: typography.headings.fontFamily,
            color: colorPalette.neutrals.nearBlack
          }}>Comment or Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5" 
            style={{
              fontFamily: typography.body.fontFamily,
              border: `1px solid ${colorPalette.neutrals.mediumGray}`,
              borderRadius: '0.5rem',
              padding: '0.75rem 1rem',
              width: '100%',
              transition: animations.transition.fast
            }}
            className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Comment or Message"
          ></textarea>
        </div>
        <button type="submit" 
                className="transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: colorPalette.blues.gradients.primary,
                  color: colorPalette.neutrals.white,
                  fontFamily: typography.headings.fontFamily,
                  fontWeight: typography.headings.weights.bold,
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  boxShadow: shadows.md
                }}>Submit</button>
      </form>
    </div>
  </div>
</section>
  </>
) : activePage === 'employers' ? (
  <EmployersPage testimonials={testimonials} setActivePage={setActivePage} />
) : activePage === 'employerEnquiry' ? (
  <EmployerEnquiry />
) : activePage === 'permanentPlacement' ? (
  <PermanentPlacement />
) : activePage === 'jobSeekers' ? (
  <JobSeekersPage testimonials={testimonials} setActivePage={setActivePage} />
) : activePage === 'jobSeekerEnquiry' ? (
  <JobSeekerEnquiry />
) : activePage === 'interviewPreparation' ? (
  <InterviewPreparation />
) : activePage === 'currentJobs' ? (
  <CurrentJobs />
)  : activePage === 'cvTips' ? (
    <CVTips />
  ) : activePage === 'hrServices' ? (
    <HRServicesPage testimonials={testimonials} setActivePage={setActivePage} />
  ) : activePage === 'hrServicesEnquiry' ? (
    <HRServicesEnquiry />
  ) : activePage === 'portugalWorkPermit' ? (
    <PortugalWorkPermit />
  ) : activePage === 'canadaWorkPermit' ? (
    <CanadaWorkPermit />
  ) : activePage === 'ukWorkPermit' ? (
    <UKWorkPermit />
  ) : activePage === 'romaniaWorkPermit' ? (
    <RomaniaWorkPermit />
  ) : activePage === 'hungaryWorkPermit' ? (
    <HungaryWorkPermit />
  ) : activePage === 'bulgariaWorkPermit' ? (
    <BulgariaWorkPermit />
  ) : activePage === 'maltaWorkPermit' ? (
    <MaltaWorkPermit />
  ) : activePage === 'polandWorkPermit' ? (
    <PolandWorkPermit />
  ) : activePage === 'businessStartup' ? (
    <BusinessStartup />
  ) : activePage === 'documentValidate' ? (
    <DocumentValidate />
) : null}

      {/* Footer Links */}
      <section className="py-12 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                color: colorPalette.neutrals.nearBlack
              }}>About GR</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Locations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Meet the Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>ESG</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Investor Relations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Employment Trends</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                color: colorPalette.neutrals.nearBlack
              }}>Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Talent Acquisition</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Global Employment Outsourcing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Global Mobility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Consulting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Managed Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                color: colorPalette.neutrals.nearBlack
              }}>Case Studies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Talent Acquisition</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Global Employment Outsourcing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Global Mobility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Consulting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontFamily: typography.body.fontFamily }}>Managed Solutions</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-bold mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                color: colorPalette.neutrals.nearBlack
              }}>Contact</h3>
              <p className="mb-4" style={{ fontFamily: typography.body.fontFamily }}>
                <strong>HEAD OFFICE:</strong><br/>
                Global Relations<br/>
                Ebertshauser Haupststr 18<br/>
                98544 Zella-Mehlis<br/>
                Germany
              </p>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600">
                  <Phone className="w-full h-full" />
                </div>
                <p style={{ fontFamily: typography.body.fontFamily }}><strong>Germany:</strong> +91 981 038 3802</p>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600">
                  <Phone className="w-full h-full" />
                </div>
                <p style={{ fontFamily: typography.body.fontFamily }}><strong>United States:</strong> +1 240 726 6550</p>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600">
                  <Phone className="w-full h-full" />
                </div>
                <p style={{ fontFamily: typography.body.fontFamily }}><strong>India:</strong> +91 828 691 2345</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600">
                  <Mail className="w-full h-full" />
                </div>
                <p style={{ fontFamily: typography.body.fontFamily }}><strong>Email:</strong> globalrelations2@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 bg-opacity-95 backdrop-filter backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center" style={{ fontFamily: typography.body.fontFamily }}>
            Copyright © 2025 Global Relations. All rights reserved.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/+12407266550" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)'
          }}
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* Add FontAwesome for additional icons if needed */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      
      {/* Add custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
  __html: `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `
}} />
    </div>
  );
};

export default GlobalRelations;