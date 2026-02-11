import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16 reveal">
           <div className="flex items-center gap-2 mb-2">
             <span className="text-5xl font-medium text-slate-900">4.8</span>
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
             </div>
           </div>
           <p className="text-slate-500 text-sm uppercase tracking-wide font-medium">Média de avaliações no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mariana Souza",
              role: "Arquiteta",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
              text: "A melhor decisão que tomei foi trocar de contador. A plataforma é intuitiva e o atendimento é muito rápido."
            },
            {
              name: "Pedro Alencar",
              role: "Dev Freelancer",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
              text: "Abri minha empresa de graça e em tempo recorde. Recomendo para todos os meus colegas da área de TI."
            },
            {
              name: "Juliana Costa",
              role: "E-commerce",
              image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
              text: "O plano multibenefícios é perfeito. Consigo emitir notas e controlar tudo pelo celular sem burocracia."
            }
          ].map((review, idx) => (
            <div key={idx} className="reveal-scale bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="flex text-yellow-400 mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-8 italic text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                 <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                 />
                 <div>
                    <p className="font-medium text-slate-900 text-base">{review.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{review.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};