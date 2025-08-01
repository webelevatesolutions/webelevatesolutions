import { Globe, Zap, Palette, CreditCard, Smartphone, TrendingUp, Check, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Custom websites built from scratch with modern technologies for optimal performance and user experience.",
      features: [
        "React websites with custom admin panels",
        "WordPress development (No page builders)",
        "Fully responsive & SEO-optimized",
        "E-commerce solutions with WooCommerce",
        "Business landing pages that convert"
      ],
      tools: ["React", "WordPress", "Tailwind CSS", "Firebase", "WooCommerce"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "n8n Automation",
      description: "Streamline your business processes with intelligent automation workflows.",
      features: [
        "Custom n8n workflow automation",
        "Gmail, Slack, Notion integrations",
        "Google Sheets automation",
        "Business process optimization",
        "API connection setup"
      ],
      tools: ["n8n", "API Integrations", "Webhooks", "Google Apps Script"],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Logo & Branding",
      description: "Professional brand identity design that makes your business memorable.",
      features: [
        "Custom logo design (no templates)",
        "Brand color palette & typography",
        "Social media branding kit",
        "Brand guidelines document",
        "Stationery design"
      ],
      tools: ["Adobe Illustrator", "Figma", "Photoshop"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Print Design",
      description: "Eye-catching print materials for your marketing and branding needs.",
      features: [
        "Visiting card design",
        "Flyers & brochures",
        "Product catalogs",
        "Custom QR code integration",
        "Print-ready files"
      ],
      tools: ["Adobe InDesign", "Illustrator", "Canva Pro"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered interface design that enhances engagement and conversions.",
      features: [
        "Website & app UI design",
        "Wireframing & prototyping",
        "User experience optimization",
        "Mobile-first responsive design",
        "Accessibility compliance"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Strategies to increase your online visibility and customer acquisition.",
      features: [
        "SEO optimization",
        "Social media setup",
        "Content strategy",
        "Google Analytics setup",
        "Local business optimization"
      ],
      tools: ["Google Analytics", "SEO Tools", "Social Media"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      description: "We discuss your project requirements and goals",
      icon: <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
    },
    {
      title: "Planning",
      description: "We create a detailed project plan and timeline",
      icon: <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
    },
    {
      title: "Design",
      description: "We craft beautiful, functional designs",
      icon: <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
    },
    {
      title: "Development",
      description: "We build your project with clean, efficient code",
      icon: <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get started <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-gray-700">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;