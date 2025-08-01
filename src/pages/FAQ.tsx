import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What information do you need to start building my website?",
          answer: "We need your business details, logo (or we'll create one), list of services, sample websites you like, basic idea of features you want, content (text, images), and your preferred timeline. Don't worry if you don't have everything ready - we'll guide you through the process!"
        },
        {
          question: "How long does it take to complete a website?",
          answer: "Usually 7-15 days depending on the scope and complexity. A simple business website takes 7-10 days, while complex e-commerce sites or custom applications may take 2-4 weeks. We'll give you an exact timeline after understanding your requirements."
        },
        {
          question: "What's your development process?",
          answer: "Our process includes: 1) Discovery call to understand your needs 2) Design mockups and wireframes 3) Development and regular updates 4) Testing and revisions 5) Launch and training 6) Ongoing support. You'll be involved at every step!"
        }
      ]
    },
    {
      category: "Website Features & Functionality",
      questions: [
        {
          question: "Can I edit the website after delivery?",
          answer: "Yes! We provide admin panel access and training so you can easily update content, images, and basic information. For WordPress sites, you'll have full control over posts, pages, and media. We also offer ongoing support for more complex changes."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. We follow mobile-first design principles to ensure your site looks perfect on all screen sizes."
        },
        {
          question: "Will it be SEO-optimized?",
          answer: "Yes! We ensure clean code, fast loading times, proper meta tags, structured data, and SEO-friendly URLs. We also optimize images, implement proper heading structure, and ensure good Core Web Vitals scores."
        },
        {
          question: "Can you integrate third-party tools and services?",
          answer: "Yes! We can integrate payment gateways (Stripe, PayPal), email marketing tools (Mailchimp), analytics (Google Analytics), social media, booking systems, CRM tools, and much more."
        }
      ]
    },
    {
      category: "Design & Branding",
      questions: [
        {
          question: "Do you create custom designs or use templates?",
          answer: "We create 100% custom designs tailored to your brand and business needs. We never use pre-made templates. Every design is unique and built specifically for your requirements."
        },
        {
          question: "Can you help with logo design and branding?",
          answer: "Absolutely! We offer complete branding services including logo design, color palette, typography, brand guidelines, business cards, and social media kits. We can create your entire brand identity from scratch."
        },
        {
          question: "How many design revisions do I get?",
          answer: "We include up to 3 rounds of revisions in our standard packages. We work closely with you during the design phase to ensure we get it right. Additional revisions can be accommodated if needed."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "Do you provide hosting and domain setup?",
          answer: "Yes! We can help you set up hosting and domain registration. We work with reliable hosting providers and can recommend the best options based on your needs and budget. We'll handle the entire setup process for you."
        },
        {
          question: "What happens if something breaks on my website?",
          answer: "We provide ongoing support to fix any issues. During the first month after launch, we offer free bug fixes and minor adjustments. After that, we have affordable maintenance packages to keep your site running smoothly."
        },
        {
          question: "Do you provide website maintenance?",
          answer: "Yes! We offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and technical support. We can also handle hosting management if needed."
        },
        {
          question: "Can you help with website backups and security?",
          answer: "Absolutely! We implement security best practices, regular backups, SSL certificates, and can set up security monitoring. Our maintenance packages include ongoing security updates and monitoring."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much does a website cost?",
          answer: "Pricing varies based on complexity and features. Basic business websites start from ₹15,000, e-commerce sites from ₹25,000, and custom applications are quoted based on requirements. We'll provide a detailed quote after understanding your needs."
        },
        {
          question: "What's included in the price?",
          answer: "Our packages include design, development, basic SEO setup, mobile optimization, admin training, and 1 month of free support. Additional services like advanced SEO, content writing, or ongoing maintenance are available separately."
        },
        {
          question: "Do you require full payment upfront?",
          answer: "No! We typically work with a 50% upfront payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We're flexible and can work with your budget."
        },
        {
          question: "What if I want changes after the website is live?",
          answer: "We offer free minor revisions within the first month after launch. For major changes or new features, we'll provide a quote. We aim to be fair and reasonable with all change requests."
        }
      ]
    },
    {
      category: "Automation Services",
      questions: [
        {
          question: "What is n8n automation and how can it help my business?",
          answer: "n8n is a powerful automation platform that connects your business tools and automates repetitive tasks. We can automate tasks like lead management, email marketing, data sync between tools, invoice generation, and much more - saving you hours every week!"
        },
        {
          question: "Which tools can you integrate with automation?",
          answer: "We can integrate Gmail, Slack, Notion, Google Sheets, CRM systems, social media platforms, e-commerce platforms, payment systems, and hundreds of other tools. If it has an API, we can probably automate it!"
        },
        {
          question: "How much time can automation save me?",
          answer: "Our clients typically save 10-20 hours per week on manual tasks. Some businesses save even more depending on their workflows. We'll analyze your current processes and show you exactly how much time and money you can save."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about working with WebElevate Solutions
        </p>
      </section>

      {/* Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div key={faqIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {openFAQ === currentIndex ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === currentIndex && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
            <p className="text-gray-500">Try searching for something else or contact us directly.</p>
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help! Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Us
            </a>
            <a
              href="mailto:support@webelevate.in"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;