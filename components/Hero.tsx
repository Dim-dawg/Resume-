import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

interface HeroProps {
  onChatOpen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onChatOpen }) => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-slate-400 text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for System Architecture Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight leading-[1.1] mb-8 font-sans">
            I design AI-powered systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">automate workflows</span> and turn data into usable intelligence.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Specializing in AI agents for task automation, custom workflow scripts, and practical integrations designed for real operational use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-900/20 cursor-pointer"
            >
              View Systems & Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <button 
              onClick={onChatOpen}
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all group"
            >
              <Bot className="mr-2 w-5 h-5 text-primary-400 group-hover:text-primary-300" />
              Ask Cipher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};