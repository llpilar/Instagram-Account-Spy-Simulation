import React from 'react';
import { LockIcon } from 'lucide-react';
interface ActivityGridProps {
  username: string;
}
export function ActivityGrid({
  username
}: ActivityGridProps) {
  const activities = [{
    username: 'y********',
    action: 'Apagou as mensagens da DM',
    image: "/8.png"
  }, {
    username: 't********',
    action: 'Colocou nos melhores amigos',
    image: "/foto_perfil_%281%29.png"
  }, {
    username: 'r********',
    action: 'Bloqueou e denunciou esse perfil',
    image: "/10.png"
  }, {
    username: 't*********',
    action: `Passou +52m em chamada de video com @${username}`,
    image: "/11.png"
  }];
  return <div className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Principais atividades{' '}
        <span className="block text-gray-400">detectadas essa semana</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity, index) => <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#7AFB9C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7AFB9C]/10">
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 mb-4">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img src={activity.image} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <LockIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-lg font-bold mb-2">@{activity.username}</p>
              <p className="text-center text-gray-300">{activity.action}</p>
            </div>
          </div>)}
      </div>
    </div>;
}