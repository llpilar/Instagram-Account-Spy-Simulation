import React from 'react';
import { ActivityGrid } from './ActivityGrid';
import { CloseFriends } from './CloseFriends';
import { AlertCircleIcon } from 'lucide-react';
import { StoryCarousel } from './StoryCarousel';
interface ProfileStatsProps {
  username: string;
}
export function ProfileStats({
  username
}: ProfileStatsProps) {
  const printImages = ["/print_1_%281%29.png", "/Print_2_%281%29.png"];
  return <>
      <div className="w-full max-w-md mx-auto bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-[#7AFB9C]/30 transition-all duration-300">
        <p className="text-center text-2xl mb-6 font-bold bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text">
          @{username}
        </p>
        <div className="text-center space-y-4">
          <div className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
            <p className="mb-0 flex items-center justify-center gap-2">
              <span className="text-green-400 font-bold text-2xl animate-pulse">
                14
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Conversas Frequentes
              </span>
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
            <p className="mb-0 flex items-center justify-center gap-2">
              <span className="text-green-400 font-bold text-2xl animate-pulse">
                66
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Mensagens Suspeitas
              </span>
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
            <p className="mb-0 flex items-center justify-center gap-2">
              <span className="text-green-400 font-bold text-xl blur-[4px] select-none pointer-events-none group-hover:blur-[6px] transition-all">
                @buypro
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Perfil com maior interação
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto mt-6 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
        <div className="text-center mb-4">
          <p className="text-xl font-bold flex items-center justify-center gap-2">
            🏆 1 Super Stalker, encontrado!
          </p>
          <p className="text-gray-400">@{username} tem um fã no perfil</p>
        </div>
        <div className="bg-red-500/10 text-red-300 p-3 rounded-lg text-center mb-6">
          Isso não é só mais um stalker!
        </div>
        <div className="space-y-4">
          {[`Esse Super Stalker visitou o perfil de ${username} por 11 dias consecutivos`, `${username} realizou 3 chamadas de vídeo e apagou a conversa com esse Stalker`, 'Algumas conversas possuem um teor sexual acima do que podemos mostrar aqui', `${username} adicionou somente esse Stalker nos melhores amigos`, 'A interação desse Stalker supera em 11 vezes a interação do segundo colocado'].map((text, index) => <div key={index} className="flex items-start gap-3">
              <AlertCircleIcon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-gray-300 text-left text-sm">{text}</p>
            </div>)}
        </div>
      </div>
      <div className="w-full max-w-md mx-auto mt-6 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-[#7AFB9C]/30 transition-all duration-300">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">
            <span className="text-[#7AFB9C]">Prints</span>{' '}
            <span className="text-white">recuperados</span>
          </h3>
          <p className="text-gray-400 mt-4">
            Nossa inteligência artificial procurou por{' '}
            <span className="text-white">todo o Instagram</span> atrás de
            conversas no Direct de {username}
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">
              2 Prints extraídos
              <br />
              <span className="text-gray-400">na DM de</span>{' '}
              <span className="text-[#7AFB9C]">@{username}</span>
            </p>
            <p className="text-gray-400">
              Detectamos várias mensagens com
              <br />
              cunho sexual e nudez explícita
            </p>
          </div>
          <div className="mt-8 w-full max-w-[450px] mx-auto">
            <StoryCarousel images={printImages} />
          </div>
          <p className="text-center text-gray-400 text-sm mt-4 italic">
            ... e mais 4 prints semelhantes
          </p>
          <div className="mt-6 text-center">
            <a href="https://checkout.perfectpay.com.br/pay/PPU38CPJI68?" target="_blank" rel="noopener noreferrer" className="group inline-block">
              <button className="bg-[#7AFB9C] text-black font-bold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7AFB9C]/20 flex items-center justify-center gap-2">
                🔒 DESBLOQUEAR PRINTS
              </button>
            </a>
          </div>
        </div>
      </div>
      <ActivityGrid username={username} />
      <CloseFriends username={username} />
    </>;
}