import React from 'react';

// Import images using ES6 imports with Vite's import.meta.url
const image1 = new URL('../assets/Design Tech IT Solution -1.jpg', import.meta.url).href;
const image2 = new URL('../assets/Design Tech IT Solution -2.jpg', import.meta.url).href;

const ImageBanner = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Work Showcase
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image1} 
              alt="Design Tech IT Solution 1" 
              className="w-full h-auto max-h-[800px] object-contain"
            />
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image2} 
              alt="Design Tech IT Solution 2" 
              className="w-full h-auto max-h-[800px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
