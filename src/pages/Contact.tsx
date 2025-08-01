import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // EmailJS configuration - Replace with your actual service ID, template ID, and user ID
    const serviceId = 'service_07b88zw';
    const templateId = 'template_pte5thr';
    const userId = 'Si03FLs65H2Y3k-gW';
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_name: 'WebElevate Solutions',
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        setIsSubmitted(true);
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitMessage('');
        }, 5000);
      })
      .catch((error) => {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
        setTimeout(() => setSubmitMessage(''), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent inline-block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your project? Let's discuss your requirements and create something amazing together.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6 flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">{submitMessage}</span>
              </div>
            )}

            {submitMessage && !isSubmitted && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6 flex items-start space-x-3">
                <span className="text-sm sm:text-base">{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="+91 95056 90191"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    What do you need? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Zap className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="n8n-automation">n8n Automation</option>
                      <option value="logo-branding">Logo & Branding</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="print-design">Print Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 sm:p-8 rounded-xl text-white shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-2 rounded-lg mr-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-100">Email</h3>
                    <a 
                      href="mailto:info@webelevatesolutions.com" 
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      info@webelevatesolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-100">Phone</h3>
                    <a 
                      href="tel:+919505690191" 
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      +91 95056 90191
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-100">Location</h3>
                    <p className="text-white">
                      Vizianagaram, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-100">Business Hours</h3>
                    <p className="text-white">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-white">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-green-100 p-1.5 rounded-lg mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quick Response Time (typically within 2 hours)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free Initial Consultation & Quote</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparent Pricing with No Hidden Fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing Support After Project Completion</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-5 sm:p-6 rounded-xl border border-yellow-200 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                  <Zap className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Quick Tip</h3>
                  <p className="text-yellow-700 text-sm sm:text-base">
                    The more details you provide about your project (budget, timeline, specific features), the more accurate our proposal will be!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl text-center border border-blue-100 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chat with us live during business hours for instant answers to your questions.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('showLiveChat'))}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all font-semibold shadow-md hover:shadow-lg inline-flex items-center"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Start Live Chat Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;