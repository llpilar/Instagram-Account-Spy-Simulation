import React from 'react';
import { UnlockIcon, Trash2Icon, FlagIcon } from 'lucide-react';
export function BenefitsGrid() {
  const benefits = [{
    icon: UnlockIcon,
    text: 'ACESSO TOTAL A TODAS AS FUNÇÕES DO INSTAGRAM'
  }, {
    icon: Trash2Icon,
    text: 'VER TODAS AS MENSAGENS APAGADAS DE ATÉ 1 ANO ATRÁS!'
  }, {
    icon: FlagIcon,
    text: 'RECUPERAR PERFIL HACKEADO OU COM SENHA INVÁLIDA!'
  }];
  return <div className="w-full py-12 md:py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Com o <span className="text-green-400">SpyGram</span> você pode:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => <div key={index} className="card hover-lift p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#7AFB9C] flex items-center justify-center mb-6">
              <benefit.icon className="w-12 h-12 text-[#7AFB9C]" strokeWidth={1.5} />
            </div>
            <p className="text-lg font-bold tracking-wide leading-tight">
              {benefit.text}
            </p>
          </div>)}
      </div>
      <p className="text-center mt-8 text-xl">
        Nós não nos <span className="text-[#7AFB9C]">responsabilizamos</span>{' '}
        por nenhuma ação realizada dentro da conta acessada.
      </p>
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#7AFB9C] mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-center text-black py-6 whitespace-nowrap">
            O que você ainda está esperando?
          </h3>
        </div>
      </div>
    </div>;
}