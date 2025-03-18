import React, { useState, useRef } from 'react';
import { PlayIcon } from 'lucide-react';
export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <div className="w-full my-8 space-y-8">
      <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
        <video ref={videoRef} className="w-full rounded-lg" preload="metadata" onClick={handlePlayClick}>
          <source src="https://www.spygram.com.br/_assets/videos/video.mp4#t=0.1" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {!isPlaying && <button onClick={handlePlayClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-16 h-16 bg-white/10 rounded-full flex items-center justify-center
                     backdrop-blur-sm border border-white/20 transition-all
                     hover:bg-white/20">
            <PlayIcon className="w-8 h-8 text-white" />
          </button>}
      </div>
      <div className="flex justify-center">
        <a href="https://checkout.perfectpay.com.br/pay/PPU38CPJI68?" target="_blank" rel="noopener noreferrer" className="group relative">
          <button className="relative bg-gradient-to-r from-[#7AFB9C] to-[#D8FFE2] text-black font-bold text-xl py-4 px-8 rounded-lg 
            transform hover:scale-105 transition-all duration-300 
            hover:shadow-[0_0_30px_rgba(122,251,156,0.3)] 
            active:scale-95 overflow-hidden">
            <span className="relative z-10">SIM, QUERO MEU ACESSO!</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7AFB9C] to-[#D8FFE2] rounded-lg blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
        </a>
      </div>
    </div>;
}