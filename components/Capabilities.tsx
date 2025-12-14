import React from 'react';
import { techCapabilities, skills } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Capabilities</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A blend of modern AI engineering and robust backend automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {techCapabilities.map((cap, idx) => (
            <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-800">
                <cap.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-6">{cap.category}</h3>
              <ul className="space-y-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-400 text-sm">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-slate-200 mb-8 font-mono uppercase tracking-wider">Core Skillset</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 font-mono text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};