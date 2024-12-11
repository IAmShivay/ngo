import React from 'react';
import { BookOpen, Globe, HandHelping, Heart } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-gray-800" />,
      title: 'Global Outreach',
      description: 'Connecting communities worldwide and creating sustainable impact across continents through targeted humanitarian initiatives.'
    },
    {
      icon: <HandHelping className="w-12 h-12 text-gray-800" />,
      title: 'Community Support',
      description: 'Empowering local communities through education, healthcare, and economic development programs tailored to specific regional needs.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-gray-800" />,
      title: 'Educational Programs',
      description: 'Providing access to quality education, scholarship opportunities, and skills training for underprivileged youth and adults.'
    },
    {
      icon: <Heart className="w-12 h-12 text-gray-800" />,
      title: 'Healthcare Initiatives',
      description: 'Delivering critical medical services, preventive care, and healthcare infrastructure in underserved regions around the globe.'
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;