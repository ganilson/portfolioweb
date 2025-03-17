import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Award, BookOpen, User, ActivityIcon } from 'lucide-react';
import { AboutSection } from './AboutSection';
import { Terminal } from './Terminal';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { CertificationsSection } from './CertificationsSection';
import { BlogSection } from './BlogSection';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
  // { id: 'blog', label: 'Blog', icon: <BookOpen size={18} /> },
  // { id: 'events', label: 'Events', icon: <ActivityIcon size={18} /> },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'certifications':
        return <CertificationsSection />;
      // case 'blog':
      //   return <BlogSection />;
      // case 'events':
      //   return <BlogSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-[#1E1E1E] rounded-lg p-1 flex gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-colors whitespace-nowrap ${activeTab === tab.id
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-300'
              }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#2D2D2D] rounded-md"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};