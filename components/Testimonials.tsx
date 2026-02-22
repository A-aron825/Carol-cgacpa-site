
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  lang: 'en' | 'zh';
  t: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang, t }) => {
  const testimonials = [
    {
      name: "David Henderson",
      role: lang === 'en' ? "CEO, TechFlow Solutions" : "TechFlow Solutions 首席执行官",
      quote: lang === 'en' 
        ? "Carol's strategic approach to our corporate restructuring was a game-changer. Her precision saved us significant capital last year."
        : "Carol 在我们公司重组中的战略方法改变了局面。她的精准判断去年为我们节省了大量资金。",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: lang === 'en' ? "Principal Architect" : "首席架构师",
      quote: lang === 'en'
        ? "As a sole proprietor, navigating tax felt overwhelming. Carol provided clarity and a clear roadmap for our long-term growth."
        : "作为个体经营者，报税曾让我感到不知所措。Carol 为我们的长期增长提供了清晰的思路和路线图。",
      rating: 5
    },
    {
      name: "Marcus Wong",
      role: lang === 'en' ? "Real Estate Investor" : "房地产投资者",
      quote: lang === 'en'
        ? "Integrity is the bedrock of Carol's firm. She understands the vision behind the wealth and protects it with expert advisory."
        : "诚信是 Carol 事务所的基石。她理解财富背后的愿景，并提供专家建议来保护它。",
      rating: 5
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-slate-950 mb-8 tracking-tight">{t.title}</h3>
        <p className="text-slate-500 max-w-md mx-auto text-lg leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 group relative flex flex-col"
          >
            <div className="flex gap-1.5 mb-10 text-amber-400">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            
            <div className="relative mb-12 flex-grow">
              <Quote className="absolute -top-10 -left-6 text-indigo-50/70 group-hover:text-indigo-100 transition-colors" size={100} />
              <p className="relative z-10 text-slate-900 italic serif text-2xl leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-10 border-t border-slate-50">
              <h4 className="font-black text-slate-950 text-sm uppercase tracking-wider">{t.name}</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mt-2">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
