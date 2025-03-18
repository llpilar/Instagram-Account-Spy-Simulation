import React, { useEffect, useState, useRef } from 'react';
export function ChatSimulation() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(430);
  const chatRef = useRef<HTMLDivElement>(null);
  const defaultMessages = ['User#138: Alguem de Sp aqui?', 'User#543: acabou de chegar meu acesso, mas demorou uns minutos, achei q era mais rápido', 'User#570: Seriooo? desculpa mas eu ri kkkkkkkkk', 'User#192: eu testei, parece que não tem problemas', 'User#926: não consigo mais parar de ficar vendo os babados, mortaaa kkkkkkkk', 'User#940: tbm so uso mais de madrudaga', 'User#389: precisa ter o celular da pessoa pra cessar?', 'User#913: oi oi oi, pessoal', 'User#280: pessoal tbm funciona pra recuperar perfitl de insta hackeado?', 'User#571: pq alguem que comprou vai te emprestar de graça?', 'User#402: é facil de usar? precisa baixar algo?', 'User#873: siiiim kkkkkkk', 'User#854: siiim, funciona, so não da pra acessar perfil de famoso, não sei se eles vão liberar depois', 'User#631: geeenteee me responde funcionar ou nao?', 'User#160: foda isso, descobri que minha ex ta saindo com meu melhor amigo, naõ sei nem oq fazer'];
  useEffect(() => {
    let messagesIndex = 0;
    const messagesInterval = setInterval(() => {
      if (messagesIndex < defaultMessages.length) {
        setMessages(prev => [...prev, defaultMessages[messagesIndex]]);
        messagesIndex++;
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      } else {
        messagesIndex = 0;
      }
    }, 2000);
    const usersInterval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 19) - 9;
        const newCount = prev + change;
        if (newCount < 379) return 379;
        if (newCount > 455) return 455;
        return newCount;
      });
    }, 2000);
    return () => {
      clearInterval(messagesInterval);
      clearInterval(usersInterval);
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, `Você: ${inputMessage}`]);
      setInputMessage('');
      setTimeout(() => {
        const randomResponse = defaultMessages[Math.floor(Math.random() * defaultMessages.length)];
        setMessages(prev => [...prev, randomResponse]);
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 1000);
    }
  };
  return <div className="w-full bg-[#151515] py-8">
      <div className="container-fluid">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Acesse o nosso{' '}
          <span className="bg-gradient-to-r from-[#D8FFE2] to-[#7AFB9C] text-transparent bg-clip-text">
            CHAT ANÔNIMO
          </span>
        </h2>
        <div className="card w-full max-w-[940px] mx-auto min-h-[450px] p-4 flex flex-col">
          <div ref={chatRef} className="flex-1 max-h-[390px] overflow-y-auto mb-4 space-y-1">
            {messages.map((msg, index) => <p key={index} className={`text-base leading-relaxed ${index % 2 === 0 ? 'text-[#B4FEC6]' : 'text-[#EFFEF1]'}`}>
                {msg}
              </p>)}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} placeholder="Digite sua mensagem" className="input-enhanced" />
            <button type="submit" className="btn bg-[#7AFB9C] text-black font-bold px-6 py-3 text-lg uppercase">
              Enviar
            </button>
          </form>
        </div>
        <div className="max-w-[940px] mx-auto mt-6 flex items-center gap-2 justify-center">
          <div className="w-2 h-2 bg-[#7AFB9C] rounded-full animate-pulse" />
          <p className="text-lg font-medium">{onlineUsers} Usuários Online</p>
        </div>
      </div>
    </div>;
}