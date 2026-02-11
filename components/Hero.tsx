import React, { useEffect, useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // PARALLAX SCROLL LOGIC
  // We track window scroll to move background elements at different speeds.
  // This creates the "Apple-style" depth effect without heavy libraries.
  useEffect(() => {
    const handleScroll = () => {
      // Limit updates to animation frames for performance if needed, 
      // but simple state is sufficient for this specific effect.
      setScrollY(window.scrollY);
    };
    
    // Passive listener improves scrolling performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Z-INDEX STRATEGY: 
    // Hero Section = z-0 (Base)
    // Next Section will be z-20 to overlap this.
    <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-brand-950 text-white min-h-[92vh] flex items-center z-0">
      
      {/* --- LAYER 1: STATIC BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* Main Image - Low opacity to blend with dark brand color */}
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop" 
            alt="Contador trabalhando" 
            className="absolute right-0 top-0 h-full w-full object-cover object-center opacity-40 mix-blend-overlay"
          />
          
          {/* Gradient: Left-to-Right (Ensures text readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-brand-950/40"></div>
          
          {/* Gradient: Bottom-to-Top (THE TRANSITION BRIDGE) 
              This fades the dark background into the next section's area smoothly.
          */}
          <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-brand-950 via-brand-950/60 to-transparent"></div>

          {/* Texture: Adds "premium paper" grain to avoid flat digital look */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* --- LAYER 2: PARALLAX WAVE --- 
          Moves slower than scroll (0.2 factor) to appear "behind" the upcoming content 
          but "in front" of the background image.
      */}
      <div 
        className="absolute bottom-0 left-0 w-full z-10 opacity-30 pointer-events-none mix-blend-screen origin-bottom will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.25}px) scale(1.1)`, 
          transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)' // Smooth out micro-jitters
        }}
      >
        <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-auto block text-brand-800 fill-current"
            preserveAspectRatio="none"
        >
            <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* --- LAYER 3: CONTENT --- 
          Relative positioning ensures this sits above the background layers.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div 
          className="max-w-3xl"
          // Depth Effect: Text moves slightly opposite to scroll direction (negative value) or slower positive
          // Setting it to -0.1 makes it feel like it's closer to the camera/glass than the background
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          
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