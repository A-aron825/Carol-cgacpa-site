
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';
import { translations } from './constants/translations';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${lang === 'zh' ? 'lang-zh' : 'lang-en'}`}>
      <Navbar isScrolled={isScrolled} lang={lang} setLang={setLang} t={t.nav} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero lang={lang} t={t.hero} />
        </section>
        
        <section id="services" className="py-16 md:py-24 bg-white">
          <Services lang={lang} t={t.services} />
        </section>
        
        <section id="about" className="py-16 md:py-24 bg-slate-50">
          <About lang={lang} t={t.about} />
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-indigo-50/30">
          <Testimonials lang={lang} t={t.testimonials} />
        </section>
        
        <section id="contact" className="py-16 md:py-24 bg-white">
          <Contact lang={lang} t={t.contact} />
        </section>

        <section id="privacy" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <Legal lang={lang} />
        </section>
      </main>

      <Footer lang={lang} t={t.footer} navT={t.nav} />
    </div>
  );
};

export default App;
