import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16">
           <div className="flex items-center gap-2 mb-2">
             <span className="text-4xl font-medium text-slate-900">4.8</span>
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
             </div>
           </div>
           <p className="text-slate-500 text-sm uppercase tracking-wide font-medium">Média de avaliações no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mariana Souza",
              role: "Arquiteta",
              text: "A melhor decisão que tomei foi trocar de contador. A plataforma é intuitiva e o atendimento é muito rápido."
            },
            {
              name: "Pedro Alencar",
              role: "Dev Freelancer",
              text: "Abri minha empresa de graça e em tempo recorde. Recomendo para todos os meus colegas da área de TI."
            },
            {
              name: "Juliana Costa",
              role: "E-commerce",
              text: "O plano multibenefícios é perfeito. Consigo emitir notas e controlar tudo pelo celular sem burocracia."
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-medium">
                    {review.name.charAt(0)}
                 </div>
                 <div>
                    <p className="font-medium text-slate-900 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};