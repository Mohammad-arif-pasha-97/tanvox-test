import React, { useState } from 'react';
import herosection   from '../assets/herosection.jpeg';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and scale with your growth.",
      category: "development",
      icon: "💻"
    },
    {
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      category: "mobile",
      icon: "📱"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      category: "development",
      icon: "🌐"
    },
    {
      title: "Cloud computing  and devops securities",
      description: "Scalable cloud infrastructure and migration services to optimize your operations.",
      category: "cloud & DevOps",
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive experiences.",
      category: "design",
      icon: "🎨"
    },
    {
      title: "Sap",
      description: "anlayizing business need, configuring and implementing sap software solutions",
      category: "Analysis & Design",
      icon: "⚙️"
    },
   {
      title: "Security Engineer",
      description: "Designs, builds, and maintains secure system, network and applications by implementing controls",
      category: "Designing & Implementing ",
      icon: "⚙️"
    }
  ];

  const process = [
    { step: "1", title: "Discovery", description: "We understand your business needs and requirements" },
    { step: "2", title: "Planning", description: "Strategic planning and roadmap development" },
    { step: "3", title: "Development", description: "Agile development with regular updates" },
    { step: "4", title: "Testing", description: "Comprehensive testing to ensure quality" },
    { step: "5", title: "Deployment", description: "Smooth deployment and go-live support" },
    { step: "6", title: "Support", description: "Ongoing maintenance and support" }
  ];

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Docker", "MongoDB", 
    "PostgreSQL", "TypeScript", "Vue.js", "Angular", "Kubernetes", "GraphQL"
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(185, 176, 176, 0.7), rgba(19, 1, 66, 0.8)), url(${herosection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">Our</span>
            <span className="block text-navy-blue">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Comprehensive software development services designed to transform your business and drive digital innovation
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-navy-blue">Offer</span>
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === 'all' 
                    ? 'bg-navy-blue text-white' 
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setSelectedCategory('development')}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === 'development' 
                    ? 'bg-navy-blue text-white' 
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setSelectedCategory('mobile')}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === 'mobile' 
                    ? 'bg-navy-blue text-white' 
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Mobile
              </button>
              <button
                onClick={() => setSelectedCategory('cloud')}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === 'cloud' 
                    ? 'bg-navy-blue text-white' 
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Cloud
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-dark-red">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-dark-red to-navy-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="text-navy-blue">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-lg font-semibold text-navy-blue">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-dark-red relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white mb-8">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            {/* <button className="bg-white text-navy-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold">
              Get Started
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
