import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';

const UKWorkPermit = () => {
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
                src="/images/uk.jpg" 
                alt="UK cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: typography.headings.fontFamily }}>United Kingdom</h1>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700" style={{ fontFamily: typography.headings.fontFamily }}>
                United Kingdom Work Permit
              </h2>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                The United Kingdom is an archipelago of islands in Western Europe that includes England, Scotland, Wales, and Northern Ireland. The Atlantic Ocean, the North Sea, the English Channel, and the Irish Sea encircle the United Kingdom. It is located near major North Atlantic sea lanes and is only 35 kilometers from France, which is connected by a tunnel under the English Channel. The area is largely made up of rough hills and low mountains. The government system is a constitutional monarchy and a Commonwealth realm; the queen is the chief of state, and the prime minister is the head of government. The United Kingdom has an enhanced open market economy with a free price system for products and services.
              </p>
              
              <p className="mb-6" style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                With a population of approximately 66 million people, the United Kingdom's economy was valued at 1.96 trillion British Pounds in total GDP in 2020. It is also the world's fifth largest economy, after only the United States, China, Japan, and Germany, and the second largest in Europe, following only Germany. The economy of the United Kingdom, which encompasses England, Scotland, Wales, and Northern Ireland, has grown into an independent international trade economy. Interestingly, the United Kingdom is the world's first industrialized country.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Location</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The United Kingdom is an island kingdom off the northwestern coast of mainland Europe. The capital is London, which is one of the world's most significant commercial, financial, and cultural centers. It is an archipelago that encompasses Great Britain, the northern part of Ireland, and other smaller islands in the surrounding area. The nation shares maritime borders with France, Belgium, the Netherlands, Denmark, and Norway.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Costs of Living</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The United Kingdom, just like any other country in the world, has both its most costly and cheap areas. So, there are considerable differences in the living costs of different parts of the country wherever you move. The cost of living in London is high, yet when compared to the other world's largest cities, the British capital is a fairly affordable place to live.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Low unemployment</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The United Kingdom's unemployment rate was 3.7 percent in November 2022 and one of the lowest rates since 1974. Following a rise in the employment rate from early 2012, the rate dropped during the outbreak of the coronavirus (COVID-19) pandemic and has gradually increased since the end of 2020.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Language</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    English is the most commonly used language in the United Kingdom, despite the fact that accents may vary so drastically that it can often sound as if you are hearing a whole different language. Given the UK's extensive and incredibly deep history, it's not unusual to find pockets of different indigenous languages here and there.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Hospitality</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    People from all over the world reside in the United Kingdom, which has a very diversified population. There are several international communities in which international students will be welcomed. The United Kingdom is a tolerant society in which it is unlawful to discriminate against anyone based on race, religion, gender, sexual orientation, or disability.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600" style={{ fontFamily: typography.headings.fontFamily }}>Safety</h3>
                  <p style={{ fontFamily: typography.body.fontFamily, lineHeight: '1.7' }}>
                    The overall crime rate in the United Kingdom is regarded as moderate to low. The United Kingdom was placed 42 out of 163 nations on the Global Peace Index for the year 2020. According to the Institute for Economics and Peace which conducts an annual survey of which nations in the world are the safest, the United Kingdom is likewise deemed to have a 'high' rate of peace.
                  </p>
                </div>
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

export default UKWorkPermit;