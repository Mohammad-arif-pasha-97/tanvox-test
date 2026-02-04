import React from 'react';
import Button from '../components/Button';
import herobag from '../assets/herobag.jpg';
import globalIcon from '../assets/global.png';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../index.css';
import { useNavigate } from "react-router-dom";


const Home = () => {
const navigate = useNavigate();


  useEffect(() => {
    const splitText = (element) => {
      const text = element.innerText;
      element.innerHTML = text
        .split('')
        .map(char =>
          char === ' '
            ? `<span class="inline-block">&nbsp;</span>`
            : `<span class="inline-block char">${char}</span>`
        )
        .join('');
    };

    splitText(heroTitleRef.current);
    splitText(heroSubRef.current);

    const tl = gsap.timeline();

    tl.fromTo(
      '.char',
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        stagger: 0.04,
      }
    );

  
  }, []);

  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroTitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.inOut' }
    )
      .fromTo(
        heroSubRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.inOut' },
        '-=0.8'
      )
      .fromTo(
        heroTextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.inOut' },
        '-=0.7'
      );
  }, []);



  const CountUp = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let start = 0;
            const increment = end / (duration / 16);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(counter);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.4 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  };


  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and scale with your growth."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your operations."
    }
  ];

  const team = [
    { name: "Sare Chinna Venkata Subbaiah", role: "CEO", description: "Visionary leader with 5+ years in tech innovation" },
    { name: "Veera Bangaru", role: "CFO", description: "Financial expert ensuring sustainable growth" },
    { name: "Dattimola Naveen", role: "CTO", description: "Technical architect of cutting-edge solutions" },
    { name: "Siddartha Nemail ", role: "CMO", description: "Marketing strategist building brand excellence" },
    { name: "Kalvacherla Akhil", role: "COO", description: "Operations expert driving efficiency and growth" }
  ];

  const testimonials = [
    { name: "Amaroju Rajkumar", content: "Exceptional service and innovative solutions that transformed our business." },
    { name: "Dachepally Prashanth", content: "Professional team that delivers on time and exceeds expectations." },
    { name: "Abdul hussain", content: "Outstanding technical expertise and customer support." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(185, 176, 176, 0.7), rgba(19, 1, 66, 0.8)), url(${herobag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span
              ref={heroTitleRef}
              className="block mb-2 text-dark-red"
            >
              Building Future-Ready
            </span>

            <span
              ref={heroSubRef}
              className="block text-navy-blue"
            >
              Software Solutions
            </span>

          </h1>


          <p
            ref={heroTextRef}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-0"
          >

            Transform your business with cutting-edge technology and innovative software development
          </p>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white"></div>
              <div className="text-white"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white"></div>
              <div className="text-white"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white"></div>
              <div className="text-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-navy-blue">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
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

      {/* About Us Brief Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-navy-blue">Tanvox Technologies</span>
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating innovative software solutions that drive business growth and digital transformation. With over a decade of experience, we've helped hundreds of businesses leverage technology to achieve their goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={globalIcon}
                  alt="Serving Globally"
                  className="w-10 h-10 mb-3"
                />
                <div className="text-black font-semibold">Serving Globally</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-navy-blue mb-2">
                  <CountUp end={20} suffix="+" />
                </div>

                <div className="text-black">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dark-red mb-2">
                  <CountUp end={50} suffix="+" />
                </div>

                <div className="text-black">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-blue mb-2">
                  <CountUp end={24} />/7
                </div>

                <div className="text-black">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Leadership Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-dark-red to-navy-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-dark-red mb-1">{member.name}</h3>
                <div className="text-navy-blue font-semibold mb-2">{member.role}</div>
                <p className="text-black text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-navy-blue">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-dark-red fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black mb-4 italic">"{testimonial.content}"</p>
                <div className="text-navy-blue font-semibold">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Us Short Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-navy-blue">Touch</span>
            </h2>
            <p className="text-xl text-black mb-8">
              Ready to start your next project? Contact us today and let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row  justify-center">
              <Button
  onClick={() => {
    navigate("/contact");
    setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }}
>
  Contact Us
</Button>

              {/* <button className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-lg hover:bg-navy-blue hover:text-white transition-all duration-300 text-lg font-semibold">
                Schedule a Call
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
