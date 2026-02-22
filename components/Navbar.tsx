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
        ? 'bg-white/95 backdrop-blur-2xl py-2 md:py-3 border-slate-900/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)]' 
        : 'bg-white/70 backdrop-blur-xl py-4 md:py-6 border-slate-200/50 shadow-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Brand Identity */}
        <button 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="group flex items-center gap-3 sm:gap-6 text-left relative"
        >
          <div className="absolute -inset-x-8 -inset-y-4 bg-indigo-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col relative z-10">
            <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tighter text-slate-950 serif leading-none group-hover:text-indigo-700 transition-colors">
              CAROL LIU
            </span>
            <div className="flex items-center gap-2 mt-1 sm:mt-2">
              <span className="h-0.5 w-3 sm:w-5 bg-indigo-600 rounded-full"></span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-slate-500 uppercase font-black block">
                {t.corp}
              </span>
            </div>
          </div>
          
          <div className="h-8 md:h-12 w-px bg-slate-300 hidden sm:block rotate-[15deg] opacity-50 mx-2"></div>
          
          <div className="relative group/badge hidden xl:block z-10">
            <div className="absolute -inset-1.5 bg-indigo-600/20 rounded-xl blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white pl-3 pr-4 py-2.5 rounded-xl flex items-center gap-3 border border-indigo-400/30 shadow-2xl shadow-indigo-100 transform group-hover/badge:scale-[1.03] transition-transform duration-300">
              <div className="bg-indigo-500/20 p-1.5 rounded-lg">
                <ShieldCheck size={16} className="text-indigo-400" />
              </div>
              <span className="text-[13px] tracking-[0.25em] font-black uppercase whitespace-nowrap">
                CPA • CGA
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-[10px] xl:text-[11px] font-black text-slate-600 hover:text-indigo-600 transition-all uppercase tracking-[0.2em] xl:tracking-[0.25em] relative group"
              >
                {item.label}
                <span className="absolute -bottom-2.5 left-0 w-0 h-[3px] bg-indigo-600 transition-all group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative flex items-center bg-slate-100 rounded-full p-1 border border-slate-200 shadow-inner">
            <div className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-indigo-600 rounded-full transition-all duration-500 ease-out ${lang === 'en' ? 'translate-x-0' : 'translate-x-full'}`}></div>
            <button 
              onClick={() => setLang('en')}
              className={`relative z-10 px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-[9px] xl:text-[10px] font-black tracking-widest transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('zh')}
              className={`relative z-10 px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-[9px] xl:text-[10px] font-black tracking-widest transition-colors duration-300 ${lang === 'zh' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              中文
            </button>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative px-6 xl:px-10 py-4 xl:py-5 overflow-hidden rounded-full transition-all duration-500 active:scale-95 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 transition-all duration-500 group-hover:scale-110"></div>
            <span className="relative z-10 text-white text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] flex items-center gap-2 xl:gap-3">
              <Sparkles size={14} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
              {t.inquire}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-3 sm:px-5 py-2 sm:py-3 bg-indigo-600 text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs shadow-lg active:scale-90 transition-transform"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className="text-slate-950 p-2 sm:p-3 bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
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