// import React from 'react';

// const CompanyScroll = () => {
//   const companies = [
//     "Sapthagiri Traders",
//     "Digital Innovations Ltd",
//     "StartupHub India",
//     "E-commerce Masters",
//     "Creative Agency Pro",
//     "Business Growth Co",
//     "Modern Enterprises",
//     "Future Tech Labs",
//     "Smart Solutions Inc",
//     "Global Ventures Pvt",
//     "NextGen Technologies",
//     "Innovation Partners"
//   ];

//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 py-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//           Trusted by Growing Businesses
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300">
//           Join hundreds of satisfied clients who chose WebElevate Solutions
//         </p>
//       </div>
      
//       <div className="relative">
//         <div className="flex animate-scroll">
//           {/* First set of companies */}
//           {companies.map((company, index) => (
//             <div
//               key={`first-${index}`}
//               className="flex-shrink-0 mx-8 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
//             >
//               <span className="text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">
//                 {company}
//               </span>
//             </div>
//           ))}
//           {/* Duplicate set for seamless loop */}
//           {companies.map((company, index) => (
//             <div
//               key={`second-${index}`}
//               className="flex-shrink-0 mx-8 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
//             >
//               <span className="text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">
//                 {company}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyScroll;

// const CompanyScroll = () => {
//   const companies = [
//     {
//       name: "Sapthagiri Traders",
//       logo: "https://sapthagiritraders.com/wp-content/uploads/2024/09/logo-no-background-1-300x87.png"
//     },
//     {
//       name: "tincywincy",
//       logo: "https://tincywincy.in/images/Perty%20Logo.jpg"
//     },
//     {
//       name: "brconstructions",
//       logo: "https://brconstructions.co/images/logo.jpg"
//     },
//     {
//       name: "chandaevents",
//       logo: "https://chandaevents.in/assets/Events%20Logo-BbWyBEkr.jpg"
//     },
//     {
//       name: "arkags",
//       logo: "https://arkags.com/wp-content/uploads/2025/05/cropped-final-2.jpg"
//     },
//     {
//       name: "tejapoojanilayam",
//       logo: "https://tejapoojanilayam.com/wp-content/uploads/2025/04/Asset-5@4x-300x61.png"
//     }
//   ];

//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 py-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//           Trusted by Growing Businesses
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300">
//           Join hundreds of satisfied clients who chose WebElevate Solutions
//         </p>
//       </div>
      
//       <div className="relative">
//         <div className="flex animate-scroll gap-8">
//           {/* First set of logos */}
//           {companies.map((company, index) => (
//             <div
//               key={`first-${index}`}
//               className="flex-shrink-0 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
//             >
//               <img
//                 src={company.logo}
//                 alt={company.name}
//                 title={company.name}
//                 className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//           {/* Duplicate set for seamless loop */}
//           {companies.map((company, index) => (
//             <div
//               key={`second-${index}`}
//               className="flex-shrink-0 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
//             >
//               <img
//                 src={company.logo}
//                 alt={company.name}
//                 title={company.name}
//                 className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyScroll;

import React from 'react';

// Replace these URLs with actual logo URLs you want to display
  const companies = [
    {
      name: "Sapthagiri Traders",
      logo: "https://sapthagiritraders.com/wp-content/uploads/2024/09/logo-no-background-1-300x87.png"
    },
    {
      name: "tincywincy",
      logo: "https://tincywincy.in/images/Perty%20Logo.jpg"
    },
    {
      name: "brconstructions",
      logo: "https://brconstructions.co/images/logo.jpg"
    },
    {
      name: "chandaevents",
      logo: "https://chandaevents.in/assets/Events%20Logo-BbWyBEkr.jpg"
    },
    {
      name: "arkags",
      logo: "https://arkags.com/wp-content/uploads/2025/05/cropped-final-2.jpg"
    },
    {
      name: "tejapoojanilayam",
      logo: "https://tejapoojanilayam.com/wp-content/uploads/2025/04/Asset-5@4x-300x61.png"
    },
     {
      name: "hariharanursery",
      logo: "https://hariharanursery.com/harihara_png_logo.png"
    },
      {
      name: "purevegcaterers",
      logo: "https://purevegcaterers.co.in/wp-content/uploads/2025/04/latest_purev_logo.png"
    },
      {
      name: "fixwaterproofing",
      logo: "https://fixwaterproofing.co.in/wp-content/uploads/2025/04/logo-removebg-preview.png"
    },
      {
      name: "scrapbuyersonline",
      logo: "https://scrapbuyersonline.co.in/wp-content/uploads/2025/04/download-22.png"
    }
  ];

const CompanyScroll = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Trusted by Growing Businesses
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Join hundreds of satisfied clients who chose WebElevate Solutions
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll space-x-8">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white dark:bg-gray-700 px-6 py-4 rounded-lg shadow-md flex items-center justify-center"
              style={{ minWidth: '160px' }}
            >
              <img
                src={company.logo}
                alt={company.name}
                title={company.name}
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyScroll;
