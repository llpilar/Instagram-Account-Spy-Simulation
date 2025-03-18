import React from 'react';
import { ShieldCheckIcon } from 'lucide-react';
export function GuaranteeSection() {
  return <div className="w-full my-12 text-center">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
        <div className="flex justify-center mb-4">
          <ShieldCheckIcon className="w-16 h-16 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Garantia de Funcionamento</h3>
        <p className="text-gray-400">
          Se por algum motivo o acesso não funcionar, devolvemos 100% do seu
          dinheiro. Sem perguntas, sem complicação.
        </p>
      </div>
    </div>;
}