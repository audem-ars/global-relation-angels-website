import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageSquare, Download, User, Building, Users, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

const GlobalRelationAngels = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    workers: '',
    date: '',
    email: '',
    phone: ''
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
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_92gax0d';
    const templateId = 'template_a8aleeh';
    const publicKey = 'oYZA4dPv6QV1NI-ap';
    
    // Format the data to match your email template variables
    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      workers_needed: formData.workers,
      date_needed: formData.date,
      email: formData.email,
      phone: formData.phone
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Thank you for your request! We will contact you shortly.');
        setFormData({
          name: '',
          company: '',
          workers: '',
          date: '',
          email: '',
          phone: ''
        });
      })
      .catch((error) => {
        alert('There was an error sending your request. Please try again or contact us directly.');
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">GLOBAL RELATION ANGELS</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-200">Home</a>
            <a href="#who" className="hover:text-blue-200">Who We Are</a>
            <a href="#offer" className="hover:text-blue-200">Services</a>
            <a href="#process" className="hover:text-blue-200">Process</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Reliable Manpower. Ready to Work. Right Now.</h1>
              <p className="text-xl mb-8">We provide skilled and unskilled workers for construction, agriculture, cleaning, and factories across Europe. 150 workers are available immediately. Up to 10,000 more on request.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#request" className="bg-white text-blue-700 text-center px-6 py-3 rounded-md font-bold hover:bg-blue-100 transition">Request Workers Now</a>
                <a href="#" className="border-2 border-white text-white text-center px-6 py-3 rounded-md font-bold hover:bg-white hover:text-blue-700 transition flex items-center justify-center"><Download className="w-5 h-5 mr-2" /> Download Proposal</a>
                <a href="#contact" className="bg-blue-500 text-white text-center px-6 py-3 rounded-md font-bold hover:bg-blue-600 transition">Contact Us</a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white text-blue-700 p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-2">Workers Available Now</div>
                <div className="text-5xl font-bold mb-4">150</div>
                <div className="text-lg">Ready for immediate deployment</div>
                <div className="mt-4 text-sm">Up to 10,000 more on request</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">✅ Who We Are</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6"><strong>Global Relation Angels</strong> is a Europe-based manpower supply company specializing in sourcing, vetting, and delivering reliable Indian workers to industries with high demand and labor shortages. We operate in Bulgaria, Germany, and across the EU.</p>
            <p className="text-lg mb-6">We understand your needs:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-lg">You need workers fast.</li>
              <li className="text-lg">You need workers who show up and get the job done.</li>
              <li className="text-lg">You don't want the hassle of long hiring processes.</li>
            </ul>
            <p className="text-lg font-semibold">We take care of that for you.</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="offer" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">🔧 What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Industries We Serve:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span className="font-bold">Construction</span> – Laborers, masons, steel fixers, electricians, etc.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span className="font-bold">Farming</span> – Farmhands, seasonal pickers, tractor/machinery operators.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span className="font-bold">Cleaning</span> – Industrial, commercial, and residential cleaning staff.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span className="font-bold">Manufacturing</span> – Assembly line workers, factory helpers, machine operators.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Worker Types:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Skilled</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Semi-skilled</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Unskilled</span> <span className="text-sm italic">(Most positions are less-skilled, which matches current labor demands in the EU.)</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-4">Availability:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">150 workers ready to deploy now</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Up to 10,000 available</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Flexible contract durations:</span> short-term or long-term
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-4">Wages:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold">Minimum wage based</span> (typically €500–€600 per month in Bulgaria)
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span>You pay only for the work done. No hidden costs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">📑 Our Process (Simple & Fast)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Tell us what you need</h3>
                <p>How many workers, job roles, duration.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Get a proposal</h3>
                <p>You receive a custom proposal and worker profiles.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Sign the contract</h3>
                <p>All legal documents handled by us.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Workers arrive</h3>
                <p>We handle visas, transport, onboarding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documents */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">📄 Documents You Can Download</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
              <Download className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <div className="font-bold text-lg">Worker Supply Proposal</div>
                <div className="text-gray-600">(EN/BG)</div>
              </div>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
              <Download className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <div className="font-bold text-lg">Sample Service Agreement</div>
                <div className="text-gray-600">Contract template</div>
              </div>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
              <Download className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <div className="font-bold text-lg">Worker Profiles</div>
                <div className="text-gray-600">(Available on request)</div>
              </div>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
              <Download className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <div className="font-bold text-lg">Company Registration & License</div>
                <div className="text-gray-600">Proof of legitimacy</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">💬 Testimonials</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-lg mb-4">Global Relation Angels delivered 25 workers within 10 days. Everything was smooth and professional.</p>
              <div className="font-bold">Construction Company, Sofia</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-lg mb-4">They saved our harvest season. The workers were efficient and respectful.</p>
              <div className="font-bold">Farm Owner, Plovdiv</div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Request Workers Now</h2>
          <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Your Name</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Company Name</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <Building className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="Your Company Ltd."
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">How Many Workers?</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <Users className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="number"
                      name="workers"
                      value={formData.workers}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="e.g. 25"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">When Needed?</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <Calendar className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="e.g. Next Month"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="emmanueldessallien@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-100 p-3 border-r border-gray-300">
                      <Phone className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="+359 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
              <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition">
  Submit Request
</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">📞 Contact Us</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Global Relation Angels</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Sofia, Bulgaria | 🇩🇪 Germany | 🇮🇳 India</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+1 302 414 4808</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>emmanueldessallien@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>LinkedIn: Global Relation Angels</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                    <span>WhatsApp: +1 240 726 6550</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <textarea placeholder="Your Message" rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <a href="#" className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition">
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* Footer */}
<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Global Relation Angels</h3>
        <p>Providing reliable manpower solutions across Europe.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#who" className="hover:text-blue-300">Who We Are</a></li>
          <li><a href="#offer" className="hover:text-blue-300">Services</a></li>
          <li><a href="#process" className="hover:text-blue-300">Process</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li><a href="#contact" className="hover:text-blue-300">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-300">WhatsApp</a></li>
          <li><a href="#" className="hover:text-blue-300">Email</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-blue-300">Company Registration</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">© 2025 Global Relation Angels. All rights reserved.</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-300">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-blue-300">
          <MessageSquare className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-blue-300">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
</div>
);
};

export default GlobalRelationAngels;