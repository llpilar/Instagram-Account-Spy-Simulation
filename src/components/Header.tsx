import React from 'react';
export function Header() {
  return <div className="text-center mb-8 md:mb-12">
      <div className="flex items-center justify-center mb-4 md:mb-6 animate-float">
        <img src="https://www.spygram.com.br/_assets/images/logo.png" alt="SpyGram Logo" className="w-14 h-14 md:w-20 md:h-20 mr-3 md:mr-4 object-contain" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text">
          SPYGRAM
        </h1>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto leading-tight px-4">
        ACESSE O{' '}
        <span className="bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text">
          INSTAGRAM
        </span>{' '}
        DE QUALQUER PESSOA
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
        Descubra tudo o que precisa saber com nossa ferramenta avançada de
        acesso
      </p>
    </div>;
}