import React, { useState } from 'react';
import { Button } from './Button';

export const SavingsSimulator: React.FC = () => {
  const [currentFee, setCurrentFee] = useState(400);
  const meiBizFee = 89;
  
  const monthlySavings = currentFee - meiBizFee;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <section className="py-20 bg-brand-900 text-white overflow-hidden relative">
      
      {/* Tech Grid Background - The "Brain" Effect */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-20 z-0"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          <div className="absolute w-96 h-96 bg-brand-400 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-accent-400 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm mb-2 block">Calculadora de Economia</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Descubra quanto dinheiro você está perdendo com a contabilidade tradicional.
            </h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Não pague mais por serviços manuais. Na MeiBiz, a tecnologia trabalha para você pagar menos e ter mais controle. Invista a diferença no crescimento do seu negócio.
            </p>
            <Button className="bg-accent-500 text-slate-900 hover:bg-accent-400 border-none font-bold">
              Quero economizar agora
            </Button>
          </div>

          <div className="reveal delay-200 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-slate-900 border border-white/20">
            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Simule sua economia</h3>
            
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-slate-600">Quanto você paga hoje (mensal)?</label>
                <span className="font-bold text-slate-900 text-lg">{formatCurrency(currentFee)}</span>
              </div>
              <input 
                type="range" 
                min="150" 
                max="1500" 
                step="10" 
                value={currentFee}
                onChange={(e) => setCurrentFee(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 hover:accent-brand-700"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-400">
                <span>R$ 150</span>
                <span>R$ 1.500+</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-600">Mensalidade MeiBiz</span>
                <span className="font-bold text-brand-600 text-xl">{formatCurrency(meiBizFee)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium text-slate-800">Economia Anual</span>
                <span className="font-extrabold text-emerald-500 text-3xl">{formatCurrency(annualSavings)}</span>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6">
              *Valores estimados com base no plano Essencial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};