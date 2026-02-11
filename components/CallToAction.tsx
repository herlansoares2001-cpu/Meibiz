import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 bg-brand-950 overflow-hidden border-t border-brand-900/50">
      
      {/* Background Texture (Matching Hero and Institutional) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
      
      {/* Subtle Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
          A hora de investir no<br className="hidden md:block"/> sucesso da sua empresa é agora.
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Junte-se a milhares de empreendedores que escolheram a tecnologia da MeiBiz para simplificar a gestão e crescer com segurança.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Primary Action - Accent Color (Correção do botão branco) */}
          <Button 
            variant="primary"
            size="lg" 
            className="px-12 py-5 h-16 text-lg font-medium rounded-full min-w-[240px] shadow-[0_20px_50px_-12px_rgba(14,165,233,0.5)] hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.7)] transition-all duration-300"
          >
            Abra sua empresa
          </Button>
          
          {/* Secondary Action - Glassmorphism Outline */}
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 px-12 py-5 h-16 text-lg font-medium rounded-full min-w-[240px] backdrop-blur-md transition-all duration-300"
          >
            Fale com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};