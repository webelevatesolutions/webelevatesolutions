import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Website for Your Business in 2025",
      excerpt: "Selecting the perfect website solution for your business can be overwhelming. Here's our comprehensive guide to making the right choice for your specific needs and budget.",
      content: "In today's digital landscape, choosing the right website for your business is crucial for success. Whether you're a startup or an established company, your website serves as your digital storefront...",
      author: "WebElevate Team",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Why Automation Can Save You 20+ Hours a Week",
      excerpt: "Discover how business automation with n8n can transform your workflow and free up valuable time for strategic growth activities.",
      content: "Business automation isn't just a buzzword—it's a game-changer. Our clients regularly report saving 20+ hours per week through smart automation workflows...",
      author: "WebElevate Team",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 3,
      title: "Logo Design Mistakes to Avoid in 2025",
      excerpt: "Common pitfalls in logo design that can hurt your brand identity and how to create a logo that truly represents your business values.",
      content: "Your logo is often the first impression customers have of your brand. Unfortunately, many businesses make critical mistakes that can damage their brand perception...",
      author: "WebElevate Team",
      date: "2025-01-05",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 4,
      title: "The Ultimate Guide to Website Performance Optimization",
      excerpt: "Learn practical techniques to speed up your website, improve user experience, and boost your search engine rankings.",
      content: "Website speed directly impacts user experience, conversion rates, and SEO rankings. Here's everything you need to know about optimizing your site performance...",
      author: "WebElevate Team",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Small Business Branding on a Budget: A Complete Guide",
      excerpt: "Professional branding doesn't have to break the bank. Discover cost-effective strategies to build a strong brand identity for your small business.",
      content: "Building a strong brand identity is crucial for small businesses, but it doesn't require a massive budget. With the right approach and smart decisions...",
      author: "WebElevate Team",
      date: "2024-12-20",
      readTime: "7 min read",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Trends That Will Dominate 2025",
      excerpt: "Stay ahead of the competition with these emerging e-commerce trends and technologies that are reshaping online retail.",
      content: "The e-commerce landscape is constantly evolving. To stay competitive, businesses need to understand and adapt to emerging trends...",
      author: "WebElevate Team",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Automation", "Design", "Branding", "E-commerce"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights, tips, and guides about web development, automation, design, and growing your business online
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
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 group">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group">
                  <span>Read More</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights about web development, automation, and growing your business online.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;