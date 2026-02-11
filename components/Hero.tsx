import React, { useEffect, useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll handler for Parallax effect
  // We use a simple listener here to keep it lightweight (no libraries)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-brand-950 text-white min-h-[90vh] flex items-center z-0">
      
      {/* 
        BACKGROUND LAYERS 
        We separate these to allow independent parallax movement if needed in the future,
        but for now, they form the static backdrop.
      */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* Main Image - Accountant working */}
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop" 
            alt="Contador trabalhando" 
            className="absolute right-0 top-0 h-full w-full object-cover object-center opacity-60 mix-blend-overlay"
          />
          
          {/* Gradient Overlay: Left-to-Right (Text Readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-brand-950/40"></div>
          
          {/* Gradient Overlay: Bottom-to-Top (Transition Preparation) 
              This ensures the bottom is solid dark before the light section starts.
          */}
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-950 via-brand-950/80 to-transparent"></div>

          {/* Noise Texture for "Paper" feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* 
        PARALLAX WAVE ELEMENT 
        This is the "Organic Wave". It sits at the bottom.
        transform: translateY(${scrollY * 0.2}px) -> Moves slower than scroll (0.2 speed), creating depth.
      */}
      <div 
        className="absolute bottom-0 left-0 w-full z-10 opacity-30 pointer-events-none mix-blend-screen"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-auto block text-brand-800 fill-current"
            preserveAspectRatio="none"
        >
            <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* 
        SECONDARY PARALLAX WAVE 
        Adds a second layer of depth, moving at a slightly different speed.
      */}
      <div 
        className="absolute bottom-[-50px] left-0 w-full z-10 opacity-20 pointer-events-none text-brand-600 fill-current"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
         <svg viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,160C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
         </svg>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 backdrop-blur-md mb-8">
               <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
               <span className="text-xs font-medium uppercase tracking-wider text-accent-100">Contabilidade 100% Digital</span>
          </div>

          {/* Heading */}
          <h1 className="reveal delay-100 text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200 drop-shadow-sm">
              Da abertura do CNPJ até a contabilidade completa, <span className="text-gradient">conte com a gente.</span>
          </h1>

          {/* Value Props */}
          <div className="space-y-4 mb-8 reveal delay-200">
              {[
                  "Planos de acordo com o seu perfil",
                  "Assessores especialistas no seu segmento",
                  "Atendimento multicanal",
                  "Empresa 100% regularizada pagando menos impostos"
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-100 group">
                      <div className="p-1 rounded-full bg-white/10 group-hover:bg-accent-500/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-accent-400" />
                      </div>
                      <span className="font-medium text-slate-200 tracking-wide">{item}</span>
                  </div>
              ))}
          </div>

          {/* CTA Buttons */}
          <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)] z-10 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.7)]">
                Abra sua empresa grátis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-lg !border-white/20 !text-white hover:!bg-white hover:!text-brand-950 backdrop-blur-sm z-10"
              >
                Troque de contador
              </Button>
          </div>

          {/* Trust Badge */}
          <div className="reveal delay-300 mt-12 inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default shadow-2xl">
             <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-medium shrink-0 shadow-lg border border-white/10">
                <ShieldCheck size={20} />
             </div>
             <div>
                <p className="text-white font-medium text-sm leading-tight">Suporte Humanizado</p>
                <p className="text-slate-400 text-xs mt-0.5">Fale com contadores reais</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};