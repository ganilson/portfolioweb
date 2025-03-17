import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: "Tecnobase",
    position: "Full Stack Developer",
    period: "2023 - Present",
    description: "Developed a complete ERP system using ExpressJs, React, and Microservices architecture.",
    technologies: ["Python", "Express", "React", "Docker", "PostgreSQL", "Spring Boot"]
  },
  {
    company: "Bitech",
    position: "CTO And Backend Developer ",
    period: "2022 - Present",
    description: "Manage a company, technology .",
    technologies: ["Java", "Spring Boot", "MongoDB", "Redis"]
  }
];

export const ExperienceSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 mt-4"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-green-400">{exp.position}</h3>
              <p className="text-gray-400 mt-1">{exp.company}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={16} />
              <span>{exp.period}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mt-4">{exp.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-[#2D2D2D] text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};