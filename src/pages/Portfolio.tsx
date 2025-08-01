import React from 'react';
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, Zap, PenTool, BarChart2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sapthagiri Traders",
      description: "Agricultural products e-commerce platform developed with WordPress. Features include product categories, add to cart, and responsive design for mobile users.",
      category: "E-commerce",
      technologies: ["WordPress", "WooCommerce"],
      image: "https://sapthagiritraders.com/wp-content/uploads/2024/09/logo-no-background-1.png",
      liveUrl: "https://sapthagiritraders.com/",
      githubUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "Tincy Wincy Theaters",
      description: "Private theater booking platform with user-friendly admin panel for managing show timings, bookings, and inquiries. Built using React and Firebase.",
      category: "Business Website",
      technologies: ["React", "Firebase"],
      image: "https://tincywincy.in/images/Logo.png",
      liveUrl: "https://tincywincy.in/",
      githubUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "BR Constructions",
      description: "Real estate and construction project management platform. Includes admin dashboard to manage ongoing and completed projects.",
      category: "Business Website",
      technologies: ["React", "Firebase"],
      image: "https://brconstructions.co/images/logo.jpg",
      liveUrl: "https://brconstructions.co/",
      githubUrl: "",
      featured: true
    },
    {
      id: 4,
      title: "Chanda Events",
      description: "Event management platform with admin panel to update pricing, services, and track inquiries. Built using React and Firebase.",
      category: "Business Website",
      technologies: ["React", "Firebase"],
      image: "https://chandaevents.in/assets/Events%20Logo-BbWyBEkr.jpg",
      liveUrl: "https://chandaevents.in/",
      githubUrl: "",
      featured: true
    },
    {
      id: 5,
      title: "HN The Best",
      description: "Basic static company website built using React JS showcasing services and contact info.",
      category: "Business Website",
      technologies: ["React"],
      image: "https://hnthebest.com/services_hn.jpg",
      liveUrl: "https://hnthebest.com/",
      githubUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "Billing System",
      description: "Basic billing and inventory tracking system using React and Firebase. Developed as a demo application.",
      category: "E-commerce",
      technologies: ["React", "Firebase"],
      image: "https://sourcebit.net/images/invoicing-and-billing-system-works.png",
      liveUrl: "https://grand-mermaid-63e802.netlify.app/",
      githubUrl: "",
      featured: false
    },
    {
      id: 7,
      title: "Evergreen Solar Systems",
      description: "Basic informative website for solar panel solutions built with React. Clean, responsive UI.",
      category: "Business Website",
      technologies: ["React"],
      image: "https://evergreensolarsystems.in/images/Logo%20greensolar.png",
      liveUrl: "https://evergreensolarsystems.in/",
      githubUrl: "",
      featured: false
    },
    {
      id: 8,
      title: "Teja Pooja Nilayam",
      description: "Temple product and pooja item ordering system developed using WordPress with WooCommerce.",
      category: "E-commerce",
      technologies: ["WordPress", "WooCommerce"],
      image: "https://tejapoojanilayam.com/wp-content/uploads/2025/04/Asset-5@4x-300x61.png",
      liveUrl: "https://tejapoojanilayam.com/",
      githubUrl: "",
      featured: false
    },
    {
      id: 9,
      title: "SVL Cocopeat",
      description: "Basic static website for coconut and gardening products. Developed using React with responsive design.",
      category: "Business Website",
      technologies: ["React"],
      image: "https://svlcocopeat.com/assets/vijaya%204-CSk9LjsF.jpg",
      liveUrl: "https://svlcocopeat.com/",
      githubUrl: "",
      featured: false
    },
    // Added Automation (n8n) projects
    {
      id: 10,
      title: "Healthcare Appointment Automation",
      description: "Automated patient appointment scheduling system with SMS/email reminders using n8n workflows.",
      category: "Automation",
      technologies: ["n8n", "Google Sheets", "Twilio"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: true
    },
    {
      id: 11,
      title: "E-commerce Order Processing",
      description: "Automated order processing system connecting Shopify, QuickBooks, and shipping providers.",
      category: "Automation",
      technologies: ["n8n", "Shopify API", "QuickBooks"],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: false
    },
    // Added UI/UX Design projects
    {
      id: 12,
      title: "Fitness App Redesign",
      description: "Complete UI/UX redesign for a fitness tracking mobile application with improved user flows.",
      category: "UI/UX Design",
      technologies: ["Figma", "Adobe XD", "User Research"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: true
    },
    {
      id: 13,
      title: "Banking Dashboard UI",
      description: "Modern banking dashboard interface with data visualization and responsive components.",
      category: "UI/UX Design",
      technologies: ["Sketch", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: false
    },
    // Added Digital Marketing projects
    {
      id: 14,
      title: "E-commerce SEO Strategy",
      description: "Comprehensive SEO strategy implementation for fashion e-commerce store with 300% traffic growth.",
      category: "Digital Marketing",
      technologies: ["SEO", "Google Analytics", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: true
    },
    {
      id: 15,
      title: "Social Media Campaign",
      description: "Viral social media campaign for tech startup with 500k+ impressions and 15% conversion rate.",
      category: "Digital Marketing",
      technologies: ["Facebook Ads", "Instagram", "Influencer Marketing"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "",
      featured: false
    }
  ];

  const categories = ["All", "E-commerce", "Business Website", "Automation", "UI/UX Design", "Digital Marketing"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce":
        return <ShoppingCart className="h-4 w-4" />;
      case "Business Website":
        return <Globe className="h-4 w-4" />;
      case "Automation":
        return <Zap className="h-4 w-4" />;
      case "UI/UX Design":
        return <PenTool className="h-4 w-4" />;
      case "Digital Marketing":
        return <BarChart2 className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="py-16 space-y-16 bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing our professional work across web development, automation, design, and digital marketing
        </p>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {getCategoryIcon(category)}
                <span>{category}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {filteredProjects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="relative overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x400?text=Project+Image';
                    target.className = 'w-full h-full object-contain p-4';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{project.category === 'UI/UX Design' ? 'View Case Study' : 'Live Demo'}</span>
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* All Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
                    target.className = 'w-full h-full object-contain p-4';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>{project.category === 'UI/UX Design' ? 'View Design' : 'View Project'}</span>
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;