import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const PolandWorkPermit = () => {
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
                src="/images/poland.jpg" 
                alt="Poland cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>Poland</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                Poland Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Poland is one of the most economically advanced countries in Eastern Europe. When compared to other EU member states, many people choose Poland as their permanent home or as the first destination to "move to Europe" due to its high level of income, affordable housing expenses, and low tax rates.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Stable Economy: The Polish economy has developed in recent years, and this trend is expected to continue. As a result, businesses increase their investments and add a new range of employment on a regular basis.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Poland is not only at the center of Europe, but it is also surrounded by EU member states. Furthermore, the country has excellent infrastructure, including seaways as well as roadways, railways, and airports.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Poland, while being a member of the European Union, is an Eastern European country with cheaper living costs than other Western European countries. While living standards in the country are lower than in any other Western country, this is changing as a result of the current economic boom.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Poland's unemployment rate has progressively declined in recent years, and it now stands at 3.9%. Furthermore, the forecast indicates that the percentage will remain at around 4% in the coming few years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Despite the difficulty of learning Polish, visitors do not need to be concerned about speaking with locals. English is a widely spoken language in Poland.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Poland is a friendly and generous country. The safety of visitors, friends, and families is one of their main priorities. Everyone is always welcomed with open arms and a friendly smile. One will not feel excluded since they will immediately feel comfortable and integrated.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    In general, crime in Poland is low. People feel safe and free to walk around cities at any time of day or night. Numbeo ranked Poland as the 15th safest city in Europe in 2019 (15 out of 39). Poland is an ideal destination for families with children due to its low crime rate of 30.09.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Other Benefits</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: typography.body.fontFamily }}>
                  <li>Accommodation Provided by the Company</li>
                  <li>Transportation Provided by Company</li>
                  <li>Medical Insurance Provided by the Company</li>
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
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Why do you need Poland Work Permit?</h3>
                <p className="mb-4" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                  A work permit in Poland is a legal requirement for acquiring a D-type visa and living in Poland. A work permit allows a person to apply for a visa. A legitimate work permit considerably improves the applicant's chances of being granted a visa. Work permits in Poland can only be given by authorized government organizations. The recognized state organization is referred to as a Voivodeship. After receiving an application from a business that wants this specialist (employee), the Voivodeship provides a work permit.
                </p>
                <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                  For those who want to work in Poland, Europe Workforce Solutions is here to ensure you get your official work permit papers to fulfill your goals. Get in touch with us today!
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

export default PolandWorkPermit;