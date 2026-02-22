import React from 'react';
import { Briefcase, Calculator, TrendingUp, ShieldCheck, UserCheck, BarChart3 } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'zh';
  t: any;
}

const Services: React.FC<ServicesProps> = ({ lang, t }) => {
  const icons = [
    <Calculator className="text-indigo-600" size={24} />,
    <Briefcase className="text-indigo-600" size={24} />,
    <BarChart3 className="text-indigo-600" size={24} />,
    <TrendingUp className="text-indigo-600" size={24} />,
    <ShieldCheck className="text-indigo-600" size={24} />,
    <UserCheck className="text-indigo-600" size={24} />
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[9px] mb-4 md:mb-6">{t.tag}</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-6 md:mb-8 tracking-tight">{t.title}</h3>
        <p className="text-slate-500 max-w-md mx-auto text-base md:text-lg leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {t.items.map((service: any, idx: number) => (
          <div 
            key={idx} 
            className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-indigo-600 transition-all duration-500">
              <div className="group-hover:text-white transition-colors">
                {icons[idx]}
              </div>
            </div>
            <h4 className="text-base md:text-lg font-bold text-slate-950 mb-3 md:mb-4 group-hover:text-indigo-600 transition-colors">
              {service.title}
            </h4>
            <p className="text-slate-500 leading-relaxed text-[12px] md:text-[13px] font-medium opacity-80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;