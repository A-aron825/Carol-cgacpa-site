import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.home, id: 'home' },
    { label: t.services, id: 'services' },
    { label: t.about, id: 'about' },
    { label: t.testimonials, id: 'testimonials' },
    { label: t.contact, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-2xl py-2 border-slate-900/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)]' 
        : 'bg-white/70 backdrop-blur-xl py-3 border-slate-200/50 shadow-sm'
    }`}>
      <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Identity */}
        <button 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="group flex items-center gap-2 sm:gap-4 text-left relative flex-shrink-0"
        >
          <div className="absolute -inset-x-4 -inset-y-2 bg-indigo-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col relative z-10">
            <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black tracking-tighter text-slate-950 serif leading-none group-hover:text-indigo-700 transition-colors">
              {t.name.toUpperCase()}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-0.5 w-3 sm:w-4 bg-indigo-600 rounded-full"></span>
              <span className="text-[7px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.4em] text-slate-500 uppercase font-black block">
                {t.corp}
              </span>
            </div>
          </div>
          
          <div className="h-8 w-px bg-slate-300 hidden 2xl:block rotate-[15deg] opacity-50 mx-2"></div>
          
          <div className="relative group/badge hidden 2xl:block z-10">
            <div className="absolute -inset-1 bg-indigo-600/20 rounded-lg blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white pl-2 pr-3 py-1.5 rounded-lg flex items-center gap-2 border border-indigo-400/30 shadow-xl transform group-hover/badge:scale-[1.02] transition-transform duration-300">
              <ShieldCheck size={14} className="text-indigo-400" />
              <span className="text-[11px] tracking-[0.2em] font-black uppercase whitespace-nowrap">
                CPA • CGA
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-12">
          <div className="flex items-center gap-3 xl:gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-[9px] xl:text-[10px] 2xl:text-[11px] font-black text-slate-600 hover:text-indigo-600 transition-all uppercase tracking-wider xl:tracking-[0.2em] relative group px-1"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-600 transition-all group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-200 shadow-inner scale-90 xl:scale-100">
            <div className={`absolute h-[calc(100%-4px)] w-[calc(50%-2px)] bg-indigo-600 rounded-full transition-all duration-500 ease-out ${lang === 'en' ? 'translate-x-0' : 'translate-x-full'}`}></div>
            <button 
              onClick={() => setLang('en')}
              className={`relative z-10 px-3 xl:px-5 py-1 xl:py-1.5 rounded-full text-[8px] xl:text-[9px] font-black tracking-widest transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('zh')}
              className={`relative z-10 px-3 xl:px-5 py-1 xl:py-1.5 rounded-full text-[8px] xl:text-[9px] font-black tracking-widest transition-colors duration-300 ${lang === 'zh' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              中文
            </button>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative px-4 xl:px-8 py-3 xl:py-4 overflow-hidden rounded-full transition-all duration-500 active:scale-95 shadow-md scale-90 xl:scale-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 transition-all duration-500 group-hover:scale-110"></div>
            <span className="relative z-10 text-white text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Sparkles size={12} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
              {t.inquire}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-3 py-2 bg-indigo-600 text-white rounded-xl font-black text-[10px] shadow-md active:scale-90 transition-transform"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className="text-slate-950 p-2 bg-white border border-slate-200 rounded-xl shadow-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 ease-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="py-8 md:py-12 px-6 md:px-8 space-y-6 md:space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block w-full text-left text-2xl md:text-3xl font-black text-slate-950 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-6 md:pt-8 border-t border-slate-100">
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full py-5 md:py-7 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] md:text-xs"
            >
              {t.inquire}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;