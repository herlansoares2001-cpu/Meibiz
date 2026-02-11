import React from 'react';
import { Check, Minus, MoveHorizontal } from 'lucide-react';

export const ComparativeTable: React.FC = () => {
  const features = [
    { name: "Abertura de Empresa Grátis", std: true, multi: true, exp: true },
    { name: "Contabilidade Completa (Impostos/Guias)", std: true, multi: true, exp: true },
    { name: "Atendimento via Chat/Email", std: true, multi: true, exp: true },
    { name: "Atendimento via WhatsApp", std: false, multi: true, exp: true },
    { name: "Emissor de Notas Fiscais (NFS-e)", std: false, multi: true, exp: true },
    { name: "Conta PJ Digital Integrada", std: true, multi: true, exp: true },
    { name: "Pró-labore e Folha de Sócios", std: true, multi: true, exp: true },
    { name: "Assessor Dedicado", std: false, multi: false, exp: true },
    { name: "Gestão Financeira (BPO)", std: false, multi: false, exp: true },
    { name: "Seguro de Vida Empresarial", std: false, multi: true, exp: true },
    { name: "Soluções Adicionais (Saúde/Clube)", std: false, multi: true, exp: true },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-slate-900 text-center mb-8">Compare os benefícios</h2>
        
        {/* Mobile Hint - Visible only on small screens */}
        <div className="lg:hidden flex items-center justify-center gap-2 text-slate-400 text-sm mb-4 animate-pulse">
           <MoveHorizontal size={16} />
           <span>Arraste para comparar</span>
        </div>

        {/* Table Container with relative positioning for the fade overlay */}
        <div className="relative">
            
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <div className="min-w-[800px] border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="py-6 px-6 text-left text-slate-500 font-medium w-1/3">Recursos inclusos</th>
                      <th className="py-6 px-4 text-center font-medium text-slate-800 w-1/5">Padrão</th>
                      <th className="py-6 px-4 text-center font-medium text-brand-600 w-1/5 bg-brand-50">Multibenefícios</th>
                      <th className="py-6 px-4 text-center font-medium text-slate-800 w-1/5">Experts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {features.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 text-slate-700 text-sm font-medium">{item.name}</td>
                        
                        <td className="py-4 px-4 text-center">
                          {item.std ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                        </td>
                        
                        <td className="py-4 px-4 text-center bg-brand-50/30">
                          {item.multi ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                        </td>
                        
                        <td className="py-4 px-4 text-center">
                          {item.exp ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Visual Fade Hint on the Right (Mobile Only) */}
            {/* This gradient overlay sits on top of the right edge to suggest more content */}
            <div className="absolute top-0 right-0 bottom-2 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden rounded-r-2xl"></div>
        </div>

      </div>
    </section>
  );
};