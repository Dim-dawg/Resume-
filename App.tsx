import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal, FileDown, Cpu, Network, Database, Layers } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { AIChatTerminal } from './components/AIChatTerminal';
import { InteractiveDemos } from './components/InteractiveDemos';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Live Demos', href: '#demos' },
    { name: 'Projects', href: '#projects' },
    { name: 'Systems', href: '#experience' },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-500/10 rounded flex items-center justify-center border border-primary-500/20">
                <Terminal className="w-5 h-5 text-primary-400" />
              </div>
              <span className="font-bold text-slate-100 tracking-tight">Dimitri Arnold</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 hover:bg-white rounded transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-400 hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero onChatOpen={() => setIsChatOpen(true)} />
        <About />
        <Capabilities />
        <InteractiveDemos />
        <Projects />
        <Experience />
        
        {/* Footer / Contact */}
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Let's Automate Your Workflow</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I'm open to discussing collaboration on automation pipelines, internal AI tools, and system architecture.
            </p>
            <div className="flex justify-center gap-6 mb-12">
               <a href="mailto:dimitriarnold18@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors">
                 <Mail size={20} /> <span className="hidden sm:inline">Email</span>
               </a>
               <a href="https://github.com/Dim-dawg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors">
                 <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
               </a>
               <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors">
                 <Linkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
               </a>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer group">
              <FileDown className="text-primary-500 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-medium">Download Resume (PDF)</span>
            </div>
            <p className="mt-16 text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Dimitri Arnold. Built with React & Google Gemini.
            </p>
          </div>
        </footer>
      </main>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-900/20 transition-all z-40 ${isChatOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        aria-label="Ask AI Assistant"
      >
        <div className="relative">
          <Cpu className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </button>

      {/* AI Chat Terminal Modal */}
      {isChatOpen && (
        <AIChatTerminal onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
}