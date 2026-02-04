import React, { useState } from 'react';
import contactbg from '../assets/contactbg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS or similar service
    const emailData = {
      to_email: 'info@tanvox.in', // Replace with your company email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };
    
    // For now, just show success message
    // In production, integrate with EmailJS or backend service
    console.log('Form data to send:', emailData);
    setFormStatus('Sent! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    
    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  const hyderabadOffice = { 
    city: "Hyderabad", 
    address: "3rd Floor JQ Chambers,4-50/5,Gachibowli -Miyapur Rd,Hyderabad,Telangana", 
    phone: "+91 9676507387", 
    email: "info@tanvox.in" 
  };

  const faqs = [
    { question: "What services do you offer?", answer: "Custom software development, mobile apps, web development, cloud solutions, UI/UX design, and DevOps." },
    { question: "How long does a project take?", answer: "4-6 weeks for simple websites, 3-6 months for complex applications." },
    { question: "Do you provide ongoing support?", answer: "Yes, we offer maintenance and support packages." },
    { question: "What is your pricing model?", answer: "Fixed-price, time & materials, and dedicated team models." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(185, 176, 176, 0.7), rgba(19, 1, 66, 0.8)), url(${contactbg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">Get In</span>
            <span className="block text-navy-blue">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Send Us a <span className="text-navy-blue">Message</span>
            </h2>

            {formStatus && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center">
                {formStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  required 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                />
                <input 
                  required 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                />
                <input 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  placeholder="Company" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                />
              </div>
              <textarea 
                required 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message *" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-navy-blue text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-300 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-navy-blue">Office</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Google Maps */}
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1814107272626!2d78.3628605!3d17.4510292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f6b6b9c38fa97e5%3A0x141b9e14f528a714!2sTanvox%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770119685368!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tanvox Technologies Hyderabad Office"
              />
            </div>
            
            {/* Right Side - Hyderabad Office Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-navy-blue mb-6">{hyderabadOffice.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-dark-red mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-black text-lg">{hyderabadOffice.address}</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-dark-red mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-black text-lg">{hyderabadOffice.phone}</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-dark-red mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-black text-lg">{hyderabadOffice.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked <span className="text-navy-blue">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-2">{faq.question}</h3>
                <p className="text-black">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
