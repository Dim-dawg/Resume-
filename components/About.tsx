import React from 'react';
import { Network, PenTool, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              Technical Approach
            </h2>
            <div className="space-y-6 text-slate-400 text-lg">
              <p>
                I don't just write code; I build systems. My focus is on creating pipelines where data flows seamlessly between tools, reducing the need for manual intervention.
              </p>
              <p>
                I prioritize <span className="text-slate-200 font-medium">simple, maintainable solutions</span> over overengineering. Whether it's a lightweight Apps Script integration or a full-scale AI agent, the goal is always the same: adaptation to existing workflows, not disruption.
              </p>
              <p>
                My background includes years in customer-facing roles, providing <span className="text-slate-200 font-medium">real-world insight</span> into how systems are actually used by people under pressure.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <Network className="w-8 h-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">Systems Thinking</h3>
              <p className="text-slate-400">Viewing problems as interconnected loops rather than isolated tasks.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl translate-x-4 md:translate-x-8">
              <PenTool className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">Practical Automation</h3>
              <p className="text-slate-400">Removing human error from repetitive processes using scripts and no-code.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Database className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">Structured Data</h3>
              <p className="text-slate-400">Turning messy operational inputs into clean, queryable databases.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};