import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const MaltaWorkPermit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    regNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src="/images/malta.jpg" 
                alt="Malta cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>Malta</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                Malta Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Malta has a growing economy that has managed to withstand economic downturns while maintaining a low unemployment rate in comparison to other EU nations. The Maltese government expends significant effort and resources to maintain this number as low as possible, with unemployment estimated at 6.5% in June 2010. Malta draws a significant number of international workers, particularly in the online gaming, financial, IT, and tourist sectors, due to the size of the English-speaking community and the warm climate. In Malta, the services industry employs 75% of the workforce, while manufacturing employs 22% and agriculture employs 3%.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                It should come as no surprise that moving to Malta and getting work would necessitate certain paperwork. Malta, fortunately, is one of the easiest nations to migrate to due to its openness to foreigners. In fact, moving to Malta can be as simple as booking a flight ticket depending on your country of origin.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Malta is a small independent nation-state in Europe, located at the center of the Mediterranean Sea. Consisting of three islands: main island Malta, Gozo, and Comino, Malta is the EU's smallest member state both in terms of landmass (316 km² / 122 sqm) and population size (516,100 in 2020).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Malta is 10% less expensive than the United States, while rentals are 35% lower, according to the website Numbeo. Consumer prices are also 12% lower than in the UK, with average rentals nearly a quarter lower. If you make a good living and don't overextend yourself on rent, you'll have more disposable income than if you lived in a major city like London or Paris.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    In 2021, the unemployment rate in Malta dropped by 0.8 percentage points compared to the previous year. As a result, in 2021 Malta had the lowest unemployment rate in the entire Euro Zone. After analyzing Malta, the IMF estimated that the country's economic growth in 2021 and the next few years will be higher than the Euro Zone average.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Expats and those planning a migration to Malta will be relieved to know that the country is now officially bilingual. The country has two official languages, Maltese and English, and the majority of the people speak both. Since the island was a former British colony, the Maltese people had been using English for centuries, both in their daily life and in administration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The Maltese are a proud people with a distinct culture that has been shaped by foreign civilizations through many centuries of occupancy. Maltese people are welcoming and friendly. The younger generation, who have traveled more and benefited from an infusion of foreign companies and people from all over the world, appear to be pleased with their country's rising status and economic progress.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    One of the major highlights of living in Malta is how safe you feel. While small crimes can occur, they are uncommon and may typically be avoided by using common sense. Violent crime is significantly less common than in other European nations, and it is safe to walk around almost any place. People here watch out for one another, and there is still a strong sense of 'community spirit,' which helps to keep crime rates low.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Other Benefits</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Accommodation Provided by Company</li>
                  <li>Transportation Provided by Company</li>
                  <li>Medical Insurance Provided by Company</li>
                  <li>TRP after 6 Months</li>
                  <li>Opportunity to Travel to other 26 Schengen Countries.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Requirements</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Scanned Passport Copy</li>
                  <li>Scanned National ID Card.</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                  Inquiry Now
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Telephone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Message Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Registration Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="regNumber"
                      value={formData.regNumber}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1 font-medium" style={{ fontFamily: typography.headings.fontFamily }}>
                      Comment or Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ fontFamily: typography.body.fontFamily }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: typography.headings.fontFamily }}
                  >
                    Submit
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

export default MaltaWorkPermit;