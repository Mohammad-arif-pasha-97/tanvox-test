import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactbg from '../assets/contactbg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ EMAILJS SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',   // 🔴 replace
        'YOUR_TEMPLATE_ID',  // 🔴 replace
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'    // 🔴 replace
      )
      .then(
        () => {
          setFormStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
        },
        (error) => {
          console.error(error);
          setFormStatus('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  const hyderabadOffice = {
    city: "Hyderabad",
    address:
      "3rd Floor JQ Chambers,4-50/5,Gachibowli - Miyapur Rd, Hyderabad, Telangana",
    phone: "+91 9676507387",
    email: "info@tanvox.in"
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(185,176,176,0.7), rgba(19,1,66,0.8)), url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">Get In</span>
            <span className="block text-navy-blue">Touch</span>
          </h1>
          <p className="text-xl text-white">
            Ready to start your next project? Contact us today.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">
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
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-navy-blue text-white px-8 py-4 rounded-lg hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

