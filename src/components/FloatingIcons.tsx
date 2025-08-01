// import React from 'react';
// import { Phone, MessageCircle } from 'lucide-react';

// const FloatingIcons = () => {
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "919505690191"; // No '+' or spaces
//     const message = "Hi! I'm interested in your web development services.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   const handleCallClick = () => {
//     window.location.href = 'tel:+919505690191'; // No spaces
//   };

//   return (
//     <>
//       {/* WhatsApp Icon - Bottom Left */}
//       <div className="fixed bottom-6 left-6 z-50">
//         <button
//           onClick={handleWhatsAppClick}
//           className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
//           aria-label="Contact us on WhatsApp"
//         >
//           <MessageCircle className="h-6 w-6" />
//           <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             Chat on WhatsApp
//           </div>
//         </button>
        
//       </div>

//       {/* Call Icon - Bottom Right */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={handleCallClick}
//           className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
//           aria-label="Call us"
//         >
//           <Phone className="h-6 w-6" />
//           <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             Call Now
//           </div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default FloatingIcons;


import React from 'react';
import { Phone } from 'lucide-react';

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.157 5.3 5.488 0 12.02 0c3.2 0 6.2 1.24 8.477 3.514A11.86 11.86 0 0 1 24 12.029c-.003 6.627-5.407 11.998-12.03 11.998a11.9 11.9 0 0 1-5.93-1.574L.057 24zM6.597 20.013c1.676.995 3.276 1.591 5.424 1.591 5.448 0 9.887-4.434 9.889-9.885a9.824 9.824 0 0 0-2.935-7.026A9.84 9.84 0 0 0 12.02 2.15c-5.448 0-9.86 4.43-9.86 9.878 0 2.225.651 3.891 1.746 5.513l-.999 3.648 3.69-.998zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.668.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.668-1.611-.916-2.206-.242-.579-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const FloatingIcons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919505690191";
    const message = "Hi! I'm interested in your web development services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919505690191';
  };

  return (
    <>
      {/* WhatsApp Icon - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsappIcon />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </div>
        </button>
      </div>

      {/* Call Icon - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleCallClick}
          className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Now
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingIcons;
