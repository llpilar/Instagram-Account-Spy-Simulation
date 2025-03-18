import React, { useEffect, useState, useRef } from 'react';
interface SpyFormProps {
  onSubmit: (username: string) => void;
}
export function SpyForm({
  onSubmit
}: SpyFormProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const steps = [{
    text: 'Inicializando sistema de acesso...',
    delay: 200
  }, {
    text: 'Conectando aos servidores do Instagram...',
    delay: 200
  }, {
    text: 'Estabelecendo conexão segura...',
    delay: 200
  }, {
    text: 'Procurando usuário no banco de dados...',
    delay: 200
  }, {
    text: 'Usuário encontrado! Iniciando processo de acesso...',
    delay: 200
  }, {
    text: 'Desabilitando proteções de segurança...',
    delay: 200
  }, {
    text: 'Bypassando autenticação de dois fatores...',
    delay: 200
  }, {
    text: 'Decodificando tokens de acesso...',
    delay: 200
  }, {
    text: 'Interceptando cookies de sessão...',
    delay: 200
  }, {
    text: 'Estabelecendo conexão segura com o perfil...',
    delay: 200
  }, {
    text: 'Coletando dados de mensagens privadas...',
    delay: 200
  }, {
    text: 'Extraindo informações da conta...',
    delay: 200
  }, {
    text: 'Desbloqueando acesso total...',
    delay: 200
  }, {
    text: 'Ocultando rastros de acesso...',
    delay: 200
  }, {
    text: 'Finalizando processo de invasão...',
    delay: 200
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoading(true);
      startAnimations();
    }
  };
  const startCountdown = () => {
    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 0) {
          clearInterval(interval);
          onSubmit(username.trim());
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const startAnimations = () => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 60);
    let currentIndex = 0;
    const showNextStep = () => {
      if (currentIndex < steps.length) {
        setCurrentStep(currentIndex);
        if (consoleRef.current) {
          consoleRef.current.scrollTo({
            top: consoleRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
        setTimeout(() => {
          currentIndex++;
          if (currentIndex === steps.length) {
            startCountdown();
          } else {
            showNextStep();
          }
        }, steps[currentIndex].delay);
      }
    };
    showNextStep();
  };
  return <div className="w-full max-w-xl mx-auto px-4">
      {!isLoading ? <>
          <p className="text-center mb-4 md:mb-6">
            Insira o nome de usuário do perfil que você deseja invadir na caixa
            abaixo. Nós cuidaremos do resto!
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 md:gap-4">
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite o nome de usuário sem @" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white" />
            <button type="submit" className="w-full py-3 rounded-md font-bold text-white" style={{
          background: 'linear-gradient(90deg, #8a2387, #e94057, #f27121)'
        }}>
              INVADIR CONTA
            </button>
          </form>
          <div className="flex flex-col items-center mt-4">
            <a href="#" className="text-green-400 text-sm">
              Já tem uma conta?
            </a>
            <p className="my-3 md:my-4 text-gray-400">Ou</p>
            <button className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-md font-bold text-white">
              IR PARA O SPYZAP
            </button>
          </div>
        </> : <div className="w-full">
          <h3 className="text-xl font-bold mb-4 text-center">
            Acessando a conta de{' '}
            <span className="text-green-400">@{username}</span>
          </h3>
          <div className="w-full bg-gray-800 rounded-full h-4 mb-6">
            <div className="h-full rounded-full transition-all duration-300 ease-out bg-[#7AFB9C]" style={{
          width: `${progress}%`
        }} />
          </div>
          <div ref={consoleRef} className="bg-gray-900 border border-gray-800 rounded-md p-4 font-mono text-sm h-64 overflow-y-auto scroll-smooth">
            {steps.slice(0, currentStep + 1).map((step, index) => <div key={index} className="mb-2">
                <span className="text-green-400">
                  [{new Date().toLocaleTimeString()}]
                </span>
                <span className="text-gray-300"> {step.text}</span>
                {index === currentStep && <span className="inline-block ml-1 animate-pulse">_</span>}
              </div>)}
            {countdown !== null && <div className="text-xs text-gray-500 mt-4">
                redirect in {countdown}...
              </div>}
          </div>
        </div>}
    </div>;
}