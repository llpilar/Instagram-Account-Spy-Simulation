import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HeadTags } from './components/HeadTags';
import { Header } from './components/Header';
import { SpyForm } from './components/SpyForm';
import { LoadingSimulation } from './components/LoadingSimulation';
import { MatrixBackground } from './components/MatrixBackground';
import { ProfileStats } from './components/ProfileStats';
import { VideoSection } from './components/VideoSection';
import { StepGuide } from './components/StepGuide';
import { BenefitsGrid } from './components/BenefitsGrid';
import { PricingSection } from './components/PricingSection';
import { FAQ } from './components/FAQ';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ChatSimulation } from './components/ChatSimulation';
import { GuaranteeInfo } from './components/GuaranteeInfo';
export function App() {
  const [username, setUsername] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const handleSubmit = (user: string) => {
    setUsername(user);
    setTimeout(() => {
      setIsComplete(true);
    }, 3000);
  };
  return <HelmetProvider>
      <HeadTags />
      <div className="bg-black text-white min-h-screen w-full overflow-hidden">
        <MatrixBackground />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {!isComplete && <div className="py-6 md:py-12">
                <Header />
                <SpyForm onSubmit={handleSubmit} />
              </div>}
            {isComplete && <div className="space-y-8 md:space-y-16 py-6 md:py-12">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                    <span className="bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text animate-pulse">
                      Invasão de Conta realizada
                    </span>{' '}
                    confira os detalhes abaixo
                  </h2>
                </div>
                <ProfileStats username={username} />
                <VideoSection />
                <StepGuide />
                <BenefitsGrid />
                <ChatSimulation />
                <PricingSection />
                <GuaranteeInfo />
                <FAQ />
                <GuaranteeSection />
              </div>}
          </div>
        </div>
      </div>
    </HelmetProvider>;
}