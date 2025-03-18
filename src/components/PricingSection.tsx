import React from 'react';
import { CheckIcon, ShieldCheck, Award, Lock } from 'lucide-react';
export function PricingSection() {
  const features = ['Conta VIP (Upgrade Já Aplicado)', 'App Anônimo (100% Indetectável)', 'Acesso Vitalício (Use Para Sempre)', 'Aplicativo Online (Só Acessar e Usar)', 'Suporte 24hrs e 7 Dias Por Semana'];
  return <section id="pricing-section" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <p className="text-xl md:text-2xl text-gray-400">
            DE <span className="line-through">R$ 27,90</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            POR <span className="text-[#7AFB9C] animate-pulse">R$ 12,90</span>
          </h2>
        </div>
        <div className="card p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <ul className="space-y-6 mb-8">
            {features.map((feature, index) => <li key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-[#7AFB9C]/10 flex items-center justify-center group-hover:bg-[#7AFB9C]/20 transition-all duration-300">
                  <CheckIcon className="w-4 h-4 text-[#7AFB9C]" />
                </div>
                <span className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </li>)}
          </ul>
          <div className="mb-8 space-y-3">
            <p className="text-[#7AFB9C] font-medium">
              Últimos acessos promocionais
            </p>
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#7AFB9C]/80 via-[#7AFB9C] to-[#7AFB9C]/80 rounded-full animate-shimmer" style={{
              width: '93%',
              backgroundSize: '200% 100%'
            }} />
            </div>
            <p className="text-right text-[#7AFB9C] font-medium">93%</p>
          </div>
          <a href="https://checkout.perfectpay.com.br/pay/PPU38CPJI68?" target="_blank" rel="noopener noreferrer" className="block">
            <button className="btn w-full bg-[#7AFB9C] text-black font-bold text-xl py-5 mb-8 shadow-glow">
              COMPRAR COM 70% DE DESCONTO!
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[{
          icon: ShieldCheck,
          text: 'Compra Segura'
        }, {
          icon: Award,
          text: 'Satisfação Garantida'
        }, {
          icon: Lock,
          text: 'Privacidade Protegida'
        }].map((badge, index) => <div key={index} className="card p-6 hover-lift text-center">
              <badge.icon className="w-8 h-8 text-[#7AFB9C] mx-auto mb-3" />
              <p className="font-medium">{badge.text}</p>
            </div>)}
        </div>
        <p className="text-sm text-gray-400 text-center leading-relaxed mt-2">
          Atenção: Ao utilizar nossa plataforma, você declara estar ciente que é
          de sua inteira responsabilidade o que será feito com as informações
          encontradas!
        </p>
      </div>
    </section>;
}