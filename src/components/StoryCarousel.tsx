import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface StoryCarouselProps {
  images: string[];
}
export function StoryCarousel({
  images
}: StoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);
  const handlePrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    setProgress(0);
  };
  const handleNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    setProgress(0);
  };
  return <div className="relative">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 p-4">
          {images.map((_, index) => <div key={index} className="h-1 flex-1 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-white transition-all duration-100" style={{
            width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%'
          }} />
            </div>)}
        </div>
        <div className="w-full relative pt-8" style={{
        paddingBottom: '159.7058824%'
      }}>
          <img src={images[currentIndex]} alt={`Story ${currentIndex + 1}`} className="absolute inset-0 w-full h-full object-contain bg-black" />
        </div>
        <button onClick={handlePrevious} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>;
}