import React from 'react';
import { experience } from '../data/content';
import { Layers, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-3 bg-slate-800 rounded-lg">
            <Layers className="w-6 h-6 text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured Systems</h2>
        </div>
        
        <div className="grid gap-8">
          {experience.map((system, idx) => (
            <div key={idx} className="bg-slate-950 p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-primary-900/50 transition-all group shadow-sm hover:shadow-lg hover:shadow-primary-900/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                  {system.title}
                </h3>
                {system.link && (
                  <a 
                    href={system.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-primary-400 hover:bg-slate-800 hover:text-primary-300 transition-colors self-start"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                {system.description.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};