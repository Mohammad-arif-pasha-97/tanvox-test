import React, { useState } from "react";
import logo from "../assets/TANVOXIMG.jpeg";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscriptionStatus('Please enter your email address');
      return;
    }
    
    // Send subscription data to company email
    const subscriptionData = {
      email: email,
      timestamp: new Date().toISOString(),
      to_email: 'info@tanvoxtechnologies.com' // Replace with your company email
    };
    
    // For now, just show success message
    // In production, integrate with EmailJS or backend service
    console.log('Subscription data:', subscriptionData);
    setSubscriptionStatus('Thank you for subscribing!');
    setEmail('');
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubscriptionStatus(''), 5000);
  };
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Development", href: "/services" },
      { name: "Mobile Apps", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "AI & ML", href: "/services" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "in", href: "https://www.linkedin.com/company/tanvox-technologies/" },
    { name: "Instgram", icon: "📷", href: "https://www.instagram.com/tanvox_technologies?igsh=MXRxMGtncHNrem84MA==" },
    { name: "facebook", icon: "f", href: "https://www.facebook.com/share/1a3pcCH8kK/" },
    { name: "Twitter", icon: "X", href: "https://x.com/tanvox2025" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#070b1f] via-[#0a0f2c] to-[#0e143d] border-t border-[#1a1f4a]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Tanvox Tech Logo"
              className="
    h-12 md:h-14 mb-4
    object-contain
    rounded-xl
    p-2
    border border-white/10
    bg-white/5
    hover:scale-105
    hover:shadow-[0_0_12px_rgba(79,70,229,0.6)]
    transition-all duration-300
  "
            />


            <p className="text-slate-300 leading-relaxed mb-6">
              Building future-ready software solutions that drive business
              growth and digital transformation.
            </p>

            {/* Newsletter */}
            <h4 className="text-white font-semibold mb-3">
              Stay Updated
            </h4>
            
            {subscriptionStatus && (
              <div className={`text-sm mb-3 p-2 rounded text-center ${
                subscriptionStatus.includes('Thank you') 
                  ? 'bg-green-900/30 text-green-400 border border-green-700/50' 
                  : 'bg-red-900/30 text-red-400 border border-red-700/50'
              }`}>
                {subscriptionStatus}
              </div>
            )}
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#11163a] border border-[#1a1f4a] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-dark-red"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-dark-red to-navy-blue px-6 py-2 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="
  w-10 h-10
  bg-navy-blue
  border border-navy-blue/40
  rounded-full
  flex items-center justify-center
  text-white
  shadow-md
  hover:bg-dark-red
  hover:border-dark-red
  hover:scale-110
  hover:shadow-[0_0_12px_rgba(79,70,229,0.6)]
  transition-all duration-300
"
                >
                  <span className="text-sm font-bold">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-dark-red transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-dark-red transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-dark-red transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a1f4a] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Tanvox Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-400 hover:text-dark-red text-sm transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
