import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const PermanentPlacement = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    jobTitle: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file' && files.length > 0) {
      setFormData({
        ...formData,
        file: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic - this would need to be updated to send to your email
    alert('Thank you for your enquiry. We will contact you within 24 hours.');
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      jobTitle: '',
      message: '',
      file: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto" style={{ 
            ...glassMorphism.medium, 
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: shadows.xl
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
            }}>Permanent Placement</h1>
            
            <h2 className="text-center mb-4" style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
              fontWeight: typography.headings.weights.semibold,
              color: colorPalette.blues.primary
            }}>Long-term Staffing Solutions</h2>
            
            <p className="text-center mb-8" style={{
              fontFamily: typography.body.fontFamily,
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
              color: colorPalette.neutrals.darkGray
            }}>We are a recruitment firm based in Switzerland. We've been recruiting for roles all across Europe since 2015.</p>
            
            <p className="mb-6" style={{
              fontFamily: typography.body.fontFamily,
              color: colorPalette.neutrals.darkGray
            }}>Fill out the form below to discuss your permanent staffing needs</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-medium" style={{
                  fontFamily: typography.headings.fontFamily,
                  color: colorPalette.neutrals.nearBlack
                }}>Company Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  style={{
                    fontFamily: typography.body.fontFamily,
                    border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    width: '100%'
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Company Name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium" style={{
                  fontFamily: typography.headings.fontFamily,
                  color: colorPalette.neutrals.nearBlack
                }}>Contact Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  style={{
                    fontFamily: typography.body.fontFamily,
                    border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    width: '100%'
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-6">
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
                      width: '100%'
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium" style={{
                    fontFamily: typography.headings.fontFamily,
                    color: colorPalette.neutrals.nearBlack
                  }}>Phone Number <span className="text-red-500">*</span></label>
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
                      width: '100%'
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium" style={{
                  fontFamily: typography.headings.fontFamily,
                  color: colorPalette.neutrals.nearBlack
                }}>Position Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  style={{
                    fontFamily: typography.body.fontFamily,
                    border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    width: '100%'
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Position Title"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium" style={{
                  fontFamily: typography.headings.fontFamily,
                  color: colorPalette.neutrals.nearBlack
                }}>Requirements and Details</label>
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
                    width: '100%'
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Describe the position requirements, qualifications, experience needed, etc."
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label className="block mb-2 font-medium" style={{
                  fontFamily: typography.headings.fontFamily,
                  color: colorPalette.neutrals.nearBlack
                }}>Upload Job Specification</label>
                <p className="text-sm mb-2" style={{
                  fontFamily: typography.body.fontFamily,
                  color: colorPalette.neutrals.darkGray
                }}>Please upload your Job Spec Word documents and PDF file types only. Other file types cannot be accepted. 5mb Limit.</p>
                <input 
                  type="file" 
                  name="file"
                  onChange={handleChange}
                  accept=".doc,.docx,.pdf"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    border: `1px solid ${colorPalette.neutrals.mediumGray}`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    width: '100%'
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
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
                     }}>Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermanentPlacement;