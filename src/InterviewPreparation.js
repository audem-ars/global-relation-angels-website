import React from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const InterviewPreparation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" style={{ 
            ...glassMorphism.medium, 
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: shadows.xl
          }}>
            <h1 className="text-center mb-6" style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: typography.headings.weights.bold,
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent'
            }}>Interview Preparation Guide</h1>
            
            <div className="mb-10">
              <h2 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>Before the Interview</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Research the company</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Understand their products/services, values, culture, recent news, and competitors. Check their website, LinkedIn, and other social media.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Review the job description</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Identify key skills and requirements, and prepare examples from your experience that demonstrate these abilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Prepare for common questions</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Practice answering questions about your background, strengths, weaknesses, and why you're interested in the role. Use the STAR method (Situation, Task, Action, Result) for behavioral questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Plan your outfit</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Dress professionally and appropriately for the company culture. When in doubt, it's better to be slightly overdressed than underdressed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>During the Interview</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Make a good first impression</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Arrive 10-15 minutes early, greet everyone politely, and offer a firm handshake with good eye contact.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Watch your body language</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Maintain good posture, make appropriate eye contact, and avoid fidgeting or crossing your arms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Listen carefully</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Pay close attention to questions and don't be afraid to ask for clarification if needed. Take a moment to think before answering complex questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Ask thoughtful questions</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Prepare 3-5 intelligent questions about the role, team, company culture, or growth opportunities. This shows your genuine interest and engagement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>After the Interview</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Send a thank-you note</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Email a personalized thank-you note within 24 hours to each person who interviewed you. Reference specific points from your conversation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Self-evaluate</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Reflect on the interview. Consider what went well and what you could improve for future interviews.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
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
                  <div>
                    <p className="font-semibold" style={{
                      fontFamily: typography.headings.fontFamily,
                      color: colorPalette.neutrals.nearBlack
                    }}>Follow up appropriately</p>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>If you haven't heard back within the timeframe they provided, it's acceptable to follow up with a polite email or call to inquire about the status of your application.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl" style={{ border: '1px solid #dbeafe' }}>
              <h3 className="mb-3" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: '1.25rem',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>Need personalized interview coaching?</h3>
              <p style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray
              }}>
                Our recruitment specialists can provide customized interview training for your specific industry or role. Contact us at <a href="mailto:globalrelations2@gmail.com" className="text-blue-600 font-medium">globalrelations2@gmail.com</a> to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;