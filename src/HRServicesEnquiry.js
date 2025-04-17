import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const HRServicesEnquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    enquiryType: '',
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
      enquiryType: '',
      message: '',
      file: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto" style={{ 
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
            }}>Contact Us</h1>
            
            <p className="text-center mb-8 text-red-600" style={{
              fontFamily: typography.body.fontFamily,
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'
            }}>
              Due to Global Time zone difference we may not respond on Phone call. You are requested to please email us your query, the concern Department will respond accordingly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-4" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: '1.25rem',
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.primary
                }}>Where We Are</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1" style={{
                      fontFamily: typography.headings.fontFamily
                    }}>HEAD OFFICE Switzerland:</p>
                    <p style={{ fontFamily: typography.body.fontFamily }}>
                      12 rue le Corbusier #560<br />
                      Geneva, GE 1208<br />
                      Switzerland
                    </p>
                    <div className="flex items-center mt-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      <span style={{ fontFamily: typography.body.fontFamily }}>+41 22 886 0117</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-1" style={{
                      fontFamily: typography.headings.fontFamily
                    }}>United Kingdom, London</p>
                    <div className="flex items-center mt-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      <span style={{ fontFamily: typography.body.fontFamily }}>+44 20 4577 0117</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    <a href="mailto:info@europeworkforcesolution.com" className="text-blue-600" style={{ fontFamily: typography.body.fontFamily }}>
                      info@europeworkforcesolution.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-4" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: '1.25rem',
                  fontWeight: typography.headings.weights.semibold,
                  color: colorPalette.blues.primary
                }}>Drop us a line</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 font-medium" style={{
                        fontFamily: typography.headings.fontFamily,
                        fontSize: '0.875rem'
                      }}>Company Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: typography.body.fontFamily }}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 font-medium" style={{
                        fontFamily: typography.headings.fontFamily,
                        fontSize: '0.875rem'
                      }}>Contact Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: typography.body.fontFamily }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 font-medium" style={{
                        fontFamily: typography.headings.fontFamily,
                        fontSize: '0.875rem'
                      }}>Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: typography.body.fontFamily }}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 font-medium" style={{
                        fontFamily: typography.headings.fontFamily,
                        fontSize: '0.875rem'
                      }}>Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: typography.body.fontFamily }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block mb-1 font-medium" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontSize: '0.875rem'
                    }}>Enquiry Type <span className="text-red-500">*</span></label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: typography.body.fontFamily }}
                    >
                      <option value="">Select an option</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="contracts">Employment Contracts</option>
                      <option value="legal">Legal Advice</option>
                      <option value="market">Market Research</option>
                      <option value="training">Business Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block mb-1 font-medium" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontSize: '0.875rem'
                    }}>Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: typography.body.fontFamily }}
                    ></textarea>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block mb-1 font-medium" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontSize: '0.875rem'
                    }}>Please Upload the Attachment For the Position</label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1"
                    style={{
                      fontFamily: typography.headings.fontFamily,
                      fontWeight: typography.headings.weights.semibold,
                      boxShadow: shadows.md
                    }}
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRServicesEnquiry;