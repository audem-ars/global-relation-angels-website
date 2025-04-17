import React, { useState } from 'react';
import { typography, colorPalette, shadows, glassMorphism } from './ThemeStyles';
import { Send } from 'lucide-react';

const BusinessStartup = () => {
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
            }}>Business Startup</h1>
            
            <p className="text-blue-100 text-xl mb-8" style={{
              fontFamily: typography.body.fontFamily,
              lineHeight: '1.6'
            }}>
              Launch your business in Europe with our comprehensive startup support services
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
            <p className="mb-6" style={{
              fontFamily: typography.body.fontFamily,
              fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
              lineHeight: '1.8',
              color: colorPalette.neutrals.darkGray
            }}>
              You might want to apply for one of the numerous EU Entrepreneur and Startup Visa Programs if you are an entrepreneur from a nation without visa-free travel to the Schengen region and you want to launch a cutting-edge new company in Europe. Many EU governments have started start-up visa programmes to entice the finest and brightest individuals to their own nations. Forward-thinking women and men who would otherwise need a visa to enter the EU are the target audience for these initiatives. Thus, startup visas give residents of nations without visa-free travel to the Schengen region a way to immigrate to the EU.
            </p>
            
            <div className="mt-12">
              <h2 className="mb-6 text-blue-700" style={{
                fontFamily: typography.headings.fontFamily,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: typography.headings.weights.bold
              }}>Latvia Business Visa</h2>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                The simplest and quickest method to live or work in Europe is through our Latvian business visa application process. To satisfy their clients' travel needs, ES promises a very flexible and reliable approach. Over the past three decades, Latvia has seen a number of significant transitions, including exiting the Soviet Union in 1991, converting to a free market economy, and joining the EU in 2014. Each of these incidents presented difficulties for the nation, but Latvia has overcome all of them and emerged as a major force in Eastern Europe.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                Gaining access to Latvia's rapidly expanding economy, which has historically been one of the most stable in Europe, is one of the main reasons individuals choose to work there. Their GDP increased by 20.6% between 2012 and 2017, which is a lot more than the 7.4% average for the EU. All categories of unemployment decreased at that time. It has one of the lowest tax rates in the EU and is regarded as one of the business-friendliest nations. This is a significant factor in why Latvia is so appealing to foreigners. Because of its position, Latvia's economy has grown significantly through the manufacturing and export of items including electronics, machinery, and lumber. The industrial sector contributes about one-fourth of Latvia's GDP.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                With a road network that is over 70,000 km long, Latvia has strong transportation infrastructure to carry whatever it produces, making trips throughout Europe simple. Should you choose to go, there are rail networks into Russia, other Baltic States, and other EU nations.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                Latvia has a relatively high quality of life. It has free education for all children up to the age of 15. From there they can enter work or move onto higher education. This early education is free for expats living in Latvia, provided they pay the necessary social security contributions and have a residence permit. Most expats live in Riga, the capital city. There are several international schools based there, where the majority of the lessons are taught in English.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                The health service in Latvia is funded by social security, although there are charges for some procedures or treatment. The overall level of Life Satisfaction within Latvia has risen year on year, and the people of Latvia were more optimistic about the future than the EU average.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                The land of conserved nature and beautiful landscapes as far as the eyes can see. Its people are straightforward and trustworthy by nature. Things around here in Latvia is pretty smooth as long as you adhere to the rules and regulations. But that does not mean Latvia is all cold and ordinary. There are plenty of things you can do in Latvia. Hence, living and set up business in Latvia will have you fully occupied yet enough time to spare for recreation.
              </p>
              
              <p className="mb-6" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                The ease of doing business in Latvia ranks high among the European countries as well. Despite their size, the Latvian government continues to offer support for IT, energy, modern food production, creative industries and green industry innovations. Latvia assists with a business incubator for the development of renewable materials and energy efficiency. Latvia offers a western-oriented business climate. Coupled with a multilingual workforce, heavenly tax system and efficient business infrastructure, Latvia is undeniably anticipating your business to flourish.
              </p>
              
              <p className="mb-10" style={{
                fontFamily: typography.body.fontFamily,
                fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                lineHeight: '1.8',
                color: colorPalette.neutrals.darkGray
              }}>
                SMEs and start-up companies are among the company organization that has access to supports from the Latvian government. The support provided by the government range from financial assistance to programme grants to business incubators for growth and developments. Businesses also have the option to enquire varied support from the Investment and Development Agency of Latvia, Development Finance Institution ALTUM and Latvian Business Angel Network, among others.
              </p>
              
              <div className="bg-blue-50 p-8 rounded-xl mb-10" style={{
                border: '1px solid #dbeafe'
              }}>
                <h3 className="mb-6 text-blue-700" style={{
                  fontFamily: typography.headings.fontFamily,
                  fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                  fontWeight: typography.headings.weights.bold
                }}>The Latvia Business Process</h3>
                
                <p className="mb-6" style={{
                  fontFamily: typography.body.fontFamily,
                  fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
                  lineHeight: '1.8',
                  color: colorPalette.neutrals.darkGray
                }}>
                  ES uses a very simple and fast approach in order to provide the client with a business Invitation from Latvia through the license obtained for the client from Latvia. The following steps or process makes it easier to reach the goal of getting the business visa.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-md" style={{
                    border: '1px solid #e5e7eb'
                  }}>
                    <h4 className="mb-2 text-blue-600" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontWeight: typography.headings.weights.semibold
                    }}>Industry</h4>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Your Own Company</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md" style={{
                    border: '1px solid #e5e7eb'
                  }}>
                    <h4 className="mb-2 text-blue-600" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontWeight: typography.headings.weights.semibold
                    }}>Positions</h4>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>Owner/ Manager</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md" style={{
                    border: '1px solid #e5e7eb'
                  }}>
                    <h4 className="mb-2 text-blue-600" style={{
                      fontFamily: typography.headings.fontFamily,
                      fontWeight: typography.headings.weights.semibold
                    }}>WP Processing Time</h4>
                    <p style={{
                      fontFamily: typography.body.fontFamily,
                      color: colorPalette.neutrals.darkGray
                    }}>45 Working Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessStartup;