import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { StoryCarousel } from './StoryCarousel';
interface CloseFriendsProps {
  username: string;
}
export function CloseFriends({
  username
}: CloseFriendsProps) {
  const storyImages = ["/2.png", "/3.png", "/4.png", "/5.png"];
  const handleViewPeople = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#7AFB9C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7AFB9C]/10">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-4">
            <img src="/CFFNIR.png" alt="Close Friends" className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Close Friends</h3>
          <p className="text-gray-300 text-center mb-6">
            <span className="font-semibold">@f********</span> e outras 4 pessoas
            <br />
            adicionou esse perfil nos melhores amigos
          </p>
          <div className="w-full max-w-[280px] mb-6">
            <StoryCarousel images={storyImages} />
          </div>
          <button onClick={handleViewPeople} className="flex items-center gap-2 text-[#7AFB9C] font-medium hover:opacity-80 transition-opacity mb-4">
            Ver Pessoas
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <p className="text-gray-400 text-sm mb-8">
            ...e outras 2 pessoas que não seguem {username}
          </p>
          <p className="text-[#7AFB9C] font-medium text-lg mb-4 text-center">
            Tenha acesso a tudo isso sem censuras no relatório completo
          </p>
          <a href="https://checkout.perfectpay.com.br/pay/PPU38CPJI68?" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-[#7AFB9C] text-black font-bold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7AFB9C]/20 flex items-center justify-center gap-2">
              Ver relatório completo
            </button>
          </a>
        </div>
      </div>
    </div>;
}