import React from 'react';
export function StepGuide() {
  const steps = [{
    number: '01',
    title: 'Realizar o login',
    description: 'Realize o login utilizando as informações que foram enviadas para o seu endereço de e-mail',
    image: 'https://www.spygram.com.br/_assets/images/passo1.png'
  }, {
    number: '02',
    title: 'Digite o nome do perfil',
    description: 'Digite o nome do perfil que você deseja acessar e então clique no botão',
    image: 'https://www.spygram.com.br/_assets/images/passo2.png'
  }, {
    number: '03',
    title: 'Aguarde o processo',
    description: 'Aguarde enquanto a invasão da conta selecionada é concluída',
    image: 'https://www.spygram.com.br/_assets/images/passo3.png'
  }, {
    number: '04',
    title: 'Acesse a conta',
    description: 'Você será automaticamente redirecionado para uma nova página, com acesso total à conta do Instagram',
    image: 'https://www.spygram.com.br/_assets/images/passo4.png'
  }];
  return <div className="w-full py-12 md:py-16 bg-[#151515]">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Acesse a conta que quiser,{' '}
          <span className="bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text">
            seguindo nosso passo a passo
          </span>
        </h3>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          APÓS RECEBER SEU LOGIN, BASTA SEGUIR EXATAMENTE O PASSO A PASSO
          ABAIXO:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => <div key={index} className="bg-[#1C1C1C] rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7AFB9C]/10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[#7AFB9C]">
                  {step.number}
                </span>
                <h4 className="text-2xl font-bold">{step.title}</h4>
              </div>
              <p className="text-gray-400 mb-6 min-h-[48px]">
                {step.description}
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={step.image} alt={`Passo ${step.number}`} className="w-full h-[200px] object-cover transform hover:scale-105 transition-all duration-500" />
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}