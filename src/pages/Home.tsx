// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from '../components/Carousel';
// import CompanyScroll from '../components/CompanyScroll';
// import {
//   Globe,
//   Zap,
//   Palette,
//   CreditCard,
//   Smartphone,
//   Clock,
//   Award,
//   DollarSign,
//   HeadphonesIcon,
//   Star,
//   HelpCircle
// } from 'lucide-react';

// // Import local banner images
// import banner1 from '../components/images/image1.png';
// import banner2 from '../components/images/image2.png';
// import banner3 from '../components/images/image3.png';

// const Home = () => {
//   const carouselSlides = [
//     {
//       title: "We Build Powerful & Beautiful Websites",
//       description: "From React to WordPress, fully customized websites built for your brand.",
//       image: banner3
//     },
//     {
//       title: "Launch Your Brand Online with Confidence",
//       description: "Complete solutions: logo design, business automation, and identity kits.",
//       image: banner2
//     },
//     {
//       title: "Automate Your Business with Smart Solutions",
//       description: "n8n-powered automations tailored for your workflows.",
//       image: banner1
//     }
//   ];

//   const services = [
//     {
//       icon: <Globe className="h-8 w-8" />,
//       title: "Website Development",
//       description: "React, WordPress, Custom Builds",
//       color: "bg-blue-500"
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "n8n Automation",
//       description: "Business process automation",
//       color: "bg-yellow-500"
//     },
//     {
//       icon: <Palette className="h-8 w-8" />,
//       title: "Logo & Branding Design",
//       description: "Complete brand identity solutions",
//       color: "bg-purple-500"
//     },
//     {
//       icon: <CreditCard className="h-8 w-8" />,
//       title: "Visiting Cards & Flyers",
//       description: "Print-ready professional designs",
//       color: "bg-green-500"
//     },
//     {
//       icon: <Smartphone className="h-8 w-8" />,
//       title: "UI/UX Design",
//       description: "Intuitive user interface design",
//       color: "bg-pink-500"
//     }
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Award className="h-6 w-6" />,
//       title: "100% Customized Designs",
//       description: "No Templates"
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       title: "On-Time Delivery",
//       description: "with Quality"
//     },
//     {
//       icon: <DollarSign className="h-6 w-6" />,
//       title: "Affordable Pricing",
//       description: "Best value for money"
//     },
//     {
//       icon: <HeadphonesIcon className="h-6 w-6" />,
//       title: "Post-Launch Support",
//       description: "Ongoing assistance"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Ravi S.",
//       role: "Entrepreneur",
//       image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150",
//       text: "WebElevate transformed my business with a stunning website and branding. Highly professional team.",
//       rating: 5
//     },
//     {
//       name: "Priya M.",
//       role: "Small Business Owner",
//       image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
//       text: "Amazing automation solutions that saved me hours every week. Excellent service!",
//       rating: 5
//     }
//   ];

//   const faqs = [
//     {
//       question: "What information do you need to start building my website?",
//       answer: "We need your business details, logo (or we'll create one), list of services, sample websites you like, and basic idea of features."
//     },
//     {
//       question: "How long does it take to complete a site?",
//       answer: "Usually 7-15 days depending on the scope and complexity of your project."
//     },
//     {
//       question: "Can you help maintain the site after launch?",
//       answer: "Yes! We provide ongoing support and maintenance services to keep your site running smoothly."
//     },
//     {
//       question: "Will my website be mobile-friendly?",
//       answer: "Absolutely! All our websites are fully responsive and optimized for all devices."
//     }
//   ];

//   return (
//     <div className="space-y-16">
//       {/* Hero Carousel Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         <Carousel slides={carouselSlides} />
//       </section>

//       {/* Services Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Our Core Services
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Comprehensive digital solutions to elevate your business online
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
//               <div className={`${service.color} text-white p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
//               <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
//                 Learn More →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Company Scroll Section */}
//       <CompanyScroll />

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-50 dark:bg-gray-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Why Choose WebElevate?
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-4 rounded-full w-fit mx-auto mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Portfolio Preview
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">Some of our best work</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center group hover:shadow-lg transition-shadow">
//               <img
//                 src={`https://images.pexels.com/photos/${item === 1 ? '196644' : item === 2 ? '270408' : '230544'}/pexels-photo-${item === 1 ? '196644' : item === 2 ? '270408' : '230544'}.jpeg?auto=compress&cs=tinysrgb&w=600`}
//                 alt={`Portfolio Project ${item}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link
//             to="/portfolio"
//             className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//           >
//             View All Projects
//           </Link>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-blue-50 dark:bg-gray-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Client Testimonials
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     <strong className="text-gray-900 dark:text-white">{testimonial.name}</strong>
//                     <p>{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Things Clients Usually Ask Before Starting a Project
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
//             Get answers to the most common questions about our services and process
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link
//             to="/faq"
//             className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center space-x-2 mb-16"
//           >
//             <HelpCircle className="h-5 w-5" />
//             <span>View All FAQs</span>
//           </Link>
//         </div>
//       </section>

//       {/* Spacer */}
//       <div className="h-16"></div>
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CompanyScroll from '../components/CompanyScroll';
import {
  Globe,
  Zap,
  Palette,
  CreditCard,
  Smartphone,
  Clock,
  Award,
  DollarSign,
  Headphones,
  Star,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

// Import local banner images
import banner1 from '../components/images/image1.png';
import banner2 from '../components/images/image2.png';
import banner3 from '../components/images/image3.png';

const Home = () => {
  const carouselSlides = [
    {
      title: "We Build Powerful & Beautiful Websites",
      description: "From React to WordPress, fully customized websites built for your brand.",
      image: banner3
    },
    {
      title: "Launch Your Brand Online with Confidence",
      description: "Complete solutions: logo design, business automation, and identity kits.",
      image: banner2
    },
    {
      title: "Automate Your Business with Smart Solutions",
      description: "n8n-powered automations tailored for your workflows.",
      image: banner1
    }
  ];

  const services = [
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Website Development",
      description: "React, WordPress, Custom Builds",
      color: "bg-blue-500"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "n8n Automation",
      description: "Business process automation",
      color: "bg-yellow-500"
    },
    {
      icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Logo & Branding Design",
      description: "Complete brand identity solutions",
      color: "bg-purple-500"
    },
    {
      icon: <CreditCard className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Visiting Cards & Flyers",
      description: "Print-ready professional designs",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "UI/UX Design",
      description: "Intuitive user interface design",
      color: "bg-pink-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "100% Customized Designs",
      description: "No Templates"
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "On-Time Delivery",
      description: "with Quality"
    },
    {
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Affordable Pricing",
      description: "Best value for money"
    },
    {
      icon: <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Post-Launch Support",
      description: "Ongoing assistance"
    }
  ];

  const testimonials = [
    {
      name: "Ravi S.",
      role: "Entrepreneur",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "WebElevate transformed my business with a stunning website and branding. Highly professional team.",
      rating: 5
    },
    {
      name: "Priya M.",
      role: "Small Business Owner",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Amazing automation solutions that saved me hours every week. Excellent service!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What information do you need to start building my website?",
      answer: "We need your business details, logo (or we'll create one), list of services, sample websites you like, and basic idea of features."
    },
    {
      question: "How long does it take to complete a site?",
      answer: "Usually 7-15 days depending on the scope and complexity of your project."
    },
    {
      question: "Can you help maintain the site after launch?",
      answer: "Yes! We provide ongoing support and maintenance services to keep your site running smoothly."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for all devices."
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <Carousel slides={carouselSlides} />
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business online
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className={`${service.color} text-white p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs sm:text-sm flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Company Scroll Section */}
      <CompanyScroll />

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Why Choose WebElevate?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results with a client-focused approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Portfolio Preview
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Some of our best work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-gray-200 dark:bg-gray-700 rounded-lg sm:rounded-xl h-48 sm:h-64 overflow-hidden group hover:shadow-lg transition-shadow relative"
            >
              <img
                src={`https://images.pexels.com/photos/${item === 1 ? '196644' : item === 2 ? '270408' : '230544'}/pexels-photo-${item === 1 ? '196644' : item === 2 ? '270408' : '230544'}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={`Portfolio Project ${item}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium text-sm sm:text-base">
                  {item === 1 ? "E-commerce Website" : item === 2 ? "Corporate Portal" : "Mobile App UI"}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
          >
            View All Projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              What our clients say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <strong className="block text-gray-900 dark:text-white">{testimonial.name}</strong>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Get answers to the most common questions about our services and process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/faq"
            className="inline-flex items-center bg-blue-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
          >
            <HelpCircle className="h-4 w-4 mr-1 sm:mr-2" />
            View All FAQs
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-12 sm:py-16 rounded-xl sm:rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Get started with a free consultation and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-5 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get Free Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;