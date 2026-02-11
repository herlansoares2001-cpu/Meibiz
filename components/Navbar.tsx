import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileContentsOpen, setIsMobileContentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceColumns = [
    {
      title: "Serviços de contabilidade:",
      items: [
        "Abrir empresa grátis",
        "Deixar de ser MEI",
        "Trocar de contador",
        "Contabilidade completa",
        "Assessoria Contábil"
      ]
    },
    {
      title: "Para sua empresa:",
      items: [
        "Escritório Virtual",
        "Emissor de Nota Fiscal",
        "Certificado Digital",
        "Banco PJ",
        "Cobrança de Clientes"
      ]
    },
    {
      title: "Para você:",
      items: [
        "Plano de Saúde",
        "Academias",
        "Serviço de Psicologia e Nutrição"
      ]
    }
  ];

  const contentColumns = [
    {
      title: "Calculadoras:",
      items: [
        "Calculadora de Custo para abrir CNPJ",
        "Calculadora PJ x CLT",
        "Calculadora de Fator R",
        "Calculadora de RPA online",
        "Calculadora de Reforma Tributária"
      ]
    },
    {
      title: "Nosso blog:",
      items: [
        "Abertura de Empresa",
        "Simples Nacional",
        "Comparativo CLT x PJ",
        "Tabela Simples Nacional",
        "Ebook: Guia para ser PJ"
      ]
    },
    {
      title: "Cursos:",
      items: [
        "MeiBiz Mais"
      ]
    }
  ];

  // Adjust text colors based on scroll state
  const textColorClass = isScrolled ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white';
  const logoTextClass = isScrolled ? 'text-slate-900' : 'text-white';
  const mobileTextClass = isScrolled ? 'text-slate-900' : 'text-white';
  const logoBgClass = isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-950';

  return (
    <header 
      style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
      className={`fixed z-50 ${
        isScrolled 
          ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full py-3 px-6' 
          : 'top-0 left-0 w-full bg-transparent py-6 px-4 sm:px-6 lg:px-8 border-b border-transparent'
      }`}
    >
      <div className={`mx-auto ${isScrolled ? 'w-full' : 'max-w-7xl'}`}>
        <div className="flex justify-between items-center">
          {/* Logo - changed font-bold to font-medium */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-xl transition-colors ${logoBgClass}`}>
              M
            </div>
            <span className={`font-medium text-xl tracking-tight ${logoTextClass}`}>
              MeiBiz
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              
              {/* Dropdown Menu - Serviços */}
              <li className="relative group">
                <button 
                  className={`flex items-center gap-1 font-medium transition-colors text-sm focus:outline-none py-2 ${textColorClass}`}
                >
                  Serviços <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Container */}
                <div className="absolute top-full left-0 w-[750px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 mt-2 z-50 cursor-default">
                  {/* Triangle Indicator */}
                  <div className="absolute top-0 left-8 -mt-2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                  <div className="grid grid-cols-3 gap-8">
                    {serviceColumns.map((col, idx) => (
                      <div key={idx}>
                        <h4 className="font-medium text-slate-900 mb-4 text-sm">{col.title}</h4>
                        <ul className="space-y-3">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <a href="#" className="text-slate-500 hover:text-brand-600 text-sm transition-colors block">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Link Simples - Planos */}
              <li>
                <a
                    href="#planos"
                    className={`font-medium transition-colors text-sm ${textColorClass}`}
                >
                    Planos
                </a>
              </li>

              {/* Dropdown Menu - Conteúdos */}
              <li className="relative group">
                <button 
                  className={`flex items-center gap-1 font-medium transition-colors text-sm focus:outline-none py-2 ${textColorClass}`}
                >
                  Conteúdos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Container */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[750px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-4 group-hover:translate-y-0 mt-2 z-50 cursor-default">
                  {/* Triangle Indicator */}
                  <div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                  <div className="grid grid-cols-3 gap-8">
                    {contentColumns.map((col, idx) => (
                      <div key={idx}>
                        <h4 className="font-medium text-slate-900 mb-4 text-sm">{col.title}</h4>
                        <ul className="space-y-3">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <a href="#" className="text-slate-500 hover:text-brand-600 text-sm transition-colors block">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Other Links */}
              <li>
                <a
                    href="#como-funciona"
                    className={`font-medium transition-colors text-sm ${textColorClass}`}
                >
                    Como funciona
                </a>
              </li>
              <li>
                <a
                    href="#faq"
                    className={`font-medium transition-colors text-sm ${textColorClass}`}
                >
                    Dúvidas?
                </a>
              </li>

            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className={`font-medium transition-colors text-sm hover:underline ${logoTextClass}`}>
              Login
            </a>
            <Button variant={isScrolled ? 'primary' : 'white'} size="sm" className="font-medium">
              Abra sua empresa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${mobileTextClass}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t absolute top-full left-0 right-0 h-[calc(100vh-80px)] overflow-y-auto px-4 pt-4 text-slate-900 pb-20 shadow-xl rounded-b-2xl mt-2">
            <div className="space-y-2">
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium py-3 text-slate-900"
                >
                  Serviços
                  {isMobileServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                <div className={`space-y-6 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[1000px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                   {serviceColumns.map((col, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl">
                        <h4 className="font-medium text-brand-600 mb-3 text-sm uppercase">{col.title}</h4>
                        <ul className="space-y-3 pl-2 border-l-2 border-slate-200">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <a href="#" className="text-slate-600 hover:text-brand-600 text-sm block">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>

              {/* Mobile Planos Link */}
              <a
                href="#planos"
                className="block text-lg font-medium py-3 border-b border-slate-100 text-slate-600 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planos
              </a>

              {/* Mobile Conteúdos Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button 
                  onClick={() => setIsMobileContentsOpen(!isMobileContentsOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium py-3 text-slate-900"
                >
                  Conteúdos
                  {isMobileContentsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                <div className={`space-y-6 overflow-hidden transition-all duration-300 ${isMobileContentsOpen ? 'max-h-[1000px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                   {contentColumns.map((col, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl">
                        <h4 className="font-medium text-brand-600 mb-3 text-sm uppercase">{col.title}</h4>
                        <ul className="space-y-3 pl-2 border-l-2 border-slate-200">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <a href="#" className="text-slate-600 hover:text-brand-600 text-sm block">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>

              {/* Other Mobile Links */}
              <a
                href="#como-funciona"
                className="block text-lg font-medium py-3 border-b border-slate-100 text-slate-600 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como funciona
              </a>
              <a
                href="#faq"
                className="block text-lg font-medium py-3 border-b border-slate-100 text-slate-600 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dúvidas?
              </a>
              
              <div className="pt-6 flex flex-col gap-3">
                <Button variant="outline" fullWidth>Login</Button>
                <Button variant="primary" fullWidth>Abra sua empresa</Button>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};