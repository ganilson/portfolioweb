import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, PenTool as Tool } from 'lucide-react';

const skills = {
  backend: ['Python (Django, DRF)', 'Java (Spring Boot)', 'Node.js (Express, Nest)'],
  frontend: ['React', 'Next.js', 'Vite', 'TailwindCSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', "Redis"],
  tools: ['Docker', 'Docker Compose', 'CI/CD', 'WebSockets', "Django Channels", "Socket.IO"]
};

export const SkillsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
    >
      <div className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Server className="text-green-400" size={24} />
          <h3 className="text-xl font-semibold text-green-400">Backend</h3>
        </div>
        <div className="space-y-2">
          {skills.backend.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2D2D2D] p-3 rounded-md text-gray-300 hover:bg-[#3D3D3D] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="text-blue-400" size={24} />
          <h3 className="text-xl font-semibold text-blue-400">Frontend</h3>
        </div>
        <div className="space-y-2">
          {skills.frontend.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2D2D2D] p-3 rounded-md text-gray-300 hover:bg-[#3D3D3D] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Database className="text-purple-400" size={24} />
          <h3 className="text-xl font-semibold text-purple-400">Databases</h3>
        </div>
        <div className="space-y-2">
          {skills.databases.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2D2D2D] p-3 rounded-md text-gray-300 hover:bg-[#3D3D3D] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Tool className="text-yellow-400" size={24} />
          <h3 className="text-xl font-semibold text-yellow-400">Tools & DevOps</h3>
        </div>
        <div className="space-y-2">
          {skills.tools.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2D2D2D] p-3 rounded-md text-gray-300 hover:bg-[#3D3D3D] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};