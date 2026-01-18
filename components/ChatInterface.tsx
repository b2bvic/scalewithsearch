import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Loader2, X, Minus, Square, Command } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

interface ChatInterfaceProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'ROMO_S v2.5 ONLINE. I am the digital twin of Victor Valentine Romo. Ask me about my systems, my history, or how I can help you scale.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "CRITICAL ERROR: CONNECTION LOST.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
            onClick={() => setIsOpen(true)}
            className="h-20 w-20 bg-accent border-4 border-ink shadow-brutal text-white flex flex-col items-center justify-center transition-all hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] group"
        >
            <TerminalIcon size={32} strokeWidth={2.5} className="group-hover:animate-pulse" />
            <span className="text-[10px] font-black uppercase mt-1">CHAT</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[450px] h-[600px] bg-surface border-4 border-ink shadow-brutal-xl flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-200 relative overflow-hidden">
          
          {/* Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none scanline opacity-20 z-20"></div>

          {/* Header - Retro OS Style */}
          <div className="bg-ink p-2 border-b-4 border-ink flex items-center justify-between cursor-move select-none relative z-30">
             <div className="flex items-center gap-2 px-2">
                <Command size={16} className="text-secondary" />
                <span className="font-bold text-white uppercase tracking-wider text-sm">ROMO_S_TERMINAL</span>
             </div>
             <div className="flex gap-1">
                <button onClick={() => setIsOpen(false)} className="w-6 h-6 bg-gray-300 border-2 border-white flex items-center justify-center hover:bg-white">
                    <Minus size={12} className="text-ink" />
                </button>
                <button onClick={() => setIsOpen(false)} className="w-6 h-6 bg-gray-300 border-2 border-white flex items-center justify-center hover:bg-white">
                    <Square size={10} className="text-ink" />
                </button>
                <button onClick={() => setIsOpen(false)} className="w-6 h-6 bg-accent border-2 border-white flex items-center justify-center hover:bg-red-600">
                    <X size={12} className="text-white" />
                </button>
             </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-subtle relative z-10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 font-bold border-2 border-ink shadow-brutal-sm ${
                  msg.role === 'user' 
                    ? 'bg-secondary text-white' 
                    : msg.isError 
                      ? 'bg-red-600 text-white'
                      : 'bg-surface text-ink'
                }`}>
                  {msg.role === 'model' && (
                      <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 mb-2 uppercase border-b border-gray-200 pb-1">
                        <span>ROMO_S</span>
                        <span className="text-green-500">●</span>
                      </div>
                  )}
                  <div className="text-sm md:text-base leading-relaxed markdown-content">
                    {msg.role === 'model' ? (
                      <ReactMarkdown
                        components={{
                          strong: ({node, ...props}) => <span className="text-brand-blue font-black" {...props} />,
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="pl-1" {...props} />,
                          code: ({node, ...props}) => <code className="bg-gray-200 dark:bg-gray-700 text-red-600 px-1 rounded text-xs" {...props} />,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-surface border-2 border-ink p-3 flex items-center gap-3 shadow-brutal-sm">
                    <Loader2 size={18} className="animate-spin text-accent" />
                    <span className="text-xs text-ink font-bold uppercase tracking-widest">Processing...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-200 border-t-4 border-ink relative z-30">
            <div className="flex items-stretch gap-0 shadow-brutal">
              <div className="bg-ink text-secondary font-mono px-4 py-3 flex items-center font-black text-lg">
                 {'>'}
              </div>
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="ENTER QUERY..."
                className="flex-1 bg-white border-y-4 border-ink px-4 py-3 focus:outline-none focus:bg-yellow-50 text-ink font-mono text-sm font-bold placeholder:text-gray-400 uppercase"
                autoFocus
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-accent hover:bg-highlight hover:text-ink text-white border-4 border-l-0 border-ink px-6 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;