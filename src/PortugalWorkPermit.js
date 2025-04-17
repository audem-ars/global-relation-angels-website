import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const PortugalWorkPermit = () => {
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
                src="/images/portugal.jpg" 
                alt="Portugal cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>Portugal</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                Portugal Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Portugal, as a member of the European Union (EU), is an amazing destination for businesses and employees due to its economic prosperity and stability. If you are planning to move to Portugal, you'll need to get a Portugal work permit in order to legally work there.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                The work environment in Portugal is very professional, and businesses are obligated to follow rules that protect employees from discrimination, equality concerns, poor pay for part-time labor, and a lack of benefits such as social security or health insurance. People in Portugal are friendly, polite, and welcoming, and they speak English fluently.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Portugal is a nation in southwestern Europe located on the Atlantic coast of the Iberian Peninsula. Spain, which makes up the rest of the peninsula, is to the north and east of the country. Portugal has Europe's best beaches, 1,115 miles of coastline, and 300 days of sunny days every year. Furthermore, the nation has excellent infrastructure, including seaways in addition to its roadways, railways, and airports.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Portugal is gaining popularity among immigrants due to its great climate, magnificent landscapes, and low cost of living. Despite its membership in the European Union, Portugal's cost of living is regarded as being fairly inexpensive, providing a comfortable lifestyle to many immigrants.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Portugal's unemployment rate has progressively declined in recent years. Between 2022 and 2023, the number of employed individuals in Portugal was expected to rise by 0.03 million (+0.59 percent).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Despite the difficulty of learning Portuguese, outsiders do not need to be concerned about speaking with natives in Portuguese. English is a very popular language among Portuguese people. The majority of Portuguese speak English, and all Portuguese schoolchildren learn English for at least nine years. No matter where you settle in the country, you'll have access to a large network of English-speaking people.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Portugal is on everyone's lips, thanks to the unlimited kindness of its people and the generosity of its lands. It is a stunning destination that has been blessed with numerous foreign visitors who have helped spread the word by invading social networks and worldwide tourism publications.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Portugal is one of the world's most peaceful countries. The Global Peace Index usually ranks it among the world's safest countries. It's also noteworthy that the Portuguese government spends only 5% of its GDP on reducing violence, one of the lowest percentages in the world.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Other Benefits</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Accommodation Provided by the Company</li>
                  <li>Transportation Provided by the Company</li>
                  <li>Medical Insurance Provided by the Company</li>
                  <li>TRP after 6 Months</li>
                  <li>Opportunity to Travel to other 26 Schengen Countries</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Requirements</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Scanned Passport Copy</li>
                  <li>Scanned National ID Card.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Why do you need Portugal Work Permit?</h3>
                <p className="mb-4" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                  The legal prerequisite for obtaining a D type visa and staying in Portugal is a Portugal work permit. A work permit gives a person the chance to be granted a visa. A real work permit greatly increases the likelihood that the applicant will be granted a visa. In Portugal, work licences can only be issued by recognised government organisations. The recognised state entity is referred to as a Voivodeship. The Voivodeship issues a work permit after receiving an application from a business that needs this specialist (employee).
                </p>
                
                <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                  For those who want to work in Poland to realise their goal, ES is here to make sure you acquire your official work permit documentation.
                </p>
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

export default PortugalWorkPermit;