import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      detail: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      detail: 'projects@franzco.in',
      link: 'mailto:projects@franzco.in'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      detail: 'Experience Center, Baner, Pune, Maharashtra 411045',
      link: 'https://maps.google.com/?q=Baner,Pune,Maharashtra,411045'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      detail: 'Mon-Fri: 9AM - 6PM IST',
      link: null
    }
  ];

  const projectTypes = [
    'Residential Complex',
    'Commercial Office',
    'Corporate Campus',
    'Hotel/Hospitality',
    'Educational Institution',
    'Other'
  ];

  return (
    <>
      {/* MOBILE STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .contact-hero {
              padding: 40px 20px !important;
            }
            
            .contact-hero-label {
              font-size: 12px !important;
              margin-bottom: 8px !important;
            }
            
            .contact-hero-heading {
              font-size: 32px !important;
              line-height: 1.1 !important;
              margin-bottom: 16px !important;
            }
            
            .contact-hero-subtitle {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
            
            .contact-cards-container {
              margin-top: 0 !important;
              padding: 20px 16px !important;
            }
            
            .contact-info-grid {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
            
            .contact-info-card {
              padding: 20px !important;
            }
            
            .contact-icon-wrapper {
              width: 48px !important;
              height: 48px !important;
              margin-bottom: 12px !important;
            }
            
            .contact-card-title {
              font-size: 16px !important;
              margin-bottom: 6px !important;
            }
            
            .contact-card-detail {
              font-size: 14px !important;
              line-height: 1.4 !important;
            }
            
            .contact-main-section {
              padding: 32px 16px !important;
            }
            
            .contact-main-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            
            .contact-form-section {
              padding: 24px 20px !important;
            }
            
            .contact-form-heading {
              font-size: 24px !important;
              margin-bottom: 8px !important;
            }
            
            .contact-form-subtitle {
              font-size: 14px !important;
              margin-bottom: 20px !important;
            }
            
            .contact-input,
            .contact-textarea,
            .contact-select {
              font-size: 16px !important;
              padding: 12px 16px !important;
            }
            
            .contact-submit-btn {
              width: 100% !important;
              padding: 14px 20px !important;
            }
            
            .contact-sidebar-section {
              padding: 20px !important;
            }
            
            .contact-sidebar-heading {
              font-size: 20px !important;
              margin-bottom: 16px !important;
            }
          }
        `}
      </style>

      <section className="w-full bg-white">
        {/* Hero Section */}
        <div className="w-full bg-[#FAECEA] py-16 md:py-20 px-4 sm:px-6 lg:px-8 contact-hero">
          <div className="max-w-[1280px] mx-auto text-center">
            <span className="contact-hero-label block font-poppins font-semibold text-sm md:text-base text-[#C34A36] uppercase tracking-wide mb-4">
              GET IN TOUCH
            </span>
            <h1 className="contact-hero-heading font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B2327] mb-4">
              Let's Build Your Fitness Vision
            </h1>
            <p className="contact-hero-subtitle font-poppins text-base md:text-lg text-[#664A32] max-w-3xl mx-auto">
              Whether you're planning a new development or upgrading existing facilities, our team is ready to help you create exceptional fitness amenities.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-cards-container max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 contact-info-grid">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="contact-info-card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="contact-icon-wrapper w-12 h-12 rounded-full bg-[#FEE5E0] flex items-center justify-center mb-4 text-[#C34A36]">
                  {item.icon}
                </div>
                <h3 className="contact-card-title font-unbounded text-base font-semibold text-[#3B2327] mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="contact-card-detail font-poppins text-sm text-[#664A32] hover:text-[#C34A36] transition-colors block"
                    target={item.title === 'Office' ? '_blank' : undefined}
                    rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="contact-card-detail font-poppins text-sm text-[#664A32]">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="contact-main-section max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 contact-main-grid">
            {/* Left Column - Form */}
            <div className="contact-form-section bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="contact-form-heading font-unbounded text-2xl md:text-3xl font-bold text-[#3B2327] mb-2">
                Start Your Project
              </h2>
              <p className="contact-form-subtitle font-poppins text-base text-[#664A32] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <p className="font-poppins text-sm text-green-800">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="contact-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base bg-white"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins text-sm font-medium text-[#3B2327] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="contact-textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:border-transparent transition-all font-poppins text-base resize-none"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn bg-[#C34A36] text-white font-poppins font-medium text-base px-8 py-4 rounded-lg transition-all hover:bg-[#A33B28] focus:outline-none focus:ring-2 focus:ring-[#C34A36] focus:ring-offset-2 inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <div className="contact-sidebar-section bg-[#FAECEA] rounded-2xl p-6 md:p-8">
                <h3 className="contact-sidebar-heading font-unbounded text-xl md:text-2xl font-bold text-[#3B2327] mb-6">
                  Why Partner With FranzCo?
                </h3>
                <div className="space-y-4">
                  {[
                    'End-to-end turnkey solutions',
                    '15+ years of industry expertise',
                    'Pan-India service coverage',
                    'Dedicated project managers',
                    'Transparent pricing & timelines',
                    'Post-installation support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#C34A36] flex-shrink-0 mt-0.5" />
                      <span className="font-poppins text-base text-[#664A32]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-sidebar-section bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="contact-sidebar-heading font-unbounded text-xl md:text-2xl font-bold text-[#3B2327] mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#3B2327] mb-2">
                      What's the typical project timeline?
                    </h4>
                    <p className="font-poppins text-sm text-[#664A32]">
                      Design: 15-21 days, Installation: 20-45 days depending on project size.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#3B2327] mb-2">
                      Do you offer financing options?
                    </h4>
                    <p className="font-poppins text-sm text-[#664A32]">
                      Yes, we can connect you with financing partners for large projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#3B2327] mb-2">
                      What areas do you serve?
                    </h4>
                    <p className="font-poppins text-sm text-[#664A32]">
                      We operate across major metros and tier-2 cities in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
