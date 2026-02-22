import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'zh';
  t: any;
}

const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-mesh overflow-hidden pt-32 pb-16 md:pt-24 md:pb-16">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/30 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-indigo-100/40 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-white shadow-sm border border-slate-100 rounded-full mb-6 sm:mb-10 transform hover:scale-105 transition-transform cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-600">
                {t.onboarding}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 sm:mb-8 leading-[1.1] md:leading-[0.95] tracking-tight">
              {t.title1} <br className="hidden sm:block" />
              <span className="text-indigo-600 italic serif font-normal">{t.title2}</span> <br className="hidden sm:block" />
              {t.title3}
            </h1>
            
            <p className="text-base sm:text-xl text-slate-500 mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-20 justify-center lg:justify-start">
              <button 
                onClick={(e) => scrollToSection(e, 'contact')} 
                className="group relative px-10 sm:px-12 py-5 sm:py-6 overflow-hidden rounded-2xl transition-all duration-300 active:scale-95 bg-slate-900 shadow-xl"
              >
                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center justify-center">
                  {t.start}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </span>
              </button>
              <button 
                onClick={(e) => scrollToSection(e, 'services')} 
                className="px-10 sm:px-12 py-5 sm:py-6 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center justify-center hover:border-indigo-600 transition-all hover:text-indigo-600"
              >
                {t.services}
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 sm:gap-x-12 sm:gap-y-6 pt-8 sm:pt-12 border-t border-slate-100">
              {t.checks.map((text: string, i: number) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1 bg-indigo-50 rounded-md">
                    <CheckCircle2 className="text-indigo-600 w-3 h-3 sm:w-[14px] sm:h-[14px]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block perspective-1000">
            <div className="relative z-10 rounded-[3rem] xl:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform rotate-3 hover:rotate-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Accounting and Strategy" 
                className="w-full object-cover aspect-[4/5] scale-110 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-8 xl:p-10 rounded-[2.5rem] xl:rounded-[3rem] shadow-2xl z-20 max-w-[200px] xl:max-w-[240px] animate-bounce-slow">
              <div className="text-indigo-600 font-black text-4xl xl:text-5xl mb-1 xl:mb-2 tracking-tighter italic serif">15+</div>
              <div className="text-[9px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-tight">
                Years of Excellence <br /> in Strategic Advisory
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;