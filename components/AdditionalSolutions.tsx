import React from 'react';
import { MapPin, HeartPulse } from 'lucide-react';

export const AdditionalSolutions: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-slate-900 text-center mb-12">Soluções Adicionais</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all flex items-start gap-6 group">
            <div className="bg-brand-50 p-4 rounded-2xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Escritório Virtual</h3>
              <p className="text-slate-600 text-sm mb-4">
                Não tem endereço comercial? Use o nosso endereço fiscal gratuitamente para abrir seu CNPJ em diversas cidades.
              </p>
              <a href="#" className="text-brand-600 font-medium text-sm hover:underline">Saiba mais</a>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all flex items-start gap-6 group">
            <div className="bg-pink-50 p-4 rounded-2xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <HeartPulse size={32} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Plano de Saúde</h3>
              <p className="text-slate-600 text-sm mb-4">
                Tabelas exclusivas para CNPJ com até 40% de desconto em relação aos planos de saúde pessoa física.
              </p>
              <a href="#" className="text-pink-600 font-medium text-sm hover:underline">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};