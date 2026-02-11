import React from 'react';

export const Institutional: React.FC = () => {
  return (
    <section className="py-20 bg-brand-950 text-white relative">
      {/* 1. Glow Scan Line - Tech Effect */}
      <div className="divider-glow"></div>

      {/* 2. Sheet Overlap - Internal Shadow for Depth */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">Contabilidade séria com tecnologia de ponta</h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              A MeiBiz nasceu para democratizar o acesso a serviços contábeis de alta qualidade. Unimos a experiência de contadores seniores com a eficiência da tecnologia para entregar mais valor por um preço justo.
            </p>
            <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
             <div className="bg-brand-900/50 p-6 rounded-2xl border border-brand-800 backdrop-blur-sm">
                <p className="text-4xl font-medium text-white mb-2">100+</p>
                <p className="text-brand-300 text-sm uppercase tracking-wider font-medium">Especialistas</p>
             </div>
             <div className="bg-brand-900/50 p-6 rounded-2xl border border-brand-800 backdrop-blur-sm">
                <p className="text-4xl font-medium text-white mb-2">50k+</p>
                <p className="text-brand-300 text-sm uppercase tracking-wider font-medium">Clientes</p>
             </div>
             <div className="bg-brand-900/50 p-6 rounded-2xl border border-brand-800 backdrop-blur-sm">
                <p className="text-4xl font-medium text-white mb-2">1.200</p>
                <p className="text-brand-300 text-sm uppercase tracking-wider font-medium">Cidades</p>
             </div>
             <div className="bg-brand-900/50 p-6 rounded-2xl border border-brand-800 backdrop-blur-sm">
                <p className="text-4xl font-medium text-white mb-2">98%</p>
                <p className="text-brand-300 text-sm uppercase tracking-wider font-medium">Satisfação</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};