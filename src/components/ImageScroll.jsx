import React, { useEffect, useState, useRef, useCallback } from 'react';

const ImageScroll = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
  }, [images.length]);

  useEffect(() => {
    if (images.length === 0) return;
    if (!paused) startInterval();
    else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [paused, startInterval, images.length]);

  if (images.length === 0) return null;

  const goTo = (index) => {
    setCurrentIndex((index + images.length) % images.length);
    if (!paused) startInterval();
  };

  const handleArrow = (e, direction) => {
    e.stopPropagation();
    goTo(currentIndex + direction);
  };

  return (
    <div className="w-full overflow-hidden bg-black dark:bg-black py-4 sm:py-8 md:py-12">
      <div className="relative w-full">

        {/* Image Container */}
        <div
          className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] overflow-hidden shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={(e) => handleArrow(e, -1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => handleArrow(e, 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#05B1DE]'
                  : 'w-2 bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ImageScroll;