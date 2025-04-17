import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const CanadaWorkPermit = () => {
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
                src="/images/canada.jpg" 
                alt="Canada cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>Canada</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                Canada Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Canada is a country in North America that ranges from the Atlantic to the Pacific Oceans and, to the north, to the Arctic Ocean. Canada shares a border with the United States. Its geography is primarily plains, with the west dominated by mountains. A parliamentary democracy, a federation, and a constitutional monarchy comprise the governing system. Canada has a free-market economic system in which pricing for products and services is decided.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                Canada is the world's second-largest country, although it barely accounts for half of the world's people. It has many rivers, black-blue lakes, stunning western mountains, rolling central plains, and forested eastern valleys. The extreme north of Canada is engulfed in the frozen grasp of the Arctic, with ice, snow, and glaciers dominating the terrain. There are few trees here, and cultivation is impractical.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Canada is well-known for its chilling winters and diverse wildlife. Natural wonders are abundant in Canada, from the spectacular Virginia Falls to the ancient Great Bear Rainforest. There are many must-see destinations from Nova Scotia to British Columbia.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    It is important for foreigners to choose a Canadian place to live in to understand how costly certain cities are. It could be quite inexpensive to live in a remote area in Canada. However, living in one of Canada's heavily populated cities, such as Toronto or Vancouver, will be costly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Canada already has the world's tenth-largest economy. The country's unemployment rate is much lower than in other countries around the world. Canada's strategy for employment is nothing new. They continue to welcome new arrivals each year, providing a market with a lot of strength for anyone looking for a job.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The country of Canada is bilingual, with "co-official" languages. The official languages in Canada are English and French. Since the country is one of the most multicultural in the world, most people speak multiple languages.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    Canada is a very progressive, diverse, and multicultural country in general. So, if you are considering moving there, particularly to one of its major cities, this is one of the benefits for foreigners. Canadians are kind and open to people from other cultures.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    According to the Global Peace Index 2021, Canada is the tenth most peaceful country in the world, with a population of 38.2 million people. Canada has a low crime rate due to its strong infrastructure and economy, political stability, and widespread access to healthcare, making it a great place to live.
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

export default CanadaWorkPermit;