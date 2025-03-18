import React from 'react';
export function FAQ() {
  const faqs = [{
    question: 'O processo é seguro?',
    answer: 'Sim, utilizamos tecnologia de ponta para garantir sua segurança e anonimato.'
  }, {
    question: 'Quanto tempo leva para ter acesso?',
    answer: 'O processo leva em média 15 minutos para ser concluído.'
  }, {
    question: 'A pessoa saberá que foi hackeada?',
    answer: 'Não, nosso sistema é completamente discreto e indetectável.'
  }];
  return <div className="w-full my-12">
      <h3 className="text-2xl font-bold text-center mb-8">
        Perguntas Frequentes
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h4 className="font-bold mb-2">{faq.question}</h4>
            <p className="text-gray-400">{faq.answer}</p>
          </div>)}
      </div>
    </div>;
}