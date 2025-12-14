import React, { useState } from 'react';
import { runDemoTask } from '../services/aiService';
import { Play, RefreshCw, Terminal, ArrowRight, Database, ShieldAlert, CheckCircle2, Cpu } from 'lucide-react';

type DemoType = 'triage' | 'extract';

export const InteractiveDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoType>('triage');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Default scenarios
  const triageDefault = "My server has been unreachable for 2 hours. I can't access the dashboard and my customers are complaining. Fix this now!";
  const extractDefault = "Hi team, just bought some supplies from OfficeDepot yesterday (Oct 24th). Grabbed 5 laptops, 2 monitors, and a pack of pens. Total came out to $4,250.99. Can we reimburse?";

  const handleRun = async () => {
    if (!input) return;
    setLoading(true);
    setOutput(null);
    
    // Simulate a bit of network/processing latency for "feel"
    await new Promise(r => setTimeout(r, 600));
    
    const resultString = await runDemoTask(activeTab, input);
    try {
      const parsed = JSON.parse(resultString || '{}');
      setOutput(parsed);
    } catch (e) {
      setOutput({ error: "Failed to parse system response." });
    }
    setLoading(false);
  };

  const loadScenario = (type: DemoType) => {
    setActiveTab(type);
    setOutput(null);
    setInput(type === 'triage' ? triageDefault : extractDefault);
  };

  // Initialize with triage scenario if empty
  React.useEffect(() => {
    if (!input) setInput(triageDefault);
  }, []);

  return (
    <section id="demos" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/20 border border-primary-800 text-primary-400 text-sm font-mono mb-6">
            <Cpu className="w-4 h-4" />
            Live System Playground
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Interactive Demonstrations
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Test the simplified logic engines behind my automation systems. These demos run live in your browser using the Gemini API.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-slate-800 pb-1 overflow-x-auto">
          <button
            onClick={() => loadScenario('triage')}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'triage' 
                ? 'border-primary-500 text-white' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Intelligent Triage Agent
          </button>
          <button
            onClick={() => loadScenario('extract')}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'extract' 
                ? 'border-primary-500 text-white' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <Database className="w-4 h-4" />
            Unstructured Data Parser
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="flex flex-col h-full">
            <div className="bg-slate-900 rounded-t-xl p-4 border border-slate-800 flex justify-between items-center">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Input Stream
              </span>
              <button 
                onClick={() => setInput('')}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                Clear
              </button>
            </div>
            <div className="relative flex-grow">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-64 lg:h-full bg-slate-950 border-x border-b border-slate-800 p-4 text-slate-300 font-mono text-sm focus:outline-none focus:border-primary-500/50 resize-none rounded-b-xl lg:rounded-b-none lg:rounded-bl-xl"
                placeholder={activeTab === 'triage' ? "Paste a support ticket..." : "Paste messy text data..."}
              />
              <button
                onClick={handleRun}
                disabled={loading || !input}
                className="absolute bottom-4 right-4 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 shadow-lg shadow-primary-900/20 transition-all"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                Run System
              </button>
            </div>
          </div>

          {/* Output Column */}
          <div className="flex flex-col h-full min-h-[300px]">
            <div className="bg-slate-900 rounded-t-xl p-4 border border-slate-800">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> System Output
              </span>
            </div>
            <div className="flex-grow bg-slate-950 border-x border-b border-slate-800 p-6 rounded-b-xl lg:rounded-b-none lg:rounded-br-xl relative overflow-hidden">
              
              {!output && !loading && (
                <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                  <span className="font-mono text-sm">Awaiting Input...</span>
                </div>
              )}

              {loading && (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                  <div className="mt-8 h-32 bg-slate-800/50 rounded border border-slate-800"></div>
                </div>
              )}

              {output && !loading && (
                <div className="animate-fade-in space-y-6">
                  {/* Visual Representation */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">
                      {activeTab === 'triage' ? 'Routing Decision' : 'Structured Record'}
                    </h4>
                    
                    {activeTab === 'triage' ? (
                      <div className="flex flex-wrap gap-3">
                        <span className={`px-3 py-1 rounded text-sm font-medium border ${
                          output.priority === 'Critical' || output.priority === 'High' 
                            ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                          {output.priority}
                        </span>
                        <span className="px-3 py-1 rounded text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          {output.category}
                        </span>
                        <div className="w-full h-px bg-slate-800 my-1"></div>
                        <span className="text-sm text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {output.suggested_action}
                        </span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-slate-500 text-xs">Vendor</span>
                          <span className="text-slate-200">{output.vendor || "N/A"}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500 text-xs">Date</span>
                          <span className="text-slate-200">{output.date || "N/A"}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500 text-xs">Total</span>
                          <span className="text-slate-200 font-mono text-emerald-400">{output.total_amount || "N/A"}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500 text-xs">Items</span>
                          <span className="text-slate-200">{output.line_items?.length || 0} found</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* JSON Code Block */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Raw JSON payload</h4>
                    <pre className="bg-slate-950 p-4 rounded-lg text-xs font-mono text-slate-400 overflow-x-auto border border-slate-800">
                      {JSON.stringify(output, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};