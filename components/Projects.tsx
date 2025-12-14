import React from 'react';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">System-Oriented Case Studies</h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Real-world examples of identifying operational bottlenecks and engineering scalable automated solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 hover:border-slate-700 transition-all">
              <div className="mb-6">
                 <div className="flex justify-between items-start gap-4">
                   <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors mb-2">
                     {project.title}
                   </h3>
                   {project.link && (
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-slate-500 hover:text-primary-400 transition-colors p-1"
                       aria-label={`View ${project.title}`}
                     >
                       <ArrowUpRight size={20} />
                     </a>
                   )}
                 </div>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                 </div>
              </div>

              <div className="space-y-4 flex-grow">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Solution</span>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">Impact</span>
                <p className="text-sm text-slate-200 font-medium">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};