import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, Send } from 'lucide-react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const HRServicesPage = ({ testimonials, setActivePage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const slideRef = useRef(null);
  
  // Auto-rotate testimonials with a pause feature
  React.useEffect(() => {
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
  
  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
        setAnimationDirection('prev');
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
        setAnimationDirection('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative py-32 min-h-screen flex items-center bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white opacity-10 rounded-full transform -translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-white mb-6" style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: typography.headings.weights.bold,
              lineHeight: '1.1'
            }}>HR Services</h1>
            
            <p className="text-blue-100 text-xl mb-8" style={{
              fontFamily: typography.body.fontFamily,
              lineHeight: '1.6'
            }}>
              Comprehensive HR solutions for international businesses entering European markets
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left content */}
            <div className="lg:w-2/3 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out" style={{
              ...glassMorphism.light,
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: shadows.lg
            }}>
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                We have helped numerous international companies enter the European market since 2015. We can draft employment contracts for your first hires according to local laws and set up payroll.
              </p>
              
              <h2 className="mb-6" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                fontWeight: typography.headings.weights.bold,
                color: colorPalette.blues.primary
              }}>
                We can offer:
              </h2>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
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
                  <span style={{ 
                    fontFamily: typography.body.fontFamily,
                    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                    lineHeight: '1.7',
                    color: colorPalette.neutrals.darkGray
                  }}>
                    Legal advice regarding employment
                  </span>
                </li>
                <li className="flex items-start">
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
                  <span style={{ 
                    fontFamily: typography.body.fontFamily,
                    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                    lineHeight: '1.7',
                    color: colorPalette.neutrals.darkGray
                  }}>
                    Employment contracts
                  </span>
                </li>
                <li className="flex items-start">
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
                  <span style={{ 
                    fontFamily: typography.body.fontFamily,
                    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                    lineHeight: '1.7',
                    color: colorPalette.neutrals.darkGray
                  }}>
                    Payroll services for international and European companies
                  </span>
                </li>
                <li className="flex items-start">
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
                  <span style={{ 
                    fontFamily: typography.body.fontFamily,
                    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                    lineHeight: '1.7',
                    color: colorPalette.neutrals.darkGray
                  }}>
                    Market research in Europe
                  </span>
                </li>
              </ul>
              
              <div className="mb-10 p-6 bg-blue-50 rounded-xl" style={{ border: '1px solid #dbeafe' }}>
                <h3 className="mb-4" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.primary
                }}>
                  EU Payroll Outsourcing
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  We offer payroll and finance services across Europe for international companies. Our bi-lingual consultants are experienced in dealing in payroll and administration processes and can give you up-to-date advice so you can concentrate on growing your company.
                </p>
                
                <p className="mb-4" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  We can run a payroll for 1 – 100 people. Contracts can be set up in the UK and invoices issued in sterling, euros, or other currencies. Clients have used us to payroll overseas contractors, engineers, sales agents, and remote workers.
                </p>
                
                <h4 className="mt-6 mb-3" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.deep
                }}>
                  Key Services –
                </h4>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Assign Local Contracts
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Comply with all country legislation
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Pay all local social security and employer taxes
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Employee paid through a local entity
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      One company invoice point
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      We have established relationships with international partners
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="mb-4" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.primary
                }}>
                  JOB MARKET RESEARCH
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  The team at Global Relations has experience in delivering market research for major international companies. Our service offering is incremental and starts with a partner search and can grow to deliver business development and sales support once your product or service is on the market. We deal with small businesses through to PLCs.
                </p>
                
                <p className="mb-3" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  For our international clients we offer the following services:
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Export advice
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Job market research
                    </span>
                  </li>
                </ul>
                
                <p className="mb-3" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  How to get your product or service to market:
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Finding and vetting a partner / distributor / agent / manufacturer
                    </span>
                  </li>
                </ul>
                
                <p className="mb-3 pl-8" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  This includes sending your company's details, determining interest of potential partner, partner vetting, translating and forwarding initial enquiries (if necessary), engaging in initial negotiations.
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Market research – market intelligence competitor research, market size, consumer research, B2B research
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Our bi-lingual consultant can attend meetings and visits in Europe
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Company background checks
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Company formation
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Payroll and finance assistance
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="mb-4" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.primary
                }}>
                  BUSINESS TRAINING
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                  lineHeight: '1.7',
                  color: colorPalette.neutrals.darkGray
                }}>
                  Global Relations offers the following services in Europe to assist you to achieve your goals. We can offer in-house training or provide a wide array of services through our network of partners across Europe.
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Mentoring – new recruitment businesses
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Coaching – new and established businesses in diverse sectors
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span style={{ 
                      fontFamily: typography.body.fontFamily,
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: colorPalette.neutrals.darkGray
                    }}>
                      Training – sales, customer service
                    </span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                color: colorPalette.neutrals.darkGray
              }}>
                Contact us and we can send a competitive quote.
              </p>
            </div>
            
            {/* Right side button */}
            <div className="lg:w-1/3 flex flex-col space-y-6">
              <a onClick={(e) => setActivePage('hrServicesEnquiry')}
                 style={{ 
                   background: 'linear-gradient(145deg, #1e40af 0%, #3b82f6 100%)',
                   borderRadius: '0.75rem',
                   padding: '1.75rem',
                   boxShadow: shadows.md,
                   display: 'flex',
                   alignItems: 'center',
                   color: '#ffffff',
                   cursor: 'pointer',
                   transform: 'translateZ(0)', // Force hardware acceleration
                   transition: 'all 0.3s ease',
                 }}
                 className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-1">
                <Send className="w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h3 style={{
                    fontFamily: typography.headings.fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: typography.headings.weights.bold,
                    marginBottom: '0.25rem'
                  }}>Send Us Your Vacancy</h3>
                  <p style={{
                    fontFamily: typography.body.fontFamily,
                    fontSize: '0.875rem',
                    opacity: 0.9
                  }}>Get in touch about your HR needs</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-on-scroll transition-all duration-1000 ease-out" 
              style={{ 
                ...glassMorphism.light, 
                borderRadius: '1rem',
                padding: '3rem',
                boxShadow: shadows.lg
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
            }}>Client Testimonials</h2>
            
            <div className="relative overflow-hidden" style={{ minHeight: '400px' }}
              onMouseEnter={() => {
                setIsHovering(true);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setIsPaused(false);
              }}
            >
              {/* Navigation buttons */}
              <button 
                onClick={() => {
                  prevTestimonial();
                  setAnimationDirection('prev');
                }}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full focus:outline-none z-30 transition-all duration-300 ${isHovering ? 'opacity-90' : 'opacity-60'}`}
                style={{
                  background: colorPalette.neutrals.white,
                  boxShadow: shadows.md,
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              
              <button 
                onClick={() => {
                  nextTestimonial();
                  setAnimationDirection('next');
                }}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full focus:outline-none z-30 transition-all duration-300 ${isHovering ? 'opacity-90' : 'opacity-60'}`}
                style={{
                  background: colorPalette.neutrals.white,
                  boxShadow: shadows.md,
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
              
              {/* Testimonial cards container */}
              <div 
                className="flex justify-between space-x-4" 
                ref={slideRef}
                style={{ 
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                {/* Display 3 testimonials side-by-side */}
                {[0, 1, 2].map(offset => {
                  // Calculate index with wrapping
                  const index = (currentTestimonial + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  
                  return (
                    <div 
                      key={index}
                      className="w-1/3 rounded-xl shadow-lg overflow-hidden flex-shrink-0" 
                      style={{ 
                        background: 'linear-gradient(145deg, #2563eb 0%, #1e40af 100%)',
                        minHeight: '350px'
                      }}
                    >
                      {/* Decorative accent shapes */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
                      
                      {/* Content */}
                      <div className="p-6 text-white relative z-10 h-full flex flex-col">
                        <div className="text-4xl text-blue-200 opacity-70 mb-4" style={{
                          fontFamily: typography.accent.fontFamily,
                          fontWeight: typography.accent.weights.bold
                        }}>"</div>
                        
                        <p className="mb-6 flex-grow" style={{
                          fontFamily: typography.accent.fontFamily,
                          fontSize: 'clamp(1rem, 1.1vw, 1.2rem)',
                          fontStyle: 'italic',
                          lineHeight: '1.6',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          {testimonial.text}
                        </p>
                        
                        <div className="mt-auto">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold" style={{
                              background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)',
                              fontFamily: typography.headings.fontFamily
                            }}>
                              {testimonial.name.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <div className="font-bold text-base" style={{
                                fontFamily: typography.headings.fontFamily
                              }}>{testimonial.name}</div>
                              <div style={{
                                fontFamily: typography.body.fontFamily,
                                color: '#93c5fd',
                                fontSize: '0.9rem'
                              }}>{testimonial.country}</div>
                            </div>
                          </div>
                          
                          {/* Star rating */}
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
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
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
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
    </div>
  );
};

export default HRServicesPage;