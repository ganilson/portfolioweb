import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Advanced Django Development",
    platform: "Udemy",
    date: "2023",
    link: "#"
  },
  {
    name: "Spring Boot Microservices",
    platform: "Alura",
    date: "2024",
    link: "#"
  },
  // {
  //   name: "React and Next.js Master Course",
  //   platform: "Coursera",
  //   date: "2023",
  //   link: "#"
  // }
];

export const CertificationsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
    >
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-green-400" size={24} />
            <h3 className="text-lg font-semibold text-gray-200">{cert.name}</h3>
          </div>
          
          <div className="text-gray-400 space-y-2">
            <p>{cert.platform}</p>
            <p>{cert.date}</p>
          </div>
          
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 mt-4 hover:text-green-300 transition-colors"
          >
            <ExternalLink size={16} />
            View Certificate
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};