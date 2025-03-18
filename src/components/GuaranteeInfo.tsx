import React from 'react';
export function GuaranteeInfo() {
  return <div className="w-full py-12 md:py-16 bg-[#151515]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img src="https://www.spygram.com.br/_assets/images/garantia.png" alt="Garantia de 7 dias" className="w-[400px] max-w-full mb-6 animate-float" />
        </div>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            O risco está nas minhas{' '}
            <span className="text-[#7AFB9C] animate-pulse">mãos!</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-200">
            <p>
              Você adquire o acesso completo ao sistema SpyGram pela condição
              especial de{' '}
              <span className="text-[#7AFB9C] font-bold">R$ 27,90</span> e tem 7
              dias de garantia integral.
            </p>
            <p>
              Se por algum motivo você achar que este conteúdo não é para você
              ou que não vale o investimento, basta enviar uma mensagem ao nosso
              suporte e seu dinheiro será devolvido.
            </p>
          </div>
          <p className="text-2xl font-bold mt-12">Agora a decisão é sua!</p>
          <a href="https://checkout.perfectpay.com.br/pay/PPU38CPJI68?" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="w-full sm:w-auto bg-[#7AFB9C] text-black font-bold text-xl py-6 px-12 rounded-lg hover:bg-[#6AEA8B] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#7AFB9C]/20">
              SIM, QUERO MEU ACESSO!
            </button>
          </a>
        </div>
      </div>
    </div>;
}