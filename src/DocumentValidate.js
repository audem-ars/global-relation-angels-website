import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const DocumentValidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referenceNumber: '',
    passportNumber: '',
    comments: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for submitting your document for validation! We will process it shortly.');
    setFormData({
      name: '',
      email: '',
      referenceNumber: '',
      passportNumber: '',
      comments: ''
    });
    setSelectedFile(null);
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
            }}>Document Validate</h1>
            
            <p className="text-blue-100 text-xl mb-8" style={{
              fontFamily: typography.body.fontFamily,
              lineHeight: '1.6'
            }}>
              Get your important documents validated for international recognition
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out" style={{
            ...glassMorphism.light,
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: shadows.lg
          }}>
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
              Validate Your Documents
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Reference Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="referenceNumber"
                      value={formData.referenceNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Passport Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                    Choose A Document for Validation <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                {selectedFile && (
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium" style={{ fontFamily: typography.headings.fontFamily }}>Selected file:</p>
                    <p style={{ fontFamily: typography.body.fontFamily }}>{selectedFile.name}</p>
                  </div>
                )}
                
                <div>
                  <label className="block mb-2 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                    Additional Comments
                  </label>
                  <textarea 
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: typography.headings.fontFamily }}
                  >
                    Submit for Validation
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center">
              <p style={{ fontFamily: typography.body.fontFamily, color: colorPalette.neutrals.darkGray }}>
                We are a recruitment firm based in Switzerland. We've been recruiting for roles all across Europe since 2015.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentValidate;