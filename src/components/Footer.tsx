import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  WebElevate Solutions
                </h3>
                <p className="text-xs text-gray-400 mt-1">Digital Solutions Provider</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base">
              We are a team of creative minds and tech geeks who love building websites and automation tools that solve real problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors p-1.5 hover:bg-gray-700 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors p-1.5 hover:bg-gray-700 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition-colors p-1.5 hover:bg-gray-700 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors p-1.5 hover:bg-gray-700 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 inline-block">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Web Development', 'Automation', 'UI/UX Design', 'Branding', 'Digital Solutions'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <a 
                    href="mailto:pavanajjarapu007@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    info@webelevatesolutions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <a 
                    href="tel:+919505690191" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    +91 95056 90191
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Address</p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Vizianagaram,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WebElevate Solutions. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;