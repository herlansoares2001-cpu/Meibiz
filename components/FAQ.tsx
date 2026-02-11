import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é contabilidade online?",
      answer: "É a evolução do escritório tradicional. Você envia e recebe documentos pela nossa plataforma digital, tem acesso a relatórios em tempo real e conta com atendimento de contadores especializados via chat, e-mail ou WhatsApp, pagando muito menos."
    },
    {
      question: "Para quem é indicada a MeiBiz?",
      answer: "Atendemos empresas de serviços e comércio, desde profissionais liberais, freelancers e PJ, até pequenas lojas e e-commerces. Atendemos MEI, ME e EPP no Simples Nacional e Lucro Presumido."
    },
    {
      question: "Quais são os valores?",
      answer: "Nossos planos começam a partir de R$ 109,00/mês para empresas de serviço. O valor varia conforme o tipo de atividade, faturamento e número de sócios/funcionários."
    },
    {
      question: "A abertura de empresa é grátis?",
      answer: "Sim! Para quem contrata o plano anual, não cobramos honorários de abertura. Você paga apenas as taxas governamentais obrigatórias."
    },
    {
      question: "São contadores reais?",
      answer: "Sim. Temos um time de contadores especialistas (CRC ativo) que cuidam da sua empresa e estão disponíveis para tirar dúvidas."
    },
     {
      question: "Quais segmentos vocês atendem?",
      answer: "Atendemos centenas de profissões: TI, Saúde, Marketing, Engenharia, Arquitetura, Comércio Varejista, entre outros."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-slate-900 text-center mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-slate-800 pr-8 text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};