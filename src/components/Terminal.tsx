import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

interface TerminalProps {
  onCommand: (command: string) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory(prev => [...prev, `$ ${input}`]);
    onCommand(input.toLowerCase());
    setInput('');
  };

  return (
    <div className="bg-[#1E1E1E] rounded-lg shadow-xl overflow-hidden border border-gray-700">
      <div className="bg-[#2D2D2D] p-2 flex items-center gap-2">
        <TerminalIcon size={18} className="text-green-400" />
        <span className="text-gray-300 text-sm">ganilson@portfolio:~</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 h-[400px] overflow-y-auto font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        <TypeAnimation
          sequence={[
            'Welcome to Ganilson Garcia\'s Portfolio Terminal\nType "help" to see available commands.',
            1000,
          ]}
          wrapper="div"
          cursor={false}
          className="text-green-400 mb-4"
        />
        
        {history.map((line, i) => (
          <div key={i} className="text-gray-300 mb-2">{line}</div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-green-400" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent text-gray-300 focus:outline-none flex-1"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};