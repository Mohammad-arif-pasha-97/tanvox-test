import React, { useState } from 'react';
import hero from '../assets/hero.jpg';
const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdHtem1-_ji8ZQDn0c5VKCvXnbnaCfn1jL2kc26xx9mwq5hPQ/viewform?usp=dialog";


const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for an experienced Full Stack Developer to join our team and help build amazing user interfaces.",
      requirements: [
        "0-2+ years of experience with React/Next.js",
        "Strong understanding of modern JavaScript",
        "Experience with Python,Django",
        "Knowledge of responsive design principles",
        "Experience with state management (Redux, Zustand, etc.)"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work hours",
        "Remote work options",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "Devops Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our backend team to build scalable and robust server-side applications.",
      requirements: [
        "0-2+ years of experience with Devops",
        "Strong knowledge of databases ",
        "strong experience with ci/cd tools",
        "Experience with cloud services (AWS, Azure)",
        "Understanding of microservices architecture",
        "Knowledge of RESTful APIs and GraphQL"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work hours",
        "Remote work options",
        "Professional development budget"
      ]
    },
    
      {
  id: 3,
  title: "QA Engineer",
  department: "Engineering",
  location: "Remote",
  type: "Full-time",
  description: "We are looking for a detail-oriented QA Engineer to ensure the quality and reliability of our web and mobile applications. You will work closely with developers and product teams to identify bugs, improve user experience, and deliver high-quality software.",
  requirements: [
    "0–2 years of experience in Software Quality Assurance or Testing",
    "Basic understanding of software testing principles and methodologies",
    "Experience in manual testing of web and mobile applications",
    "Knowledge of test case creation, test execution, and bug reporting",
    "Familiarity with bug tracking tools like Jira, Bugzilla, or similar",
    "Basic understanding of SDLC and Agile/Scrum processes",
    "Good analytical and problem-solving skills",
    "Strong communication and documentation skills"
  ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work hours",
        "Remote work options",
        "Professional development budget"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs to keep you healthy and happy.",
      icon: "🏥"
    },
    {
      title: "Flexible Work",
      description: "Remote and hybrid work options with flexible hours to maintain work-life balance.",
      icon: "🏠"
    },
    {
      title: "Professional Growth",
      description: "Annual budget for courses, conferences, and certifications to advance your career.",
      icon: "📚"
    },
    {
      title: "Team Culture",
      description: "Regular team events, hackathons, and a collaborative work environment.",
      icon: "🎉"
    }
  ];

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(185, 176, 176, 0.7), rgba(19, 1, 66, 0.8)), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">Join Our</span>
            <span className="block text-navy-blue">Team</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Build your career with a team that values innovation, growth, and work-life balance
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-navy-blue">Join Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">{benefit.title}</h3>
                <p className="text-black">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Current <span className="text-navy-blue">Openings</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleJobExpansion(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-navy-blue mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="mr-1">🏢</span> {job.department}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">📍</span> {job.location}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">⏰</span> {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className={`w-6 h-6 text-navy-blue transform transition-transform duration-200 ${expandedJob === job.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="mt-4">
                      <h4 className="font-bold text-navy-blue mb-2">Description</h4>
                      <p className="text-black mb-4">{job.description}</p>

                      <h4 className="font-bold text-navy-blue mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-black mb-4">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-navy-blue mb-2">Benefits</h4>
                      <ul className="list-disc list-inside text-black mb-6">
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                      <a
                        href={googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-navy-blue text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                      >
                        Apply Now
                      </a>


                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Culture</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-dark-red mb-4">Innovation & Learning</h3>
              <p className="text-black mb-6">
                We foster a culture of continuous learning and innovation. Our team regularly participates in hackathons,
                tech talks, and knowledge-sharing sessions to stay ahead of industry trends.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Collaboration & Teamwork</h3>
              <p className="text-black mb-6">
                We believe in the power of collaboration. Our open-door policy and regular team-building activities
                create an environment where everyone's voice is heard and valued.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark-red mb-4">Work-Life Balance</h3>
              <p className="text-black mb-6">
                We understand the importance of work-life balance. Flexible working hours, remote options, and
                generous time-off policies help our team maintain a healthy balance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Growth & Development</h3>
              <p className="text-black mb-6">
                Your growth is our growth. We provide clear career paths, mentorship programs, and opportunities
                to work on challenging projects that help you develop new skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-dark-red relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white mb-8">
              Don't see the perfect role? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-navy-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold">
                View All Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-navy-blue transition-all duration-300 text-lg font-semibold">
                Send Resume
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
