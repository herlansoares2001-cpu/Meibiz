import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 bg-brand-600 overflow-hidden">
      
      {/* Top Wave Divider - White section curving into blue */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
         <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
         </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-12 leading-tight tracking-tight">
          A hora de investir no<br className="hidden md:block"/> sucesso da sua empresa é agora.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-100 hover:scale-105 transform transition-all duration-200 border-none shadow-2xl px-12 py-5 h-16 text-lg font-medium rounded-full min-w-[240px]">
            Abra sua empresa
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/10 hover:scale-105 transform transition-all duration-200 px-12 py-5 h-16 text-lg font-medium rounded-full min-w-[240px]">
            Fale com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};