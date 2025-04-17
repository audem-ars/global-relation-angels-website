import React from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';
import { MapPin, Briefcase, Clock, ExternalLink } from 'lucide-react';

const CurrentJobs = () => {
  // Sample job listings - in a real application, these would come from an API or database
  const jobs = [
    {
      id: 1,
      title: "Factory Worker",
      location: "Berlin, Germany",
      type: "Full-time",
      posted: "3 days ago",
      description: "We are looking for reliable factory workers to join our manufacturing team in Berlin. Responsibilities include operating machinery, quality control, and packaging products according to specifications."
    },
    {
      id: 2,
      title: "Farm Worker",
      location: "Coimbra, Portugal",
      type: "Seasonal",
      posted: "1 week ago",
      description: "Seasonal farm workers needed for harvesting vegetables and fruits. Experience in agricultural work preferred but not required. Accommodation can be provided."
    },
    {
      id: 3,
      title: "Truck Driver",
      location: "Vilnius, Lithuania",
      type: "Full-time",
      posted: "2 days ago",
      description: "CDL licensed truck drivers needed for international routes. Must have at least 2 years of experience and valid EU driving license."
    },
    {
      id: 4,
      title: "Restaurant Staff",
      location: "Valletta, Malta",
      type: "Full-time",
      posted: "5 days ago",
      description: "Hiring waiters, cooks, and kitchen helpers for a busy restaurant in the heart of Valletta. Previous experience in hospitality is an advantage."
    },
    {
      id: 5,
      title: "Warehouse Associate",
      location: "Frankfurt, Germany",
      type: "Full-time",
      posted: "1 day ago",
      description: "Warehouse workers needed for loading/unloading, order picking, and inventory management in a large logistics center. Forklift certification is a plus."
    },
    {
      id: 6,
      title: "Construction Worker",
      location: "Warsaw, Poland",
      type: "Contract",
      posted: "4 days ago",
      description: "General laborers needed for a large construction project. Experience in concrete work, carpentry, or electrical work is beneficial."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto" style={{ 
            ...glassMorphism.light, 
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: shadows.lg
          }}>
            <h1 className="text-center mb-2" style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: typography.headings.weights.bold,
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent'
            }}>Current Job Opportunities</h1>
            
            <p className="text-center mb-8" style={{
              fontFamily: typography.body.fontFamily,
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
              color: colorPalette.neutrals.darkGray
            }}>Browse our latest positions across Europe. Don't see what you're looking for? <a href="#" onClick={() => window.setActivePage('jobSeekerEnquiry')} className="text-blue-600 font-medium">Submit your CV</a> and we'll contact you when suitable roles arise.</p>
            
            <div className="grid gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 style={{
                      fontFamily: typography.headings.fontFamily,
                      fontSize: '1.5rem',
                      fontWeight: typography.headings.weights.bold,
                      color: colorPalette.blues.primary
                    }}>{job.title}</h2>
                    <button 
                      onClick={() => window.setActivePage('jobSeekerEnquiry')}
                      className="mt-3 md:mt-0 inline-flex items-center text-white px-4 py-2 rounded-md transform hover:-translate-y-1 transition-all duration-300"
                      style={{
                        background: colorPalette.blues.gradients.primary,
                        fontFamily: typography.headings.fontFamily,
                        fontWeight: typography.headings.weights.semibold,
                        boxShadow: shadows.sm
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Apply Now
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      <span style={{ fontFamily: typography.body.fontFamily }}>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1 text-blue-500" />
                      <span style={{ fontFamily: typography.body.fontFamily }}>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1 text-blue-500" />
                      <span style={{ fontFamily: typography.body.fontFamily }}>Posted {job.posted}</span>
                    </div>
                  </div>
                  
                  <p style={{
                    fontFamily: typography.body.fontFamily,
                    color: colorPalette.neutrals.darkGray,
                    lineHeight: '1.6'
                  }}>{job.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p style={{
                fontFamily: typography.body.fontFamily,
                color: colorPalette.neutrals.darkGray
              }}>
                These are just a sample of our open positions. For a full list or to discuss your career options, please contact us at <a href="mailto:globalrelations2@gmail.com" className="text-blue-600 font-medium">globalrelations2@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentJobs;