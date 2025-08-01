import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';

// Add TypeScript declaration for Tawk_API
declare global {
  interface Window {
    Tawk_API?: any;
  }
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}
const LiveChatPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const [forceShow, setForceShow] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to WebElevate Solutions! How can I help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      if (!forceShow) {
        setShowPopup(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [forceShow]);

  // Listen for custom event to show chat
  useEffect(() => {
    const handleShowChat = () => {
      setForceShow(true);
      setShowPopup(true);
      setIsChatMode(true);
      setIsMinimized(false);
    };

    window.addEventListener('showLiveChat', handleShowChat);
    return () => window.removeEventListener('showLiveChat', handleShowChat);
  }, []);

  useEffect(() => {
    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/1hqr8p8q8'; // Replace with your actual Tawk.to ID
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleStartChat = () => {
    setIsChatMode(true);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Auto-reply after 1 second
      setTimeout(() => {
        const autoReply = getAutoReply(newMessage);
        const supportMessage: Message = {
          id: messages.length + 2,
          text: autoReply,
          sender: 'support',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, supportMessage]);
      }, 1000);
    }
  };

  const getAutoReply = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Our pricing varies based on your specific requirements. For a detailed quote, please share your project details or contact us at support@webelevate.in. We offer competitive rates starting from ₹15,000 for basic websites.";
    } else if (message.includes('website') || message.includes('web')) {
      return "Great! We specialize in custom website development using React and WordPress. We can create everything from business websites to e-commerce platforms. What type of website are you looking for?";
    } else if (message.includes('automation') || message.includes('n8n')) {
      return "Excellent! Our n8n automation services can save you 20+ hours per week by automating repetitive tasks. We can integrate tools like Gmail, Slack, Notion, and Google Sheets. What processes would you like to automate?";
    } else if (message.includes('logo') || message.includes('brand')) {
      return "Perfect! We create unique, custom logos and complete branding packages including color palettes, typography guides, and social media kits. No templates - everything is designed specifically for your brand.";
    } else if (message.includes('time') || message.includes('how long')) {
      return "Typical project timelines: Simple websites (7-10 days), E-commerce sites (10-15 days), Complex applications (2-4 weeks). We'll provide an exact timeline after understanding your requirements.";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Thanks for reaching out to WebElevate Solutions. I'm here to help you with any questions about our web development, automation, or branding services. What can I assist you with today?";
    } else {
      return "Thanks for your message! I'd be happy to help you with that. For detailed assistance, please contact us at support@webelevate.in or call +91-XXXXXXXXXX. Our team will get back to you within a few hours.";
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setIsChatMode(false);
    setForceShow(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!showPopup && !forceShow) return null;

  return (
    <div className={`fixed right-6 bottom-24 z-50 transition-all duration-300 ${isMinimized ? 'h-12' : ''}`}>
      <div className={`bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
        isMinimized ? 'w-80 h-12' : isChatMode ? 'w-96 h-96' : 'w-80'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span className="font-semibold">{isChatMode ? 'Live Chat' : 'Need Help?'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleMinimize}
              className="text-white hover:text-gray-200 transition-colors p-1"
            >
              {isMinimized ? (
                <div className="w-4 h-4 border-2 border-current"></div>
              ) : (
                <div className="w-4 h-0.5 bg-current"></div>
              )}
            </button>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <>
            {!isChatMode ? (
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    W
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WebElevate Support</h4>
                    <p className="text-sm text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Online now
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Hi there! 👋 Have questions about our services? We're here to help you get started with your project.
                </p>
                <button
                  onClick={handleStartChat}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors font-medium"
                >
                  Start Live Chat
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Typically replies in a few minutes
                </p>
              </div>
            ) : (
              <div className="flex flex-col h-80">
                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="p-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChatPopup;