import React from 'react';
import { Button } from './Button';
import { UserPlus, FileSearch, Landmark, Rocket, ArrowRight, ChevronRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
      icon: <UserPlus className="w-8 h-8" />,
      title: "Cadastro e Contratação", 
      desc: "Crie sua conta em menos de 2 minutos e escolha o plano ideal para o perfil do seu negócio.",
      color: "bg-brand-500"
    },
    { 
      icon: <FileSearch className="w-8 h-8" />,
      title: "Análise e Documentação", 
      desc: "Nossa equipe analisa seus dados e solicita apenas os documentos essenciais. Tudo 100% digital.",
      color: "bg-indigo-500"
    },
    { 
      icon: <Landmark className="w-8 h-8" />,
      title: "Registro e Taxas", 
      desc: "Orientamos sobre o pagamento das taxas governamentais e cuidamos do registro na Junta e Prefeitura.",
      color: "bg-violet-500"
    },
    { 
      icon: <Rocket className="w-8 h-8" />,
      title: "Empresa Aberta", 
      desc: "Pronto! Seu CNPJ está ativo, conta bancária aberta e você já pode emitir notas fiscais.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-brand-600 font-medium uppercase tracking-wider text-sm mb-3 block">Processo Simplificado</span>
          <h2 className="text-4xl font-medium text-slate-900 mb-6">Sua empresa aberta em 4 passos</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Eliminamos a papelada e a burocracia do processo tradicional. 
            Com a MeiBiz, você acompanha cada etapa em tempo real pelo app.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 rounded-full z-0"></div>
            
            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                {steps.map((step, index) => (
                <div 
                    key={index} 
                    className="reveal-scale flex flex-col group relative"
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    {/* Step Marker Container */}
                    <div className="flex items-center justify-center mb-8 relative">
                        {/* Circle Background with pulsing effect on hover */}
                        <div className="w-32 h-32 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-brand-100 transition-all duration-300">
                            <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                                {step.icon}
                            </div>
                            
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">
                                {index + 1}
                            </div>
                        </div>

                        {/* Mobile Connecting Line (Vertical Hint) */}
                        {index < steps.length - 1 && (
                            <div className="lg:hidden absolute top-32 left-1/2 w-1 h-12 bg-slate-100 -ml-0.5 -z-10"></div>
                        )}
                    </div>

                    {/* Card Content */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand-100/50 hover:border-brand-200 transition-all duration-300 flex-grow text-center lg:text-left">
                        <h3 className="font-medium text-slate-900 text-xl mb-3 flex items-center justify-center lg:justify-start gap-2">
                            {step.title}
                            <ChevronRight size={16} className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" />
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            {step.desc}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="text-center mt-16 reveal delay-300">
            <Button size="lg" className="shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)]">
                Quero abrir minha empresa <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-slate-400">
                Já tem CNPJ? <a href="#" className="text-brand-600 hover:underline font-medium">Veja como migrar</a>
            </p>
        </div>
      </div>
    </section>
  );
};