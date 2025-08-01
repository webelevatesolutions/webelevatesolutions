import { Target, Eye, Users, Award, Code, Palette, Cpu, Smartphone } from 'lucide-react';
import PavanImg from '../components/images/pavan.png';
import BalajiImg from '../components/images/balaji.png';
import AkhilImg from '../components/images/akhil.jpg';
import PrasadImg from '../components/images/prasad.jpg';

const About = () => {
  const teamMembers = [
    // {
    //   name: "John Doe",
    //   role: "Founder & CEO",
    //   experience: "8+ years in Web Development",
    //   skills: ["Full-Stack Development", "UI/UX Design", "Business Strategy"],
    //   bio: "With extensive experience in digital solutions, John founded WebElevate to help businesses thrive online with custom solutions.",
    //   image: FounderImg
    // },
    {
      name: "A. Pavan Kumar",
      role: "Senior Developer & Founder",
      experience: "3 years WordPress, 1 year MERN",
      skills: ["WordPress", "React", "Node.js", "MongoDB"],
      bio: "Specializes in creating robust WordPress solutions and full-stack applications with modern technologies.",
      image: PavanImg
    },
    {
      name: "G. Balaji",
      role: "Full Stack Developer",
      experience: "2 years in Full Stack Development",
      skills: ["React", "Firebase", "JavaScript", "API Integration"],
      bio: "Passionate about building scalable web applications with Firebase and React.",
      image: BalajiImg
    },
    {
      name: "Akhil",
      role: "WordPress Developer",
      experience: "2 years in WordPress & Full Stack",
      skills: ["WordPress", "PHP", "JavaScript", "CSS"],
      bio: "Creates custom WordPress solutions tailored to client needs with clean, efficient code.",
      image: AkhilImg
    },
    // {
    //   name: "P. Prasad",
    //   role: "Frontend Developer",
    //   experience: "1.5 years in Frontend Development",
    //   skills: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    //   bio: "Focuses on creating beautiful, responsive user interfaces that enhance user experience.",
    //   image: PrasadImg
    // }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "We prioritize understanding your needs to deliver solutions that truly work for your business.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality First",
      description: "Every project meets our high standards for performance, design, and user experience.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Excellence",
      description: "We use modern technologies and best practices to build robust, scalable solutions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "We combine aesthetics with functionality to create memorable digital experiences.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Approach",
      description: "Our solutions work flawlessly across all devices and screen sizes.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About WebElevate Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers and designers creating digital solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <div className="bg-blue-600 text-white p-3 rounded-lg w-fit mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To elevate businesses with custom digital solutions that combine innovative technology with exceptional design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-teal-100">
            <div className="bg-teal-600 text-white p-3 rounded-lg w-fit mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become the preferred digital partner for small and medium businesses seeking quality web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From humble beginnings to helping businesses succeed online
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Creative process" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                WebElevate Solutions was founded in 2020 with a vision to provide affordable, high-quality web development services to small and medium businesses.
              </p>
              <p>
                What started as a one-person operation has grown into a dedicated team of skilled professionals, each bringing unique expertise to deliver comprehensive digital solutions.
              </p>
              <p>
                We've helped over 50 businesses establish their online presence, streamline operations, and achieve their digital goals through our custom solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className={`${value.color} p-3 rounded-lg w-fit mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to elevate your business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;