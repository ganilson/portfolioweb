import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

export const AboutSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E1E1E] rounded-lg p-6 mt-4 border border-gray-700"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-48 h-48 relative">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQECdiDWI1ZT2A/profile-displayphoto-shrink_800_800/B4DZQzDDgXGUAc-/0/1736023228935?e=1747872000&v=beta&t=uRg17nJ6Be05fvVK0YtlUrq83PNMzXaqIuRIP4J-Il4"
            alt="Ganilson Garcia"
            className="rounded-full w-full h-full object-cover border-4 border-green-400"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-medium">
            Available
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Ganilson Garcia
          </h2>
          <p className="text-gray-400 mb-4">Full Stack Developer</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} className="text-green-400" />
              Lubango, Huíla, Angola
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar size={18} className="text-green-400" />
              20 years old
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/ganilson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] transition-colors px-4 py-2 rounded-lg text-gray-300"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ganilson-garcia-253913194"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] transition-colors px-4 py-2 rounded-lg text-gray-300"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
                          href="mailto:ganilsong87@gmail.com"

              className="flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] transition-colors px-4 py-2 rounded-lg text-gray-300"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-green-400">Education</h3>
        <div className="bg-[#2D2D2D] p-4 rounded-lg">
          <p className="text-gray-300">Instituto Superior Politécnico Independente (2023 - 2028)</p>
          <p className="text-gray-400 text-sm mt-2">Computer Science</p>
        </div>
        <br />
        <div className="bg-[#2D2D2D] p-4 rounded-lg">
          <p className="text-gray-300">Instituto Médio Da Humpata (2019 - 2023)</p>
          <p className="text-gray-400 text-sm mt-2">IT Technician</p>
        </div>
        <br />
      
      </div>
    </motion.div>
  );
};