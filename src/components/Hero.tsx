import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const jsonData = {
  status: 200,
  message: "Welcome to Ganilson Garcia's Portfolio",
  description: "Full Stack Developer passionate about technology, distributed systems, and innovative design.",
  github: "https://github.com/ganilson"
};

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="animate-matrix font-mono text-green-500 whitespace-nowrap">
          {Array(100).fill('01').join('')}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Introduction */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Ganilson Garcia
              </span>
            </motion.h1>
            
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Python Developer',
                2000,
                'Devops Entusiast',
                2000,
                'Open Source Contributor',
                2000,
                'Software Engineer',
                2000,
                'Software Architect',
                2000,
                'Prompt Engineer',
                2000,
                'Database administrator',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl text-gray-400 mb-8"
              repeat={Infinity}
            />

            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://github.com/ganilson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <button className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors">
                <ExternalLink size={20} />
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Right Column - JSON Preview */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-[#1E1E1E] rounded-lg shadow-xl overflow-hidden">
              <div className="bg-[#2D2D2D] p-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm">response.json</span>
              </div>
              <SyntaxHighlighter
                language="json"
                style={atomDark}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: '#1E1E1E',
                  fontSize: '0.9rem'
                }}
              >
                {JSON.stringify(jsonData, null, 2)}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};