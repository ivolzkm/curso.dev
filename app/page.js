import { useState, useEffect } from 'react';

export default function ConstructionPage() {
  const [dots, setDots] = useState('');
  const [currentTool, setCurrentTool] = useState(0);

  const tools = ['🔨', '🔧', '⚙️', '🛠️', '📚', '💡'];

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    const toolInterval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 800);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(toolInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Ícone animado */}
        <div className="text-center mb-8">
          <div className="inline-block animate-bounce text-8xl mb-4">
            {tools[currentTool]}
          </div>
        </div>

        {/* Card principal */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Página em Construção{dots}
          </h1>

          {/* Barra de progresso animada */}
          <div className="w-full bg-white/20 rounded-full h-3 mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{ width: '47%' }}
            ></div>
          </div>

          {/* Mensagem principal */}
          <div className="space-y-4 text-center">
            <p className="text-xl md:text-2xl text-purple-200 leading-relaxed">
              O dono desta página ainda não sabe o que fazer com isso
            </p>

            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              e está aprimorando seus conhecimentos.
            </p>

            <div className="pt-6 pb-4">
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                Seja bem-vindo a este lugar! 🎉
              </div>
            </div>

            <p className="text-md text-slate-300 italic">
              Ainda não tem nada aqui... mas em breve terá algo incrível!
            </p>
          </div>

          {/* Elementos decorativos */}
          <div className="mt-8 flex justify-center gap-4 text-4xl">
            <span className="animate-pulse">✨</span>
            <span className="animate-bounce delay-100">🚀</span>
            <span className="animate-pulse delay-200">💻</span>
            <span className="animate-bounce delay-300">🎨</span>
            <span className="animate-pulse delay-400">✨</span>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-6">
          <p className="text-sm text-purple-300">
            Enquanto isso, aproveite para tomar um café ☕
          </p>
        </div>
      </div>
    </div>
  );
}
