import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, RefreshCw, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/aiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatTerminalProps {
  onClose: () => void;
}

export const AIChatTerminal: React.FC<AIChatTerminalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Initializing System...\nHi, I'm Cipher, Dimitri's AI Assistant. I have full context on his projects, skills, and experience. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        // Send history + new message to context-aware AI service
        const responseText = await sendMessageToGemini(
          [...messages, { role: 'user', text: userMessage }], 
          userMessage
        );
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
        setMessages(prev => [...prev, { role: 'model', text: "System Error: Connection to neural core failed. Please try again." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[600px] bg-slate-900 rounded-lg shadow-2xl border border-slate-700 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-950">
          <div className="flex items-center gap-2 text-slate-200">
            <Terminal size={18} className="text-primary-400" />
            <span className="font-mono text-sm font-bold">Cipher_v1.0</span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded bg-primary-900/50 flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                  <Bot size={16} className="text-primary-400" />
                </div>
              )}
              
              <div 
                className={`max-w-[80%] p-3 rounded-lg leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-slate-200 border border-slate-700' 
                    : 'bg-slate-950 text-emerald-400 border border-slate-800/50 shadow-inner'
                }`}
              >
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <User size={16} className="text-slate-400" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded bg-primary-900/50 flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                <Bot size={16} className="text-primary-400" />
              </div>
              <div className="bg-slate-950 text-primary-400 p-3 rounded-lg border border-slate-800/50 flex items-center gap-2">
                <RefreshCw size={14} className="animate-spin" />
                <span className="animate-pulse">Processing request...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your query..."
              className="w-full bg-slate-900 text-slate-200 pl-4 pr-12 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 font-mono text-sm placeholder:text-slate-600"
              autoFocus
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 text-slate-400 hover:text-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-2 flex justify-between items-center text-[10px] text-slate-600 font-mono uppercase">
             <span>Gemini-2.5-Flash Active</span>
             <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};