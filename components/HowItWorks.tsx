import React from 'react';
import { Button } from './Button';

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
      number: "1", 
      title: "Cadastro e Contratação", 
      desc: "Você cria sua conta no site e escolhe o plano ideal para o seu negócio." 
    },
    { 
      number: "2", 
      title: "Análise e Documentação", 
      desc: "Nossa equipe analisa seu modelo de negócio e solicita os documentos." 
    },
    { 
      number: "3", 
      title: "Taxas e Governo", 
      desc: "Orientamos você no pagamento das taxas da Junta Comercial e Prefeitura." 
    },
    { 
      number: "4", 
      title: "Empresa Aberta", 
      desc: "CNPJ liberado! Você já pode emitir notas fiscais e operar legalizado." 
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900 mb-4">Como funciona</h2>
          <p className="text-slate-500 text-lg">Simples, transparente e 100% digital.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 font-medium text-2xl flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    {step.number}
                </div>
                <h3 className="font-medium text-slate-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">{step.desc}</p>
            </div>
            ))}
        </div>

        <div className="text-center">
            <Button size="lg">Quero abrir minha empresa</Button>
        </div>
      </div>
    </section>
  );
};