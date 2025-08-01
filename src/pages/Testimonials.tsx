import React from 'react';
import { Star, Quote, User, Building, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ravi Sharma",
      role: "Entrepreneur",
      company: "Tech Innovations Pvt Ltd",
      location: "Mumbai, India",
      text: "WebElevate transformed my business with a stunning website and complete branding package. The team was professional, creative, and delivered exactly what I envisioned. My online presence has never looked better!",
      rating: 5,
      project: "Website Development + Branding",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: true
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Small Business Owner",
      company: "Bloom Organics",
      location: "Delhi, India",
      text: "The n8n automation solutions saved me 20+ hours every week! My inventory management, customer follow-ups, and order processing are now fully automated. I can finally focus on growing my business instead of managing repetitive tasks.",
      rating: 5,
      project: "Business Automation",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: true
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Restaurant Owner",
      company: "Spice Garden Restaurant",
      location: "Ahmedabad, India",
      text: "Our new website with online ordering system has increased our revenue by 40%! The UI/UX is fantastic, and customers love how easy it is to place orders. WebElevate understood exactly what we needed.",
      rating: 5,
      project: "E-commerce Website",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: true
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Fashion Designer",
      company: "Sneha Couture",
      location: "Bangalore, India",
      text: "The branding package was absolutely perfect! My logo, business cards, and website all have a cohesive, premium look that my clients love. The attention to detail was impressive.",
      rating: 5,
      project: "Complete Branding Package",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: false
    },
    {
      id: 5,
      name: "Vikash Kumar",
      role: "Consultant",
      company: "Growth Strategies",
      location: "Pune, India",
      text: "Working with WebElevate was a breeze. They delivered our consulting website on time, within budget, and with exceptional quality. The ongoing support has been fantastic too!",
      rating: 5,
      project: "Professional Website",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: false
    },
    {
      id: 6,
      name: "Kavita Singh",
      role: "Fitness Trainer",
      company: "FitLife Studio",
      location: "Jaipur, India",
      text: "The mobile-first website design is perfect for my fitness business. Clients can easily book sessions, view schedules, and make payments. The design is clean and motivating!",
      rating: 5,
      project: "Booking Website",
      image: "https://images.pexels.com/photos/1181692/pexels-photo-1181692.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: false
    },
    {
      id: 7,
      name: "Rohit Agarwal",
      role: "Real Estate Agent",
      company: "Prime Properties",
      location: "Hyderabad, India",
      text: "The property listing website with advanced search and filters has revolutionized how I showcase properties. Lead generation has increased by 60% since the launch!",
      rating: 5,
      project: "Real Estate Portal",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: false
    },
    {
      id: 8,
      name: "Meera Joshi",
      role: "Interior Designer",
      company: "Elegant Interiors",
      location: "Chennai, India",
      text: "My portfolio website beautifully showcases my work. The gallery features and contact forms work perfectly. I've received more inquiries since launching the new site!",
      rating: 5,
      project: "Portfolio Website",
      image: "https://images.pexels.com/photos/1181693/pexels-photo-1181693.jpeg?auto=compress&cs=tinysrgb&w=150",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "100%", label: "Project Completion" }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Client Testimonials
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See what our clients say about working with WebElevate Solutions
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Reviews</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mb-1">
                      {testimonial.project}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create an amazing digital solution for your business. Get started with a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Trusted by businesses across India</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", 
              "Pune", "Ahmedabad", "Jaipur", "Kolkata", "Surat"
            ].map((city, index) => (
              <div key={index} className="text-gray-400 font-medium">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;