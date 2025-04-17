import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const BulgariaWorkPermit = () => {
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
                src="/images/bulgaria.jpg" 
                alt="Bulgaria cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>Bulgaria</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                Bulgaria Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Bulgaria is one of the EU's poorest member states, relying on EU partners for both investment and commerce. Despite this, Bulgaria's economy has seen consistent yearly growth while notably lowering its unemployment rate in recent years.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Bulgaria's primary industries include energy, mining, metallurgy, and tourism, with finance and information technology emerging as fast-growing areas. Bulgaria has lower wages than many other EU nations, although this is balanced by a low cost of living.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Residents from the EU or the EEA can work in Bulgaria without the need for a work permit, while non-EU foreigners must get one before coming. Work permits are requested by employers, who must show why they prefer to hire a foreigner over a Bulgarian.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Bulgaria is a country in the European continent's south-eastern area, occupying the eastern part of the Balkan Peninsula. It is located in both the Northern and Eastern hemispheres of the Earth. Bulgaria's landscape is known for its diversity, ranging from snow-covered mountain peaks to valleys and lowlands that lead to the Black Sea coast.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Life in Bulgaria is quite affordable and far less expensive than in Western Europe. Bulgaria has a low cost of living, which is a big draw for foreigners. Housing is the most expensive aspect of living, and utility costs are continuously growing, but groceries, transportation, clothing, and other basics are easily affordable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Bulgaria has moved into the top five EU nations with the lowest unemployment rate this past year. It is also expected to drop from its current rate in the next years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Despite the difficulty of learning Bulgarian, there are career prospects associated with English proficiency. Bulgarian is the official language but English language skills are fairly widespread.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Bulgarians are very proud of their traditions and appreciate it when visitors want to participate in Bulgarian customs. Locals are also known for their friendliness; people are always willing to help and share their culture with visitors from other countries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Bulgaria is a very safe country to live in, with very low crime rates - violent acts are unusual, and even burglary is front-page news. It varies on location; major cities, of course, have their share of crime issues, but in most places, it is safe to walk around at night or leave kids unsupervised outside.
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

export default BulgariaWorkPermit;