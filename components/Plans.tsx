import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';

export const Plans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'servicos' | 'comercio'>('servicos');

  const plansData = {
    servicos: [
      {
        name: "Plano Padrão",
        price: "109",
        desc: "Contabilidade essencial para quem está começando.",
        features: ["Abertura Grátis", "Contabilidade Completa", "Atendimento via Chat/Email"],
        highlight: false,
      },
      {
        name: "Plano Multibenefícios",
        price: "159",
        desc: "Melhor Custo-Benefício: Inclui emissor de notas e WhatsApp.",
        features: ["Tudo do Padrão", "Emissor NFS-e", "Atendimento WhatsApp", "Conta PJ Digital"],
        highlight: true,
        tag: "Mais Escolhido"
      },
      {
        name: "Experts Essencial",
        price: "249",
        desc: "Atendimento dedicado e gestão financeira integrada.",
        features: ["Tudo do Multi", "Assessor Dedicado", "Gestão Financeira (BPO)", "Consultoria Tributária"],
        highlight: false,
      }
    ],
    comercio: [
      {
        name: "Comércio Padrão",
        price: "189",
        desc: "Para pequenos comércios com movimentação simples.",
        features: ["Abertura Grátis", "Apuração de ICMS", "Atendimento via Chat"],
        highlight: false,
      },
      {
        name: "Comércio Multi",
        price: "249",
        desc: "Integração com marketplaces e controle de estoque básico.",
        features: ["Tudo do Padrão", "Integração Marketplaces", "Atendimento WhatsApp", "Controle de Estoque"],
        highlight: true,
        tag: "Recomendado"
      },
      {
        name: "Experts Comércio",
        price: "399",
        desc: "Gestão completa para varejo com alto volume de notas.",
        features: ["Tudo do Multi", "Assessor Dedicado", "Gestão Financeira", "Consultoria Fiscal"],
        highlight: false,
      }
    ]
  };

  const currentPlans = plansData[activeTab];

  return (
    <section id="planos" className="relative py-24 bg-offwhite">
      {/* Wave Divider to break the line from previous white section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-900 mb-6">Planos e Preços</h2>
          
          <div className="inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('servicos')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'servicos' ? 'bg-brand-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Empresas de Serviço
            </button>
            <button
              onClick={() => setActiveTab('comercio')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'comercio' ? 'bg-brand-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Empresas de Comércio
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div 
              key={plan.name}
              // Added reveal-scale for staggered zoom entry
              className={`reveal-scale relative rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-brand-950 text-white shadow-2xl scale-105 z-10 border border-brand-800' 
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wide flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" /> {plan.tag}
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-4">{plan.name}</h3>
              
              <div className="mb-6 flex items-baseline">
                <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>R$</span>
                <span className="text-5xl font-medium tracking-tight mx-1">{plan.price}</span>
                <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>
              </div>
              
              <p className={`text-sm leading-relaxed mb-8 ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                {plan.desc}
              </p>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                fullWidth
                className="mb-8"
              >
                Contratar
              </Button>

              <div className="space-y-3">
                  {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-accent-400' : 'text-brand-600'}`} />
                          <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                      </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};