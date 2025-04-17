import React from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const CVTips = () => {
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
            }}>CV WRITING TIPS</h1>
            <h2 className="text-center mb-10" style={{
              fontFamily: typography.headings.fontFamily,
              fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
              fontWeight: typography.headings.weights.semibold,
              color: colorPalette.blues.primary
            }}>Global Relations Career Guide</h2>
            
            <section className="mb-10">
              <h3 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>ESSENTIAL CV TIPS</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                  <h4 className="mb-2" style={{
                    fontFamily: typography.headings.fontFamily,
                    fontWeight: typography.headings.weights.semibold,
                    color: colorPalette.blues.deep
                  }}>1. Keep it concise</h4>
                  <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Aim for 2 pages maximum</li>
                    <li>Use bullet points for clarity</li>
                    <li>Focus on relevant experience</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                  <h4 className="mb-2" style={{
                    fontFamily: typography.headings.fontFamily,
                    fontWeight: typography.headings.weights.semibold,
                    color: colorPalette.blues.deep
                  }}>2. Structure clearly</h4>
                  <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Personal details at the top (name, contact information)</li>
                    <li>Professional summary (2-3 sentences)</li>
                    <li>Work experience (reverse chronological order)</li>
                    <li>Education and qualifications</li>
                    <li>Skills and competencies</li>
                    <li>References (or "References available upon request")</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                  <h4 className="mb-2" style={{
                    fontFamily: typography.headings.fontFamily,
                    fontWeight: typography.headings.weights.semibold,
                    color: colorPalette.blues.deep
                  }}>3. Tailor for each application</h4>
                  <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Match your skills to the job description</li>
                    <li>Highlight relevant achievements</li>
                    <li>Use industry-specific keywords</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                  <h4 className="mb-2" style={{
                    fontFamily: typography.headings.fontFamily,
                    fontWeight: typography.headings.weights.semibold,
                    color: colorPalette.blues.deep
                  }}>4. Quantify achievements</h4>
                  <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Include specific numbers and statistics</li>
                    <li>Mention project outcomes and results</li>
                    <li>Demonstrate your impact with data</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                  <h4 className="mb-2" style={{
                    fontFamily: typography.headings.fontFamily,
                    fontWeight: typography.headings.weights.semibold,
                    color: colorPalette.blues.deep
                  }}>5. Language matters</h4>
                  <ul className="list-disc pl-5 space-y-1" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Use active verbs (managed, delivered, achieved)</li>
                    <li>Avoid jargon unless industry-specific</li>
                    <li>Check spelling and grammar meticulously</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h3 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>FORMATTING TIPS</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
                  <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Use a professional font (Arial, Calibri, Times New Roman)</li>
                    <li>Font size 11-12pt for body text</li>
                    <li>Consistent spacing throughout</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
                  <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Clear section headings</li>
                    <li>Avoid elaborate graphics or colors</li>
                    <li>Save as PDF to preserve formatting</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h3 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>COMMON MISTAKES TO AVOID</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-5 rounded-lg" style={{ border: '1px solid #fee2e2' }}>
                  <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Unexplained employment gaps</li>
                    <li>Generic descriptions without specifics</li>
                    <li>Typos and grammatical errors</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg" style={{ border: '1px solid #fee2e2' }}>
                  <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                    <li>Including personal information (age, marital status)</li>
                    <li>Outdated or irrelevant information</li>
                    <li>Unprofessional email address</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h3 className="mb-4" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.25rem, 1.75vw, 1.5rem)',
                fontWeight: typography.headings.weights.semibold,
                color: colorPalette.blues.primary
              }}>INTERNATIONAL CV CONSIDERATIONS</h3>
              
              <div className="bg-blue-50 p-5 rounded-lg" style={{ border: '1px solid #dbeafe' }}>
                <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Include language proficiency levels</li>
                  <li>Mention visa/work permit status if applicable</li>
                  <li>Address any international experience</li>
                  <li>Consider cultural differences in CV expectations</li>
                </ul>
              </div>
            </section>
            
            <div className="bg-blue-100 p-6 rounded-xl text-center" style={{ border: '1px solid #dbeafe' }}>
              <p style={{
                fontFamily: typography.body.fontFamily,
                fontSize: '1.1rem',
                color: colorPalette.neutrals.darkGray,
                marginBottom: '0.5rem'
              }}>
                For personalized CV advice, contact us at <a href="mailto:globalrelations2@gmail.com" className="text-blue-600 font-medium">globalrelations2@gmail.com</a>
              </p>
              <p style={{
                fontFamily: typography.body.fontFamily,
                fontSize: '0.9rem',
                color: colorPalette.neutrals.mediumGray
              }}>
                © 2025 Global Relations | www.globalrelations.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTips;