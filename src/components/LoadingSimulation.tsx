import React, { useEffect, useState } from 'react';
interface LoadingSimulationProps {
  username: string;
}
export function LoadingSimulation({
  username
}: LoadingSimulationProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    text: 'Conectando aos servidores do Instagram...',
    delay: 3000
  }, {
    text: 'Procurando usuário @' + username + '...',
    delay: 2000
  }, {
    text: 'Usuário encontrado! Iniciando processo de acesso...',
    delay: 2000
  }, {
    text: 'Desabilitando proteções de segurança...',
    delay: 2500
  }, {
    text: 'Bypassando autenticação de dois fatores...',
    delay: 2000
  }, {
    text: 'Decodificando tokens de acesso...',
    delay: 2500
  }, {
    text: 'Estabelecendo conexão segura com o perfil...',
    delay: 2000
  }, {
    text: 'Extraindo informações da conta...',
    delay: 2000
  }, {
    text: 'Finalizando processo de acesso...',
    delay: 3000
  }];
  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 150);
    // Steps animation
    let timeout: NodeJS.Timeout;
    const showNextStep = (index: number) => {
      if (index < steps.length) {
        setCurrentStep(index);
        timeout = setTimeout(() => {
          showNextStep(index + 1);
        }, steps[index].delay);
      }
    };
    showNextStep(0);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return <div className="w-full max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">
        Acessando a conta de <span className="text-green-400">@{username}</span>
      </h3>
      <div className="w-full bg-gray-800 rounded-full h-4 mb-6">
        <div className="h-full rounded-full transition-all duration-300 ease-out" style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #8a2387, #e94057, #f27121)'
      }} />
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-md p-4 font-mono text-sm h-64 overflow-y-auto">
        {steps.slice(0, currentStep + 1).map((step, index) => <div key={index} className="mb-2">
            <span className="text-green-400">
              [{new Date().toLocaleTimeString()}]
            </span>
            <span className="text-gray-300"> {step.text}</span>
            {index === currentStep && <span className="inline-block ml-1 animate-pulse">_</span>}
          </div>)}
      </div>
    </div>;
}