import React from 'react';
import { Hero } from './components/Hero';
import { Tabs } from './components/Tabs';
import { Github, Terminal, Code2, Image, Coffee, MessageSquare, Heart, Cpu, Database, Globe2, X, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs />
        
        {/* Content sections will be added here */}
        <div className="mt-8">
          {/* Tab content will be rendered here */}
        </div>
        
      </div>
      <footer className="bg-[#1E1E1E] border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">About Me</h3>
              <p className="text-gray-400">Passionate developer creating innovative solutions with modern technologies.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Contact</h3>
              <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly chat!</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/ganilson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 flex items-center justify-center text-gray-400">
            <p className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-2 text-red-400" /> by Ganilson Garcia
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;