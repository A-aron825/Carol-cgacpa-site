import React, { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, Copy } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'zh';
  t: any;
}

const Contact: React.FC<ContactProps> = ({ lang, t }) => {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('cLiu@carolcga.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = `Inquiry: ${name} via carolcga.ca`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:cLiu@carolcga.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[9px] mb-4 md:mb-6">{t.tag}</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6 md:mb-10 leading-none tracking-tighter">{t.title}</h3>
          <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-16 leading-relaxed font-medium max-w-sm">
            {t.subtitle}
          </p>

          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-6 md:gap-8 group/item">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 group-hover/item:bg-indigo-600 group-hover/item:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <Mail size={18} className="text-indigo-600 group-hover/item:text-white" />
              </div>
              <div className="flex-grow">
                <h4 className="font-black text-slate-400 mb-0.5 md:mb-1 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[8px]">{t.labels.email}</h4>
                <div className="flex items-center gap-2 md:gap-3">
                  <a href="mailto:cLiu@carolcga.ca" className="text-slate-950 font-black text-xs md:text-sm tracking-tight hover:text-indigo-600 transition-colors">cLiu@carolcga.ca</a>
                  <button 
                    onClick={copyEmail}
                    className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-indigo-600 transition-all flex items-center gap-1.5"
                    title="Copy Email"
                  >
                    <Copy size={10} />
                    {copied && <span className="text-[7px] font-black uppercase tracking-widest text-green-600">{lang === 'en' ? 'Copied' : '已复制'}</span>}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 group/item">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 group-hover/item:bg-indigo-600 group-hover/item:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <Phone size={18} className="text-indigo-600 group-hover/item:text-white" />
              </div>
              <div>
                <h4 className="font-black text-slate-400 mb-0.5 md:mb-1 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[8px]">{t.labels.phone}</h4>
                <a href="tel:6047205690" className="text-slate-950 font-black text-xs md:text-sm tracking-tight hover:text-indigo-600 transition-colors">604.720.5690</a>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 group/item">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 group-hover/item:bg-indigo-600 group-hover/item:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <MapPin size={18} className="text-indigo-600 group-hover/item:text-white" />
              </div>
              <div>
                <h4 className="font-black text-slate-400 mb-0.5 md:mb-1 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[8px]">{t.labels.hq}</h4>
                <p className="text-slate-950 font-black text-xs md:text-sm tracking-tight leading-tight max-w-[200px]">21471 90 Ave Langley BC. Canada V1M 1Z2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-xl border border-slate-50 relative overflow-hidden">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-2 md:space-y-4">
                <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400 ml-1">{t.form.identity}</label>
                <input 
                  required 
                  name="name"
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:bg-white transition-all font-bold text-slate-950 text-sm placeholder:text-slate-300" 
                  placeholder={t.form.namePlace}
                />
              </div>
              <div className="space-y-2 md:space-y-4">
                <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400 ml-1">{t.form.contact}</label>
                <input 
                  required 
                  name="email"
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:bg-white transition-all font-bold text-slate-950 text-sm placeholder:text-slate-300" 
                  placeholder={t.form.emailPlace}
                />
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-4">
              <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400 ml-1">{t.form.context}</label>
              <textarea 
                required 
                name="message"
                rows={4} 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl px-6 md:px-8 py-5 md:py-6 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:bg-white transition-all resize-none font-bold text-slate-950 text-sm placeholder:text-slate-300" 
                placeholder={t.form.msgPlace}
              ></textarea>
            </div>
            
            <button 
              disabled={status === 'loading'}
              type="submit" 
              className={`w-full py-5 md:py-7 rounded-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] flex items-center justify-center gap-3 md:gap-4 transition-all active:scale-[0.98] shadow-lg ${
                status === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-slate-950 text-white hover:bg-indigo-600'
              }`}
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={14} />
                  {t.form.success}
                </>
              ) : (
                <>
                  <Send size={14} />
                  {t.form.submit}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;